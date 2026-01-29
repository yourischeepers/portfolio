<template>
  <div class="flex flex-col">
    <div class="flex flex-row w-full justify-between items-center">
      <p class="text-6xl font-medium">Work Experience</p>

      <RouterLink
          to="/downloads/resume"
          class="flex flex-row gap-1.5 rounded-full bg-core-100 hover:bg-core-200 transition-colors pl-4 pr-5 py-3 text-core-950"
      >
        <IconDownload />

        <p class="font-medium text-md">Download resume</p>
      </RouterLink>
    </div>

    <div class="flex flex-row gap-1 mt-3">
      <div class="flex flex-row gap-0.5 bg-core-950 text-core-50 rounded-full px-6 py-4">
        <p class="text-xl font-medium">All</p>
        <p class="text-sm font-medium">(4)</p>
      </div>

      <div class="flex flex-row gap-0.5 bg-core-100 text-core-950 rounded-full px-6 py-4">
        <p class="text-xl font-medium">Software</p>
        <p class="text-sm font-medium">(3)</p>
      </div>
    </div>

    <div class="flex flex-col mt-6">
      <WorkExperience
          role="Android Developer (working student)"
          where="at Framna"
          start="June 2025"
      />

      <WorkExperience
          role="Android Developer Intern (10/10 Grade)"
          where="at Framna"
          start="February 2025"
          end="June 2025"
      />

      <WorkExperience
          role="Student Mentor"
          where="at AUAS"
          start="September 2024"
          end="February 2025"
      />

      <WorkExperience
          role="Freelance Java Backend Developer"
          where="via Fiverr"
          start="October 2020"
          end="August 2021"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import IconDownload from "../../../assets/icons/IconDownload.vue";
import WorkExperience from "./WorkExperience.vue";
</script>
