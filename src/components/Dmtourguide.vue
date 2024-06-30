<script setup>
import Navbar from './Navbar.vue'
import Leftside from './Leftside.vue'
import Ai from './icons/Ai.vue';
import Shining from './icons/Shining.vue';
import Ring from './icons/Ring.vue';
import Checkbox from './icons/Checkbox.vue';
import CheckboxColor from './icons/CheckboxColor.vue';
import Checkmark from './icons/Checkmark.vue';
import LinkClick from './icons/LinkClick.vue';
import PlayButton from './icons/PlayButton.vue'; 
import { ref } from 'vue'
import HeadlessModal from './HeadlessModal.vue';
import { useAppStore } from './../stores/app';


const appStore = useAppStore();

const createInbox = ref(false);
const manageMessage = ref(false);
const earnedXp = ref(false);
const completedXp = ref(false);

</script>

<template>

  <div class="flex w-full h-full flex-col mx-auto">

    <Navbar pageTitle="Messages" />
    <div class="flex-1 flex overflow-hidden p-5 pt-0 gap-3">
      <Leftside />

      <div
        class="flex flex-1 flex-col items-center lg:shadow-card lg:bg-white/40 lg:rounded-r-2xl lg:rounded-l-lg lg:backdrop-blur-md ">
        <div class="overflow-auto space-y-6 sm:p-3 lg:p-5 flex items-center flex-col w-full scrollbar ">
          <div class="py-5 max-w-lg flex flex-col items-center w-full">
            <div class="max-w-[482px] w-full space-y-5">
              <div class="space-y-5">
                <div class="flex flex-col sm:flex-row gap-5 items-center justify-center sm:justify-between">
                  <div class="flex gap-1"> 
                    <img src="../assets/icons/ai.svg" class="w-5 h-5 shrink-0" alt="">
                    <h1 class="text-transparent bg-clip-text bg-text-gradient font-extrabold text-2xl text-left">Get Started
                    </h1>
                  </div>
                  <div class="flex relative pl-14">
                    <div class="shrink-0 absolute left-0">
                      <img src="../assets/icons/Reward.svg" class="w-12 h-12" alt="icon" />
                    </div>
                    <div class="relative">
                      <p class="text-transparent bg-clip-text bg-text-gradient font-bold text-sm text-left">You earned
                        20 500</p>
                      <p class="text-gray-800 text-mv font-bold">Total XP to earn : 12 000</p>
                      <div class="shrink-0 absolute -right-3 -top-3">
                        <Shining :classIcon="'w-4 h-4'" />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Progress bar -->
                <div class="bg-white rounded-full p-1 drop-shadow-1 backdrop-blur-md">
                  <div class="bg-text-gradient rounded-full h-2 duration-500 ease-in-out"
                    :style="`width: ${appStore.guideProgress || 5}%`"></div>
                </div>
              </div>



              <!-- Steps -->
              <div class="bg-white rounded-2xl drop-shadow-1 backdrop-blur-md shadow-card p-5 space-y-5">
                <div class="flex justify-center items-center">
                  <img src="/images/step-1.png" alt="step-1" />
                </div>

                <div class="flex justify-between gap-2 cursor-pointer" @click="() => {
                  if (appStore.guideStepsCompleted < 1) {
                    createInbox = true
                  }
                }">
                  <Checkbox v-if="appStore.guideStepsCompleted >= 1"
                    :classIcon="'w-5 h-5 shrink-0'" />
                  <Ring v-else :classIcon="'w-5 h-5 shrink-0'" />

                  <div class="flex-1 space-y-2">
                    <div class="flex justify-between gap-2 items-center flex-1">
                      <div class="flex gap-1 text-gray-900 items-center">
                        <h3 class="font-bold text-left " :class="appStore.guideStepsCompleted >= 1 ? 'line-through' : ''">Create more inbox</h3>
                        <a href="/#" class="hover:text-sky ease-in-out duration-200">
                          <LinkClick :classIcon="'w-3 h-3'" />
                        </a>
                      </div>
                      <p class="text-transparent bg-clip-text bg-text-gradient font-extrabold whitespace-nowrap"><span class="inline-flex"><Checkmark :classIcon="'w-3 h-3 relative top-0.5'" v-if="appStore.guideStepsCompleted >= 1" /><span v-else>+</span></span> 500 <small
                          class="text-xs">XP</small></p>
                    </div>
                    <p class="text-xs text-gray-500">Create more inbox, welcome your new contact by a message</p>
                  </div>

                </div>

              </div>
              <div class="bg-white rounded-2xl drop-shadow-1 backdrop-blur-md shadow-card p-5 space-y-5">
                <div class="flex justify-center items-center relative">
                  <img src="/images/step-2.png" alt="step-1" />
                  <div class="absolute inset-0 flex justify-center items-center">
                    <a href="/#" class="flex justify-center items-center w-16 h-16 backdrop-blur-md shadow-glow mix-blend-normal rounded-full bg-[#BABABA]/40 hover:-translate-y-1 ease-in-out duration-200" >
                       <PlayButton :classIcon="'w-7 h-7 mt-1'" />
                    </a>

                  </div>
                </div>

                <div class="flex justify-between gap-2 cursor-pointer" @click="() => {
                  if (appStore.guideStepsCompleted < 2) {
                    manageMessage = true
                  }
                }">
                  <Checkbox v-if="appStore.guideStepsCompleted === 2" :classIcon="'w-5 h-5 shrink-0'" />
                  <Ring v-else class="w-5 h-5 shrink-0" />

                  <div class="flex-1 space-y-2">
                    <div class="flex justify-between gap-2 items-center flex-1">
                      <div class="flex gap-1 text-gray-900 items-center">
                        <h3 class="font-bold text-left" :class="appStore.guideStepsCompleted === 2 ? 'line-through':''">Manage your messaging rules</h3>
                        <a href="/#" class="hover:text-sky ease-in-out duration-200">
                          <LinkClick :classIcon="'w-3 h-3'" />
                        </a>
                      </div>
                      <p class="text-transparent bg-clip-text bg-text-gradient font-extrabold whitespace-nowrap"><span class="inline-flex"><Checkmark :classIcon="'w-3 h-3 relative top-0.5'" v-if="appStore.guideStepsCompleted === 2" /><span v-else>+</span></span> 100 <small
                          class="text-xs">XP</small></p>
                    </div>
                    <p class="text-xs text-gray-500">Create more inbox, welcome your new contact by a message</p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>

  <!-- createInbox Modal -->
  <HeadlessModal :isVisible="createInbox" :modalSize="'max-w-[340px]'" @close="createInbox = false">
    <h2 class="text-base font-bold mb-2">Claim Task</h2>
    <div class="p-5 flex gap-8">
      <div class="flex flex-col items-end">
        <Checkbox :classIcon="'w-16 h-16'" />
        <CheckboxColor :classIcon="'w-8 h-8 text-green-500 -mt-4 -mr-2'" />
      </div>
      <div class="space-y-2">
        <h3 class="text-base font-bold">Create more inbox</h3>
        <p class="font-bold"><span class="leading-3 text-gray-500">You'll gain:</span>
          <span class="block text-transparent bg-clip-text bg-text-gradient font-extrabold">500 XP</span>
        </p>
      </div>
    </div>
    <button @click="() => {
      earnedXp = true;
      appStore.incrementSteps();
    }"
      class="w-full bg-primary hover:opacity-85 bg-gradient-primary ease-in-out duration-200 rounded-xl px-5 font-extrabold leading-[48px] shadow-button text-white">Claim
      Task</button>
  </HeadlessModal>

  <!-- manageMessage Modal -->
  <HeadlessModal :isVisible="manageMessage" :modalSize="'max-w-[340px]'" @close="manageMessage = false">
    <h2 class="text-base font-bold mb-2">Claim Task</h2>
    <div class="p-5 flex gap-8">
      <div class="flex flex-col items-end">
        <Checkbox :classIcon="'w-16 h-16'" />
        <CheckboxColor :classIcon="'w-8 h-8 text-green-500 -mt-4 -mr-2'" />
      </div>
      <div class="space-y-2">
        <h3 class="text-base font-bold">Manage your messaging rules</h3>
        <p class="font-bold"><span class="leading-3 text-gray-500">You'll gain:</span>
          <span class="block text-transparent bg-clip-text bg-text-gradient font-extrabold">100 XP</span>
        </p>
      </div>
    </div>
    <button @click="() => {
      completedXp = true;
      appStore.incrementSteps();
    }"
      class="w-full bg-primary hover:opacity-85 bg-gradient-primary ease-in-out duration-200 rounded-xl px-5 font-extrabold leading-[48px] shadow-button text-white">Claim
      Task</button>
  </HeadlessModal>


  <!-- Earned XP Modal -->
  <HeadlessModal :isVisible="earnedXp" :modalSize="'max-w-[463px]'" @close="earnedXp = false">
    <div class="space-y-5">
      <div class="flex justify-center -mb-8">
        <img src="../assets/icons/earned-shining.svg" alt="earned-shining" class="w-48" />
      </div>
      <h3 class="text-2xl font-bold text-center text-gray-900">Congratulations You’ve Earned</h3>
      <p class="text-2xl text-center"><span class="text-transparent bg-clip-text bg-text-gradient font-extrabold">500
          XP</span></p>

      <button @click="earnedXp = false"
        class="w-full hover:opacity-85 bg-text-gradient ease-in-out duration-200 rounded-xl px-5 font-extrabold leading-[48px] shadow-button text-white">Yeahhhhhhhhhhh
        !</button>
    </div>

  </HeadlessModal>

  <!-- completed XP Modal -->
  <HeadlessModal :isVisible="completedXp" :modalSize="'max-w-[463px]'" @close="completedXp = false">
    <div class="space-y-5">
      <div class="flex justify-center -mb-2">
        <img src="../assets/icons/completed-shining.svg" alt="earned-shining" class="w-48" />
      </div>
      <h3 class="text-2xl font-bold text-center text-gray-900">Congratulations You’ve completed</h3>
      <p class="text-2xl text-center"><span class="text-transparent bg-clip-text bg-text-gradient font-extrabold">DM Tour guide</span></p>
<div class="flex justify-between">
  <p class="text-base text-gray-600 font-bold">Total XP earned</p>
  <div class="flex gap-1 items-center">
    <Checkmark :classIcon="'w-3 h-3'" />
    <span class="text-xs text-transparent bg-clip-text bg-text-gradient font-extrabold">600 <span class="text-[8px]">XP</span></span>
    <img src="../assets/icons/earned-badge.svg" alt="earned-shining" class="w-10 h-5"  />
  </div>
</div>
      <button @click="completedXp = false"
        class="w-full hover:opacity-85 bg-text-gradient ease-in-out duration-200 rounded-xl px-5 font-extrabold leading-[48px] shadow-button text-white">Done</button>
    </div>

  </HeadlessModal>

</template>