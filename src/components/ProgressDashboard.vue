<template>
  <div class="progress-dashboard bg-white rounded-lg shadow-lg p-6 border">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
      <TrendingUp class="w-6 h-6 mr-2 text-blue-600" />
      Mi Progreso Académico
    </h2>

    <!-- Barra de progreso principal con personaje -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-medium text-gray-700">Progreso General</span>
        <span class="text-sm font-bold text-blue-600">{{ stats.completionPercentage }}%</span>
      </div>
      
      <div class="relative">
        <!-- Barra de progreso -->
        <div class="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
          <div 
            :style="{ width: stats.completionPercentage + '%' }"
            class="progress-bar h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full relative"
          >
            <!-- Personaje animado -->
            <div 
              v-if="stats.completionPercentage > 5"
              class="absolute right-1 top-1/2 transform -translate-y-1/2"
            >
              <div class="w-6 h-6 bg-white rounded-full flex items-center justify-center animate-bounce-gentle">
                <User class="w-3 h-3 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Marcadores de años -->
        <div class="flex justify-between mt-2 text-xs text-gray-500">
          <span v-for="year in 6" :key="year" class="flex flex-col items-center">
            <div :class="getYearProgressClass(year)" class="w-2 h-2 rounded-full mb-1"></div>
            {{ year }}°
          </span>
        </div>
      </div>
    </div>

    <!-- Estadísticas en cards -->
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
      <div class="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-2xl font-bold text-green-700">{{ stats.approvedSubjects }}</p>
            <p class="text-sm text-green-600">Aprobadas</p>
          </div>
          <CheckCircle class="w-8 h-8 text-green-500" />
        </div>
      </div>

      <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-2xl font-bold text-yellow-700">{{ stats.regularSubjects }}</p>
            <p class="text-sm text-yellow-600">Regulares</p>
          </div>
          <Clock class="w-8 h-8 text-yellow-500" />
        </div>
      </div>

      <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-2xl font-bold text-gray-700">{{ stats.pendingSubjects }}</p>
            <p class="text-sm text-gray-600">Pendientes</p>
          </div>
          <BookOpen class="w-8 h-8 text-gray-500" />
        </div>
      </div>

      <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-2xl font-bold text-blue-700">{{ formattedAverage }}</p>
            <p class="text-sm text-blue-600">Promedio</p>
          </div>
          <Award class="w-8 h-8 text-blue-500" />
        </div>
      </div>

      <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-2xl font-bold text-indigo-700">{{ stats.totalCursedHours }}h</p>
            <p class="text-sm text-indigo-600">Horas Cursadas</p>
          </div>
          <BookOpen class="w-8 h-8 text-indigo-500" />
        </div>
      </div>

      <div :class="pfoCardClasses" class="p-4 rounded-lg border">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-2xl font-bold" :class="pfoTextClasses">{{ stats.completedOptionalHours }}</p>
            <p class="text-sm" :class="pfoTextClasses">Horas Optativas</p>
            <p class="text-xs" :class="pfoSubtextClasses">{{ stats.requiredOptionalHours }} requeridas</p>
          </div>
          <GraduationCap :class="pfoIconClasses" class="w-8 h-8" />
        </div>
      </div>
    </div>

    <!-- Barra de progreso de horas optativas -->
    <div v-if="stats.totalOptionalHours > 0" class="mb-6">
      <div class="bg-white p-4 rounded-lg border">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-medium text-gray-800">Progreso de Horas Optativas</h3>
          <span :class="pfoStatusBadgeClasses" class="px-2 py-1 rounded-full text-sm font-medium">
            {{ pfoStatusText }}
          </span>
        </div>
        
        <div class="relative">
          <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              :style="{ width: optionalHoursPercentage + '%' }"
              :class="optionalHoursBarClasses"
              class="h-full rounded-full progress-bar"
            ></div>
          </div>
          
          <div class="flex justify-between mt-2 text-sm">
            <span class="text-gray-600">{{ stats.completedOptionalHours }}h completadas</span>
            <span class="text-gray-600">{{ stats.requiredOptionalHours }}h requeridas</span>
            <span class="text-gray-600">{{ stats.totalOptionalHours }}h disponibles</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Progreso por año -->
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Progreso por Año</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div 
          v-for="yearData in yearProgress" 
          :key="yearData.year"
          class="bg-gray-50 p-4 rounded-lg border"
        >
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-medium text-gray-800">{{ yearData.year }}° Año</h4>
            <span class="text-sm text-gray-600">{{ yearData.approved }}/{{ yearData.total }}</span>
          </div>
          
          <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              :style="{ width: yearData.percentage + '%' }"
              :class="getYearColorClass(yearData.year)"
              class="h-2 rounded-full progress-bar"
            ></div>
          </div>
          
          <p class="text-xs text-gray-600">{{ yearData.percentage }}% completado</p>
        </div>
      </div>
    </div>

    <!-- Mensajes motivacionales -->
    <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
      <div class="flex items-start space-x-3">
        <Sparkles class="w-5 h-5 text-purple-500 mt-0.5" />
        <div>
          <h4 class="font-medium text-purple-800 mb-1">{{ motivationalMessage.title }}</h4>
          <p class="text-sm text-purple-700">{{ motivationalMessage.text }}</p>
        </div>
      </div>
    </div>

    <!-- Próximas materias disponibles -->
    <div v-if="availableSubjects.length > 0" class="mt-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center">
        <Target class="w-5 h-5 mr-2 text-green-600" />
        Próximas Materias Disponibles
      </h3>
      <div class="space-y-2">
        <div 
          v-for="subject in availableSubjects.slice(0, 3)" 
          :key="subject.id"
          class="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-200"
        >
          <div>
            <p class="font-medium text-green-800">{{ subject.name }}</p>
            <p class="text-sm text-green-600">{{ subject.year }}° Año</p>
          </div>
          <button 
            @click="store.updateSubjectStatus(subject.id, 'regular')"
            class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
          >
            Regularizar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Award, 
  User,
  Sparkles,
  Target,
  GraduationCap
} from 'lucide-vue-next'
import { useCurriculumStore } from '@/stores/curriculum'

