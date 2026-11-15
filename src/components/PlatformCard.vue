<script setup lang="ts">
import { launchTarget } from '../launch'
import type { Platform } from '../types'
import LogoTile from './LogoTile.vue'

defineProps<{ platform: Platform }>()
</script>

<template>
  <article class="card">
    <LogoTile :platform="platform" />
    <div class="body">
      <h3>{{ platform.name }}</h3>
      <p class="note">{{ platform.note }}</p>
      <div class="actions">
        <a
          class="btn primary"
          :href="launchTarget(platform)"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="'Masuk ke ' + platform.name + ' di tab baru'"
        >
          Masuk
        </a>
        <a
          class="btn secondary"
          :href="platform.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="'Buka situs utama ' + platform.name + ' di tab baru'"
        >
          Situs utama
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
}

.body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
}

h3 {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  line-height: 1.25;
}

.note {
  margin: 6px 0 16px;
  font-size: 0.92rem;
  color: var(--muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.btn {
  flex: 1 1 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  white-space: nowrap;
}

.primary {
  background: var(--accent-solid);
  color: var(--bg);
}

.secondary {
  background: transparent;
  color: var(--ink);
  border-color: var(--line);
}

@media (prefers-reduced-motion: no-preference) {
  .btn {
    transition:
      background-color 120ms,
      border-color 120ms,
      opacity 120ms;
  }
}

.primary:hover {
  opacity: 0.88;
}

.secondary:hover {
  border-color: var(--accent-solid);
}
</style>
