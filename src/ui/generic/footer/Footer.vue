<template>
  <div class="w-full bg-core-900 relative">
    <div class="absolute inset-0 pointer-events-none">
      <!-- Vertical lines -->
      <div class="absolute left-16 top-0 h-full w-px bg-linear-to-b from-core-800/0 via-core-800 to-core-800"></div>
      <div class="absolute right-16 top-0 h-full w-px bg-linear-to-b from-core-800/0 via-core-800 to-core-800"></div>

      <!-- Horizontal lines -->
      <div ref="horizontalLine" class="absolute top-[370px] left-0 w-full h-px bg-core-800"></div>
    </div>

    <div class="px-24 flex flex-col pt-20">
      <div ref="measure" class="flex flex-col">
        <h4 class="text-core-50 font-normal text-4xl max-w-[460px]">
          Want to learn more?
          <span class="text-core-400">Check one of the options below</span>
        </h4>

        <div class="flex gap-2 mt-8">
          <FooterFilledButton url="https://www.linkedin.com/in/youri-scheepers/">
            <IconLinkedIn class="size-5 " />
            <p>LinkedIn</p>
          </FooterFilledButton>

          <FooterFilledButton url="https://github.com/PartyProNL">
            <IconGitHub class="size-5 " />
            <p>GitHub</p>
          </FooterFilledButton>

          <FooterFilledButton url="/download/resume">
            <IconDownload class="size-5 " />
            <p>Download Resume</p>
          </FooterFilledButton>
        </div>
      </div>

      <div class="flex justify-between items-end w-full mt-16 mb-16">
        <div class="flex items-center gap-3 pb-2">
          <p class="text-core-50 font-medium text-4xl">Youri Scheepers</p>
          <div class="h-1 w-12 bg-core-400" />
          <FooterScrollingText
              class="text-core-400 font-normal text-4xl w-80 h-10"
              :texts="['Android', 'Kotlin Multiplatform', 'Web']"
          />
        </div>

        <div class="flex items-center">
          <FooterLink url="mailto:yourischeepers@outlook.com">Email</FooterLink>
          <FooterLink url="tel:0651875093">+31651875093</FooterLink>
          <FooterLink url="https://www.linkedin.com/in/youri-scheepers/">LinkedIn</FooterLink>
          <FooterLink url="https://github.com/PartyProNL">GitHub</FooterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconLinkedIn from "../../assets/icons/IconLinkedIn.vue";
import FooterFilledButton from "./FooterFilledButton.vue";
import IconGitHub from "../../assets/icons/IconGitHub.vue";
import IconDownload from "../../assets/icons/IconDownload.vue";
import {nextTick, onBeforeUnmount, onMounted, ref} from "vue";
import FooterScrollingText from "./FooterScrollingText.vue";
import FooterLink from "./FooterLink.vue";

const measure = ref<HTMLElement | null>(null);
const horizontalLine = ref<HTMLElement | null>(null);

const positionLine = () => {
  if (!measure.value || !horizontalLine.value) return;

  const measureRect = measure.value.getBoundingClientRect();
  const parentRect = horizontalLine.value.offsetParent?.getBoundingClientRect();

  if (!parentRect) return;

  const top = measureRect.bottom - parentRect.top + 32;
  horizontalLine.value.style.top = `${top}px`;
};

onMounted(async () => {
  await nextTick();
  positionLine();
  window.addEventListener("resize", positionLine);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", positionLine);
});
</script>
