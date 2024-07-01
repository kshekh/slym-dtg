<script setup>
import { Vue3Lottie } from "vue3-lottie";
import { useAppStore } from "../../stores/app";
import animationData from "./../../assets/lottie/success.json";

const appStore = useAppStore();
const onComplete = () => {
  appStore.hideSuccess();
};
</script>

<template>
  <div
    v-if="appStore.isSuccessVisible"
    class="fixed inset-0 flex items-center justify-center"
  >
    <Vue3Lottie
      :animationData="animationData"
      :loop="false"
      :autoplay="true"
      :onOnComplete="onComplete"
    />
  </div>
</template>
