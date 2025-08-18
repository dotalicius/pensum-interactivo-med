import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Subject, Prerequisite, ProgressStats } from '@/types'
import { initialCurriculum, REQUIRED_OPTIONAL_HOURS } from '@/data/curriculum'

const STORAGE_KEY = 'pensum-interactivo-data'

export const useCurriculumStore = defineStore('curriculum', () => {
  // State
  const subjects = ref<Subject[]>([])
  const selectedSubjectId = ref<number | null>(null)
  const isModalOpen = ref(false)

  // Inicialización con localStorage
  const initializeStore = () => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY)
      if (savedData) {
        subjects.value = JSON.parse(savedData)
      } else {
        subjects.value = [...initialCurriculum]
        saveToLocalStorage()
      }
    } catch (error) {
      console.error('Error al cargar datos del localStorage:', error)
      subjects.value = [...initialCurriculum]
      saveToLocalStorage()
    }
  }

  // Persistencia en localStorage
  const saveToLocalStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(subjects.value))
    } catch (error) {
      console.error('Error al guardar en localStorage:', error)
    }
  }

  // Getters (Computed Properties)
  const approvedSubjects = computed(() => 
    subjects.value.filter(subject => subject.status === 'approved')
  )

  const regularSubjects = computed(() => 
    subjects.value.filter(subject => subject.status === 'regular')
  )

  const pendingSubjects = computed(() => 
    subjects.value.filter(subject => subject.status === 'pending')
  )

  const completionPercentage = computed(() => {
    const total = subjects.value.length
    const approved = approvedSubjects.value.length
    return total > 0 ? Math.round((approved / total) * 100) : 0
  })

  const overallAverage = computed(() => {
    const approvedWithGrades = approvedSubjects.value.filter(
      subject => subject.details.finalGrade !== null
    )
    
    if (approvedWithGrades.length === 0) return 0
    
    const sum = approvedWithGrades.reduce(
      (acc, subject) => acc + (subject.details.finalGrade || 0), 
      0
    )
    
    return Math.round((sum / approvedWithGrades.length) * 100) / 100
  })

  const selectedSubject = computed(() => {
    if (!selectedSubjectId.value) return null
    return subjects.value.find(subject => subject.id === selectedSubjectId.value) || null
  })

  const optionalSubjects = computed(() => 
    subjects.value.filter(subject => subject.modality === 'optional')
  )

  const completedOptionalHours = computed(() => {
    return optionalSubjects.value
      .filter(subject => subject.status === 'approved')
      .reduce((total, subject) => total + subject.hours, 0)
  })

  const totalOptionalHours = computed(() => {
    return optionalSubjects.value.reduce((total, subject) => total + subject.hours, 0)
  })

  const canAccessPFO = computed(() => {
    return completedOptionalHours.value >= REQUIRED_OPTIONAL_HOURS
  })

  const totalCursedHours = computed(() => {
    return subjects.value
      .filter(subject => subject.status === 'approved' || subject.status === 'regular')
      .reduce((total, subject) => total + subject.hours, 0)
  })

  const progressStats = computed((): ProgressStats => ({
    totalSubjects: subjects.value.length,
    approvedSubjects: approvedSubjects.value.length,
    regularSubjects: regularSubjects.value.length,
    pendingSubjects: pendingSubjects.value.length,
    completionPercentage: completionPercentage.value,
    overallAverage: overallAverage.value,
    totalOptionalHours: totalOptionalHours.value,
    completedOptionalHours: completedOptionalHours.value,
    requiredOptionalHours: REQUIRED_OPTIONAL_HOURS,
    canAccessPFO: canAccessPFO.value,
    totalCursedHours: totalCursedHours.value
  }))

  const subjectsByYear = computed(() => {
    const grouped = subjects.value.reduce((acc, subject) => {
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

  // Actions - Lógica de correlatividades
  const checkPrerequisites = (prerequisites: Prerequisite[]): boolean => {
    return prerequisites.every(prereq => {
      const subject = subjects.value.find(s => s.id === prereq.subjectId)
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
    const subject = subjects.value.find(s => s.id === subjectId)
    if (!subject) return false
    
    return checkPrerequisites(subject.prerequisitesToEnroll)
  }

  const canTakeFinalExam = (subjectId: number): boolean => {
    const subject = subjects.value.find(s => s.id === subjectId)
    if (!subject) return false
    
    return checkPrerequisites(subject.prerequisitesForFinal)
  }

  const updateSubjectStatus = (subjectId: number, newStatus: Subject['status']): boolean => {
    const subjectIndex = subjects.value.findIndex(s => s.id === subjectId)
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
      status: newStatus
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
    
    const subjectIndex = subjects.value.findIndex(s => s.id === selectedSubjectId.value)
    if (subjectIndex === -1) return false
    
    subjects.value[subjectIndex] = {
      ...subjects.value[subjectIndex],
      details: { ...details }
    }
    
    saveToLocalStorage()
    return true
  }

  const addGrade = (subjectId: number, grade: number) => {
    const subjectIndex = subjects.value.findIndex(s => s.id === subjectId)
    if (subjectIndex === -1) return false
    
    subjects.value[subjectIndex].details.grades.push(grade)
    saveToLocalStorage()
    return true
  }

  const setFinalGrade = (subjectId: number, grade: number) => {
    const subjectIndex = subjects.value.findIndex(s => s.id === subjectId)
    if (subjectIndex === -1) return false
    
    subjects.value[subjectIndex].details.finalGrade = grade
    saveToLocalStorage()
    return true
  }

  const resetCurriculum = () => {
    subjects.value = [...initialCurriculum]
    saveToLocalStorage()
  }

  const getSubjectById = (id: number): Subject | undefined => {
    return subjects.value.find(subject => subject.id === id)
  }

  const getPrerequisiteNames = (prerequisites: Prerequisite[]): string[] => {
    return prerequisites.map(prereq => {
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
    
    // Getters
    approvedSubjects,
    regularSubjects,
    pendingSubjects,
    optionalSubjects,
    completionPercentage,
    overallAverage,
    selectedSubject,
    progressStats,
    subjectsByYear,
    completedOptionalHours,
    totalOptionalHours,
    totalCursedHours,
    canAccessPFO,
    
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
    saveToLocalStorage
  }
})
