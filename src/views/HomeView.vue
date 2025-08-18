<script setup lang="ts">
import ProgressDashboard from '@/components/ProgressDashboard.vue'
import CurriculumView from '@/components/CurriculumView.vue'
</script>

<template>
  <main class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Dashboard de progreso -->
      <section id="dashboard" class="mb-12">
        <ProgressDashboard />
      </section>

      <!-- Vista del curriculum -->
      <section id="curriculum">
        <CurriculumView />
      </section>
    </div>
  </main>
</template>

<style scoped>
/* Scroll suave para las secciones */
#dashboard,
#curriculum {
  scroll-margin-top: 80px;
}
</style>
