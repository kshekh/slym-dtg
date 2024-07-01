<script setup>
import { shallowRef, defineAsyncComponent, watch } from "vue";
import { useModalStore } from "../../stores/modal";
import HeadlessModal from "../ui/HeadlessModal.vue";

const modalStore = useModalStore();
const asyncComponent = shallowRef(null);

watch(
  () => modalStore.modalType,
  (value) => {
    switch (value) {
      case "EarnXP":
        asyncComponent.value = defineAsyncComponent(() =>
          import(`./EarnXP.vue`)
        );
        break;
      case "CompleteXP":
        asyncComponent.value = defineAsyncComponent(() =>
          import(`./CompleteXP.vue`)
        );
        break;
      default:
        asyncComponent.value = null;
    }
  }
);
</script>

<template>
  <HeadlessModal
    :isVisible="modalStore.isVisible"
    :modalSize="'max-w-[463px]'"
    @close="modalStore.closeModal()"
  >
    <component :is="asyncComponent" />
  </HeadlessModal>
</template>
