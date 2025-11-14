<template>
  <!-- Le template reste identique à la version Tailwind CSS précédente -->
  <div class="bg-white p-6 rounded-lg shadow-md font-roboto">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Gestion des Utilisateurs</h2>
      </div>
      <div class="flex flex-col gap-5 sm:flex-row">
        <button
          @click="exportData"
          class="flex items-center bg-green-rural text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 hover:cursor-pointer"
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
        <button
          class="flex items-center bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 hover:cursor-pointer"
        >
          Supprimer Tout
        </button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Nom Complet</th>
            <th scope="col" class="px-6 py-3">Email</th>

            <th scope="col" class="px-6 py-3">Type d'Adhésion</th>
            <th scope="col" class="px-6 py-3">Message</th>
            <th scope="col" class="px-6 py-3">Date d'Inscription</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in props.users"
            :key="user.email"
            class="bg-white border-b hover:bg-gray-50"
          >
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ user.nom }} {{ user.postnom }} {{ user.prenom }}
            </th>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">
              <span
                :class="[
                  'px-2 py-1 text-xs font-semibold rounded-full',
                  roleClasses[user.type_adhesion] || 'bg-gray-100 text-gray-800',
                ]"
                >{{ user.type_adhesion }}</span
              >
            </td>
            <td class="px-6 py-4">
              {{ formatMessage(user.message) }}
            </td>
            <td class="px-6 py-4">{{ format(new Date(user.date_adhesion), 'dd/MM/yyyy') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav class="flex justify-between items-center pt-4" aria-label="Table navigation">
      <span class="text-sm font-normal text-gray-500"
        >Affiche <span class="font-semibold text-gray-900">{{ props.users.length }}</span> sur
        <span class="font-semibold text-gray-900">{{ props.users.length }}</span></span
      >
      <div class="inline-flex items-center -space-x-px gap-5 hover:cursor-pointer">
        <span
          class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >Précédent</span
        >
        <span
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >Suivant</span
        >
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'

// 1. Définir l'interface
interface DataUser {
  nom: string
  postnom: string
  prenom: string
  email: string
  type_adhesion: string
  message: string
  date_adhesion: string
}

// 2. Accepter la prop "users" venant du parent
const props = defineProps<{
  users: DataUser[]
}>()

const formatMessage = (message: string | null | undefined): string => {
  // Si le message est vide, null, ou undefined, retourne un tiret
  if (!message) {
    return '-'
  }

  // Si le message est trop long, on le coupe
  if (message.length > 30) {
    return message.slice(0, 30) + '...'
  }

  // Sinon, on retourne le message complet
  return message
}

// La logique d'affichage reste ici
const roleClasses: Record<string, string> = {
  membre: 'bg-blue-100 text-blue-800',
  bénévole: 'bg-green-100 text-green-800',
  partenaire: 'bg-yellow-100 text-yellow-800',
}

// 3. La fonction d'exportation UTILISE MAINTENANT LA PROP
const exportData = () => {
  if (props.users.length === 0) {
    alert('Aucune donnée à exporter.')
    return
  }
  // La logique d'exportation utilise props.users au lieu de dataUser.value
  alert(" Fonction d'exportation en cours de développement.")
}
// import { ref, onMounted } from 'vue'
// import { format } from 'date-fns'

// defineProps<{

// }>()
// interface DataUser {
//   nom: string
//   postnom: string
//   prenom: string
//   email: string
//   type_adhesion: string
//   message: string
//   createdAt: string
// }
// // Objet pour mapper les rôles à des classes CSS
// const roleClasses: Record<string, string> = {
//   membre: 'bg-blue-100 text-blue-800',
//   bénévole: 'bg-green-100 text-green-800',
//   partenaire: 'bg-yellow-100 text-yellow-800',
// }

// const isLoading = ref(true)
// const dataUser = ref<DataUser[]>([])

// onMounted(async () => {
//   try {
//     const response = await fetch('http://localhost:3000/api/resources')
//     if (response.ok) {
//       const data = await response.json()
//       console.log('Ressources récupérées avec succès :', data)
//       dataUser.value = data
//     } else {
//       console.error('Erreur lors de la récupération des ressources')
//     }
//   } catch (error) {
//     console.error('Erreur réseau lors de la récupération des ressources :', error)
//   } finally {
//     isLoading.value = false
//   }
// })

// const exportData = () => {
//   if (dataUser.value.length === 0) {
//     alert('Aucune donnée à exporter.')
//     return
//   }
//   alert("Fonction d'exportation en cours de développement.")
// }
// Fonction d'exportation
// const exportData = () => {
//   if (dataUser.value.length === 0) {
//     alert('Aucune donnée à exporter.')
//     return
//   }

//   // 1. Définir les en-têtes du fichier CSV (ce que l'utilisateur verra)
//   const headers = ['Nom Complet', 'Email', "Type d'Adhésion", "Date d'Inscription"]

//   // Fonction pour gérer les virgules dans les données
//   const escapeCsvField = (field: string) => {
//     const stringField = String(field || '') // S'assurer que c'est une chaîne
//     if (stringField.includes(',')) {
//       return `"${stringField}"` // Mettre entre guillemets
//     }
//     return stringField
//   }

//   // 2. Transformer chaque objet utilisateur en une ligne de CSV
//   const rows = dataUser.value.map((user) => {
//     const fullName = `${user.nom} ${user.postnom} ${user.prenom}`
//     // Formater la date en AAAA-MM-JJ pour une meilleure compatibilité avec les tableurs
//     const registrationDate = new Date(user.createdAt).toLocaleDateString('fr-CA') // Format 'yyyy-mm-dd'

//     return [
//       escapeCsvField(fullName),
//       escapeCsvField(user.email),
//       escapeCsvField(user.type_adhesion),
//       escapeCsvField(registrationDate),
//     ].join(',') // Joindre les champs de la ligne avec une virgule
//   })

//   // 3. Combiner les en-têtes et les lignes, séparés par un retour à la ligne
//   const csvContent = [headers.join(','), ...rows].join('\n')

//   // 4. Créer un Blob (fichier virtuel) avec le contenu CSV
//   // Le type 'text/csv;charset=utf-8;' est important pour la compatibilité et les accents
//   const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })

//   // 5. Créer un lien et déclencher le téléchargement
//   const link = document.createElement('a')
//   if (link.download !== undefined) {
//     // Créer une URL temporaire pour le blob
//     const url = URL.createObjectURL(blob)
//     const fileName = `export_utilisateurs_${new Date().toISOString().slice(0, 10)}.csv`

//     link.setAttribute('href', url)
//     link.setAttribute('download', fileName) // Définir le nom du fichier
//     link.style.visibility = 'hidden'
//     document.body.appendChild(link)
//     link.click() // Simuler un clic sur le lien
//     document.body.removeChild(link) // Nettoyer en supprimant le lien
//   }
// }
</script>
