<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasContainer = ref(null)

let THREE
let renderer
let animationFrame
let starField
let scene
let camera
let starTexture
let prefersReducedMotion = false
let isUnmounted = false
let lastFrameTime = 0
let clickTravelStartedAt = 0
let clickTravelAppliedDistance = 0

const TRAVEL_DURATION = 650
const TRAVEL_DISTANCE = 180
const AMBIENT_SPEED = 1.4

function createStarTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 32
  canvas.height = 32

  const context = canvas.getContext('2d')
  if (!context) throw new Error('Não foi possível criar a textura das estrelas.')

  const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
  gradient.addColorStop(0.18, 'rgba(255, 255, 255, 0.9)')
  gradient.addColorStop(0.55, 'rgba(220, 225, 235, 0.25)')
  gradient.addColorStop(1, 'rgba(180, 190, 210, 0)')
  context.fillStyle = gradient
  context.fillRect(0, 0, 32, 32)

  return new THREE.CanvasTexture(canvas)
}

function createStarField(cameraZ = 0) {
  const width = window.innerWidth
  const height = window.innerHeight
  const starCount = width < 700 ? 650 : 1400
  const positions = new Float32Array(starCount * 3)
  const colors = new Float32Array(starCount * 3)
  const palette = [
    new THREE.Color('#ffffff'),
    new THREE.Color('#cbd0d8'),
    new THREE.Color('#9ca5b2'),
  ]
  const fieldOfView = THREE.MathUtils.degToRad(70)
  const halfHeight = Math.tan(fieldOfView / 2)
  const aspect = width / height

  for (let index = 0; index < starCount; index += 1) {
    const distance = 35 + Math.random() * 650
    const positionIndex = index * 3
    const color = palette[Math.floor(Math.random() * palette.length)]

    positions[positionIndex] = (Math.random() * 2 - 1) * distance * halfHeight * aspect
    positions[positionIndex + 1] = (Math.random() * 2 - 1) * distance * halfHeight
    positions[positionIndex + 2] = cameraZ - distance
    colors[positionIndex] = color.r
    colors[positionIndex + 1] = color.g
    colors[positionIndex + 2] = color.b
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    map: starTexture,
    size: 2,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    alphaTest: 0.02,
    opacity: 0.72,
    depthWrite: false,
  })

  return new THREE.Points(geometry, material)
}

function resizeScene() {
  if (!renderer) return

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  starField.geometry.dispose()
  const resizedStarField = createStarField(camera.position.z)
  starField.geometry = resizedStarField.geometry
  resizedStarField.material.dispose()

  renderer.render(scene, camera)
}

function recyclePassedStars() {
  const positions = starField.geometry.attributes.position
  const halfFov = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)

  for (let index = 0; index < positions.count; index += 1) {
    if (positions.getZ(index) <= camera.position.z - 2) continue

    const distance = 35 + Math.random() * 550
    positions.setZ(index, camera.position.z - distance)
    positions.setX(index, (Math.random() * 2 - 1) * distance * halfFov * camera.aspect)
    positions.setY(index, (Math.random() * 2 - 1) * distance * halfFov)
  }

  positions.needsUpdate = true
}

function animateScene(timestamp) {
  if (!renderer || !camera || !starField) return

  const deltaTime = lastFrameTime
    ? Math.min((timestamp - lastFrameTime) / 1000, 0.05)
    : 0
  lastFrameTime = timestamp
  camera.position.z -= AMBIENT_SPEED * deltaTime

  if (clickTravelStartedAt) {
    const progress = Math.min((timestamp - clickTravelStartedAt) / TRAVEL_DURATION, 1)
    const easedProgress = (1 - Math.cos(Math.PI * progress)) / 2
    const clickDistance = TRAVEL_DISTANCE * easedProgress
    camera.position.z -= clickDistance - clickTravelAppliedDistance
    clickTravelAppliedDistance = clickDistance

    if (progress === 1) clickTravelStartedAt = 0
  }

  recyclePassedStars()
  renderer.render(scene, camera)
  animationFrame = window.requestAnimationFrame(animateScene)
}

function animateStarsOnClick(event) {
  if (prefersReducedMotion || !(event.target instanceof Element)) return
  if (event.target.closest('a, button, input, textarea, select, [role="button"]')) return

  clickTravelStartedAt = performance.now()
  clickTravelAppliedDistance = 0
}

onMounted(async () => {
  if (!canvasContainer.value) return

  try {
    THREE = await import('three')
    if (isUnmounted || !canvasContainer.value) return

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 800)
    camera.position.z = 0
    starTexture = createStarTexture()
    starField = createStarField()
    scene.add(starField)

    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'low-power',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)
    canvasContainer.value.appendChild(renderer.domElement)

    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.addEventListener('resize', resizeScene)
    window.addEventListener('click', animateStarsOnClick, true)
    if (prefersReducedMotion) {
      renderer.render(scene, camera)
    } else {
      animationFrame = window.requestAnimationFrame(animateScene)
    }
  } catch (error) {
    console.error('Não foi possível iniciar o fundo de estrelas em WebGL.', error)
  }
})

onUnmounted(() => {
  isUnmounted = true
  window.cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', resizeScene)
  window.removeEventListener('click', animateStarsOnClick, true)
  starField?.geometry.dispose()
  if (starField?.material && THREE?.Material && starField.material instanceof THREE.Material) {
    starField.material.dispose()
  }
  starTexture?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
  scene?.clear()
})
</script>

<template>
  <div ref="canvasContainer" class="star-background" aria-hidden="true"></div>
</template>

<style scoped>
.star-background {
  position: fixed;
  z-index: 0;
  inset: 0;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 45%, #17191d 0%, #0e0f12 56%, #08090b 100%);
  pointer-events: none;
}

.star-background :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.86;
}
</style>
