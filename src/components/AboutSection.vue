<script setup>
import { ArrowUpRight } from '@lucide/vue'

defineProps({
  presentation: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['continue'])

const technologies = ['JavaScript', 'React', 'TypeScript', 'HTML & CSS', 'UX orientada a produto']
</script>

<template>
  <section
    id="apresentacao"
    :class="['about-section', 'section-orbit', 'section-space', { 'is-presentation': presentation }]"
  >
    <div class="page-container about-grid">
      <div class="about-visual">
        <div class="visual-frame" aria-hidden="true"></div>
        <img
          class="about-image"
          src="../assets/thayane.png"
          alt="Profissional de tecnologia trabalhando em frente a dois monitores."
          loading="lazy"
        />
      </div>

      <div class="about-copy">
        <p class="eyebrow">01 / Apresentação</p>
        <h2>Do contexto ao produto: desenvolvimento com visão de ponta a ponta.</h2>
        <p>
          Minha atuação conecta experiência de usuário, lógica de negócio e desenvolvimento
          front-end. Gosto de entender o problema antes de definir a interface, criando soluções
          claras para quem usa e sustentáveis para quem mantém.
        </p>
        <p>
          Trabalho de forma colaborativa, com comunicação objetiva, atenção aos detalhes e decisões
          técnicas guiadas por impacto. Cada projeto é uma oportunidade de unir performance,
          acessibilidade e uma presença visual consistente.
        </p>

        <div class="technology-block">
          <h3>Tecnologias principais</h3>
          <ul class="technology-list" aria-label="Tecnologias principais">
            <li v-for="technology in technologies" :key="technology">{{ technology }}</li>
          </ul>
        </div>
        <button
          v-if="presentation"
          class="flow-continue"
          type="button"
          @click="$emit('continue')"
        >
          Continuar <ArrowUpRight :size="16" aria-hidden="true" />
        </button>
        <a v-else class="text-link" href="#projetos">
          Conheça meus projetos <ArrowUpRight :size="16" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
}

.about-section.is-presentation {
  min-height: 100vh;
}

.about-copy {
  position: relative;
  isolation: isolate;
}

.about-copy::before {
  position: absolute;
  z-index: -1;
  inset: -18px -22px;
 
  border-radius: 10px;
  background: rgb(9 10 12 / 82%);
  box-shadow: 0 18px 54px rgb(0 0 0 / 22%);
  backdrop-filter: blur(18px);
  content: '';
  pointer-events: none;
}

.about-grid {
  display: grid;
  align-items: center;
  gap: clamp(56px, 9vw, 120px);
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
}

.about-visual {
  position: relative;
  min-width: 0;
  padding: 12px 16px 24px 0;
}

.visual-frame {
  position: absolute;
  inset: -4px 0 38px 18px;
  border: 1px solid rgb(142 117 240 / 25%);
  border-radius: 8px;
}

.about-image {
  position: relative;
  width: 100%;
  height: 510px;
  border-radius: 6px;
  filter: saturate(0.8);
  object-fit: cover;
  object-position: top;
}

.image-note {
  position: absolute;
  right: -8px;
  bottom: 0;
  width: min(230px, 75%);
  padding: 18px 20px;
  border: 1px solid var(--color-line);
  border-radius: 6px;
  background: linear-gradient(145deg, #191d3b, #0d1025);
  box-shadow: 0 18px 60px rgb(0 0 0 / 20%);
}

.note-label {
  color: var(--color-lilac);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.image-note p {
  margin-top: 8px;
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.4;
}

.about-copy h2,
.section-heading h2,
.contact-copy h2 {
  margin-top: 16px;
  color: var(--color-text);
  font-size: clamp(2rem, 4vw, 3.15rem);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.12;
}

.about-copy > p:not(.eyebrow) {
  max-width: 660px;
  margin-top: 22px;
  color: var(--color-muted-light);
  line-height: 1.75;
}

.about-copy > p + p:not(.eyebrow) {
  margin-top: 14px;
}

.technology-block {
  margin-top: 34px;
}

.technology-block h3 {
  color: var(--color-text);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
  padding: 0;
  list-style: none;
}

.technology-list li {
  padding: 7px 11px;
  border: 1px solid rgb(160 179 255 / 24%);
  border-radius: 999px;
  background: rgb(83 104 194 / 12%);
  color: #dbe4ff;
  font-size: 0.82rem;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  color: var(--color-signal);
  font-size: 0.9rem;
  font-weight: 700;
}

.flow-continue {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
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

@media (max-width: 800px) {
  .about-grid {
    gap: 48px;
    grid-template-columns: 1fr;
  }

  .about-visual {
    width: min(100%, 600px);
    margin-inline: auto;
  }

  .about-image {
    height: clamp(300px, 72vw, 440px);
  }
}
</style>
