<script setup lang="ts">
import SplashScreen from "./ui/screens/splash/SplashScreen.vue";
import {onMounted, ref} from "vue";
import TransitionOverlay from "./ui/transition/TransitionOverlay.vue";
import {useRouter} from "vue-router";

const isLoading = ref(true)

const overlay = ref()
const router = useRouter()

onMounted(() => {
  router.overlay = overlay
})

function onFinish() {
  isLoading.value = false
}
</script>

<template>
  <div class="relative w-full h-screen">
    <SplashScreen class="absolute inset-0 z-100" @finish="onFinish()" />
    <TransitionOverlay ref="overlay" class="fixed inset-0 z-100" />
    <div class="absolute inset-0">
      <RouterView :key="$route.fullPath" v-if="!isLoading" />
    </div>
  </div>
</template>
