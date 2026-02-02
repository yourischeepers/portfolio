<template>
  <div class="w-full grid grid-cols-1 gap-5 jump-up animation-duration-900 md:grid-cols-3 mt-24 mb-16">
    <div
        class="rounded-3xl h-[500px] bg-center bg-cover"
        style="background-image: url('/images/profile.png')"
    />

    <div
        class="col-span-2 bg-core-50 border-2 border-core-200 rounded-3xl h-[500px] p-6 flex flex-col justify-between"
    >
      <div class="flex flex-row w-full justify-between gap-4">
        <div class="flex flex-col gap-1">
          <p class="font-medium text-4xl">Android & Kotlin Multiplatform Developer</p>
          <p class="italic text-3xl font-normal">(with a touch of web)</p>
        </div>

        <div class="relative aspect-square p-6 flex flex-col items-center">
          <IconCloverSix class="absolute top-0 left-0 w-full h-full text-core-900 spin" />

          <p class="font-bold text-5xl z-10 text-core-50">9.9</p>
          <p class="font-medium text-md z-10 text-core-100">GPA</p>
        </div>
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
      class="flex flex-col justify-between col-span-2 bg-core-100 border-2 border-core-200 rounded-3xl h-[500px] p-6 relative overflow-hidden"
    >
      <p class="text-4xl font-medium">Interests</p>

      <InterestCard
          image="./images/interest-themeparks.png"
          :width="270"
          :height="212"
          :x="-2"
          :y="30"
          :rotation="-8"
          @mouseover="setInterestText(`Since I was a kid I've loved going to theme parks. I've done over 120 rollercoasters, all over the world. I especially like the scary ones`)"
      />

      <InterestCard
          image="./images/interest-travelling.png"
          :width="202"
          :height="269"
          :x="20"
          :y="20"
          :rotation="4"
          @mouseover="setInterestText(`I've travelled to many places and countries. Recently a lot of my travels have been with my amazing girlfriend, Lili`)"
      />

      <InterestCard
          image="./images/interest-orchestra.png"
          :width="294"
          :height="221"
          :x="57"
          :y="20"
          :rotation="4"
          @mouseover="setInterestText(`I play in an orchestra myself and also love listening to orchestral music. I also listen to 80s, jazz (fusion) and more music`)"
      />

      <InterestCard
          image="./images/interest-accordion.png"
          :width="144"
          :height="214"
          :x="43"
          :y="32"
          :rotation="0"
          @mouseover="setInterestText(`I've been playing the accordion since I was about 10 (so 9+ years). Important notice: I'm not the bear in this photo`)"
      />

      <InterestCard
          image="./images/interest-cooking.png"
          :width="198"
          :height="224"
          :x="80"
          :y="35"
          :rotation="-10"
          @mouseover="setInterestText('I love cooking, especially Chinese food. This is a tomato egg noodle soup. I often cook with or for my girlfriend')"
      />

      <div class="w-full flex justify-center">
        <p class="text-md font-normal italic text-center max-w-[500px]">{{ currentInterestText }}</p>
      </div>
    </div>

    <LanguageSkills />
  </div>
</template>

<script setup lang="ts">
import LanguageSkills from "./languages/LanguageSkills.vue";
import IconCloverSix from "../../assets/icons/IconCloverSix.vue";
import InterestCard from "./interests/InterestCard.vue";
import {ref} from "vue";

const currentInterestText = ref("")

function setInterestText(text: string) {
  currentInterestText.value = text
}
</script>

<style scoped>
.spin {
  animation: spin;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>
