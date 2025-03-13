<template>
  <div
    class="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm w-full sm:max-w-xs mx-auto rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
  >
    <!-- Image / Photo -->
    <img
      :src="photo_profil"
      alt="photo de profil"
      class="w-32 h-32 object-cover rounded-full mx-auto mt-6 border-2 border-white dark:border-gray-700"
    />

    <!-- Contenu -->
    <div class="p-4 text-center">
      <!-- Nom + Description -->
      <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Jean Lepers</h3>
      <p class="text-gray-600 dark:text-gray-400">
        Étudiant à l'École Nationale d’Ingénieurs de Brest
      </p>

      <!-- Actions: email + réseaux sociaux -->
      <div class="mt-6 flex items-center justify-center space-x-4">
        <!-- Bouton Email -->
        <button
          @click="copyToClipboard"
          :class="
            buttonText === 'Copié !' 
              ? 'bg-green-500 dark:bg-green-700' 
              : 'bg-blue-500 dark:bg-blue-600'
          "
          class="flex items-center gap-2 text-sm text-white px-4 py-2 rounded-lg shadow transform transition hover:scale-110 h-10"
          role="button"
        >
          <i class="fas fa-copy"></i>
          {{ buttonText }}
        </button>

        <!-- LinkedIn -->
        <a
          href="https://linkedin.com/in/jean-lepers"
          target="_blank"
          class="transition-transform transform hover:scale-110 flex shadow justify-center items-center text-blue-600 dark:text-blue-400 w-10 h-10 border border-blue-600 dark:border-blue-400 rounded-md"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin text-xl"></i>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/jankolps"
          target="_blank"
          class="transition-transform transform hover:scale-110 flex shadow justify-center items-center text-gray-800 dark:text-gray-300 w-10 h-10 border border-gray-800 dark:border-gray-500 rounded-md"
          aria-label="GitHub"
        >
          <i class="fab fa-github text-xl"></i>
        </a>

        <!-- ENIB -->
        <a
          href="https://www.enib.fr/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 rounded-lg shadow transform transition hover:scale-110 h-10 border border-orange-700 dark:border-orange-500"
        >
          <img
            :src="logo_enib"
            alt="Logo de l'école"
            class="w-16 h-auto object-contain"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import logo_enib from "@/assets/logo_enib.png";
import photo_profil from "@/assets/photo_de_profile.jpg";

export default {
  data() {
    return {
      buttonText: "Email", // Texte par défaut
      logo_enib, // Chargement du logo de l'école
      photo_profil, // Chargement de la photo de profil
    };
  },
  methods: {
    copyToClipboard() {
      // Adresse mail à copier
      const email = "lepersjean@proton.me";

      // Copier dans le presse-papiers
      navigator.clipboard.writeText(email).then(() => {
        this.buttonText = "Copié !"; // Mettre à jour le texte du bouton

        // Revenir au texte initial après 2 secondes
        setTimeout(() => {
          this.buttonText = "Email";
        }, 2000);
      });
    },
  },
};
</script>