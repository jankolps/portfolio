<template>
  <div
    class="bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
  >
    <!-- Titre -->
    <h3 class="text-xl font-semibold border-b border-gray-600 dark:border-gray-500 pb-2 text-gray-800 dark:text-gray-100">
      Compétences et Outils
    </h3>
    
    <!-- Liste -->
    <ul class="mt-4 space-y-4">
      <li>
        <!-- Compétences techniques -->
        <h4 class="font-semibold text-gray-700 dark:text-gray-200">Compétences techniques</h4>
        <p class="text-gray-400 dark:text-gray-500 text-sm">
          C, Rust, Python, SQL, Raspberry Pi, Arduino, Unity Pro, Nmap, Metasploit...
        </p>
      </li>

      <li>
        <!-- Projets -->
        <h4 class="font-semibold text-gray-700 dark:text-gray-200">Projets</h4>
        <ul class="list-disc text-gray-400 dark:text-gray-500 text-sm pl-4">
          <li>Divers hackathons : Participation à "Break the Code 2024" et "Unlock Your Brain".</li>
          <li>Conception d’une cascade de filtres pour le traitement sonore.</li>
          <li>Robot livreur de colis (Olympiades des Sciences de l’Ingénieur 2022).</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>