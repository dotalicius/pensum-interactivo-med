<template>
  <div
    :class="cardClasses"
    class="subject-card-transition subject-card-hover border-2 rounded-lg p-4 cursor-pointer relative"
    @click="openModal"
  >
    <!-- Badge de modalidad -->
    <div v-if="subject.modality === 'optional'" class="absolute top-2 right-2">
      <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
        Optativa
      </span>
    </div>

    <!-- Encabezado -->
    <div class="mb-3">
      <h3 class="font-semibold text-lg mb-1" :title="subject.name">
        {{ truncatedName }}
      </h3>
      <div class="space-y-1">
        <p class="text-sm text-gray-600">{{ subject.year }}° Año - {{ subject.details.professor }}</p>
        <div class="flex items-center space-x-2 text-xs text-gray-500">
          <span class="bg-gray-100 px-2 py-1 rounded">{{ subject.regime }}</span>
          <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">{{ subject.hours }}h</span>
        </div>
      </div>
    </div>

    <!-- Indicador de estado -->
    <div class="mb-3">
      <span :class="statusBadgeClasses" class="text-xs font-medium px-2 py-1 rounded-full">
        {{ statusText }}
      </span>
    </div>

    <!-- Prerequisitos si los hay -->
    <div v-if="hasPrerequisites" class="mb-3">
      <p class="text-xs text-gray-500 mb-1">Requiere:</p>
      <div class="space-y-1">
        <div
          v-for="prereqName in prerequisiteNames"
          :key="prereqName"
          class="text-xs bg-gray-50 px-2 py-1 rounded"
        >
          {{ prereqName }}
        </div>
      </div>
    </div>

    <!-- Calificación final si está aprobada -->
    <div v-if="subject.status === 'approved' && subject.details.finalGrade" class="mb-3">
      <div class="flex items-center space-x-2">
        <GraduationCap class="w-4 h-4 text-green-600" />
        <span class="text-sm font-medium text-green-700">
          Final: {{ subject.details.finalGrade }}
        </span>
      </div>
    </div>

    <!-- Botones de acción -->
    <div class="flex flex-wrap gap-2">
      <button
        v-if="subject.status === 'pending'"
        :disabled="!canEnroll"
        :class="regularButtonClasses"
        class="text-xs px-3 py-1 rounded transition-all duration-200"
        @click.stop="handleStatusChange('regular')"
      >
        <BookOpen class="w-3 h-3 mr-1" />
        Regularizar
      </button>

      <button
        v-if="subject.status === 'regular'"
        :disabled="!canTakeFinal"
        :class="approveButtonClasses"
        class="text-xs px-3 py-1 rounded transition-all duration-200"
        @click.stop="handleStatusChange('approved')"
      >
        <Award class="w-3 h-3 mr-1" />
        Aprobar
      </button>

      <button
        v-if="subject.status !== 'pending'"
        class="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded transition-all duration-200 flex items-center"
        @click.stop="handleStatusChange('pending')"
      >
        <RotateCcw class="w-3 h-3 mr-1" />
        Reiniciar
      </button>

      <button
        class="bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs px-3 py-1 rounded transition-all duration-200 flex items-center"
        @click.stop="openModal"
      >
        <Info class="w-3 h-3 mr-1" />
        Más Info
      </button>
    </div>

    <!-- Indicador de disponibilidad -->
    <div v-if="!canEnroll && subject.status === 'pending'" class="mt-2">
      <div class="flex items-center space-x-1">
        <Lock class="w-3 h-3 text-red-500" />
        <span class="text-xs text-red-600">No disponible por correlativas</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BookOpen, Award, Info, RotateCcw, GraduationCap, Lock } from 'lucide-vue-next'
import type { Subject } from '@/types'
import { useCurriculumStore } from '@/stores/curriculum'

interface Props {
  subject: Subject
}

const props = defineProps<Props>()

const store = useCurriculumStore()

// Computed properties
const canEnroll = computed(() => store.canEnrollInSubject(props.subject.id))
const canTakeFinal = computed(() => store.canTakeFinalExam(props.subject.id))

const hasPrerequisites = computed(() => 
  props.subject.prerequisitesToEnroll.length > 0 || 
  props.subject.prerequisitesForFinal.length > 0
)

const prerequisiteNames = computed(() => {
  const enrollNames = store.getPrerequisiteNames(props.subject.prerequisitesToEnroll)
  const finalNames = store.getPrerequisiteNames(props.subject.prerequisitesForFinal)
  return [...new Set([...enrollNames, ...finalNames])]
})

const truncatedName = computed(() => {
  const maxLength = 45
  if (props.subject.name.length <= maxLength) {
    return props.subject.name
  }
  return props.subject.name.substring(0, maxLength) + '...'
})

const statusText = computed(() => {
  switch (props.subject.status) {
    case 'pending': return 'Pendiente'
    case 'regular': return 'Regular'
    case 'approved': return 'Aprobada'
    default: return 'Desconocido'
  }
})

const cardClasses = computed(() => {
  const baseClasses = 'bg-white'
  
  if (!canEnroll.value && props.subject.status === 'pending') {
    return `${baseClasses} status-disabled`
  }
  
  switch (props.subject.status) {
    case 'pending': return `${baseClasses} status-pending`
    case 'regular': return `${baseClasses} status-regular`
    case 'approved': return `${baseClasses} status-approved`
    default: return baseClasses
  }
})

const statusBadgeClasses = computed(() => {
  switch (props.subject.status) {
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
  return 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800 flex items-center'
})

const approveButtonClasses = computed(() => {
  if (!canTakeFinal.value) {
    return 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }
  return 'bg-green-100 hover:bg-green-200 text-green-800 flex items-center'
})

// Methods
const handleStatusChange = (newStatus: Subject['status']) => {
  const success = store.updateSubjectStatus(props.subject.id, newStatus)
  
  if (!success) {
    // Aquí podrías mostrar una notificación de error
    console.error(`No se pudo cambiar el estado a ${newStatus}`)
  }
}

const openModal = () => {
  store.openSubjectModal(props.subject.id)
}
</script>

<style scoped>
.subject-card-transition {
  transition: all 0.3s ease-in-out;
}

.subject-card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}
</style>
