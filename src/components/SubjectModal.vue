<template>
  <Teleport to="body">
    <div 
      v-if="store.isModalOpen && store.selectedSubject"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal-content animate-slide-up">
        <form @submit.prevent="saveDetails">
          <!-- Header del modal -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 class="text-xl font-semibold text-gray-800">
                {{ store.selectedSubject.name }}
              </h2>
              <div class="space-y-1">
                <p class="text-sm text-gray-600">
                  {{ store.selectedSubject.year }}° Año - 
                  {{ store.selectedSubject.modality === 'mandatory' ? 'Obligatoria' : 'Optativa' }}
                </p>
                <div class="flex items-center space-x-2 text-xs">
                  <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {{ store.selectedSubject.regime }}
                  </span>
                  <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {{ store.selectedSubject.hours }} horas
                  </span>
                </div>
              </div>
            </div>
            <button 
              type="button"
              @click="closeModal"
              class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X class="w-6 h-6" />
            </button>
          </div>

          <!-- Contenido del modal -->
          <div class="p-6 space-y-6">
            <!-- Estado actual y acciones rápidas -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-medium text-gray-800 mb-3">Estado Actual</h3>
              <div class="flex items-center justify-between">
                <span :class="statusBadgeClasses" class="px-3 py-1 rounded-full text-sm font-medium">
                  {{ statusText }}
                </span>
                <div class="flex space-x-2">
                  <button
                    v-if="store.selectedSubject.status === 'pending'"
                    type="button"
                    :disabled="!canEnroll"
                    :class="regularButtonClasses"
                    class="px-3 py-1 rounded text-sm transition-all duration-200"
                    @click="handleStatusChange('regular')"
                  >
                    Regularizar
                  </button>
                  <button
                    v-if="store.selectedSubject.status === 'regular'"
                    type="button"
                    :disabled="!canTakeFinal"
                    :class="approveButtonClasses"
                    class="px-3 py-1 rounded text-sm transition-all duration-200"
                    @click="handleStatusChange('approved')"
                  >
                    Aprobar
                  </button>
                  <button
                    v-if="store.selectedSubject.status !== 'pending'"
                    type="button"
                    class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm transition-all duration-200"
                    @click="handleStatusChange('pending')"
                  >
                    Reiniciar
                  </button>
                </div>
              </div>
            </div>

            <!-- Correlatividades -->
            <div v-if="hasPrerequisites" class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 class="font-medium text-blue-800 mb-3 flex items-center">
                <Link class="w-4 h-4 mr-2" />
                Correlatividades
              </h3>
              
              <div v-if="store.selectedSubject.prerequisitesToEnroll.length > 0" class="mb-3">
                <h4 class="text-sm font-medium text-blue-700 mb-2">Para cursar:</h4>
                <div class="space-y-1">
                  <div
                    v-for="prereqName in enrollPrereqNames"
                    :key="prereqName"
                    class="text-sm bg-white px-2 py-1 rounded border"
                  >
                    {{ prereqName }}
                  </div>
                </div>
              </div>

              <div v-if="store.selectedSubject.prerequisitesForFinal.length > 0">
                <h4 class="text-sm font-medium text-blue-700 mb-2">Para rendir final:</h4>
                <div class="space-y-1">
                  <div
                    v-for="prereqName in finalPrereqNames"
                    :key="prereqName"
                    class="text-sm bg-white px-2 py-1 rounded border"
                  >
                    {{ prereqName }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Información académica -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Comisión
                </label>
                <input
                  v-model="formData.commission"
                  type="text"
                  class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: 1A"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Profesor
                </label>
                <input
                  v-model="formData.professor"
                  type="text"
                  class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: Dr. García"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Horarios
              </label>
              <input
                v-model="formData.schedule"
                type="text"
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: Lunes y Miércoles 8:00-12:00"
              />
            </div>

            <!-- Fechas de examen -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Fechas de Examen
              </label>
              <div class="space-y-2">
                <div
                  v-for="(date, index) in formData.examDates"
                  :key="index"
                  class="flex items-center space-x-2"
                >
                  <input
                    v-model="formData.examDates[index]"
                    type="text"
                    class="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ej: 15/02/2024"
                  />
                  <button
                    type="button"
                    @click="removeExamDate(index)"
                    class="text-red-500 hover:text-red-700 transition-colors duration-200"
                  >
                    <Trash2 class="w-4 h-4" />
                  </button>
                </div>
                <button
                  type="button"
                  @click="addExamDate"
                  class="text-blue-500 hover:text-blue-700 text-sm flex items-center transition-colors duration-200"
                >
                  <Plus class="w-4 h-4 mr-1" />
                  Agregar fecha
                </button>
              </div>
            </div>

            <!-- Notas -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Notas de Cursada
                </label>
                <div class="space-y-2">
                  <div
                    v-for="(grade, index) in formData.grades"
                    :key="index"
                    class="flex items-center space-x-2"
                  >
                    <input
                      v-model.number="formData.grades[index]"
                      type="number"
                      min="1"
                      max="10"
                      step="0.1"
                      class="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Nota"
                    />
                    <button
                      type="button"
                      @click="removeGrade(index)"
                      class="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <Trash2 class="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    @click="addGrade"
                    class="text-blue-500 hover:text-blue-700 text-sm flex items-center transition-colors duration-200"
                  >
                    <Plus class="w-4 h-4 mr-1" />
                    Agregar nota
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Nota Final
                </label>
                <input
                  v-model.number="formData.finalGrade"
                  type="number"
                  min="1"
                  max="10"
                  step="0.1"
                  class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nota del examen final"
                />
              </div>
            </div>

            <!-- Diario y observaciones -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Diario / Observaciones
              </label>
              <textarea
                v-model="formData.diary"
                rows="3"
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Notas personales, observaciones, etc."
              ></textarea>
            </div>

            <!-- URL UTIL -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Imagen/Video/Audio/Documento/Google Drive (URL)
              </label>
              <input
                v-model="formData.imageUrl"
                type="text"
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://ejemplo.com/imagen.jpg o /images/anatomia.jpg"
              />
            </div>
          </div>

          <!-- Footer del modal -->
          <div class="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center"
            >
              <Save class="w-4 h-4 mr-2" />
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { X, Link, Plus, Trash2, Save } from 'lucide-vue-next'
import { useCurriculumStore } from '@/stores/curriculum'
import type { Subject } from '@/types'

const store = useCurriculumStore()

// Form data reactivo
const formData = ref({
  commission: '',
  professor: '',
  schedule: '',
  examDates: [] as string[],
  grades: [] as number[],
  finalGrade: null as number | null,
  diary: '',
  imageUrl: ''
})

// Computed properties
const canEnroll = computed(() => 
  store.selectedSubject ? store.canEnrollInSubject(store.selectedSubject.id) : false
)

const canTakeFinal = computed(() => 
  store.selectedSubject ? store.canTakeFinalExam(store.selectedSubject.id) : false
)

const hasPrerequisites = computed(() => 
  store.selectedSubject ? 
    store.selectedSubject.prerequisitesToEnroll.length > 0 || 
    store.selectedSubject.prerequisitesForFinal.length > 0 : 
    false
)

const enrollPrereqNames = computed(() => 
  store.selectedSubject ? 
    store.getPrerequisiteNames(store.selectedSubject.prerequisitesToEnroll) : 
    []
)

const finalPrereqNames = computed(() => 
  store.selectedSubject ? 
    store.getPrerequisiteNames(store.selectedSubject.prerequisitesForFinal) : 
    []
)

const statusText = computed(() => {
  if (!store.selectedSubject) return ''
  
  switch (store.selectedSubject.status) {
    case 'pending': return 'Pendiente'
    case 'regular': return 'Regular'
    case 'approved': return 'Aprobada'
    default: return 'Desconocido'
  }
})

const statusBadgeClasses = computed(() => {
  if (!store.selectedSubject) return ''
  
  switch (store.selectedSubject.status) {
    case 'pending': return 'bg-gray-100 text-gray-800'
    case 'regular': return 'bg-yellow-100 text-yellow-800'
    case 'approved': return 'bg-green-100 text-green-800'
    default: return 'bg-gray-100 text-gray-800'
  }
})

const regularButtonClasses = computed(() => {
  if (!canEnroll.value) {
    return 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }
  return 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800'
})

const approveButtonClasses = computed(() => {
  if (!canTakeFinal.value) {
    return 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }
  return 'bg-green-100 hover:bg-green-200 text-green-800'
})

// Watchers
watch(() => store.selectedSubject, (newSubject) => {
  if (newSubject) {
    // Cargar datos del subject seleccionado
    formData.value = {
      commission: newSubject.details.commission,
      professor: newSubject.details.professor,
      schedule: newSubject.details.schedule,
      examDates: [...newSubject.details.examDates],
      grades: [...newSubject.details.grades],
      finalGrade: newSubject.details.finalGrade,
      diary: newSubject.details.diary,
      imageUrl: newSubject.details.imageUrl
    }
  }
}, { immediate: true })

// Methods
const closeModal = () => {
  store.closeModal()
}

const handleStatusChange = (newStatus: Subject['status']) => {
  if (!store.selectedSubject) return
  
  const success = store.updateSubjectStatus(store.selectedSubject.id, newStatus)
  
  if (!success) {
    console.error(`No se pudo cambiar el estado a ${newStatus}`)
  }
}

const addExamDate = () => {
  formData.value.examDates.push('')
}

const removeExamDate = (index: number) => {
  formData.value.examDates.splice(index, 1)
}

const addGrade = () => {
  formData.value.grades.push(0)
}

const removeGrade = (index: number) => {
  formData.value.grades.splice(index, 1)
}

const saveDetails = () => {
  // Todos los campos son opcionales - no hay validación de campos requeridos
  const cleanedData = {
    ...formData.value,
    // Filtrar solo fechas completamente vacías
    examDates: formData.value.examDates.filter(date => date.trim() !== ''),
    // Filtrar solo notas con valor 0 o negativo
    grades: formData.value.grades.filter(grade => grade > 0),
    // Permitir campos vacíos
    commission: formData.value.commission || '',
    professor: formData.value.professor || '',
    schedule: formData.value.schedule || '',
    diary: formData.value.diary || '',
    imageUrl: formData.value.imageUrl || ''
  }
  
  const success = store.saveSubjectDetails(cleanedData)
  
  if (success) {
    closeModal()
  } else {
    console.error('Error al guardar los detalles')
  }
}
</script>

<style scoped>
.animate-slide-up {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
