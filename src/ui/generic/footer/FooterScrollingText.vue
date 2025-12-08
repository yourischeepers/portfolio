<template>
  <div class="inline-block overflow-hidden relative">
    <transition
        name="slide-fade"
        class="absolute inset-0 w-full"
    >
      <p :key="currentIndex" class="text w-full">
        {{ texts[currentIndex] }}
      </p>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

interface Props {
  texts: string[];
}

const props = defineProps<Props>();

const currentIndex = ref(0);
let intervalId: number | null = null;

function start() {
  stop();

  if (!props.texts || props.texts.length <= 1) return;

  intervalId = window.setInterval(() => {
    currentIndex.value =
        (currentIndex.value + 1) % props.texts.length;
  }, 3000);
}

function stop() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

onMounted(start);
onBeforeUnmount(stop);

// Restart if texts change dynamically
watch(() => props.texts, start, { deep: true });
</script>

<style scoped>
/* Animation */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(100%) rotateZ(30deg);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.text {
  white-space: nowrap; /* optional, prevents line breaks */
  transform-origin: left top;
}
</style>
