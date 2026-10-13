<script setup>
import { computed, ref } from 'vue'
import { ArrowUpRight } from '@lucide/vue'
import { projects } from '../data/portfolio.js'
import ProjectCaseStudy from './ProjectCaseStudy.vue'

defineProps({
  presentation: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['continue'])

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Produto', value: 'product' },
  { label: 'Dados', value: 'data' },
]
const activeFilter = ref('all')
const selectedProject = ref(null)
const visibleProjects = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter.value),
)

function openProject(project) {
  selectedProject.value = project
  window.requestAnimationFrame(() => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function closeProject() {
  selectedProject.value = null
}
</script>

<template>
  <section id="projetos" class="projects-section section-space section-orbit">
    <ProjectCaseStudy
      v-if="selectedProject"
      :project="selectedProject"
      @back="closeProject"
    />

    <div v-else class="page-container">
      <div class="projects-heading">
        <div class="section-heading">
          <p class="eyebrow">03 / Projetos selecionados</p>
          <h2>Projetos com contexto, escolhas e resultado.</h2>
          <p class="section-intro">
            Exemplos provisórios de como apresentar trabalhos profissionais. Cada projeto pode
            reunir o desafio, o papel desempenhado, a stack e os aprendizados que geraram impacto.
          </p>
        </div>
        <div class="filter-group" role="group" aria-label="Filtrar projetos">
          <button
            v-for="filter in filters"
            :key="filter.value"
            :aria-pressed="activeFilter === filter.value"
            :class="['filter-button', { 'is-selected': activeFilter === filter.value }]"
            type="button"
            @click="activeFilter = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <div class="project-grid" aria-live="polite">
        <article v-for="project in visibleProjects" :key="project.id" class="project-card">
          <img :src="project.image" :alt="project.imageAlt" loading="lazy" />
          <div class="project-content">
            <p class="eyebrow">Projeto provisório / {{ project.categoryLabel }}</p>
            <h3>{{ project.title }}</h3>
            <p class="project-summary">{{ project.summary }}</p>
            <p class="project-stack">Papel: {{ project.role }} <span>·</span> Stack: {{ project.stack }}</p>
            <button class="project-open" type="button" @click="openProject(project)">
              Ver estudo de caso <ArrowUpRight :size="17" aria-hidden="true" />
            </button>
          </div>
        </article>
      </div>
      <div v-if="presentation" class="projects-continue">
        <button class="flow-continue" type="button" @click="$emit('continue')">
          Continuar <ArrowUpRight :size="17" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  min-height: 520px;
  scroll-margin-top: 90px;
}

.projects-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
}

.section-heading {
  max-width: 720px;
}

.section-heading h2 {
  margin-top: 16px;
  color: var(--color-text);
  font-size: clamp(2rem, 4vw, 3.15rem);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.12;
}

.section-intro {
  margin-top: 18px;
  color: var(--color-muted-light);
  line-height: 1.7;
}

.filter-group {
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 7px;
}

.filter-button {
  min-height: 40px;
  padding: 0 14px;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  background: rgb(13 17 40 / 55%);
  color: #dce4ff;
  cursor: pointer;
  font-size: 0.85rem;
  transition:
    background-color 160ms ease,
    border-color 160ms ease;
}

.filter-button:hover,
.filter-button.is-selected {
  border-color: #987dff;
  background: #7357d8;
  color: white;
}

.project-grid {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 42px;
}

.projects-continue {
  display: flex;
  justify-content: center;
  margin-top: 42px;
}

.flow-continue {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 20px;
  border: 0;
  border-radius: 6px;
  background: var(--color-violet);
  box-shadow: 0 0 30px rgb(123 92 246 / 26%);
  color: white;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 700;
  transition:
    transform 180ms ease,
    background-color 180ms ease;
}

.flow-continue:hover {
  transform: translateY(-2px);
  background: #876cf0;
}

.project-card {
  overflow: hidden;
  border-radius: 8px;
  background: rgb(9 10 12 / 82%);
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;
}

.project-card:hover,
.project-card:focus-within {
  transform: translateY(-4px);
  border-color: rgb(125 170 255 / 62%);
  box-shadow: 0 22px 54px rgb(42 53 135 / 22%);
}

.project-card > img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  opacity: 0.82;
}

.project-content {
  padding: 24px;
}

.project-content h3 {
  margin-top: 12px;
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
}

.project-summary {
  margin-top: 12px;
  color: var(--color-muted-light);
  line-height: 1.65;
}

.project-stack {
  margin-top: 16px;
  color: #d4c7ff;
  font-size: 0.84rem;
  font-weight: 600;
  line-height: 1.55;
}

.project-stack span {
  padding-inline: 3px;
  color: var(--color-signal);
}

.project-open {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 22px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color-signal);
  cursor: pointer;
  font-weight: 700;
}

@media (max-width: 900px) {
  .projects-heading {
    align-items: start;
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .project-grid {
    grid-template-columns: 1fr;
  }

  .project-card > img {
    height: 210px;
  }
}
</style>
