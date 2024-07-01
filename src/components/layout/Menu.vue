<script setup>
import Inbox from "../icons/Inbox.vue";
import Discussion from "../icons/Discussion.vue";
import AddressBook from "../icons/AddressBook.vue";
import Zapier from "../icons/Zapier.vue";

const inboxMenu = [
  {
    name: "Inbox",
    link: "/#",
    iconsize: "w-6 h-6",
    iconComponent: Inbox,
  },
  {
    name: "Discussion Rules ",
    link: "/#",
    iconsize: "w-6 h-6",
    iconComponent: Discussion,
  },
  {
    name: "Adress Book",
    link: "/#",
    iconsize: "w-5 h-5",
    iconComponent: AddressBook,
  },
  {
    name: "Zapier",
    link: "/#",
    iconsize: "w-6 h-6",
    iconComponent: Zapier,
  },
];
</script>
<template>
  <ul>
    <li v-for="(item, index) in inboxMenu" :key="index">
      <a
        :href="item.link"
        class="text-gray-900 font-bold text-sm flex gap-4 items-center hover:bg-secondary/5 rounded-xl ease-in-out duration-200 py-3 px-3"
      >
        <span class="w-6 flex justify-center items-center"
          ><component
            :is="item.iconComponent"
            :classIcon="'text-gray-600'"
            :class="item.iconsize" /></span
        >{{ item.name }}
      </a>
    </li>
  </ul>
</template>
