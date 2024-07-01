<script setup>
import Angleleft from './icons/AngleLeft.vue'
import MenuIcon from './icons/MenuIcon.vue'
import Leftside from './Leftside.vue'
import { ref } from 'vue'
 
defineProps({
  pageTitle: String,
})
const isShowing = ref(false)


</script>

<template>
  <div class="px-5">
    <header class="pb-2 pt-5 lg:pb-5 flex justify-between">
      <!-- Header left side -->
      <div class="flex gap-3 items-center">
        <a href="/#"
          class="shrink-0 bg-secondary/5 flex items-center justify-center cursor-pointer w-10 h-10 rounded-xl hover:bg-secondary/10 ease-in-out duration-200">
          <Angleleft :classIcon="'h-4 w-4 shrink-0'" />
        </a>
        <p class="font-semibold tracking-1 text-gray-900 text-base">{{ pageTitle }}</p>
      </div>
      <!-- Header Right / User Menu-->
      <div class="relative shrink-0 flex gap-2 ">
        
        <div
          class="cursor-pointer hover:ring-4 hover:ring-secondary/5 ease-in-out duration-200 rounded-full">
          <div class="overflow-hidden w-10 h-10 rounded-full ">
            <img src="/images/ben-yaala-khalil_1716547853.jpg.png" alt="user" />
          </div>
        </div>
        <button @click="isShowing = !isShowing"
          class="shrink-0 flex lg:hidden items-center justify-center cursor-pointer w-10 h-10  ease-in-out duration-200">
          <MenuIcon :classIcon="'h-6 w-6 shrink-0'" />
        </button>

      </div>
    </header>


    <transition 
    enter-active-class="ease-in-out duration-300"
    enter-from-class="-translate-x-full" 
    enter-to-class="translate-x-0" 
    leave-active-class="ease-in-out duration-300"
    leave-from-class="translate-x-0" 
    leave-to-class="-translate-x-full"
    >
    <div class="fixed inset-0 flex lg:hidden flex-col justify-end items-start z-50"  v-if="isShowing" >
    <div class="fixed inset-0 bg-white/30 transition-opacity backdrop-blur-xl"  @click="isShowing = false" />
    <div class="bg-white max-w-[380px] shadow-card flex-col flex h-full w-[calc(100%-50px)] flex-1 relative right-0" >
      <Leftside />
    </div>
  </div>
    </transition>


     


  </div>
</template>