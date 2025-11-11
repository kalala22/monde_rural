<template>
  <!-- Le template reste identique à la version Tailwind CSS précédente -->
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Aperçu du Tableau de Bord</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 class="text-gray-500 font-semibold">Total des utilisateurs enregistrés</h3>
        <p class="text-3xl font-bold text-gray-800 mt-2">12 450</p>
        <p class="text-sm text-gray-400 mt-1">Au total</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 class="text-gray-500 font-semibold">Utilisateurs actifs (dernier mois)</h3>
        <p class="text-3xl font-bold text-gray-800 mt-2">8 760</p>
        <p class="text-sm text-green-600 font-semibold mt-1">+15% par rapport au mois précédent</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 class="text-gray-500 font-semibold">Nouvelles inscriptions (cette semaine)</h3>
        <p class="text-3xl font-bold text-gray-800 mt-2">320</p>
        <p class="text-sm text-gray-400 mt-1">Nouveaux membres</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Aucune logique n'est nécessaire pour ce composant de présentation.
</script>
