<script setup>
const technologies = [
  { id: 'javascript', name: 'JavaScript', mark: 'JS' },
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript', mark: 'TS' },
  { id: 'html', name: 'HTML5', mark: '5' },
  { id: 'css', name: 'CSS3', mark: '3' },
  { id: 'vue', name: 'Vue.js' },
  { id: 'nestjs', name: 'NestJS' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'docker', name: 'Docker' },
  { id: 'azure-devops', name: 'Azure DevOps' },
  { id: 'aws', name: 'AWS' },
  { id: 'python', name: 'Python' },
  { id: 'cpp', name: 'C++', mark: 'C++' },
]
</script>

<template>
  <section id="tecnologias" class="technology-section" aria-label="Tecnologias">
    <div class="page-container technology-content">
      <h2>Tecnologias</h2>
      <div class="technology-marquee">
        <div class="technology-track">
          <ul
            v-for="(isDuplicate, groupIndex) in [false, true]"
            :key="groupIndex"
            class="technology-group"
            :aria-label="isDuplicate ? undefined : 'Tecnologias utilizadas'"
            :aria-hidden="isDuplicate ? 'true' : null"
          >
            <li
              v-for="technology in technologies"
              :key="`${groupIndex}-${technology.id}`"
              class="technology-item"
              :class="`technology-${technology.id}`"
            >
              <span class="technology-icon" aria-hidden="true">
                <svg
                  v-if="technology.id === 'react'"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <ellipse cx="20" cy="20" rx="17" ry="6" />
                  <ellipse cx="20" cy="20" rx="17" ry="6" transform="rotate(60 20 20)" />
                  <ellipse cx="20" cy="20" rx="17" ry="6" transform="rotate(120 20 20)" />
                  <circle cx="20" cy="20" r="2.5" fill="currentColor" stroke="none" />
                </svg>
                <svg v-else-if="technology.id === 'html'" viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M8 4h24l-2.2 27L20 36l-9.8-5L8 4Z" fill="currentColor" />
                  <text x="20" y="25" text-anchor="middle">5</text>
                </svg>
                <svg v-else-if="technology.id === 'css'" viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M8 4h24l-2.2 27L20 36l-9.8-5L8 4Z" fill="currentColor" />
                  <text x="20" y="25" text-anchor="middle">3</text>
                </svg>
                <svg v-else-if="technology.id === 'vue'" viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M3 7h9l8 12 8-12h9L20 34 3 7Z" fill="currentColor" />
                  <path d="M12 7h8l-8 13-8-13h8Zm8 0h8l-8 13-8-13h8Z" class="vue-cutout" />
                </svg>
                <svg v-else-if="technology.id === 'nestjs'" viewBox="0 0 40 40" aria-hidden="true">
                  <path d="m20 2 15.6 9v18L20 38 4.4 29V11L20 2Z" fill="none" stroke="currentColor" stroke-width="2" />
                  <path d="M12 28V12l16 16V12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                </svg>
                <svg v-else-if="technology.id === 'nextjs'" viewBox="0 0 40 40" aria-hidden="true">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-width="1.5" />
                  <path d="M12 27V13l16 16M24 13v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                </svg>
                <svg v-else-if="technology.id === 'docker'" viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M6 18h5v5H6zm6 0h5v5h-5zm6 0h5v5h-5zm0-6h5v5h-5zm6 6h5v5h-5zm-12-6h5v5h-5zm18 7c3-2 5 0 6 1-1 3-3 4-6 4-1 6-6 9-14 9-8 0-12-4-13-10h24c1-2 1-3 3-4Z" fill="currentColor" />
                </svg>
                <svg v-else-if="technology.id === 'azure-devops'" viewBox="0 0 40 40" aria-hidden="true">
                  <path d="m4 12 9-8 22 4v24l-9 4-15-5-7 2V12Zm9-2v20l13 3V7l-13 3Zm-5 5v14l3-2V12l-3 3Zm19-5v19l5-2V11l-5-1Z" fill="currentColor" />
                </svg>
                <svg v-else-if="technology.id === 'aws'" viewBox="0 0 40 40" aria-hidden="true">
                  <text x="20" y="22" text-anchor="middle">aws</text>
                  <path d="M8 27c8 6 17 6 25 0m-3 0 3 0-1 3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
                </svg>
                <svg v-else-if="technology.id === 'python'" viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M19 3c-8 0-8 3-8 7v5h10v2H7c-4 0-6 3-6 8s2 8 6 8h4v-5c0-4 3-7 7-7h9c3 0 5-2 5-5v-6c0-5-4-7-13-7Zm-4 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="currentColor" />
                  <path d="M21 37c8 0 8-3 8-7v-5H19v-2h14c4 0 6-3 6-8s-2-8-6-8h-4v5c0 4-3 7-7 7h-9c-3 0-5 2-5 5v6c0 5 4 7 13 7Zm4-5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="currentColor" />
                </svg>
                <span v-else>{{ technology.mark }}</span>
              </span>
              <span class="technology-name">{{ technology.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technology-section {
  height: 160px;
  max-height: 180px;
  overflow: hidden;
  border-block: 1px solid var(--color-line);
  background: rgb(16 17 20 / 88%);
}

.technology-content {
  display: flex;
  height: 100%;
  align-items: center;
  gap: clamp(24px, 5vw, 72px);
}

.technology-content h2 {
  flex: 0 0 auto;
  color: var(--color-text);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.technology-marquee {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
}

.technology-track {
  display: flex;
  width: max-content;
  animation: technology-scroll 38s linear infinite;
}

.technology-group {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: clamp(28px, 4vw, 56px);
  margin: 0;
  padding: 0 56px 0 0;
  list-style: none;
}

.technology-item {
  display: grid;
  justify-items: center;
  gap: 7px;
  min-width: 68px;
  color: #f7df70;
}

.technology-icon {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  color: currentColor;
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.08em;
}

.technology-icon svg {
  width: 42px;
  height: 42px;
}

.technology-react {
  color: #61dafb;
}

.technology-react svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
}

.technology-typescript {
  color: #66a9f7;
}

.technology-javascript .technology-icon,
.technology-typescript .technology-icon {
  border-radius: 5px;
  background: currentColor;
}

.technology-javascript .technology-icon span,
.technology-typescript .technology-icon span {
  color: #101114;
}

.technology-html {
  color: #f06b42;
}

.technology-css {
  color: #4e9df5;
}

.technology-html .technology-icon text,
.technology-css .technology-icon text {
  fill: #101114;
  font-family: var(--font-mono);
  font-size: 17px;
  font-weight: 700;
}

.technology-vue {
  color: #42b883;
}

.technology-vue .vue-cutout {
  fill: #101114;
}

.technology-nestjs {
  color: #e0234e;
}

.technology-nextjs {
  color: #f5f5f5;
}

.technology-docker {
  color: #2496ed;
}

.technology-azure-devops {
  color: #0078d4;
}

.technology-aws {
  color: #ff9900;
}

.technology-aws .technology-icon {
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.08em;
}

.technology-aws .technology-icon text {
  fill: currentColor;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
}

.technology-python {
  color: #ffd43b;
}

.technology-python .technology-icon svg path + path {
  fill: #3776ab;
}

.technology-cpp {
  color: #659ad2;
}

.technology-cpp .technology-icon {
  width: 48px;
  font-size: 0.78rem;
  letter-spacing: -0.1em;
}

.technology-name {
  color: var(--color-muted-light);
  font-size: 0.72rem;
  line-height: 1;
  white-space: nowrap;
}

@keyframes technology-scroll {
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 600px) {
  .technology-content {
    gap: 18px;
  }

  .technology-content h2 {
    max-width: 68px;
    font-size: 0.72rem;
    line-height: 1.4;
  }
}
</style>
