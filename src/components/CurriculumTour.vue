<template>
  <div class="fixed bottom-6 left-6 z-50">
    <button 
      @click="startTour" 
      class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
    >
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      Iniciar Tour
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, nextTick } from 'vue'
import Shepherd from 'shepherd.js'

// Referencia para el tour
const tour = ref<any>(null)

const startTour = async () => {
  // Limpiar tour existente si hay uno
  if (tour.value) {
    try {
      tour.value.destroy()
    } catch (error) {
      console.log('No hay tour activo para destruir')
    }
  }

  // Esperar a que el DOM se actualice
  await nextTick()

  // Crear nuevo tour
  tour.value = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      },
      classes: 'shadow-lg bg-white rounded-lg border border-gray-200',
      scrollTo: true
    }
  })

  // Agregar pasos del tour
  tour.value.addStep({
    id: 'welcome',
    title: '¡Bienvenido al Pensum Interactivo! 🎓',
    text: 'Te guiaremos a través de las funcionalidades principales de la aplicación para que puedas aprovechar al máximo tu experiencia académica.',
    buttons: [
      {
        text: 'Comenzar',
        action: () => tour.value?.next(),
        classes: 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium'
      }
    ]
  })

  tour.value.addStep({
    id: 'dashboard',
    title: 'Dashboard de Progreso 📊',
    text: 'Aquí puedes ver un resumen completo de tu progreso académico. Incluye materias completadas, en progreso y pendientes, junto con estadísticas visuales.',
    attachTo: { element: '#dashboard', on: 'bottom' },
    buttons: [
      {
        text: 'Anterior',
        action: () => tour.value?.prev(),
        classes: 'bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md text-sm font-medium mr-2'
      },
      {
        text: 'Siguiente',
        action: () => tour.value?.next(),
        classes: 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium'
      }
    ]
  })

  tour.value.addStep({
    id: 'curriculum',
    title: 'Vista del Currículum 📚',
    text: 'Esta sección muestra todas las materias organizadas por semestre. Cada materia está representada por una tarjeta con información relevante.',
    attachTo: { element: '#curriculum', on: 'top' },
    buttons: [
      {
        text: 'Anterior',
        action: () => tour.value?.prev(),
        classes: 'bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md text-sm font-medium mr-2'
      },
      {
        text: 'Siguiente',
        action: () => tour.value?.next(),
        classes: 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium'
      }
    ]
  })

  tour.value.addStep({
    id: 'subject-card',
    title: 'Tarjeta de Materia 🎯',
    text: 'Cada materia muestra su comisión, nombre, créditos y estado. Haz clic en cualquier materia para ver requisitos, correlativas y más información detallada.',
    attachTo: { element: '.subject-card-transition', on: 'top' },
    buttons: [
      {
        text: 'Anterior',
        action: () => tour.value?.prev(),
        classes: 'bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md text-sm font-medium mr-2'
      },
      {
        text: 'Siguiente',
        action: () => tour.value?.next(),
        classes: 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium'
      }
    ]
  })

  tour.value.addStep({
    id: 'interaction',
    title: 'Interactúa con las Materias ✨',
    text: 'Prueba hacer clic en diferentes materias para explorar sus detalles. Puedes ver requisitos, correlativas y cambiar el estado de las materias.',
    attachTo: { element: '.subject-card-transition', on: 'bottom' },
    buttons: [
      {
        text: 'Anterior',
        action: () => tour.value?.prev(),
        classes: 'bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md text-sm font-medium mr-2'
      },
      {
        text: 'Finalizar',
        action: () => tour.value?.complete(),
        classes: 'bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium'
      }
    ]
  })

  // Iniciar el tour
  tour.value.start()
}

// Limpiar tour al desmontar el componente
onUnmounted(() => {
  if (tour.value) {
    try {
      tour.value.destroy()
    } catch (error) {
      console.log('Error al destruir el tour:', error)
    }
  }
})
</script>
