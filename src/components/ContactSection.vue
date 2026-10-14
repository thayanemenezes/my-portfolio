<script setup>
import { ref } from 'vue'
import { BriefcaseBusiness, CodeXml, Mail, Send } from '@lucide/vue'
import { contact } from '../data/portfolio.js'

const name = ref('')
const email = ref('')
const message = ref('')
const formStatus = ref('')

function submitContact() {
  const subject = encodeURIComponent(`Contato pelo portfólio de ${name.value.trim()}`)
  const body = encodeURIComponent(
    `${message.value.trim()}\n\nNome: ${name.value.trim()}\nE-mail: ${email.value.trim()}`,
  )
  formStatus.value = 'Seu aplicativo de e-mail será aberto com a mensagem pronta para envio.'
  window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contato" class="contact-section section-space">
    <div class="page-container contact-grid">
      <div class="contact-copy">
        <p class="eyebrow">04 / Contato</p>
        <h2>Vamos construir algo que faça sentido?</h2>
        <p class="contact-intro">
          Estou aberta a conversar sobre oportunidades, produtos digitais e colaborações. Envie uma
          mensagem e retornarei assim que possível.
        </p>
        <div class="social-links">
          <a :href="contact.github" target="_blank" rel="noopener noreferrer">
            <CodeXml :size="19" aria-hidden="true" /> GitHub
          </a>
          <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer">
            <BriefcaseBusiness :size="19" aria-hidden="true" /> LinkedIn
          </a>
          <a :href="`mailto:${contact.email}`">
            <Mail :size="19" aria-hidden="true" /> {{ contact.email }}
          </a>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="submitContact">
        <div class="form-field">
          <label for="contact-name">Nome</label>
          <input
            id="contact-name"
            v-model="name"
            autocomplete="name"
            name="name"
            placeholder="Como posso te chamar?"
            required
          />
        </div>
        <div class="form-field">
          <label for="contact-email">E-mail</label>
          <input
            id="contact-email"
            v-model="email"
            autocomplete="email"
            name="email"
            placeholder="voce@empresa.com"
            required
            type="email"
          />
        </div>
        <div class="form-field">
          <label for="contact-message">Mensagem</label>
          <textarea
            id="contact-message"
            v-model="message"
            name="message"
            placeholder="Conte um pouco sobre a oportunidade ou ideia."
            required
            rows="5"
          ></textarea>
        </div>
        <button class="button button-primary submit-button" type="submit">
          Enviar mensagem <Send :size="16" aria-hidden="true" />
        </button>
        <p class="form-status" aria-live="polite">{{ formStatus }}</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  border-top: 1px solid var(--color-line);
  background: rgb(16 17 20 / 90%);
}

.contact-grid {
  display: grid;
  align-items: start;
  gap: clamp(44px, 8vw, 110px);
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
}

.contact-copy h2 {
  max-width: 520px;
}

.contact-intro {
  max-width: 470px;
  margin-top: 22px;
  color: var(--color-muted-light);
  line-height: 1.7;
}

.social-links {
  display: grid;
  justify-items: start;
  gap: 16px;
  margin-top: 30px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #e3e8ff;
  font-weight: 600;
  transition: color 160ms ease;
}

.social-links a:hover {
  color: var(--color-signal);
}

.contact-form {
  display: grid;
  gap: 20px;
  padding: clamp(22px, 4vw, 36px);
  border-radius: 8px;
  background: rgb(9 10 12 / 82%);
  box-shadow: 0 18px 60px rgb(0 0 0 / 20%);
}

.form-field {
  display: grid;
  gap: 8px;
}

.form-field label {
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 700;
}

.form-field input,
.form-field textarea {
  width: 100%;
  min-height: 48px;
  padding: 12px 14px;
  border: 1px solid rgb(172 184 255 / 20%);
  border-radius: 5px;
  background: #131416;
  color: white;
  font: inherit;
  resize: vertical;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: rgb(174 182 216 / 58%);
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: var(--color-signal);
  outline: 2px solid rgb(255 216 77 / 35%);
  outline-offset: 2px;
}

.submit-button {
  justify-self: start;
  cursor: pointer;
  background: var(--color-signal);
  padding: 12px 20px;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.form-status {
  min-height: 1.25rem;
  color: #b6c1ea;
  font-size: 0.82rem;
}

@media (max-width: 780px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
