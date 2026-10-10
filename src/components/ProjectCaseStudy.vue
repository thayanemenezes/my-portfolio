<script setup>
import { ArrowLeft, ArrowUpRight } from '@lucide/vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

defineEmits(['back'])
</script>

<template>
  <section class="case-study page-container" :aria-label="`Estudo de caso: ${project.title}`">
    <button class="back-button" type="button" @click="$emit('back')">
      <ArrowLeft :size="17" aria-hidden="true" /> Voltar aos projetos
    </button>
    <article class="case-panel">
      <img class="case-cover" :src="project.detailImage" :alt="project.imageAlt" />
      <div class="case-content">
        <div class="case-main">
          <p class="eyebrow">Estudo de caso / projeto provisório</p>
          <h2>{{ project.title }}</h2>
          <p class="case-context">{{ project.context }}</p>
          <h3>Processo e decisões técnicas</h3>
          <p>{{ project.process }}</p>
          <div v-if="project.gallery.length" class="case-gallery">
            <img
              v-for="(image, index) in project.gallery"
              :key="image"
              :src="image"
              :alt="`Imagem complementar ${index + 1} do projeto ${project.title}`"
              loading="lazy"
            />
          </div>
        </div>

        <aside class="case-meta">
          <h3>Meu papel</h3>
          <p>{{ project.role }}</p>
          <h3>Stack</h3>
          <p>{{ project.stack }}</p>
          <h3>Resultado e aprendizados</h3>
          <p>{{ project.result }}</p>
          <a class="github-link" :href="project.github" target="_blank" rel="noopener noreferrer">
            GitHub — substituir URL <ArrowUpRight :size="16" aria-hidden="true" />
          </a>
        </aside>
      </div>
    </article>
  </section>
</template>

<style scoped>
.case-study {
  padding-top: 10px;
}

.back-button {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 9px;
  margin-bottom: 24px;
  padding: 0 14px;
  border: 1px solid var(--color-line);
  border-radius: 5px;
  background: rgb(13 17 40 / 55%);
  color: #e4e8ff;
  cursor: pointer;
}

.case-panel {
  overflow: hidden;
  border: 1px solid var(--color-line);
  border-radius: 8px;
  background: linear-gradient(145deg, rgb(24 29 59 / 84%), rgb(13 16 37 / 76%));
}

.case-cover {
  width: 100%;
  height: clamp(240px, 32vw, 380px);
  object-fit: cover;
  opacity: 0.78;
}

.case-content {
  display: grid;
  gap: 44px;
  grid-template-columns: minmax(0, 1.25fr) minmax(220px, 0.75fr);
  padding: clamp(24px, 5vw, 54px);
}

.case-main h2 {
  margin-top: 15px;
  color: var(--color-text);
  font-size: clamp(1.8rem, 3.6vw, 2.8rem);
  font-weight: 700;
  line-height: 1.15;
}

.case-main h3 {
  margin-top: 30px;
  color: var(--color-text);
  font-size: 1.15rem;
  font-weight: 700;
}

.case-main p:not(.eyebrow),
.case-meta p {
  margin-top: 14px;
  color: var(--color-muted-light);
  line-height: 1.7;
}

.case-main .case-context {
  margin-top: 22px;
}

.case-gallery {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 28px;
}

.case-gallery img {
  width: 100%;
  height: 170px;
  border-radius: 5px;
  object-fit: cover;
}

.case-meta {
  align-self: start;
  padding: 24px;
  border: 1px solid var(--color-line);
  border-radius: 6px;
  background: rgb(0 0 0 / 18%);
}

.case-meta h3 {
  color: var(--color-lilac);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.case-meta h3:not(:first-child) {
  margin-top: 23px;
}

.case-meta p {
  margin-top: 7px;
  color: #e2e7ff;
}

.github-link {
  display: flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  border-radius: 5px;
  background: var(--color-violet);
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
}

@media (max-width: 780px) {
  .case-content {
    grid-template-columns: 1fr;
  }
}
</style>
