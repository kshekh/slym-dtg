import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
  state: () => ({
    isVisible: false,
    // Modal type can be "login" or "register".
    modalType: null,
    data: null,
  }),
  actions: {
    openModal(type, data = null) {
      this.isVisible = true;
      this.modalType = type;
      this.data = data;
    },
    closeModal() {
      this.isVisible = false;
      this.modalType = null;
    },
  },
});