const store = useCurriculumStore()

// Computed properties
const stats = computed(() => store.progressStats)

const formattedAverage = computed(() => {
  return stats.value.overallAverage > 0 
    ? stats.value.overallAverage.toFixed(2) 
    : '--'
})

const yearProgress = computed(() => {
  const years = [1, 2, 3, 4, 5, 6]
  
  return years.map(year => {
    const yearSubjects = store.subjects.filter(s => s.year === year)
    const approvedInYear = yearSubjects.filter(s => s.status === 'approved').length
    const totalInYear = yearSubjects.length
    
    return {
      year,
      approved: approvedInYear,
      total: totalInYear,
      percentage: totalInYear > 0 ? Math.round((approvedInYear / totalInYear) * 100) : 0
    }
  }).filter(yearData => yearData.total > 0) // Solo mostrar años que tienen materias
})

const motivationalMessage = computed(() => {
  const percentage = stats.value.completionPercentage
  
  if (percentage === 0) {
    return {
      title: "¡Comienza tu journey!",
      text: "Todo gran médico comenzó con el primer paso. ¡Empieza a regularizar materias!"
    }
  } else if (percentage < 25) {
    return {
      title: "¡Excelente comienzo!",
      text: "Has dado los primeros pasos importantes. Mantén el ritmo y sigue adelante."
    }
  } else if (percentage < 50) {
    return {
      title: "¡Vas por buen camino!",
      text: "Has completado una cuarta parte de tu carrera. La constancia es la clave del éxito."
    }
  } else if (percentage < 75) {
    return {
      title: "¡Más de la mitad!",
      text: "¡Increíble progreso! Ya puedes ver la meta más cerca. No aflojes ahora."
    }
  } else if (percentage < 100) {
    return {
      title: "¡Casi en la meta!",
      text: "Estás en la recta final. Cada materia que apruebes te acerca más a ser médico."
    }
  } else {
    return {
      title: "¡Felicitaciones, Doctor!",
      text: "Has completado tu carrera. ¡Es hora de ayudar a sanar el mundo!"
    }
  }
})

const availableSubjects = computed(() => {
  return store.subjects.filter(subject => 
    subject.status === 'pending' && 
    store.canEnrollInSubject(subject.id)
  ).sort((a, b) => a.year - b.year)
})

// Computed para horas optativas
const optionalHoursPercentage = computed(() => {
  if (stats.value.requiredOptionalHours === 0) return 0
  return Math.min(100, Math.round((stats.value.completedOptionalHours / stats.value.requiredOptionalHours) * 100))
})

const pfoStatusText = computed(() => {
  if (stats.value.canAccessPFO) {
    return 'Habilitado para PFO'
  } else {
    const remaining = stats.value.requiredOptionalHours - stats.value.completedOptionalHours
    return `Faltan ${remaining}h para PFO`
  }
})

const pfoCardClasses = computed(() => {
  if (stats.value.canAccessPFO) {
    return 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200'
  } else {
    return 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200'
  }
})

const pfoTextClasses = computed(() => {
  return stats.value.canAccessPFO ? 'text-emerald-700' : 'text-amber-700'
})

const pfoSubtextClasses = computed(() => {
  return stats.value.canAccessPFO ? 'text-emerald-600' : 'text-amber-600'
})

const pfoIconClasses = computed(() => {
  return stats.value.canAccessPFO ? 'text-emerald-500' : 'text-amber-500'
})

const pfoStatusBadgeClasses = computed(() => {
  if (stats.value.canAccessPFO) {
    return 'bg-emerald-100 text-emerald-800'
  } else {
    return 'bg-amber-100 text-amber-800'
  }
})

const optionalHoursBarClasses = computed(() => {
  if (stats.value.canAccessPFO) {
    return 'bg-gradient-to-r from-emerald-400 to-emerald-600'
  } else {
    return 'bg-gradient-to-r from-amber-400 to-amber-600'
  }
})

// Methods
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

const getYearProgressClass = (year: number): string => {
  const yearData = yearProgress.value.find(y => y.year === year)
  
  if (!yearData || yearData.total === 0) {
    return 'bg-gray-300'
  }
  
  if (yearData.percentage === 100) {
    return 'bg-green-500'
  } else if (yearData.percentage > 0) {
    return 'bg-yellow-500'
  } else {
    return 'bg-gray-400'
  }
}
</script>

<style scoped>
.progress-bar {
  transition: width 1s ease-out;
}

.animate-bounce-gentle {
  animation: bounceGentle 2s infinite;
}

@keyframes bounceGentle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}
</style>
