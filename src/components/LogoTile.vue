<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { launchTarget } from '../launch'
import type { Platform } from '../types'

const props = defineProps<{ platform: Platform }>()

const failed = ref(false)
watch(
  () => props.platform.logo,
  () => {
    failed.value = false
  },
)

const showLogo = computed(() => props.platform.logo !== '' && !failed.value)

const domain = computed(() => {
  try {
    return new URL(props.platform.url).hostname.replace(/^www\./, '')
  } catch {
    return props.platform.url
  }
})
</script>

<template>
  <!-- Tujuan sama dengan tombol "Masuk". Disembunyikan dari pembaca layar dan tab supaya tidak ada tautan ganda. -->
  <a
    class="tile"
    :href="launchTarget(platform)"
    target="_blank"
    rel="noopener noreferrer"
    aria-hidden="true"
    tabindex="-1"
  >
    <span class="bar">{{ domain }}</span>
    <span class="stage">
      <img
        v-if="showLogo"
        class="logo"
        :src="platform.logo"
        alt=""
        draggable="false"
        @error="failed = true"
      />
      <span v-else class="wordmark" :class="platform.wordmark.layout">
        <span class="main">{{ platform.wordmark.main }}</span>
        <span v-if="platform.wordmark.sub" class="sub">{{ platform.wordmark.sub }}</span>
      </span>
    </span>
  </a>
</template>

<style scoped>
.tile {
  display: block;
  color: inherit;
  text-decoration: none;
}

.bar {
  display: block;
  padding: 7px 14px;
  font-size: 0.78rem;
  line-height: 1.3;
  color: var(--muted);
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.stage {
  position: relative;
  display: block;
  aspect-ratio: 16 / 10;
  background: #ffffff;
  container-type: inline-size;
  overflow: hidden;
}

.logo {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 60%;
  height: 45%;
  object-fit: contain;
}

.wordmark {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.5rem, 12cqw, 2.4rem);
  line-height: 1.05;
  letter-spacing: -0.01em;
  text-transform: lowercase;
  white-space: nowrap;
  color: var(--accent-ink);
}

.wordmark.inline {
  flex-direction: row;
}

.wordmark.inline .sub {
  font-weight: 500;
  opacity: 0.7;
}

.wordmark.stacked {
  flex-direction: column;
}

.wordmark.stacked .sub {
  font-weight: 500;
  font-size: 0.8em;
  opacity: 0.75;
}
</style>
