<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import SubjectModal from '@/components/SubjectModal.vue'
import HelpButton from '@/components/HelpButton.vue'
import UpdateNotificationModal from '@/components/UpdateNotificationModal.vue'
import { Analytics } from '@vercel/analytics/vue'
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Header principal -->
    <TheHeader />
    <!-- Analytics -->
    <Analytics />
    <!-- Contenido principal -->
    <RouterView />

    <!-- Modal de materias -->
    <SubjectModal />

    <!-- Modal de actualización -->
    <UpdateNotificationModal />

    <!-- Botón flotante de ayuda -->
    <HelpButton />
  </div>
</template>

<style>
/* Reset y estilos globales */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
}

/* Estilos para scrollbar personalizada */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Focus visible para accesibilidad */
.focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Transiciones globales */
* {
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

/* Clases de utilidad adicionales */
.text-shadow {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.glass-effect {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
