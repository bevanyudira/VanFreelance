<script setup lang="ts">
import { computed } from 'vue'
import type { Group, Platform } from '../types'
import PlatformCard from './PlatformCard.vue'

const props = defineProps<{ group: Group; platforms: Platform[] }>()

const items = computed(() => props.platforms.filter((p) => p.group === props.group.id))
const headingId = computed(() => 'grup-' + props.group.id)
</script>

<template>
  <section
    v-if="items.length > 0"
    class="group"
    :class="'group-' + group.id"
    :aria-labelledby="headingId"
  >
    <header class="head">
      <span class="letter" aria-hidden="true">{{ group.id }}</span>
      <div class="titles">
        <h2 :id="headingId">{{ group.title }}</h2>
        <p class="hint">{{ group.hint }}</p>
      </div>
    </header>
    <div class="grid">
      <PlatformCard v-for="platform in items" :key="platform.id" :platform="platform" />
    </div>
  </section>
</template>

<style scoped>
.group-A {
  --accent: var(--a);
  --accent-solid: var(--a-solid);
  --accent-ink: var(--a-ink);
}

.group-B {
  --accent: var(--b);
  --accent-solid: var(--b-solid);
  --accent-ink: var(--b-ink);
}

.group-C {
  --accent: var(--c);
  --accent-solid: var(--c-solid);
  --accent-ink: var(--c-ink);
}

.head {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
}

.letter {
  flex: none;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--accent-solid);
  color: var(--bg);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
}

.titles {
  min-width: 0;
}

h2 {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.35rem;
  line-height: 1.3;
}

.hint {
  margin: 4px 0 0;
  max-width: 60ch;
  font-size: 0.92rem;
  color: var(--muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
</style>
