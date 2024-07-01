<script setup>
import { defineProps } from "vue";
import { useAppStore } from "../../stores/app";
import Checkbox from "../icons/Checkbox.vue"; 
import Ring from "../icons/Ring.vue"; 
import LinkClick from "../icons/LinkClick.vue"; 

const props = defineProps([
  "image",
  "title",
  "description",
  "link",
  "xp",
  "onCheck",
  "onUnCheck",
  "isCompleted",
]);

const appStore = useAppStore();
</script>

<template>
  <div
    class="bg-white rounded-2xl drop-shadow-1 backdrop-blur-md shadow-card p-5 space-y-5"
  >
    <div class="flex justify-center items-center">
      <img :src="image" alt="step-1" />
    </div>

    <div class="flex justify-between gap-2">
      
<Checkbox  v-if="isCompleted" :classIcon="'w-5 h-5 shrink-0 cursor-pointer'"  @click="onUnCheck"  />
<Ring v-else  :classIcon="'w-5 h-5 shrink-0 cursor-pointer'"   @click="onCheck" />
  
      <div class="flex-1 space-y-2">
        <div class="flex justify-between gap-2 items-center flex-1">
          <h3
            class="font-bold text-left text-gray-900"
            :class="isCompleted ? 'line-through' : ''"
          >
            {{ title }}
            <a
              :href="link"
              class="hover:text-sky ease-in-out duration-200 inline-flex ml-1"
            >
              <LinkClick :classIcon="'w-3 h-3'" />
            </a>
          </h3>
          <p
            class="text-transparent bg-clip-text bg-text-gradient font-extrabold whitespace-nowrap"
          >
            <span class="inline-flex">
              <Checkmark :classIcon="'w-3 h-3 relative top-0.5'" />
            </span>
            {{ xp }} <small class="text-xs">XP</small>
          </p>
        </div>
        <p class="text-xs text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
