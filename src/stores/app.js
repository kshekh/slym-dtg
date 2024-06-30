import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => ({
    guideProgress: 0, // Progress in percentage.
    guideStepsCompleted: 0, // Number of steps completed.
  }),
  actions: {
    setProgress(progress) {
      if (progress < 0) {
        progress = 0;
      } else if (progress > 100) {
        progress = 100;
      } else {
        this.guideProgress = progress;
      }
    },
    incrementSteps() {
      this.guideStepsCompleted++;
      // Incrementing the steps will increase the progress by 50%.
      this.setProgress((this.guideStepsCompleted / 2) * 100);
    },
  },
});
