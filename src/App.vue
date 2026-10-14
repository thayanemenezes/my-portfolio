<script setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import StarBackground from './components/StarBackground.vue'
import TechnologySection from './components/TechnologySection.vue'

const scrollProgress = ref(0)
const presentationStage = ref('hero')
const PRESENTATION_COMPLETED_KEY = 'portfolio-presentation-completed'
const isFullPage = ref(readPresentationStatus())
const isAssembling = ref(false)
let assemblyTimeout

function readPresentationStatus() {
  try {
    return window.localStorage.getItem(PRESENTATION_COMPLETED_KEY) === 'true'
  } catch (error) {
    console.error('Não foi possível verificar o status da apresentação.', error)
    return false
  }
}

function continuePresentation() {
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0

  if (presentationStage.value === 'hero') {
    presentationStage.value = 'about'
  } else if (presentationStage.value === 'about') {
    presentationStage.value = 'projects'
  } else {
    try {
      window.localStorage.setItem(PRESENTATION_COMPLETED_KEY, 'true')
    } catch (error) {
      console.error('Não foi possível salvar a conclusão da apresentação.', error)
    }

    isAssembling.value = true
    isFullPage.value = true
    assemblyTimeout = window.setTimeout(() => {
      isAssembling.value = false
    }, 1100)

    nextTick(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      updateScrollProgress()
    })
  }
}

function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  updateScrollProgress()
})

onUnmounted(() => window.removeEventListener('scroll', updateScrollProgress))
</script>

<template>
  <div class="page-shell">
    <StarBackground />
    <div v-if="isFullPage" class="scroll-progress" aria-hidden="true">
      <div class="scroll-progress-value" :style="{ width: `${scrollProgress}%` }"></div>
    </div>
    <SiteHeader v-if="isFullPage" :class="{ 'page-assembly-header': isAssembling }" />
    <main :class="{ 'page-assembly-content': isAssembling }">
      <Transition name="stage" mode="out-in">
        <div v-if="!isFullPage" :key="presentationStage">
          <HeroSection
            v-if="presentationStage === 'hero'"
            presentation
            @continue="continuePresentation"
          />
          <AboutSection
            v-else-if="presentationStage === 'about'"
            presentation
            @continue="continuePresentation"
          />
          <ProjectsSection
            v-else
            presentation
            @continue="continuePresentation"
          />
        </div>
      </Transition>
      <template v-if="isFullPage">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechnologySection />
        <ProjectsSection />
        <ContactSection />
      </template>
    </main>
    <SiteFooter v-if="isFullPage" :class="{ 'page-assembly-footer': isAssembling }" />
  </div>
</template>

<style>
.stage-enter-active,
.stage-leave-active {
  transition:
    opacity 260ms ease,
    transform 260ms ease;
}

.stage-enter-from,
.stage-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

.page-assembly-header {
  animation: assemble-header 700ms ease both;
}

.page-assembly-content {
  animation: assemble-content 900ms 100ms ease both;
}

.page-assembly-footer {
  animation: assemble-footer 700ms 250ms ease both;
}

@keyframes assemble-header {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes assemble-content {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes assemble-footer {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.page-shell {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #090a0c;
}

main {
  position: relative;
  z-index: 1;
}

.scroll-progress {
  position: fixed;
  z-index: 60;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgb(255 255 255 / 5%);
}

.scroll-progress-value {
  height: 100%;
  background: var(--color-signal);
  box-shadow: 0 0 14px var(--color-signal);
  transition: width 80ms linear;
}
</style>
