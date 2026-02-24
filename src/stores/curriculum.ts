import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Subject, Prerequisite, ProgressStats, CareerDefinition } from '@/types'
import { allCareers, DEFAULT_CAREER_ID, getCareerById } from '@/data/careers'

const LEGACY_STORAGE_KEY = 'pensum-interactivo-data'

// Genera la clave de localStorage para una carrera específica
const getStorageKey = (careerId: string): string => {
  // Mantener compatibilidad con datos existentes de Medicina
  if (careerId === 'medicina') return LEGACY_STORAGE_KEY
  return `pensum-interactivo-${careerId}`
}

export const useCurriculumStore = defineStore('curriculum', () => {
  // State
  const currentCareerId = ref<string>(DEFAULT_CAREER_ID)
  const subjects = ref<Subject[]>([])
  const selectedSubjectId = ref<number | null>(null)
  const isModalOpen = ref(false)

  // Carrera activa
  const currentCareer = computed<CareerDefinition>(() => {
    return getCareerById(currentCareerId.value) ?? allCareers[0]
  })

  // Horas optativas requeridas dinámicas
  const requiredOptionalHours = computed(() => currentCareer.value.requiredOptionalHours)

  // Inicialización con localStorage
  const initializeStore = () => {
    loadCareerData(currentCareerId.value)
  }

  // Carga datos de una carrera desde localStorage o desde los datos iniciales
  const loadCareerData = (careerId: string) => {
    const career = getCareerById(careerId)
    if (!career) return

    const storageKey = getStorageKey(careerId)
    try {
      const savedData = localStorage.getItem(storageKey)
      if (savedData) {
        subjects.value = JSON.parse(savedData)
      } else {
        subjects.value = career.subjects.map((s) => ({ ...s }))
        saveToLocalStorage()
      }
    } catch (error) {
      console.error('Error al cargar datos del localStorage:', error)
      subjects.value = career.subjects.map((s) => ({ ...s }))
      saveToLocalStorage()
    }
  }

  // Persistencia en localStorage
  const saveToLocalStorage = () => {
    try {
      const storageKey = getStorageKey(currentCareerId.value)
      localStorage.setItem(storageKey, JSON.stringify(subjects.value))
    } catch (error) {
      console.error('Error al guardar en localStorage:', error)
    }
  }

  // Cambiar de carrera
  const switchCareer = (careerId: string) => {
    if (careerId === currentCareerId.value) return
    if (!getCareerById(careerId)) return

    // Guardar progreso actual antes de cambiar
    saveToLocalStorage()

    // Cambiar a la nueva carrera
    currentCareerId.value = careerId
    selectedSubjectId.value = null
    isModalOpen.value = false

    // Cargar datos de la nueva carrera
    loadCareerData(careerId)
  }

  // Getters (Computed Properties)
  const approvedSubjects = computed(() =>
    subjects.value.filter((subject) => subject.status === 'approved'),
  )

  const regularSubjects = computed(() =>
    subjects.value.filter((subject) => subject.status === 'regular'),
  )

  const pendingSubjects = computed(() =>
    subjects.value.filter((subject) => subject.status === 'pending'),
  )

  // Materias obligatorias (excluyendo optativas)
  const mandatorySubjects = computed(() =>
    subjects.value.filter((subject) => subject.modality !== 'optional'),
  )

  const approvedMandatorySubjects = computed(() =>
    mandatorySubjects.value.filter((subject) => subject.status === 'approved'),
  )

  const completionPercentage = computed(() => {
    // Solo considerar materias obligatorias para el progreso general (incluyendo la PFO)
    const total = mandatorySubjects.value.length
    const approved = approvedMandatorySubjects.value.length
    return total > 0 ? Math.round((approved / total) * 100) : 0
  })

  const overallAverage = computed(() => {
    // Solo considerar materias obligatorias aprobadas con notas para el promedio
    const approvedWithGrades = approvedMandatorySubjects.value.filter(
      (subject) => subject.details.finalGrade !== null,
    )

    if (approvedWithGrades.length === 0) return 0

    const sum = approvedWithGrades.reduce(
      (acc, subject) => acc + (subject.details.finalGrade || 0),
      0,
    )

    return Math.round((sum / approvedWithGrades.length) * 100) / 100
  })

  const selectedSubject = computed(() => {
    if (!selectedSubjectId.value) return null
    return subjects.value.find((subject) => subject.id === selectedSubjectId.value) || null
  })

  const optionalSubjects = computed(() =>
    subjects.value.filter((subject) => subject.modality === 'optional'),
  )

  const completedOptionalHours = computed(() => {
    return optionalSubjects.value
      .filter((subject) => subject.status === 'approved')
      .reduce((total, subject) => total + subject.hours, 0)
  })

  const totalOptionalHours = computed(() => {
    return optionalSubjects.value.reduce((total, subject) => total + subject.hours, 0)
  })

  const canAccessPFO = computed(() => {
    // Si el PFO está en desarrollo, no validar reglas específicas
    if (currentCareer.value.pfoStatus === 'in-development') return false

    // PFO se desbloquea solo cuando se cumplen AMBOS requisitos:
    // 1. Todas las materias obligatorias aprobadas (excluyendo la PFO)
    // 2. Horas optativas requeridas cumplidas
    const mandatoryWithoutPFO = mandatorySubjects.value.filter(
      (subject) => !subject.name.includes('PFO'),
    )
    const approvedWithoutPFO = approvedMandatorySubjects.value.filter(
      (subject) => !subject.name.includes('PFO'),
    )

    const allMandatoryApproved = approvedWithoutPFO.length >= mandatoryWithoutPFO.length
    const hoursRequirementMet =
      requiredOptionalHours.value === 0 ||
      completedOptionalHours.value >= requiredOptionalHours.value

    return allMandatoryApproved && hoursRequirementMet
  })

  const totalCursedHours = computed(() => {
    // Solo considerar horas de materias obligatorias
    return subjects.value
      .filter(
        (subject) =>
          (subject.status === 'approved' || subject.status === 'regular') &&
          subject.modality !== 'optional',
      )
      .reduce((total, subject) => total + subject.hours, 0)
  })

  const progressStats = computed(
    (): ProgressStats => ({
      totalSubjects: mandatorySubjects.value.filter((s) => !s.name.includes('PFO')).length,
      approvedSubjects: approvedMandatorySubjects.value.filter((s) => !s.name.includes('PFO'))
        .length,
      regularSubjects: regularSubjects.value.filter((s) => s.modality !== 'optional').length,
      pendingSubjects: pendingSubjects.value.filter((s) => s.modality !== 'optional').length,
      completionPercentage: completionPercentage.value,
      overallAverage: overallAverage.value,
      totalOptionalHours: totalOptionalHours.value,
      completedOptionalHours: completedOptionalHours.value,
      requiredOptionalHours: requiredOptionalHours.value,
      canAccessPFO: canAccessPFO.value,
      totalCursedHours: totalCursedHours.value,
    }),
  )

  const subjectsByYear = computed(() => {
    // Solo agrupar materias obligatorias por año
    const grouped = mandatorySubjects.value.reduce(
      (acc, subject) => {
        if (!acc[subject.year]) {
          acc[subject.year] = []
        }
        acc[subject.year].push(subject)
        return acc
      },
      {} as Record<number, Subject[]>,
    )

    return Object.keys(grouped)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map((year) => ({
        year: parseInt(year),
        subjects: grouped[parseInt(year)],
      }))
  })

  // Actions - Lógica de correlatividades
  const checkPrerequisites = (prerequisites: Prerequisite[]): boolean => {
    return prerequisites.every((prereq) => {
      const subject = subjects.value.find((s) => s.id === prereq.subjectId)
      if (!subject) return false

      if (prereq.requiredStatus === 'regular') {
        return subject.status === 'regular' || subject.status === 'approved'
      } else if (prereq.requiredStatus === 'approved') {
        return subject.status === 'approved'
      }

      return false
    })
  }

  const canEnrollInSubject = (subjectId: number): boolean => {
    const subject = subjects.value.find((s) => s.id === subjectId)
    if (!subject) return false

    return checkPrerequisites(subject.prerequisitesToEnroll)
  }

  const canTakeFinalExam = (subjectId: number): boolean => {
    const subject = subjects.value.find((s) => s.id === subjectId)
    if (!subject) return false

    return checkPrerequisites(subject.prerequisitesForFinal)
  }

  const updateSubjectStatus = (subjectId: number, newStatus: Subject['status']): boolean => {
    const subjectIndex = subjects.value.findIndex((s) => s.id === subjectId)
    if (subjectIndex === -1) return false

    const subject = subjects.value[subjectIndex]

    // Validar las reglas de cambio de estado
    if (newStatus === 'regular') {
      if (!canEnrollInSubject(subjectId)) {
        console.warn('No se puede regularizar: no cumple prerequisitos para inscripción')
        return false
      }
    } else if (newStatus === 'approved') {
      if (subject.status !== 'regular') {
        console.warn('No se puede aprobar: la materia debe estar regular primero')
        return false
      }
      if (!canTakeFinalExam(subjectId)) {
        console.warn('No se puede aprobar: no cumple prerequisitos para el final')
        return false
      }
    }
    // Para 'pending' no hay restricciones

    // Actualizar estado
    subjects.value[subjectIndex] = {
      ...subject,
      status: newStatus,
    }

    saveToLocalStorage()
    return true
  }

  const openSubjectModal = (subjectId: number) => {
    selectedSubjectId.value = subjectId
    isModalOpen.value = true
  }

  const closeModal = () => {
    selectedSubjectId.value = null
    isModalOpen.value = false
  }

  const saveSubjectDetails = (details: Subject['details']) => {
    if (!selectedSubjectId.value) return false

    const subjectIndex = subjects.value.findIndex((s) => s.id === selectedSubjectId.value)
    if (subjectIndex === -1) return false

    subjects.value[subjectIndex] = {
      ...subjects.value[subjectIndex],
      details: { ...details },
    }

    saveToLocalStorage()
    return true
  }

  const addGrade = (subjectId: number, grade: number) => {
    const subjectIndex = subjects.value.findIndex((s) => s.id === subjectId)
    if (subjectIndex === -1) return false

    subjects.value[subjectIndex].details.grades.push(grade)
    saveToLocalStorage()
    return true
  }

  const setFinalGrade = (subjectId: number, grade: number) => {
    const subjectIndex = subjects.value.findIndex((s) => s.id === subjectId)
    if (subjectIndex === -1) return false

    subjects.value[subjectIndex].details.finalGrade = grade
    saveToLocalStorage()
    return true
  }

  const resetCurriculum = () => {
    const career = getCareerById(currentCareerId.value)
    if (!career) return
    subjects.value = career.subjects.map((s) => ({ ...s }))
    saveToLocalStorage()
  }

  const getSubjectById = (id: number): Subject | undefined => {
    return subjects.value.find((subject) => subject.id === id)
  }

  const getPrerequisiteNames = (prerequisites: Prerequisite[]): string[] => {
    return prerequisites.map((prereq) => {
      const subject = getSubjectById(prereq.subjectId)
      const statusText = prereq.requiredStatus === 'approved' ? '(Final)' : '(Regular)'
      return subject ? `${subject.name} ${statusText}` : `Materia ${prereq.subjectId} ${statusText}`
    })
  }

  // Inicializar store al crear la instancia
  initializeStore()

  return {
    // State
    subjects,
    selectedSubjectId,
    isModalOpen,
    currentCareerId,
    currentCareer,

    // Getters
    approvedSubjects,
    regularSubjects,
    pendingSubjects,
    optionalSubjects,
    mandatorySubjects,
    approvedMandatorySubjects,
    completionPercentage,
    overallAverage,
    selectedSubject,
    progressStats,
    subjectsByYear,
    completedOptionalHours,
    totalOptionalHours,
    totalCursedHours,
    canAccessPFO,
    requiredOptionalHours,

    // Actions
    checkPrerequisites,
    canEnrollInSubject,
    canTakeFinalExam,
    updateSubjectStatus,
    openSubjectModal,
    closeModal,
    saveSubjectDetails,
    addGrade,
    setFinalGrade,
    resetCurriculum,
    getSubjectById,
    getPrerequisiteNames,
    initializeStore,
    saveToLocalStorage,
    switchCareer,
  }
})
