<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity p-4"
      @click.self="closeModal"
    >
      <div
        class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden animate-slide-up mx-2"
      >
        <!-- Header -->
        <div class="bg-blue-600 p-4 text-white flex justify-between items-center flex-shrink-0">
          <h2 class="text-lg font-bold flex items-center">
            <Sparkles class="w-5 h-5 mr-2" />
            ¡Nuevas Carreras Agregadas!
          </h2>
          <button @click="closeModal" class="text-blue-100 hover:text-white transition-colors">
            <X class="w-6 h-6" />
          </button>
        </div>

        <!-- Body -->
        <div class="p-5 space-y-4 overflow-y-auto">
          <p class="text-sm text-gray-700">
            ¡Hola! He agregado <strong>cuatro nuevas carreras</strong> al Pensum Interactivo
            correspondientes a la Facultad de Ciencias Médicas:
          </p>

          <ul class="list-disc list-inside text-sm text-gray-700 font-medium space-y-1 ml-2">
            <li>Licenciatura en Nutrición</li>
            <li>Licenciatura en Obstetricia</li>
            <li>Prácticas Cardiológicas</li>
            <li>Enfermería Universitaria</li>
          </ul>

          <!-- Bug warning -->
          <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mt-4">
            <div class="flex">
              <AlertTriangle class="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" />
              <p class="text-sm text-amber-800">
                <strong>Aviso importante:</strong> Estas carreras están recién agregadas, por lo que
                podrías encontrar algún <strong>bug</strong> o error en las materias y/o
                correlatividades.
              </p>
            </div>
          </div>

          <!-- Upcoming careers -->
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r mt-4">
            <div class="flex">
              <Rocket class="w-6 h-6 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
              <div class="text-sm text-indigo-800">
                <strong>¡Próximamente!</strong> Muy pronto estaré agregando las carreras de:
                <ul class="list-disc list-inside mt-2 ml-1 space-y-1">
                  <li>
                    <strong>Fac. de Ciencias Veterinarias:</strong> Medicina Veterinaria y Lic. en
                    Microbiología.
                  </li>
                  <li>
                    <strong>Fac. de Ciencias Agrarias y Forestales:</strong> Ing. Agronómica, Ing.
                    Forestal y Tec. en Cultivos Protegidos.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Contact section -->
          <div class="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-sm text-gray-800 flex items-center mb-2">
              <MessageCircle class="w-5 h-5 mr-2 text-blue-500" />
              ¿Encontraste un problema?
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Si notas algún error o tienes una sugerencia, por favor contáctame para poder
              solucionarlo:
            </p>
            <a
              href="https://wa.link/4p01lc"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center space-x-2 text-green-700 font-bold bg-green-100 hover:bg-green-200 transition-colors px-4 py-3 rounded-lg border border-green-300 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                ></path>
              </svg>
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div class="bg-gray-50 px-5 py-4 flex justify-end border-t border-gray-200 flex-shrink-0">
          <button
            @click="closeModal"
            class="px-5 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium shadow-sm"
          >
            ¡Entendido!
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sparkles, X, AlertTriangle, MessageCircle, Rocket } from 'lucide-vue-next'

const isOpen = ref(false)

onMounted(() => {
  // Verificamos si hay una fecha guardada de la última vez que se vio el modal
  const lastSeenStr = localStorage.getItem('seen_carreras_update_v1_date')

  if (!lastSeenStr) {
    // Si no existe, es la primera vez que lo ve
    showModalWithDelay()
  } else {
    // Si existe, calculamos la diferencia en tiempo
    const lastSeenTime = parseInt(lastSeenStr, 10)
    const currentTime = Date.now()

    // 7 días expresados en milisegundos: 7 días * 24 horas * 60 minutos * 60 segundos * 1000 ms
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000

    if (currentTime - lastSeenTime > sevenDaysInMs) {
      // Han pasado más de 7 días, se lo volvemos a mostrar
      showModalWithDelay()
    }
  }
})

const showModalWithDelay = () => {
  // Pequeño delay para no interrumpir tan bruscamente la carga inicial
  setTimeout(() => {
    isOpen.value = true
  }, 800)
}

const closeModal = () => {
  isOpen.value = false
  // Al cerrar, guardar la fecha y hora actual (en milisegundos)
  localStorage.setItem('seen_carreras_update_v1_date', Date.now().toString())
}
</script>

<style scoped>
.animate-slide-up {
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
