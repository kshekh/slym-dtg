<script setup>
import { useModalStore } from "../../stores/modal";
import { useAppStore } from "../../stores/app";
import Checkmark from "../icons/Checkmark.vue";
import EarnedShining from "./../../assets/icons/earned-shining.svg";
import CompletedShining from "./../../assets/icons/completed-shining.svg";

const modalStore = useModalStore();
const appStore = useAppStore();
</script>

<template>
  <div class="space-y-5">
    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div class="flex justify-center -mb-2">
        <img src="../../assets/icons/completed-shining.svg" alt="earned-shining" class="w-48" />
      </div>
    </transition>
    <h3 class="text-2xl font-bold text-center text-gray-900">
      Congratulations You’ve completed
    </h3>
    <p class="text-2xl text-center">
      <span
        class="text-transparent bg-clip-text bg-text-gradient font-extrabold"
        >DM Tour guide</span
      >
    </p>
    <div class="flex justify-between">
      <p class="text-base text-gray-600 font-bold">Total XP earned</p>
      <div class="flex gap-1 items-center">
        <Checkmark :classIcon="'w-3 h-3'" />
        <span
          class="text-xs text-transparent bg-clip-text bg-text-gradient font-extrabold"
          >600 <span class="text-[8px]">XP</span></span
        >
        <EarnedShining class="w-10 h-5" />
      </div>
    </div>
    <button
      @click="
        appStore.incrementSteps();
        modalStore.closeModal();
        appStore.showSuccess();
      "
      class="w-full hover:opacity-85 bg-text-gradient ease-in-out duration-200 rounded-xl px-5 font-extrabold leading-[48px] shadow-button text-white"
    >
      Done
    </button>
  </div>
</template>
