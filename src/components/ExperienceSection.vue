<script setup>
import { experiences } from '../data/portfolio.js'

const markers = ['gold', 'blue']
</script>

<template>
  <section id="experiencias" class="experience-section section-space">
    <div class="page-container">
      <div class="section-heading">
        <p class="eyebrow">02 / Experiências</p>
        <h2>Caminhos que me trouxeram até aqui</h2>
        <p class="section-intro">
          Experiências que me ensinaram a olhar além do código e a encontrar novas possibilidades para cada produto.
        </p>
      </div>

      <div class="experience-list">
        <article
          v-for="(experience, index) in experiences"
          :key="`${experience.company}-${index}`"
          class="experience-card"
        >
          <span :class="['timeline-marker', markers[index % markers.length]]" aria-hidden="true"></span>
          <div class="experience-topline">
            <div>
              <span class="placeholder-label">Conteúdo provisório — substituir</span>
              <h3>{{ experience.role }}</h3>
              <p class="company-name">{{ experience.company }}</p>
            </div>
            <p class="period">{{ experience.period }}</p>
          </div>
          <p class="experience-description">{{ experience.description }}</p>
          <p :class="['experience-result', markers[index % markers.length]]">{{ experience.result }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  border-block: 1px solid var(--color-line);
  background: rgb(16 17 20 / 88%);
}

.section-heading {
  max-width: 680px;
}

.section-heading h2 {
  margin-top: 16px;
  color: var(--color-text);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.12;
}

.section-intro {
  margin-top: 18px;
  color: var(--color-muted-light);
  line-height: 1.7;
}

.experience-list {
  position: relative;
  display: grid;
  max-width: 920px;
  gap: 24px;
  margin-top: 50px;
  padding-left: 34px;
}

.experience-list::before {
  position: absolute;
  top: 24px;
  bottom: 24px;
  left: 7px;
  width: 1px;
  background: linear-gradient(var(--color-violet), var(--color-blue), transparent);
  content: '';
}

.experience-card {
  position: relative;
  padding: clamp(22px, 4vw, 34px);
  
  border-radius: 8px;
  background: rgb(9 10 12 / 82%);

}

.timeline-marker {
  position: absolute;
  top: 32px;
  left: -34px;
  width: 14px;
  aspect-ratio: 1;
  border: 3px solid #101114;
  border-radius: 50%;
}

.timeline-marker.gold {
  background: var(--color-signal);
  box-shadow: 0 0 14px var(--color-signal);
}

.timeline-marker.blue {
  background: var(--color-blue);
  box-shadow: 0 0 14px var(--color-blue);
}

.experience-topline {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.placeholder-label {
  display: inline-block;
  padding: 5px 8px;
  border: 1px solid rgb(160 179 255 / 24%);
  border-radius: 3px;
  color: #d9d3ff;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.experience-card h3 {
  margin-top: 15px;
  color: var(--color-text);
  font-size: 1.2rem;
  font-weight: 700;
}

.company-name {
  margin-top: 5px;
  color: #c8d5ff;
}

.period {
  flex: 0 0 auto;
  color: #b6c1ea;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.experience-description {
  margin-top: 22px;
  color: var(--color-muted-light);
  line-height: 1.7;
}

.experience-result {
  margin-top: 16px;
  padding-left: 14px;
  border-left: 2px solid;
  font-size: 0.92rem;
  font-weight: 600;
}

.experience-result.gold { border-color: var(--color-signal); color: #fff0ad; }
.experience-result.blue { border-color: var(--color-blue); color: #a8d9ff; }

@media (max-width: 600px) {
  .experience-list {
    padding-left: 24px;
  }

  .experience-list::before {
    left: 4px;
  }

  .timeline-marker {
    left: -26px;
  }

  .experience-topline {
    flex-direction: column;
  }
}
</style>
