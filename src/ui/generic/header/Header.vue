<template>
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
          :selected="false"
      >
        <AnimatedAndroid />
      </PlatformButton>

      <PlatformButton
          name="Kotlin Multiplatform"
          :selected="false"
      >
        <IconKotlinMultiplatform />
      </PlatformButton>

      <PlatformButton
          name="Web"
          :selected="false"
      >
        <AnimatedGlobe />
      </PlatformButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlatformButton from "../../screens/home/PlatformButton.vue";
import AnimatedAndroid from "../../assets/animations/AnimatedAndroid.vue";
import AnimatedGlobe from "../../assets/animations/AnimatedGlobe.vue";
import IconKotlinMultiplatform from "../../assets/icons/IconKotlinMultiplatform.vue";
</script>
