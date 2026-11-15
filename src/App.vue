<script setup lang="ts">
import GroupSection from './components/GroupSection.vue'
import { groups, platforms } from './data/platforms'
</script>

<template>
  <main class="page">
    <header class="intro">
      <h1>Mau kerja lewat mana hari ini?</h1>
      <p>Klik logo platform untuk langsung ke halaman masuknya di tab baru.</p>
    </header>
    <GroupSection v-for="group in groups" :key="group.id" :group="group" :platforms="platforms" />
  </main>
</template>

<style scoped>
.page {
  max-width: 1080px;
  margin: 0 auto;
  padding: 56px 24px 80px;
}

.intro {
  margin-bottom: 56px;
}

h1 {
  margin: 0 0 14px;
  max-width: 14ch;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.intro p {
  margin: 0;
  max-width: 60ch;
  color: var(--muted);
}

.page > :deep(.group + .group) {
  margin-top: 56px;
}

@media (max-width: 600px) {
  .page {
    padding: 36px 16px 56px;
  }

  .intro {
    margin-bottom: 44px;
  }

  .page > :deep(.group + .group) {
    margin-top: 44px;
  }
}
</style>
