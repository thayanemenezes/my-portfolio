<template>
  <footer class="site-footer">
    <div class="page-container footer-content">
      <p>© {{ new Date().getFullYear() }} Thayane Nascimento</p>
    
      <a href="#inicio">Voltar ao início ↑</a>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  z-index: 1;
  padding: 22px 0;
  border-top: 1px solid var(--color-line);
  background: rgb(9 10 12 / 92%);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  color: var(--color-muted);
  font-size: 0.82rem;
}

.footer-content a {
  color: var(--color-lilac);
}

@media (max-width: 620px) {
  .footer-content {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
