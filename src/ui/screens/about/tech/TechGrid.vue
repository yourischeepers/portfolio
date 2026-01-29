<template>
  <div class="flex flex-col gap-6">
    <p class="font-medium text-6xl">Tech</p>

    <div class="w-full grid grid-cols-1 gap-5 md:grid-cols-3">
      <TechCategory
          class="row-span-2"
          name="Android"
          :items="['Kotlin', 'Jetpack Compose', 'Koin', 'Kotlin Multiplatform', 'JUnit', 'Ktor', 'Coroutines', 'Flow', 'Dagger', 'Hilt', 'Android TV', 'ExoPlayer', 'Wear OS', 'Retrofit', 'Gradle']"
      />

      <TechCategory
          name="Backend"
          :items="['Java', 'Spring Boot', 'Exposed (ORM)']"
      />

      <TechCategory
          name="Databases & Cloud"
          :items="['Room', 'SQLDelight', 'SQL', 'Docker', 'CI/CD (GitLab & GitHub)']"
      />

      <TechCategory
          name="Web"
          :items="['TypeScript', 'Vue.js']"
      />

      <TechCategory
          name="Tools"
          :items="['Git', 'Figma', 'Jira', 'Firebase']"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TechCategory from "./TechCategory.vue";
</script>
