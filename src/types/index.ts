// Constante para materias sin correlativas
export const NO_PREREQUISITES: Prerequisite[] = []

// Define el tipo de requisito para una correlativa
export interface Prerequisite {
  subjectId: number
  // 'regular' significa que la materia debe estar cursada.
  // 'approved' significa que la materia debe tener final aprobado.
  requiredStatus: 'regular' | 'approved'
}

// Definición de un año académico
export interface AcademicYearInfo {
  year: number
  name: string
  color: string
}

// Definición completa de una carrera
export interface CareerDefinition {
  id: string
  name: string
  faculty: string
  subjects: Subject[]
  academicYears: AcademicYearInfo[]
  requiredOptionalHours: number
  // 'active': PFO verificado y funcional. 'in-development': reglas PFO pendientes de verificar. 'none': no tiene PFO.
  pfoStatus: 'active' | 'in-development' | 'none'
}

// Estructura de datos principal para cada materia
export interface Subject {
  id: number
  name: string
  year: number
  modality: 'mandatory' | 'optional' // Basado en si es 'Op' o no
  status: 'pending' | 'regular' | 'approved'
  // Requisitos para poder inscribirse a la cursada (P/C)
  prerequisitesToEnroll: Prerequisite[]
  // Requisitos para poder rendir el examen final (P/F)
  prerequisitesForFinal: Prerequisite[]
  // Información académica adicional
  regime: 'Anual' | 'Cuatrimestral' | 'Bimestral' | 'Trimestral' | 'Semestral'
  hours: number // Carga horaria
  details: {
    commission: string
    professor: string
    schedule: string
    examDates: string[]
    grades: number[]
    finalGrade: number | null
    diary: string
    imageUrl: string
  }
}

// Tipos auxiliares para el store
export interface CurriculumState {
  subjects: Subject[]
  selectedSubjectId: number | null
  isModalOpen: boolean
}

// Tipo para las estadísticas de progreso
export interface ProgressStats {
  totalSubjects: number
  approvedSubjects: number
  regularSubjects: number
  pendingSubjects: number
  completionPercentage: number
  overallAverage: number
  // Estadísticas de horas
  totalOptionalHours: number
  completedOptionalHours: number
  requiredOptionalHours: number // 270 horas mínimo para PFO
  canAccessPFO: boolean
  totalCursedHours: number // Total de horas cursadas (aprobadas + regulares)
}

// Tipo para filtros y vistas
export interface SubjectFilters {
  year?: number
  modality?: Subject['modality']
  status?: Subject['status']
}

// Tipo para la configuración de años académicos
export interface AcademicYear {
  year: number
  name: string
  subjects: Subject[]
}
