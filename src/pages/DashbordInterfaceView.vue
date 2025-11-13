<template>
  <div class="flex min-h-screen bg-gray-100">
    <Sidebar />
    <main class="flex-1 p-6 sm:p-8">
      <DashboardOverview :users="dataUser" />
      <UserManagement :users="dataUser" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Sidebar from '@/components/SidebarView.vue'
import DashboardOverview from '@/components/DashboardOverviewView.vue'
import UserManagement from '@/components/UserManagementView.vue'

// Définir l'interface ici, dans le parent
interface DataUser {
  nom: string
  postnom: string
  prenom: string
  email: string
  type_adhesion: string
  message: string
  createdAt: string
}

const isLoading = ref(true)
const dataUser = ref<DataUser[]>([])

// 4. TOUTE LA LOGIQUE DE FETCH EST DÉPLACÉE ICI, DANS LE PARENT
onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/resources')
    if (response.ok) {
      const data = await response.json()
      dataUser.value = data
    } else {
      console.error('Erreur lors de la récupération des ressources')
    }
  } catch (error) {
    console.error('Erreur réseau lors de la récupération des ressources :', error)
  } finally {
    isLoading.value = false
  }
})
</script>
