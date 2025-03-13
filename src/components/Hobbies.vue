<template>
  <div
    class="bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
  >
    <!-- Titre principal -->
    <h3 class="text-xl font-semibold border-b border-gray-600 dark:border-gray-500 pb-2 text-gray-800 dark:text-gray-100">
      Loisirs et activités associatives
    </h3>
    
    <!-- Liste des loisirs et activités -->
    <ul class="mt-4 space-y-4">
      
      <!-- Loisirs -->
      <li>
        <h4 class="font-semibold text-gray-700 dark:text-gray-200">Loisirs</h4>
        <ul class="list-disc text-gray-400 dark:text-gray-500 text-sm pl-4">
          <li>Préparation du Marathon de Paris.</li>
          <li>Judo – Ceinture marron.</li>
        </ul>
      </li>
      
      <!-- Activités associatives -->
      <li>
        <h4 class="font-semibold text-gray-700 dark:text-gray-200">Activités associatives</h4>
        <p class="text-gray-400 dark:text-gray-500 text-sm">
          Responsable communication pour l’association Dellec en Caisse.
        </p>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {};
</script>
