<template>
  <header
    class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300"
  >
    <nav class="max-w-7xl mx-auto flex justify-between items-center p-4">
      <h1
        class="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-tight"
      >
        Mon Portfolio
      </h1>

      <ul class="flex items-center space-x-4">
        <li>
          <button
            class="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none transition-colors duration-300"
            @click="toggleDarkMode"
            aria-label="Mode clair/sombre"
          >
            <template v-if="isDarkMode">
              <i class="fas fa-sun text-xl"></i>
            </template>
            <template v-else>
              <i class="fas fa-moon text-xl"></i>
            </template>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isDarkMode: {
      type: Boolean,
      required: true, // Recevoir l'état initial depuis le parent
    },
  },
  methods: {
    toggleDarkMode() {
      // Bascule le mode sombre
      const newMode = !this.isDarkMode;

      // Ajoute ou retire la classe "dark" de l'élément HTML
      const html = document.querySelector("html");
      if (html) {
        if (newMode) {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
      }

      // NOTIFIER le parent avec un événement
      this.$emit("updateDarkMode", newMode);
    },
  },
});
</script>

<style lang="postcss" scoped>
.menu-link {
  @apply text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 ease-out;
}
</style>
