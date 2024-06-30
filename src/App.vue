<script setup>
import Dmtourguide from './components/Dmtourguide.vue'
 
import Ai from './components/icons/Ai.vue';
</script>

<template>
  <!-- <Ai class="w-5 h-5 shrink-0 absolute invisible" /> -->
  <div class="h-full w-full flex flex-col relative">

    <div class="fixed inset-0 overflow-hidden flex justify-center">
      <img src="./assets/images/background.webp" alt="background" class="object-cover max-w-inherit min-w-full" />
    </div>
    <div class="relative h-full w-full flex-1 flex flex-col">
      
      <Dmtourguide />
    </div>
  </div>
</template>