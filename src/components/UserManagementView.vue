<template>
  <!-- Le template reste identique à la version Tailwind CSS précédente -->
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Gestion des Utilisateurs</h2>
      <button
        @click="exportData"
        class="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
      >
        <svg
          class="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          ></path>
        </svg>
        Exporter les données
      </button>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Nom Complet</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Rôle</th>
            <th scope="col" class="px-6 py-3">Localisation</th>
            <th scope="col" class="px-6 py-3">Date d'Inscription</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="bg-white border-b hover:bg-gray-50">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ user.fullName }}
            </th>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">
              <!-- <span
                :class="[
                  'px-2 py-1 text-xs font-semibold rounded-full',
                  roleClasses[user.role] || 'bg-gray-100 text-gray-800',
                ]"
                >{{ user.role }}</span
              > -->
            </td>
            <td class="px-6 py-4">{{ user.location }}</td>
            <td class="px-6 py-4">{{ user.registrationDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav class="flex justify-between items-center pt-4" aria-label="Table navigation">
      <span class="text-sm font-normal text-gray-500"
        >Affiche <span class="font-semibold text-gray-900">1-5</span> sur
        <span class="font-semibold text-gray-900">100</span></span
      >
      <div class="inline-flex items-center -space-x-px">
        <a
          href="#"
          class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >Précédent</a
        >
        <a
          href="#"
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >Suivant</a
        >
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

// On utilise ref pour que les données soient réactives (si on voulait les modifier plus tard, par ex. via une API)
const users: Ref<
  {
    id: number
    fullName: string
    email: string
    role: string
    location: string
    registrationDate: string
  }[]
> = ref([
  {
    id: 1,
    fullName: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    role: 'Administrateur',
    location: 'Paris, France',
    registrationDate: '2023-01-15',
  },
  {
    id: 2,
    fullName: 'Marie Curie',
    email: 'marie.curie@email.com',
    role: 'Membre',
    location: 'Lyon, France',
    registrationDate: '2023-02-20',
  },
  {
    id: 3,
    fullName: 'Pierre Martin',
    email: 'pierre.martin@email.com',
    role: 'Membre',
    location: 'Marseille, France',
    registrationDate: '2023-03-10',
  },
  {
    id: 4,
    fullName: 'Sophie Dubois',
    email: 'sophie.dubois@email.com',
    role: 'Visiteur',
    location: 'Nantes, France',
    registrationDate: '2023-04-05',
  },
  {
    id: 5,
    fullName: 'Lucie Bernard',
    email: 'lucie.bernard@email.com',
    role: 'Membre',
    location: 'Bordeaux, France',
    registrationDate: '2023-05-18',
  },
])

// Objet pour mapper les rôles à des classes CSS
// interface RoleClasses {
//   Administrateur: string
//   Membre: string
//   Visiteur: string
// }

// const roleClasses: RoleClasses = {
//   Administrateur: 'bg-blue-100 text-blue-800',
//   Membre: 'bg-green-100 text-green-800',
//   Visiteur: 'bg-yellow-100 text-yellow-800',
// }

// Fonction d'exportation
const exportData = () => {
  alert("Fonctionnalité d'exportation non implémentée.")
}
</script>
