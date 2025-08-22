<script setup lang="ts">
import { ref } from 'vue'
import { HelpCircle, X, BookOpen, GraduationCap, Calendar, BarChart3 } from 'lucide-vue-next'

const isHelpOpen = ref(false)

const toggleHelp = () => {
  isHelpOpen.value = !isHelpOpen.value
}

const closeHelp = () => {
  isHelpOpen.value = false
}

const helpContent = [
  {
    icon: BookOpen,
    title: 'Navegación del Plan de Estudios',
    description: 'Explora las materias por semestre y revisa los requisitos de cada una.'
  },
  {
    icon: GraduationCap,
    title: 'Progreso Académico',
    description: 'Visualiza tu avance en el plan de estudios y las materias completadas.'
  },
  {
    icon: Calendar,
    title: 'Carga Horaria',
    description: 'Consulta la distribución de horas por materia y semestre.'
  },
  {
    icon: BarChart3,
    title: 'Dashboard de Progreso',
    description: 'Monitorea tu rendimiento académico con estadísticas detalladas.'
  }
]
</script>

<template>
  <!-- Botón flotante de ayuda -->
  <button
    @click="toggleHelp"
    class="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
    aria-label="Abrir ayuda"
    title="Ayuda"
  >
    <HelpCircle class="w-6 h-6" />
  </button>

  <!-- Modal de ayuda -->
  <div
    v-if="isHelpOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    @click="closeHelp"
  >
    <div
      class="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <!-- Header del modal -->
      <div class="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <HelpCircle class="w-8 h-8 text-blue-600" />
          Centro de Ayuda
        </h2>
        <button
          @click="closeHelp"
          class="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
          aria-label="Cerrar ayuda"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Contenido de ayuda -->
      <div class="p-6">
                 <div class="text-gray-600 mb-6 text-lg space-y-2">
             <p>Bienvenido al Pensum Interactivo para la carrera de Medicina en la UNLP.</p>
             <p>Esta pagina es solo una herramienta para que organices tu pensum de una forma mas interactiva y dinámica, no estoy afiliado a la universidad de ninguna forma.</p>
             <p>Si tienes alguna sugerencia, comentario, deseas que incluya más carreras, o encontraste un error tanto en la informacion de la carrera como en la pagina, no dudes en contactarme!</p>
             <p>Mi correo es: <a href="mailto:jesusestebanchavez@gmail.com" class="text-blue-600 hover:underline">jesusestebanchavez@gmail.com</a></p>
             <p>Muchas gracias por usar mi aplicación web!💛</p>
         </div>

        <div class="grid gap-6">
          <div
            v-for="(item, index) in helpContent"
            :key="index"
            class="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
          >
            <div class="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
              <component :is="item.icon" class="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 text-lg mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Información adicional -->
        <div class="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 class="font-semibold text-gray-800 mb-2">Consejos adicionales:</h4>
          <ul class="text-gray-600 space-y-1 text-sm">
            <li>• Haz clic en cualquier materia para ver detalles completos</li>
            <li>• Usa el dashboard para monitorear tu progreso</li>
            <li>• Navega entre semestres usando los controles de navegación</li>
            <li>• Consulta la carga horaria para planificar tu tiempo</li>
          </ul>
        </div>
      </div>

      <!-- Footer del modal -->
      <div class="flex justify-end p-6 border-t border-gray-200">
        <button
          @click="closeHelp"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Entendido
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animaciones personalizadas */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Scrollbar personalizado para el modal */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
