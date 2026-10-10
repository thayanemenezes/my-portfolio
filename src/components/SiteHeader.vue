<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const isMenuOpen = ref(false)
const activeSection = ref('inicio')
const links = [
  { label: 'Apresentação', href: '#apresentacao', id: 'apresentacao' },
  { label: 'Experiências', href: '#experiencias', id: 'experiencias' },
  { label: 'Projetos', href: '#projetos', id: 'projetos' },
  { label: 'Contato', href: '#contato', id: 'contato' },
]

let observer

function closeMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { rootMargin: '-40% 0px -52% 0px', threshold: 0 },
  )

  document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <header class="site-header">
    <nav class="site-nav page-container" aria-label="Navegação principal">
      <a class="brand" href="#inicio" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true">✦</span>
        <span>Thayane Nascimento</span>
      </a>

      <div class="desktop-nav">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          :class="['nav-link', { 'is-active': activeSection === link.id }]"
        >
          {{ link.label }}
        </a>
      </div>

      <button
        class="mobile-toggle icon-button"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <X v-if="isMenuOpen" :size="21" aria-hidden="true" />
        <Menu v-else :size="21" aria-hidden="true" />
      </button>
    </nav>

    <div v-if="isMenuOpen" id="mobile-menu" class="mobile-menu">
      <a
        v-for="link in links"
        :key="link.id"
        :href="link.href"
        :class="['mobile-nav-link', { 'is-active': activeSection === link.id }]"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  z-index: 50;
  top: 3px;
  width: 100%;
  border-bottom: 1px solid var(--color-line);
  background: rgb(8 10 24 / 88%);
  backdrop-filter: blur(18px);
}

.site-nav {
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text);
  font-size: 0.93rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.brand-mark {
  display: grid;
  width: 38px;
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid rgb(255 216 77 / 45%);
  border-radius: 50%;
  color: var(--color-signal);
  font-size: 1.1rem;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 38px);
}

.nav-link,
.mobile-nav-link {
  color: var(--color-muted);
  font-size: 0.92rem;
  transition: color 180ms ease;
}

.nav-link:hover,
.nav-link.is-active,
.mobile-nav-link:hover,
.mobile-nav-link.is-active {
  color: var(--color-text);
}

.nav-link.is-active::after {
  display: block;
  height: 2px;
  margin-top: 6px;
  background: var(--color-signal);
  content: '';
}

.mobile-toggle,
.mobile-menu {
  display: none;
}

@media (max-width: 760px) {
  .site-nav {
    min-height: 68px;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-toggle {
    display: grid;
  }

  .mobile-menu {
    display: grid;
    gap: 4px;
    padding: 12px 20px 18px;
    border-top: 1px solid var(--color-line);
    background: var(--color-ink);
  }

  .mobile-nav-link {
    padding: 10px 12px;
  }
}
</style>
