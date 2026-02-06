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
      <SelectableButtonOnBackground
          name="All"
          :small-text="`(${workExperience.length})`"
          :active="!isFilteringSoftware"
          @click="removeFilter"
      />

      <SelectableButtonOnBackground
          name="Software"
          :small-text="`(${workExperience.filter((it) => it.isInSoftware).length})`"
          :active="isFilteringSoftware"
          @click="filterSoftware"
      />
    </div>

    <div class="flex flex-col mt-6">
      <WorkExperienceItem
          v-for="experience in workExperience"
          :role="experience.role"
          :where="experience.isViaPlatform ? 'via' : 'at'"
          :start="formatMonthYear(experience.startDate)"
          :end="experience.endDate ? formatMonthYear(experience.endDate) : ''"
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
import SelectableButtonOnBackground from "../../../generic/buttons/SelectableButtonOnBackground.vue";

const getWorkExperience = new GetWorkExperience()
const workExperience = ref<WorkExperience[]>([])
const isFilteringSoftware = ref(false)

let allWorkExperience: WorkExperience[] = []

function loadWorkExperience() {
  allWorkExperience = getWorkExperience.invoke()
  updateWorkExperience()
}

function removeFilter() {
  isFilteringSoftware.value = false
  updateWorkExperience()
}

function filterSoftware() {
  isFilteringSoftware.value = true
  updateWorkExperience()
}

function updateWorkExperience() {
  if (isFilteringSoftware.value) {
    workExperience.value = allWorkExperience.filter((it) => { return it.isInSoftware })
  } else {
    workExperience.value = allWorkExperience
  }
}

// TODO Make this part of the model itself
function formatMonthYear(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
}

loadWorkExperience()
</script>
