import type { CareerDefinition } from '@/types'
import { initialCurriculum, academicYears, REQUIRED_OPTIONAL_HOURS } from '@/data/curriculum'
import { enfermeriaUniversitaria } from './enfermeria-universitaria'
import { licNutricion } from './lic-nutricion'
import { licObstetricia } from './lic-obstetricia'
import { tecPracticasCardiologicas } from './tec-practicas-cardiologicas'
import { ingenieriaAgronomica } from './ingenieria-agronomica'
import { ingenieriaForestal } from './ingenieria-forestal'
import { tecCultivosProtegidos } from './tec-cultivos-protegidos'
import { medicinaVeterinaria } from './medicina-veterinaria'
import { licMicrobiologia } from './lic-microbiologia'

// Medicina envuelta como CareerDefinition usando los datos existentes
const medicina: CareerDefinition = {
  id: 'medicina',
  name: 'Medicina',
  faculty: 'Facultad de Ciencias Médicas',
  subjects: initialCurriculum,
  academicYears,
  requiredOptionalHours: REQUIRED_OPTIONAL_HOURS,
  pfoStatus: 'active',
}

export const allCareers: CareerDefinition[] = [
  medicina,
  enfermeriaUniversitaria,
  licNutricion,
  licObstetricia,
  tecPracticasCardiologicas,
  ingenieriaAgronomica,
  ingenieriaForestal,
  tecCultivosProtegidos,
  medicinaVeterinaria,
  licMicrobiologia,
]

// Carrera por defecto
export const DEFAULT_CAREER_ID = 'medicina'

// Buscar una carrera por su ID
export const getCareerById = (id: string): CareerDefinition | undefined => {
  return allCareers.find((career) => career.id === id)
}
