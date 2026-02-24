<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Selector de carrera -->
        <CareerSelector
          :careers="allCareers"
          :currentCareer="store.currentCareer"
          @select="store.switchCareer"
        />

        <!-- Navegación central -->
        <nav class="hidden md:flex space-x-8">
          <a
            href="#dashboard"
            @click="scrollToSection('dashboard')"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Mi Progreso
          </a>
          <a
            href="#curriculum"
            @click="scrollToSection('curriculum')"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Plan de Estudios
          </a>
        </nav>

        <!-- Acciones del usuario -->
        <div class="flex items-center space-x-3 sm:space-x-4">
          <!-- WhatsApp Contact Button -->
          <a
            href="https://wa.link/4p01lc"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:flex items-center text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200"
            title="Contactar al desarrollador"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-1.5"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              ></path>
            </svg>
            Contacto
          </a>

          <!-- Botón de reset -->
          <button
            @click="showResetConfirmation = true"
            class="text-gray-500 hover:text-red-600 transition-colors duration-200"
            title="Reiniciar progreso"
          >
            <RotateCcw class="w-5 h-5" />
          </button>

          <!-- Sección de Cafecito -->
          <div class="flex items-center space-x-2">
            <span class="hidden md:inline text-xs text-gray-600 font-medium">
              Apóyame con un cafecito
            </span>
            <a
              href="https://cafecito.app/dotalicius"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 p-1.5 sm:px-3 sm:py-1.5 rounded-full sm:text-sm sm:font-medium transition-colors duration-200"
              title="Apoyar en Cafecito"
            >
              <Coffee class="w-5 h-5 sm:mr-1.5" />
              <span class="hidden sm:inline">Cafecito</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Menú móvil -->
      <div v-if="showMobileMenu" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
          <a
            href="#dashboard"
            @click="handleMenuClick('dashboard')"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            Mi Progreso
          </a>
          <a
            href="#curriculum"
            @click="handleMenuClick('curriculum')"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            Plan de Estudios
          </a>
          <a
            href="https://wa.link/4p01lc"
            target="_blank"
            rel="noopener noreferrer"
            class="sm:hidden flex items-center px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-800 hover:bg-green-50 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              ></path>
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>

    <!-- Modal de confirmación de reset -->
    <Teleport to="body">
      <div
        v-if="showResetConfirmation"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        @click.self="showResetConfirmation = false"
      >
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
          <div class="flex items-center mb-4">
            <AlertTriangle class="w-6 h-6 text-red-500 mr-3" />
            <h3 class="text-lg font-semibold text-gray-900">Confirmar Reinicio</h3>
          </div>

          <p class="text-gray-600 mb-6">
            ¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede
            deshacer.
          </p>

          <div class="flex items-center justify-end space-x-3">
            <button
              @click="showResetConfirmation = false"
              class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              @click="handleReset"
              class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              Sí, reiniciar
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Coffee, RotateCcw, AlertTriangle } from 'lucide-vue-next'
import { useCurriculumStore } from '@/stores/curriculum'
import CareerSelector from '@/components/molecules/CareerSelector.vue'
import { allCareers } from '@/data/careers'

const store = useCurriculumStore()

// Reactive data
const showMobileMenu = ref(false)
const showResetConfirmation = ref(false)

// Methods
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

const handleMenuClick = (sectionId: string) => {
  scrollToSection(sectionId)
  showMobileMenu.value = false
}

const handleReset = () => {
  store.resetCurriculum()
  showResetConfirmation.value = false

  // Opcional: Mostrar notificación de éxito
  console.log('Progreso reiniciado exitosamente')
}

// Cerrar menú móvil al hacer click fuera
const closeMenuOnClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.mobile-menu-container')) {
    showMobileMenu.value = false
  }
}

// Cerrar menú móvil con escape
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    showMobileMenu.value = false
    showResetConfirmation.value = false
  }
}

// Event listeners
if (typeof window !== 'undefined') {
  document.addEventListener('click', closeMenuOnClickOutside)
  document.addEventListener('keydown', handleKeydown)
}
</script>

<style scoped>
/* Animaciones para el menú móvil */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Estilos para enlaces activos */
.router-link-active {
  color: #2563eb;
  background-color: #eff6ff;
}

/* Efectos hover mejorados */
.hover-effect {
  position: relative;
  overflow: hidden;
}

.hover-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.hover-effect:hover::before {
  left: 100%;
}
</style>
