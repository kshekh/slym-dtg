<script setup>
import AiSVG from "./../../assets/icons/ai.svg";
import Menu from "./Menu.vue";
import AdvancedMessage from "../ui/AdvancedMessage.vue";
import CircleProgress from "vue3-circle-progress";
import { useAppStore } from "../../stores/app";

const appStore = useAppStore();
</script>
<template>
  <div class="overflow-auto space-y-6 p-3 lg:p-5 scrollbar">
    <div class="bg-main rounded-xl px-3 py-2 flex justify-between">
      <div class="flex gap-4 items-center">
        <AiSVG class="size-5" />
        <p
          class="text-transparent bg-text-gradient font-bold bg-clip-text text-sm"
        >
          DM Tour Guide
        </p>
      </div>

      <!-- Steps count  -->
      <div
        class="bg-white shadow-1 border-2 border-white w-8 h-8 rounded-full relative flex justify-center items-center"
      >
        <!-- https://github.com/delowardev/vue3-circle-progress find progress attributes -->
        <circle-progress
          :percent="appStore.guideProgress"
          :is-gradient="true"
          :border-width="20"
          :linecap="0"
          :gradient="{
            angle: 90,
            startColor: '#40BEBE',
            stopColor: '#2361E6',
          }"
          empty-color="rgba(23, 82, 101, 0.05)"
          class="!absolute inset-0 !w-7 !h-7 scale-x-flip"
        />
        <p class="text-gray-900/50 text-mv font-bold">
          <span class="text-sky text-xs">{{
            appStore.guideStepsCompleted || 0
          }}</span
          >/2
        </p>
      </div>
    </div>

    <!-- Manage Inbox -->
    <div class="space-y-4">
      <h4
        class="font-bold text-gray-400 uppercase text-mv tracking-widest px-4"
      >
        Manage Inbox
      </h4>
      <Menu />
    </div>
    <!-- Advanced Messages -->
    <div class="space-y-4">
      <h4
        class="font-bold text-gray-400 uppercase text-mv tracking-widest px-4"
      >
        Advanced Messages
      </h4>
      <AdvancedMessage />
    </div>
  </div>
</template>
