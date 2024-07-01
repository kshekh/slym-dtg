<script setup>
import Navbar from "./layout/Navbar.vue";
import Leftside from "./layout/Leftside.vue";
import Shining from "./icons/Shining.vue";
import AiSVG from "./../assets/icons/ai.svg";
import RewardSVG from "./../assets/icons/Reward.svg";
import { useAppStore } from "./../stores/app";
import { useModalStore } from "./../stores/modal";
import GuideCard from "./ui/GuideCard.vue";

const appStore = useAppStore();
const modalStore = useModalStore();

const openEarnXPModal = () => {
  modalStore.openModal("EarnXP");
};
const openCompleteXPModal = () => {
  modalStore.openModal("CompleteXP");
};
</script>

<template>
  <div class="flex w-full h-full flex-col mx-auto">
    <Navbar pageTitle="Messages" />
    <div class="flex-1 flex overflow-hidden p-5 pt-0 gap-3">
      <div
        class="bg-white rounded lg:w-1/3 max-w-[380px] rounded-l-2xl rounded-r-lg shadow-card flex-col hidden lg:flex"
      >
        <Leftside />
      </div>
      <div
        class="flex flex-1 flex-col items-center lg:shadow-card lg:bg-white/40 lg:rounded-r-2xl lg:rounded-l-lg lg:backdrop-blur-md"
      >
        <div
          class="overflow-auto space-y-6 sm:p-3 lg:p-5 flex items-center flex-col w-full scrollbar"
        >
          <div class="py-5 max-w-lg flex flex-col items-center w-full">
            <div class="max-w-[482px] w-full space-y-5">
              <div class="space-y-5">
                <div
                  class="flex flex-col sm:flex-row gap-5 items-center justify-center sm:justify-between"
                >
                  <div class="flex gap-1">
                    <img src="/images/ai.svg" class="w-5 h-5 shrink-0" alt="">
                    <h1
                      class="text-transparent bg-clip-text bg-text-gradient font-extrabold text-2xl text-left"
                    >
                      Get Started
                    </h1>
                  </div>
                  <div class="flex relative pl-14">
                    <div class="shrink-0 absolute left-0">
                      <RewardSVG class="size-12" />
                    </div>
                    <div class="relative">
                      <p
                        class="text-transparent bg-clip-text bg-text-gradient font-extrabold text-sm text-left"
                      >
                        You earned 20 500
                      </p>
                      <p class="text-gray-800 text-mv font-bold">
                        Total XP to earn : 12 000
                      </p>
                      <div class="shrink-0 absolute -right-3 -top-3">
                        <Shining :classIcon="'w-4 h-4'" />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Progress bar -->
                <div
                  class="bg-white rounded-full p-1 drop-shadow-1 backdrop-blur-md"
                >
                  <div
                    class="bg-text-gradient rounded-full h-2 duration-500 ease-in-out"
                    :style="`width: ${appStore.guideProgress}%`"
                  ></div>
                </div>
              </div>

              <!-- Steps -->
              <GuideCard
                :image="'/images/step-1.png'"
                :title="'Create more inbox'"
                :description="'Create more inbox, welcome your new contact by a message'"
                :link="'/#'"
                :xp="500"
                :is-completed="appStore.guideStepsCompleted >= 1"
                :on-check="
                  () => {
                    if (appStore.guideStepsCompleted < 1) {
                      openEarnXPModal();
                    }
                  }
                "
                :on-un-check="
                  () => {
                    appStore.setSteps(0);
                  }
                "
              />
              <GuideCard
                :image="'/images/step-2.png'"
                :title="'Manage your messaging rules'"
                :description="'Create more inbox, welcome your new contact by a message'"
                :link="'/#'"
                :xp="100"
                :is-completed="appStore.guideStepsCompleted >= 2"
                :on-check="
                  () => {
                    if (appStore.guideStepsCompleted < 2) {
                      openCompleteXPModal();
                    }
                  }
                "
                :on-un-check="
                  () => {
                    appStore.setSteps(1);
                  }
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
