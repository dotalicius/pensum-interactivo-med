<template>
  <div class="curriculum-view">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Plan de Estudios - Medicina UNLP</h2>
    
    <!-- Filtros -->
    <div class="mb-6 bg-white p-4 rounded-lg shadow-sm border">
      <h3 class="text-lg font-semibold mb-3">Filtros</h3>
      <div class="flex flex-wrap gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Año</label>
          <select 
            v-model="selectedYear" 
            class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos los años</option>
            <option v-for="year in availableYears" :key="year" :value="year">
              {{ year }}° Año
            </option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Estado</label>
          <select 
            v-model="selectedStatus" 
            class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos los estados</option>
            <option value="pending">Pendientes</option>
            <option value="regular">Regulares</option>
            <option value="approved">Aprobadas</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Modalidad</label>
          <select 
            v-model="selectedModality" 
            class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todas</option>
            <option value="mandatory">Obligatorias</option>
            <option value="optional">Optativas</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Régimen</label>
          <select 
            v-model="selectedRegime" 
            class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos</option>
            <option value="Anual">Anual</option>
            <option value="Cuatrimestral">Cuatrimestral</option>
            <option value="Bimestral">Bimestral</option>
            <option value="Trimestral">Trimestral</option>
            <option value="Semestral">Semestral</option>
          </select>
        </div>
        
        <div class="flex items-end">
          <button 
            @click="clearFilters"
            class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm transition-colors duration-200 flex items-center"
          >
            <X class="w-4 h-4 mr-1" />
            Limpiar
          </button>
        </div>
      </div>
    </div>

    <!-- Estadísticas rápidas -->
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
      <div class="bg-white p-4 rounded-lg shadow-sm border text-center">
        <p class="text-2xl font-bold text-blue-600">{{ filteredSubjects.length }}</p>
        <p class="text-sm text-gray-600">Materias mostradas</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm border text-center">
        <p class="text-2xl font-bold text-green-600">{{ approvedCount }}</p>
        <p class="text-sm text-gray-600">Aprobadas</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm border text-center">
        <p class="text-2xl font-bold text-yellow-600">{{ regularCount }}</p>
        <p class="text-sm text-gray-600">Regulares</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm border text-center">
        <p class="text-2xl font-bold text-gray-600">{{ pendingCount }}</p>
        <p class="text-sm text-gray-600">Pendientes</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm border text-center">
        <p class="text-2xl font-bold text-orange-600">{{ pendingOptionalCount }}</p>
        <p class="text-sm text-gray-600">Optativas pendientes</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm border text-center">
        <p class="text-2xl font-bold text-purple-600">{{ totalHours }}</p>
        <p class="text-sm text-gray-600">Horas totales</p>
      </div>
    </div>

    <!-- Lista de materias agrupadas por año -->
    <div v-if="groupedSubjects.length === 0" class="text-center py-12">
      <BookX class="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <p class="text-gray-500 text-lg">No se encontraron materias con los filtros aplicados</p>
      <button 
        @click="clearFilters"
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
      >
        Limpiar filtros
      </button>
    </div>

    <div v-else class="space-y-8">
      <div 
        v-for="yearGroup in groupedSubjects" 
        :key="yearGroup.year"
        class="year-group"
      >
        <div class="flex items-center mb-4">
          <div :class="getYearColorClass(yearGroup.year)" class="w-1 h-8 rounded-full mr-4"></div>
          <h3 class="text-xl font-semibold text-gray-800">
            {{ yearGroup.year }}° Año
            <span class="text-sm font-normal text-gray-600 ml-2">
              ({{ yearGroup.subjects.length }} materias)
            </span>
          </h3>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          <SubjectCard
            v-for="subject in yearGroup.subjects"
            :key="subject.id"
            :subject="subject"
            class="animate-fade-in"
          />
        </div>
      </div>
    </div>

    <!-- Leyenda -->
    <div class="mt-8 bg-gray-50 p-4 rounded-lg">
      <h4 class="font-semibold text-gray-800 mb-3">Leyenda de Estados</h4>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
          <span>Pendiente: No cursada aún</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div>
          <span>Regular: Cursada aprobada</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
          <span>Aprobada: Final rendido</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-orange-100 border border-orange-300 rounded"></div>
          <span>Optativa: Materia electiva</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { X, BookX } from 'lucide-vue-next'
import { useCurriculumStore } from '@/stores/curriculum'
import SubjectCard from './SubjectCard.vue'
import type { Subject } from '@/types'

const store = useCurriculumStore()

// Filtros reactivos
const selectedYear = ref<number | ''>('')
const selectedStatus = ref<Subject['status'] | ''>('')
const selectedModality = ref<Subject['modality'] | ''>('')
const selectedRegime = ref<Subject['regime'] | ''>('')

// Computed properties
const availableYears = computed(() => {
  const years = [...new Set(store.subjects.map(s => s.year))].sort((a, b) => a - b)
  return years
})

const filteredSubjects = computed(() => {
  let subjects = store.subjects
  
  if (selectedYear.value) {
    subjects = subjects.filter(s => s.year === selectedYear.value)
  }
  
  if (selectedStatus.value) {
    subjects = subjects.filter(s => s.status === selectedStatus.value)
  }
  
  if (selectedModality.value) {
    subjects = subjects.filter(s => s.modality === selectedModality.value)
  }
  
  if (selectedRegime.value) {
    subjects = subjects.filter(s => s.regime === selectedRegime.value)
  }
  
  return subjects
})

const groupedSubjects = computed(() => {
  const grouped = filteredSubjects.value.reduce((acc, subject) => {
    if (!acc[subject.year]) {
      acc[subject.year] = []
    }
    acc[subject.year].push(subject)
    return acc
  }, {} as Record<number, Subject[]>)
  
  return Object.keys(grouped)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map(year => ({
      year: parseInt(year),
      subjects: grouped[parseInt(year)]
    }))
})

const approvedCount = computed(() => 
  filteredSubjects.value.filter(s => s.status === 'approved').length
)

const regularCount = computed(() => 
  filteredSubjects.value.filter(s => s.status === 'regular').length
)

const pendingCount = computed(() => 
  // Solo contar materias obligatorias pendientes
  filteredSubjects.value.filter(s => s.status === 'pending' && s.modality !== 'optional').length
)

const pendingOptionalCount = computed(() => 
  // Contar materias optativas pendientes
  filteredSubjects.value.filter(s => s.status === 'pending' && s.modality === 'optional').length
)

const totalHours = computed(() => 
  filteredSubjects.value.reduce((total, subject) => total + subject.hours, 0)
)

// Methods
const clearFilters = () => {
  selectedYear.value = ''
  selectedStatus.value = ''
  selectedModality.value = ''
  selectedRegime.value = ''
}

const getYearColorClass = (year: number): string => {
  const colors = [
    'bg-blue-500',    // 1er año
    'bg-green-500',   // 2do año  
    'bg-purple-500',  // 3er año
    'bg-orange-500',  // 4to año
    'bg-red-500',     // 5to año
    'bg-indigo-500'   // 6to año
  ]
  
  return colors[(year - 1) % colors.length] || 'bg-gray-500'
}
</script>

<style scoped>
.year-group {
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

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
