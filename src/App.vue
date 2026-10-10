<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

const scrollProgress = ref(0)

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
  <div class="page-shell cosmic-grid">
    <div class="scroll-progress" aria-hidden="true">
      <div class="scroll-progress-value" :style="{ width: `${scrollProgress}%` }"></div>
    </div>
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>

<style>
.page-shell {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.cosmic-grid {
  background-image:
    linear-gradient(rgb(158 178 255 / 3.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(158 178 255 / 3.5%) 1px, transparent 1px);
  background-size: 56px 56px;
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
