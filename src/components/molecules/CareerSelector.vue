<template>
  <div class="relative" ref="selectorRef">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
    >
      <GraduationCap class="w-7 h-7 text-blue-600 flex-shrink-0" />
      <div class="text-left">
        <p class="text-sm font-bold text-gray-900 leading-tight">
          {{ currentCareer.name }}
        </p>
        <p class="text-xs text-gray-500 leading-tight">
          {{ currentCareer.faculty }}
        </p>
      </div>
      <ChevronDown
        class="w-4 h-4 text-gray-400 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown -->
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-1 max-h-80 overflow-y-auto"
      >
        <template v-for="(careersInFaculty, faculty) in groupedCareers" :key="faculty">
          <!-- Separador de Facultad -->
          <div class="px-4 py-2 bg-gray-50 border-y border-gray-100 first:border-t-0">
            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {{ faculty }}
            </h3>
          </div>

          <button
            v-for="career in careersInFaculty"
            :key="career.id"
            @click="selectCareer(career.id)"
            class="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-150 flex items-center space-x-3"
            :class="{
              'bg-blue-50 border-l-2 border-blue-500': career.id === currentCareer.id,
            }"
          >
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium truncate"
                :class="career.id === currentCareer.id ? 'text-blue-700' : 'text-gray-800'"
              >
                {{ career.name }}
              </p>
            </div>
            <!-- Indicador de carrera en desarrollo -->
            <span
              v-if="career.pfoStatus === 'in-development'"
              class="flex-shrink-0 text-[10px] leading-tight font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full"
            >
              En desarrollo
            </span>
          </button>
        </template>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { GraduationCap, ChevronDown } from 'lucide-vue-next'
import type { CareerDefinition } from '@/types'

interface Props {
  careers: CareerDefinition[]
  currentCareer: CareerDefinition
}

const props = defineProps<Props>()

const emit = defineEmits<{
  select: [careerId: string]
}>()

const isOpen = ref(false)
const selectorRef = ref<HTMLElement | null>(null)

const groupedCareers = computed(() => {
  const groups: Record<string, CareerDefinition[]> = {}
  for (const career of props.careers) {
    if (!groups[career.faculty]) {
      groups[career.faculty] = []
    }
    groups[career.faculty].push(career)
  }
  return groups
})

const selectCareer = (careerId: string) => {
  emit('select', careerId)
  isOpen.value = false
}

// Cerrar al hacer click fuera
const handleClickOutside = (event: MouseEvent) => {
  if (selectorRef.value && !selectorRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-4px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
