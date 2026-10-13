<script setup>
import { ArrowRight } from '@lucide/vue'

defineProps({
  presentation: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['continue'])
</script>

<template>
  <section id="inicio" :class="['hero-section', { 'is-presentation': presentation }]">
    <div class="hero-shade" aria-hidden="true"></div>
    <div class="hero-orbit hero-orbit-large" aria-hidden="true"></div>
    <div class="hero-orbit hero-orbit-small" aria-hidden="true"></div>
    <span class="orbit-signal" aria-hidden="true"></span>

    <div class="hero-content page-container">
      <h1>Construo experiências digitais com clareza, intenção e código.</h1>
      <p class="hero-description">
        Sou Thayane Nascimento, desenvolvedora web focada em transformar necessidades reais em
        produtos digitais sólidos, acessíveis e memoráveis.
      </p>
      <div class="hero-actions">
        <button
          v-if="presentation"
          class="button button-primary"
          type="button"
          @click="$emit('continue')"
        >
          Continuar <ArrowRight :size="17" aria-hidden="true" />
        </button>
        <template v-else>
          <a class="button button-primary" href="#projetos">
          Ver projetos <ArrowRight :size="17" aria-hidden="true" />
          </a>
          <a class="button button-secondary" href="#contato">Vamos conversar</a>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  min-height: min(820px, 100svh);
  align-items: center;
  overflow: hidden;
  padding: 130px 0 44px;
  isolation: isolate;
}

.hero-section.is-presentation {
  height: 100vh;
  min-height: 100vh;
  padding: 84px 0 32px;
}

.hero-shade {
  position: absolute;
  z-index: -2;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-shade {
  z-index: -1;
  background:
    radial-gradient(ellipse at 78% 38%, rgb(102 110 128 / 12%), transparent 38%),
    linear-gradient(90deg, rgb(9 10 12 / 84%) 6%, rgb(9 10 12 / 56%) 43%, rgb(9 10 12 / 12%) 100%),
    linear-gradient(0deg, rgb(9 10 12 / 54%) 0%, transparent 32%);
}

.hero-content {
  position: relative;
  z-index: 1;
  animation: content-arrive 700ms 100ms ease both;
}

.eyebrow {
  color: var(--color-lilac);
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.hero-eyebrow {
  margin-bottom: 26px;
  color: #c7bdff;
  letter-spacing: 0.2em;
}

.hero-eyebrow span {
  color: var(--color-signal);
}

h1 {
  max-width: 850px;
  color: #f7f8ff;
  font-size: clamp(2.5rem, 4vw, 6.4rem);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 0.98;
}

.hero-description {
  max-width: 620px;
  margin-top: 28px;
  color: #d4daf5;
  font-size: clamp(1.05rem, 1.7vw, 1.2rem);
  line-height: 1.65;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 36px;
}

.button {
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 22px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 700;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  background: var(--color-violet);
  box-shadow: 0 0 30px rgb(123 92 246 / 26%);
  color: white;
}

.button-primary:hover {
  background: #876cf0;
}

.button-secondary {
  border-color: rgb(201 213 255 / 30%);
  background: rgb(9 10 12 / 82%);
  color: #f4f5ff;
}

.button-secondary:hover {
  border-color: var(--color-signal);
}

.scroll-hint {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  margin-top: clamp(56px, 9vh, 96px);
  color: #b6c1ea;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-line {
  width: 42px;
  height: 1px;
  background: rgb(182 193 234 / 50%);
}

.hero-orbit {
  position: absolute;
  z-index: -1;
  border: 1px solid rgb(123 163 255 / 28%);
  border-radius: 50%;
  pointer-events: none;
}

.hero-orbit-large {
  top: 16%;
  right: -8%;
  width: min(47vw, 590px);
  aspect-ratio: 1;
}

.hero-orbit-small {
  top: 29%;
  right: 9%;
  width: min(27vw, 330px);
  aspect-ratio: 1;
}

.orbit-signal {
  position: absolute;
  top: 29%;
  right: 22%;
  width: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-signal);
  box-shadow: 0 0 18px var(--color-signal);
}

@keyframes content-arrive {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 700px) {
  .hero-section {
    min-height: 760px;
    min-height: max(760px, 100svh);
  }

  .hero-section.is-presentation {
    height: 100vh;
    min-height: 100vh;
    padding: 24px 0;
  }

  h1 {
    max-width: 600px;
    font-size: clamp(3rem, 12vw, 4.7rem);
  }

  .hero-orbit-large {
    top: 12%;
    right: -48%;
    width: 100vw;
  }

  .hero-orbit-small {
    top: 23%;
    right: -20%;
    width: 64vw;
  }

  .orbit-signal {
    top: 25%;
    right: 24%;
  }

  .scroll-hint {
    font-size: 0.6rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-content {
    animation: none;
  }
}
</style>
