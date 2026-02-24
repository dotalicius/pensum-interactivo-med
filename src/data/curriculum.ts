import type { Subject } from '@/types';

export const initialCurriculum: Subject[] = [
  // --- PRIMER AÑO ---
  {
    id: 1,
    name: "Anatomía",
    year: 1,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Anual',
    hours: 250,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 2,
    name: "Biología",
    year: 1,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Anual',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 3,
    name: "Ciencias sociales y medicina",
    year: 1,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Cuatrimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 4,
    name: "Citología, histología y embriología",
    year: 1,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Anual',
    hours: 190,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 5,
    name: "Informática básica",
    year: 1,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 6,
    name: "Ciencias exactas",
    year: 1,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Cuatrimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 7,
    name: "Seminario de investigación científica",
    year: 1,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Cuatrimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },

  // --- SEGUNDO AÑO ---
  {
    id: 8,
    name: "Bioquímica y biología molecular",
    year: 2,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 2, requiredStatus: 'approved' },
      { subjectId: 4, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 2, requiredStatus: 'approved' },
      { subjectId: 4, requiredStatus: 'regular' }
    ],
    regime: 'Anual',
    hours: 250,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 9,
    name: "Epidemiología",
    year: 2,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 3, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 3, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 10,
    name: "Fisiología y física biológica",
    year: 2,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 1, requiredStatus: 'regular' },
      { subjectId: 2, requiredStatus: 'regular' },
      { subjectId: 4, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 2, requiredStatus: 'approved' }
    ],
    regime: 'Anual',
    hours: 250,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 11,
    name: "Psicología médica",
    year: 2,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 1, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 1, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 12,
    name: "Ecología humana y promoción de la salud",
    year: 2,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 13,
    name: "Historia de la medicina",
    year: 2,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Bimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },

  // --- TERCER AÑO ---
  {
    id: 14,
    name: "Farmacología básica",
    year: 3,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 8, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 8, requiredStatus: 'approved' }
    ],
    regime: 'Anual',
    hours: 140,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 15,
    name: "Informática médica",
    year: 3,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 5, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 5, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 16,
    name: "Microbiología y parasitología",
    year: 3,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 8, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 8, requiredStatus: 'approved' }
    ],
    regime: 'Anual',
    hours: 150,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 17,
    name: "Patología",
    year: 3,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 2, requiredStatus: 'regular' },
      { subjectId: 1, requiredStatus: 'approved' },
      { subjectId: 10, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 2, requiredStatus: 'regular' },
      { subjectId: 1, requiredStatus: 'approved' },
      { subjectId: 10, requiredStatus: 'approved' }
    ],
    regime: 'Anual',
    hours: 210,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 18,
    name: "Salud y medicina comunitaria",
    year: 3,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 9, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 9, requiredStatus: 'approved' }
    ],
    regime: 'Cuatrimestral',
    hours: 40,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 19,
    name: "Semiología",
    year: 3,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 1, requiredStatus: 'approved' },
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 8, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 1, requiredStatus: 'approved' },
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 8, requiredStatus: 'approved' }
    ],
    regime: 'Anual',
    hours: 200,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 20,
    name: "Inglés médico",
    year: 3,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 1, requiredStatus: 'approved' },
      { subjectId: 3, requiredStatus: 'approved' },
      { subjectId: 10, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 1, requiredStatus: 'approved' },
      { subjectId: 3, requiredStatus: 'approved' },
      { subjectId: 10, requiredStatus: 'approved' }
    ],
    regime: 'Anual',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 21,
    name: "Genética",
    year: 3,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 2, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 2, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 22,
    name: "Inmunología",
    year: 3,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 10, requiredStatus: 'regular' },
      { subjectId: 8, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 8, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 23,
    name: "Salud ambiental",
    year: 3,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 3, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 3, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 24,
    name: "Estadística aplicada a ciencias de la salud",
    year: 3,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 9, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 9, requiredStatus: 'approved' }
    ],
    regime: 'Cuatrimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 25,
    name: "Neuroanatomía semiológica",
    year: 3,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 1, requiredStatus: 'approved' },
      { subjectId: 10, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 1, requiredStatus: 'approved' },
      { subjectId: 10, requiredStatus: 'approved' }
    ],
    regime: 'Trimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },

  // --- CUARTO AÑO ---
  {
    id: 26,
    name: "Cirugía I",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 130,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 27,
    name: "Dermatología",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 17, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 40,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 28,
    name: "Diagnóstico y terapéutica por imágenes I",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 17, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 29,
    name: "Farmacología aplicada",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'approved' },
      { subjectId: 17, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 14, requiredStatus: 'approved' }
    ],
    regime: 'Cuatrimestral',
    hours: 100,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 30,
    name: "Infectología",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 16, requiredStatus: 'regular' },
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 16, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 80,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 31,
    name: "Medicina interna I",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 16, requiredStatus: 'regular' },
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 16, requiredStatus: 'regular' },
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Anual',
    hours: 210,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 32,
    name: "Neurología",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 17, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 40,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 33,
    name: "Oftalmología",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 1, requiredStatus: 'regular' },
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 8, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 1, requiredStatus: 'regular' },
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 8, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 40,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 34,
    name: "Ortopedia y traumatología",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 17, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 40,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 35,
    name: "Otorrinolaringología",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 17, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 40,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 36,
    name: "Psiquiatría I",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 11, requiredStatus: 'regular' },
      { subjectId: 14, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 11, requiredStatus: 'regular' },
      { subjectId: 14, requiredStatus: 'regular' }
    ],
    regime: 'Bimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 37,
    name: "Salud pública I",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 18, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 18, requiredStatus: 'regular' }
    ],
    regime: 'Cuatrimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 38,
    name: "Urología",
    year: 4,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 17, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 40,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 39,
    name: "Bioquímica clínica I",
    year: 4,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 8, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 8, requiredStatus: 'regular' }
    ],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 40,
    name: "Filosofía médica",
    year: 4,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 3, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 3, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 41,
    name: "Nutrición clínica",
    year: 4,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 10, requiredStatus: 'regular' },
      { subjectId: 8, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 10, requiredStatus: 'approved' },
      { subjectId: 8, requiredStatus: 'approved' }
    ],
    regime: 'Cuatrimestral',
    hours: 30,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },

  // --- QUINTO AÑO ---
  {
    id: 42,
    name: "Cirugía II",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 26, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 26, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 130,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 43,
    name: "Deontología y medicina legal",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 17, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 44,
    name: "Diagnóstico y terapéutica por imágenes II",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 28, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 45,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 45,
    name: "Ginecología",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 26, requiredStatus: 'regular' },
      { subjectId: 29, requiredStatus: 'regular' },
      { subjectId: 30, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' },
      { subjectId: 26, requiredStatus: 'approved' }
    ],
    regime: 'Cuatrimestral',
    hours: 80,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 46,
    name: "Medicina interna II",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 16, requiredStatus: 'regular' },
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    prerequisitesForFinal: [
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 16, requiredStatus: 'regular' },
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Anual',
    hours: 210,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 47,
    name: "Obstetricia",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 26, requiredStatus: 'regular' },
      { subjectId: 29, requiredStatus: 'regular' },
      { subjectId: 30, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 14, requiredStatus: 'approved' },
      { subjectId: 16, requiredStatus: 'approved' },
      { subjectId: 17, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 48,
    name: "Pediatría",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 30, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 30, requiredStatus: 'approved' }
    ],
    regime: 'Anual',
    hours: 200,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 49,
    name: "Psiquiatría II",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 36, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 14, requiredStatus: 'approved' },
      { subjectId: 16, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 50,
    name: "Salud pública II",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 37, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 18, requiredStatus: 'approved' }
    ],
    regime: 'Cuatrimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 51,
    name: "Terapia intensiva",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 19, requiredStatus: 'regular' },
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 26, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 19, requiredStatus: 'regular' },
      { subjectId: 14, requiredStatus: 'regular' },
      { subjectId: 26, requiredStatus: 'regular' }
    ],
    regime: 'Cuatrimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 52,
    name: "Toxicología",
    year: 5,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 17, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'approved' },
      { subjectId: 19, requiredStatus: 'approved' }
    ],
    regime: 'Bimestral',
    hours: 35,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 53,
    name: "Bioética",
    year: 5,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 54,
    name: "Bioquímica clínica II",
    year: 5,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 8, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 8, requiredStatus: 'regular' }
    ],
    regime: 'Bimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 55,
    name: "Cirugía de tórax",
    year: 5,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 26, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 26, requiredStatus: 'regular' }
    ],
    regime: 'Bimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 56,
    name: "Discapacidad intelectual",
    year: 5,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    regime: 'Cuatrimestral',
    hours: 60,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 57,
    name: "Trasplante de órganos",
    year: 5,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 26, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 26, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    regime: 'Semestral',
    hours: 100,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 58,
    name: "El paciente con enfermedad crónica de alto impacto familiar",
    year: 5,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 18, requiredStatus: 'regular' },
      { subjectId: 36, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 18, requiredStatus: 'regular' },
      { subjectId: 36, requiredStatus: 'regular' }
    ],
    regime: 'Cuatrimestral',
    hours: 64,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },
  {
    id: 59,
    name: "Enfermedades poco frecuentes en medicina",
    year: 5,
    modality: 'optional',
    status: 'pending',
    prerequisitesToEnroll: [
      { subjectId: 17, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    prerequisitesForFinal: [
      { subjectId: 17, requiredStatus: 'regular' },
      { subjectId: 19, requiredStatus: 'regular' }
    ],
    regime: 'Cuatrimestral',
    hours: 50,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  },

  // --- SEXTO AÑO ---
  {
    id: 60,
    name: "Práctica Final Obligatoria (PFO)",
    year: 6,
    modality: 'mandatory',
    status: 'pending',
    prerequisitesToEnroll: [],
    prerequisitesForFinal: [],
    regime: 'Anual',
    hours: 1400,
    details: {
      commission: "",
      professor: "",
      schedule: "",
      examDates: [],
      grades: [],
      finalGrade: null,
      diary: "",
      imageUrl: ""
    }
  }
];

// Información adicional sobre los años académicos
export const academicYears = [
  { year: 1, name: "Primer Año", color: "blue" },
  { year: 2, name: "Segundo Año", color: "green" },
  { year: 3, name: "Tercer Año", color: "purple" },
  { year: 4, name: "Cuarto Año", color: "orange" },
  { year: 5, name: "Quinto Año", color: "red" },
  { year: 6, name: "Sexto Año", color: "indigo" }
];

// Constantes útiles
export const SUBJECT_STATUS = {
  PENDING: 'pending',
  REGULAR: 'regular',
  APPROVED: 'approved'
} as const;

export const MODALITY = {
  MANDATORY: 'mandatory',
  OPTIONAL: 'optional'
} as const;

export const REQUIRED_OPTIONAL_HOURS = 270; // Mínimo de horas optativas para acceder a PFO