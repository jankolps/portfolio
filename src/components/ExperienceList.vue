<template>
  <div
    class="bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
  >
    <!-- Titre -->
    <h3 class="text-xl font-semibold border-b border-gray-600 dark:border-gray-500 pb-2 text-gray-800 dark:text-gray-100">
      Expériences professionnelles
    </h3>

    <!-- Liste des expériences -->
    <ul class="mt-4 space-y-4">
      <li
        v-for="experience in experiences"
        :key="experience.id"
        class="space-y-1"
      >
        <h4 class="font-semibold text-gray-700 dark:text-gray-200">
          {{ experience.title }}
        </h4>
        <p class="text-gray-400 dark:text-gray-400 text-sm">
          {{ experience.location }} ({{ experience.date }})
        </p>
        <p class="text-gray-400 dark:text-gray-500 text-xs">
          {{ experience.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Experience {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
}

export default defineComponent({
  name: "ExperienceList",
  data() {
    return {
      experiences: [
        {
          id: 1,
          title: "Sauveteur Aquatique",
          location: "Plan d’eau de Reiningue, M2A",
          date: "2022 - 2024",
          description: "Sauvetage aquatique pour 3 saisons consécutives.",
        },
        {
          id: 2,
          title: "Stage ouvrier",
          location: "Constellium, Neuf-Brisach",
          date: "2022",
          description:
            "Découverte de la transformation des lingots d'aluminium en bobines.",
        },
        {
          id: 3,
          title: "Chantier de démolition",
          location: "Lycée Don Bosco, Landser",
          date: "Janvier 2024",
          description:
            "Participation à la démolition de l’ancien bâtiment du lycée.",
        },
      ] as Experience[],
    };
  },
});
</script>

<style scoped>
/* Ajout facultatif d'une animation sur le hover */
.hover\:shadow-lg:hover {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}
</style>
