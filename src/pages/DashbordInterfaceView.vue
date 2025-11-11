<template>
  <div class="flex min-h-screen bg-gray-100">
    <Sidebar />
    <main class="flex-1 p-6 sm:p-8">
      <DashboardOverview />
      <UserManagement />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/SidebarView.vue'
import DashboardOverview from '@/components/DashboardOverviewView.vue'
import UserManagement from '@/components/UserManagementView.vue'
// Pas de logique JavaScript nécessaire ici, juste les imports.
</script>
