<script setup>
import { useModalStore } from "../../stores/modal";
import { useAppStore } from "../../stores/app";

const modalStore = useModalStore();
const appStore = useAppStore();
</script>

<template>
  <div class="space-y-5">
    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0 scale-90"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-90"
    >
      <div class="flex justify-center -mb-8">
        <img
          src="../../assets/icons/earned-shining.svg"
          alt="earned-shining"
          class="w-48"
        />
      </div>
    </transition>
    <h3 class="text-2xl font-bold text-center text-gray-900">
      Congratulations You’ve Earned
    </h3>
    <p class="text-2xl text-center">
      <span
        class="text-transparent bg-clip-text bg-text-gradient font-extrabold"
        >500 XP</span
      >
    </p>

    <button
      @click="
        appStore.incrementSteps();
        modalStore.closeModal();
        appStore.showSuccess();
      "
      class="w-full hover:opacity-85 bg-text-gradient ease-in-out duration-200 rounded-xl px-5 font-extrabold leading-[48px] shadow-button text-white"
    >
      Yeahhhhhhhhhhh !
    </button>
  </div>
</template>
