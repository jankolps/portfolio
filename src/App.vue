<template>
  <div class="relative min-h-screen flex flex-col isolate">
    <!-- Gestion des composants de fond (clair/sombre) -->
    <component
      :is="isDarkMode ? 'DarkBackgroundParticles' : 'LightBackgroundParticles'"
    />

    <!-- Header avec synchronisation du mode -->
    <Header
      :isDarkMode="isDarkMode" 
      @updateDarkMode="updateDarkMode"
    />

    <main class="container mx-auto flex-grow space-y-8 p-6">
      <ProfileCard />
      <ExperienceList />
      <SkillsAndProjects />
      <Hobbies />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Header from "@/components/Header.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ExperienceList from "@/components/ExperienceList.vue";
import SkillsAndProjects from "@/components/SkillsAndProjects.vue";
import Hobbies from "@/components/Hobbies.vue";
import Footer from "@/components/Footer.vue";
import LightBackgroundParticles from "@/components/LightBackgroundParticles.vue";
import DarkBackgroundParticles from "@/components/DarkBackgroundParticles.vue";

export default defineComponent({
  components: {
    Header,
    ProfileCard,
    ExperienceList,
    SkillsAndProjects,
    Hobbies,
    Footer,
    LightBackgroundParticles,
    DarkBackgroundParticles,
  },
  setup() {
    const isDarkMode = ref(false); // Variable réactive pour le mode sombre

    const updateDarkMode = (value: boolean) => {
      // Met à jour le mode sombre et le sauvegarde dans localStorage
      isDarkMode.value = value;
      localStorage.setItem("darkMode", value.toString());
    };

    onMounted(() => {
      const savedPreference = localStorage.getItem("darkMode");

      if (savedPreference !== null) {
        // Si une préférence est sauvegardée dans localStorage, on l'utilise
        isDarkMode.value = savedPreference === "true";
      } else {
        // Si aucune préférence n'est sauvegardée, on utilise la détection du système
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        isDarkMode.value = prefersDark.matches; // Passe en mode sombre si le système le préfère

        // Ajouter un écouteur pour suivre les changements des préférences système
        prefersDark.addEventListener("change", (event) => {
          isDarkMode.value = event.matches; // Mets à jour si les préférences système changent
        });
      }

      // Met à jour l'attribut HTML (ajout ou suppression de la classe `dark`)
      const html = document.querySelector("html");
      if (html) {
        if (isDarkMode.value) {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
      }
    });

    return {
      isDarkMode,
      updateDarkMode,
    };
  },
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
