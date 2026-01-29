<template>
  <div class="w-full grid grid-cols-1 gap-5 jump-up animation-duration-900 md:grid-cols-3 mt-24 mb-16">
    <div
        class="rounded-3xl h-[500px] bg-center bg-cover"
        style="background-image: url('/images/profile.png')"
    />

    <div
        class="col-span-2 bg-core-50 border-2 border-core-200 rounded-3xl h-[500px] p-6 flex flex-col justify-between"
    >
      <div class="flex flex-col gap-1">
        <p class="font-medium text-4xl">Android & Kotlin Multiplatform Developer</p>
        <p class="italic text-3xl font-normal">(with a touch of web)</p>
      </div>

      <div class="flex flex-col gap-1">
        <p class="text-3xl font-normal">19 years old, graduating 2027</p>

        <div class="flex gap-4 items-center text-4xl font-medium">
          <p>Working at Framna</p>

          <div class="h-1 w-12 bg-core-950" />

          <p>studying at AUAS</p>
        </div>
      </div>
    </div>

    <div
      class="col-span-2 bg-core-100 border-2 border-core-200 rounded-3xl h-[500px] p-6"
    >
      <p class="text-4xl font-medium">Interests</p>
    </div>

    <LanguageSkills />
  </div>
</template>

<script setup lang="ts">
import LanguageSkills from "./LanguageSkills.vue";
</script>
