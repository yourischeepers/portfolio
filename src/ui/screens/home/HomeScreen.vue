<template>
  <div class="w-full relative min-h-screen flex flex-col bg-core-50">
    <div class="pointer-events-none absolute inset-0 h-[80vh]">
      <!-- Vertical lines -->
      <div class="absolute left-[300px] top-0 h-full w-px bg-linear-to-b from-core-200 via-core-200 to-core-200/0"></div>
      <div class="absolute right-[300px] top-0 h-full w-px bg-linear-to-b from-core-200 via-core-200 to-core-200/0"></div>

      <!-- Horizontal lines -->
      <div class="absolute top-[140px] left-0 w-full h-px bg-core-200"></div>
      <div class="absolute top-[370px] left-0 w-full h-px bg-core-200"></div>
    </div>

    <div class="w-full flex flex-col gap-4 items-center justify-center mt-[140px] h-[230px]">
      <h1 class="font-bold text-4xl text-core-950 jump-up animation-duration-600 text-center lg:text-8xl">Youri Scheepers</h1>

      <div class="flex flex-col items-center gap-1.5 jump-up animation-duration-700 md:flex-row">
        <PlatformButton
            name="Android"
            :selected="activeFilters.includes(ANDROID_PLATFORM_ID)"
            @click="togglePlatformFilter(ANDROID_PLATFORM_ID)"
        >
          <AnimatedAndroid />
        </PlatformButton>

        <PlatformButton
            name="Kotlin Multiplatform"
            :selected="activeFilters.includes(KMP_PLATFORM_ID)"
            @click="togglePlatformFilter(KMP_PLATFORM_ID)"
        >
<!--          <AnimatedKotlinMultiplatform />-->
          <IconKotlinMultiplatform />
        </PlatformButton>

        <PlatformButton
            name="Web"
            :selected="activeFilters.includes(WEB_PLATFORM_ID)"
            @click="togglePlatformFilter(WEB_PLATFORM_ID)"
        >
          <AnimatedGlobe />
        </PlatformButton>
      </div>
    </div>

    <div class="flex flex-col gap-5 w-full px-8 mt-12 z-10 md:px-24">
      <div class="flex gap-1 jump-up animation-duration-800">
        <div class="bg-core-950 text-core-50 px-6 py-4 flex gap-0.5 rounded-full">
          <p class="text-xl font-medium">Work</p>
          <p class="text-sm font-medium">({{ projects.length }})</p>
        </div>

        <div class="bg-core-100 text-core-950 px-6 py-4 flex gap-0.5 rounded-full">
          <p class="text-xl font-medium">About</p>
        </div>
      </div>

      <div class="w-full grid grid-cols-1 gap-5 mb-16 jump-up animation-duration-900 md:grid-cols-3">
        <ProjectGridItem v-for="project in projects" :project="project" />
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import IconKotlinMultiplatform from "../../assets/icons/IconKotlinMultiplatform.vue";
import PlatformButton from "./PlatformButton.vue";
import {ref} from "vue";
import Footer from "../../generic/footer/Footer.vue";
import AnimatedGlobe from "../../assets/animations/AnimatedGlobe.vue";
import AnimatedAndroid from "../../assets/animations/AnimatedAndroid.vue";
import {GetProjects} from "../../../domain/project/GetProjects.ts";
import ProjectGridItem from "./ProjectGridItem.vue";

const ANDROID_PLATFORM_ID = "android"
const KMP_PLATFORM_ID = "kmp"
const WEB_PLATFORM_ID = "web"

const getProjects = new GetProjects()

const activeFilters = ref<string[]>([])
const projects = ref(getProjects.invoke())
console.log(projects.value)

function togglePlatformFilter(id: string) {
  if (activeFilters.value.includes(id)) {
    const index = activeFilters.value.indexOf(id)
    activeFilters.value.splice(index, 1)
  } else {
    activeFilters.value.push(id)
  }
}
</script>
