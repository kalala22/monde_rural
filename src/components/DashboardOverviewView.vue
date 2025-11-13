<template>
  <!-- Le template reste identique à la version Tailwind CSS précédente -->
  <div class="mb-8 font-roboto">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Aperçu du Tableau de Bord</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 class="text-gray-500 font-semibold">Utilisateurs engagés</h3>
        <p class="text-3xl font-bold text-gray-800 mt-2">{{ users.length }}</p>
        <p class="text-sm text-gray-400 mt-1">Au total</p>
      </div>

      <!-- <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 class="text-gray-500 font-semibold">Nouvelles inscriptions (cette semaine)</h3>
        <p class="text-3xl font-bold text-gray-800 mt-2">320</p>
        <p class="text-sm text-gray-400 mt-1">Nouveaux membres</p>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
interface DataUser {
  nom: string
  postnom: string
  prenom: string
  email: string
  type_adhesion: string
  message: string
  createdAt: string
}

// 2. Accepter la prop "users" venant du parent
defineProps<{
  users: DataUser[]
}>()
// Aucune logique n'est nécessaire pour ce composant de présentation.
</script>
