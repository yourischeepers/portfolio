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
        <p class="text-sm font-medium">({{ workExperience.length }})</p>
      </div>

      <div class="flex flex-row gap-0.5 bg-core-100 text-core-950 rounded-full px-6 py-4">
        <p class="text-xl font-medium">Software</p>
        <p class="text-sm font-medium">({{ workExperience.filter((it) => it.isInSoftware).length }})</p>
      </div>
    </div>

    <div class="flex flex-col mt-6">
      <!-- TODO: PROPER DATE FORMATTING -->
      <WorkExperienceItem
          v-for="experience in workExperience"
          :role="experience.role"
          :where="experience.isViaPlatform ? 'via' : 'at'"
          :start="experience.startDate.toDateString()"
          :end="experience.endDate ? experience.endDate.toDateString() : ''"
      >
        <LogoFramna v-if="experience.company == 'Framna'" />
        <LogoFiverr v-else-if="experience.company == 'Fiverr'" />
        <p v-else>{{ experience.company }}</p>
      </WorkExperienceItem>
    </div>
  </div>
</template>

<script setup lang="ts">

import IconDownload from "../../../assets/icons/IconDownload.vue";
import WorkExperienceItem from "./WorkExperienceItem.vue";
import LogoFramna from "../../../assets/logos/LogoFramna.vue";
import LogoFiverr from "../../../assets/logos/LogoFiverr.vue";
import {GetWorkExperience} from "../../../../domain/about/experience/GetWorkExperience.ts";
import {ref} from "vue";
import type {WorkExperience} from "../../../../domain/about/experience/model/WorkExperience.ts";

const getWorkExperience = new GetWorkExperience()
const workExperience = ref<WorkExperience[]>([])

function loadWorkExperience() {
  workExperience.value = getWorkExperience.invoke()
}

loadWorkExperience()
</script>
