<script setup>
import {
  Dialog,
  DialogOverlay,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import Cross from "../icons/Cross.vue";

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  modalSize: {
    type: String,
  },
});

const emits = defineEmits(["close"]);

const closeModal = () => {
  emits("close");
};
</script>

<template>
  <TransitionRoot as="template" :show="isVisible">
    <Dialog
      as="div"
      class="fixed inset-0 z-10 overflow-y-auto"
      @close="closeModal"
    >
      <div
        class="flex items-center justify-center min-h-screen p-5 text-center"
      >
        <TransitionChild
          as="template"
          enter="ease-in-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-white/30 transition-opacity backdrop-blur-xl"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <TransitionChild
          as="template"
          enter="ease-in-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-90"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in-out duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-90"
        >
          <div
            class="inline-block bg-white shadow-modal rounded-3xl p-4 text-left overflow-hidden relative transition-all align-middle sm:my-8 sm:w-full sm:p-6"
            :class="modalSize"
          >
            <div class="absolute top-0 right-0 pt-4 pr-4">
              <button
                @click="closeModal"
                class="text-gray-600 hover:text-gray-900 ease-in-out duration-200 focus:outline-none"
              >
                <span class="sr-only">Close</span>
                <Cross class="w-3 h-3" />
              </button>
            </div>
            <slot></slot>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
