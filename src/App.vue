<script setup>
import DmTourGuide from "./components/Dmtourguide.vue";
import ModalManager from "./components/modals/ModalManager.vue";
import SuccessPopup from "./components/ui/SuccessPopup.vue";
</script>

<template>
  <div class="h-full w-full flex flex-col relative">
    <div class="fixed inset-0 overflow-hidden flex justify-center">
      <img
        src="./assets/images/background.webp"
        alt="background"
        class="object-cover max-w-inherit min-w-full"
      />
    </div>
    <div class="relative h-full w-full flex-1 flex flex-col">
      <DmTourGuide />
    </div>
  </div>

  <ModalManager />
  <SuccessPopup />
</template>
