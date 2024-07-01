<script setup>
import BoostDM from "../icons/BoostDM.vue";
import BlurredDM from "../icons/BlurredDM.vue";

const advancedMenu = [
  {
    name: "Boost DM® ",
    link: "/#",
    iconComponent: BoostDM,
  },
  {
    name: "Blurred DM® ",
    link: "/#",
    iconComponent: BlurredDM,
  },
];
</script>
<template>
  <ul class="opacity-50">
    <li v-for="(item, index) in advancedMenu" :key="index">
      <span
        class="text-gray-900 font-bold text-sm flex gap-4 items-center rounded-xl ease-in-out duration-200 py-3 px-3"
      >
        <component :is="item.iconComponent" class="w-7 h-7" /><span
          class="flex-1"
          >{{ item.name }}</span
        ><small class="text-gray-600 text-mv">Coming Soon..</small>
      </span>
    </li>
  </ul>
</template>
