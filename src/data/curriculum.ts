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
      commission: "1A",
      professor: "Dr. García",
      schedule: "Lunes y Miércoles 8:00-12:00",
      examDates: ["15/02/2024", "15/05/2024", "15/08/2024"],
      grades: [],
      finalGrade: null,
      diary: "Estudio de estructuras anatómicas básicas del cuerpo humano",
      imageUrl: "/images/anatomia.jpg"
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
      commission: "1B",
      professor: "Dra. Martínez",
      schedule: "Martes y Jueves 14:00-18:00",
      examDates: ["20/02/2024", "20/05/2024", "20/08/2024"],
      grades: [],
      finalGrade: null,
      diary: "Fundamentos de biología celular y molecular",
      imageUrl: "/images/biologia.jpg"
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
      commission: "1C",
      professor: "Lic. Rodríguez",
      schedule: "Viernes 9:00-13:00",
      examDates: ["25/02/2024", "25/05/2024", "25/08/2024"],
      grades: [],
      finalGrade: null,
      diary: "Aspectos sociales de la práctica médica",
      imageUrl: "/images/ciencias-sociales.jpg"
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
      commission: "1D",
      professor: "Dr. López",
      schedule: "Lunes y Viernes 14:00-16:00",
      examDates: ["28/02/2024", "28/05/2024", "28/08/2024"],
      grades: [],
      finalGrade: null,
      diary: "Estudio microscópico de células y tejidos",
      imageUrl: "/images/histologia.jpg"
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
      commission: "1E",
      professor: "Ing. Fernández",
      schedule: "Martes 16:00-20:00",
      examDates: ["10/03/2024", "10/06/2024", "10/09/2024"],
      grades: [],
      finalGrade: null,
      diary: "Fundamentos de informática aplicada a la medicina",
      imageUrl: "/images/informatica.jpg"
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
      commission: "Op1",
      professor: "Dr. Pérez",
      schedule: "Miércoles 14:00-18:00",
      examDates: ["12/03/2024", "12/06/2024", "12/09/2024"],
      grades: [],
      finalGrade: null,
      diary: "Matemática y física aplicadas a ciencias médicas",
      imageUrl: "/images/ciencias-exactas.jpg"
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
      commission: "Op2",
      professor: "Dr. Morales",
      schedule: "Sábados 9:00-13:00",
      examDates: ["15/03/2024", "15/06/2024", "15/09/2024"],
      grades: [],
      finalGrade: null,
      diary: "Introducción a la metodología de investigación científica",
      imageUrl: "/images/investigacion.jpg"
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
      commission: "2A",
      professor: "Dr. Torres",
      schedule: "Lunes y Miércoles 8:00-12:00",
      examDates: ["20/03/2024", "20/06/2024", "20/09/2024"],
      grades: [],
      finalGrade: null,
      diary: "Procesos bioquímicos y moleculares del organismo",
      imageUrl: "/images/bioquimica.jpg"
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
      commission: "2B",
      professor: "Dra. Vásquez",
      schedule: "Martes 14:00-18:00",
      examDates: ["25/03/2024", "25/06/2024", "25/09/2024"],
      grades: [],
      finalGrade: null,
      diary: "Estudio de la distribución y determinantes de enfermedades",
      imageUrl: "/images/epidemiologia.jpg"
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
      commission: "2C",
      professor: "Dr. Herrera",
      schedule: "Viernes 8:00-12:00",
      examDates: ["30/03/2024", "30/06/2024", "30/09/2024"],
      grades: [],
      finalGrade: null,
      diary: "Funcionamiento de sistemas orgánicos y principios físicos",
      imageUrl: "/images/fisiologia.jpg"
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
      commission: "2D",
      professor: "Lic. Castillo",
      schedule: "Jueves 16:00-20:00",
      examDates: ["05/04/2024", "05/07/2024", "05/10/2024"],
      grades: [],
      finalGrade: null,
      diary: "Aspectos psicológicos de la relación médico-paciente",
      imageUrl: "/images/psicologia-medica.jpg"
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
      commission: "Op3",
      professor: "Dra. Ramírez",
      schedule: "Sábados 14:00-18:00",
      examDates: ["10/04/2024", "10/07/2024", "10/10/2024"],
      grades: [],
      finalGrade: null,
      diary: "Relación entre ambiente y salud humana",
      imageUrl: "/images/ecologia-humana.jpg"
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
      commission: "Op4",
      professor: "Dr. Medina",
      schedule: "Viernes 16:00-20:00",
      examDates: ["15/04/2024", "15/07/2024", "15/10/2024"],
      grades: [],
      finalGrade: null,
      diary: "Evolución histórica de las ciencias médicas",
      imageUrl: "/images/historia-medicina.jpg"
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
      commission: "3A",
      professor: "Dr. Sánchez",
      schedule: "Lunes y Miércoles 8:00-10:00",
      examDates: ["20/04/2024", "20/07/2024", "20/10/2024"],
      grades: [],
      finalGrade: null,
      diary: "Principios básicos de farmacología",
      imageUrl: "/images/farmacologia.jpg"
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
      commission: "3B",
      professor: "Ing. González",
      schedule: "Martes 14:00-18:00",
      examDates: ["25/04/2024", "25/07/2024", "25/10/2024"],
      grades: [],
      finalGrade: null,
      diary: "Aplicaciones informáticas en medicina",
      imageUrl: "/images/informatica-medica.jpg"
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
      commission: "3C",
      professor: "Dra. Romero",
      schedule: "Jueves y Viernes 8:00-12:00",
      examDates: ["30/04/2024", "30/07/2024", "30/10/2024"],
      grades: [],
      finalGrade: null,
      diary: "Estudio de microorganismos patógenos",
      imageUrl: "/images/microbiologia.jpg"
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
      commission: "3D",
      professor: "Dr. Morales",
      schedule: "Lunes, Miércoles y Viernes 10:00-12:00",
      examDates: ["05/05/2024", "05/08/2024", "05/11/2024"],
      grades: [],
      finalGrade: null,
      diary: "Estudio de las enfermedades y alteraciones patológicas",
      imageUrl: "/images/patologia.jpg"
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
      commission: "3E",
      professor: "Dra. Silva",
      schedule: "Martes 16:00-20:00",
      examDates: ["10/05/2024", "10/08/2024", "10/11/2024"],
      grades: [],
      finalGrade: null,
      diary: "Medicina comunitaria y salud pública",
      imageUrl: "/images/medicina-comunitaria.jpg"
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
      commission: "3F",
      professor: "Dr. Vargas",
      schedule: "Lunes a Viernes 14:00-16:00",
      examDates: ["15/05/2024", "15/08/2024", "15/11/2024"],
      grades: [],
      finalGrade: null,
      diary: "Técnicas de exploración clínica y diagnóstico",
      imageUrl: "/images/semiologia.jpg"
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
      commission: "3G",
      professor: "Prof. Johnson",
      schedule: "Miércoles 18:00-20:00",
      examDates: ["20/05/2024", "20/08/2024", "20/11/2024"],
      grades: [],
      finalGrade: null,
      diary: "Inglés técnico aplicado a ciencias médicas",
      imageUrl: "/images/ingles-medico.jpg"
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
      commission: "Op5",
      professor: "Dra. Mendoza",
      schedule: "Sábados 8:00-12:00",
      examDates: ["25/05/2024", "25/08/2024", "25/11/2024"],
      grades: [],
      finalGrade: null,
      diary: "Principios de genética médica",
      imageUrl: "/images/genetica.jpg"
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
      commission: "Op6",
      professor: "Dr. Ruiz",
      schedule: "Sábados 14:00-18:00",
      examDates: ["30/05/2024", "30/08/2024", "30/11/2024"],
      grades: [],
      finalGrade: null,
      diary: "Sistema inmunitario y respuesta inmune",
      imageUrl: "/images/inmunologia.jpg"
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
      commission: "Op7",
      professor: "Dra. Ortega",
      schedule: "Viernes 18:00-22:00",
      examDates: ["05/06/2024", "05/09/2024", "05/12/2024"],
      grades: [],
      finalGrade: null,
      diary: "Impacto del ambiente en la salud",
      imageUrl: "/images/salud-ambiental.jpg"
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
      commission: "Op8",
      professor: "Dr. Castro",
      schedule: "Jueves 16:00-20:00",
      examDates: ["10/06/2024", "10/09/2024", "10/12/2024"],
      grades: [],
      finalGrade: null,
      diary: "Métodos estadísticos en investigación médica",
      imageUrl: "/images/estadistica.jpg"
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
      commission: "Op9",
      professor: "Dr. Navarro",
      schedule: "Miércoles 20:00-22:00",
      examDates: ["15/06/2024", "15/09/2024", "15/12/2024"],
      grades: [],
      finalGrade: null,
      diary: "Anatomía del sistema nervioso aplicada a semiología",
      imageUrl: "/images/neuroanatomia.jpg"
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
      commission: "4A",
      professor: "Dr. Aguirre",
      schedule: "Lunes a Viernes 8:00-12:00",
      examDates: ["20/06/2024", "20/09/2024", "20/12/2024"],
      grades: [],
      finalGrade: null,
      diary: "Fundamentos de cirugía general",
      imageUrl: "/images/cirugia.jpg"
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
      commission: "4B",
      professor: "Dra. Delgado",
      schedule: "Martes y Jueves 14:00-18:00",
      examDates: ["25/06/2024", "25/09/2024", "25/12/2024"],
      grades: [],
      finalGrade: null,
      diary: "Enfermedades de la piel y anexos",
      imageUrl: "/images/dermatologia.jpg"
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
      commission: "4C",
      professor: "Dr. Figueroa",
      schedule: "Miércoles 16:00-20:00",
      examDates: ["30/06/2024", "30/09/2024", "30/12/2024"],
      grades: [],
      finalGrade: null,
      diary: "Técnicas de diagnóstico por imágenes",
      imageUrl: "/images/imagenes.jpg"
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
      commission: "4D",
      professor: "Dra. Jiménez",
      schedule: "Viernes 8:00-12:00",
      examDates: ["05/07/2024", "05/10/2024", "05/01/2025"],
      grades: [],
      finalGrade: null,
      diary: "Aplicación clínica de fármacos",
      imageUrl: "/images/farmacologia-aplicada.jpg"
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
      commission: "4E",
      professor: "Dr. Luna",
      schedule: "Lunes y Miércoles 14:00-18:00",
      examDates: ["10/07/2024", "10/10/2024", "10/01/2025"],
      grades: [],
      finalGrade: null,
      diary: "Enfermedades infecciosas y su tratamiento",
      imageUrl: "/images/infectologia.jpg"
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
      commission: "4F",
      professor: "Dr. Paredes",
      schedule: "Lunes a Viernes 8:00-10:00",
      examDates: ["15/07/2024", "15/10/2024", "15/01/2025"],
      grades: [],
      finalGrade: null,
      diary: "Patología médica del adulto",
      imageUrl: "/images/medicina-interna.jpg"
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
      commission: "4G",
      professor: "Dr. Quintero",
      schedule: "Jueves 16:00-20:00",
      examDates: ["20/07/2024", "20/10/2024", "20/01/2025"],
      grades: [],
      finalGrade: null,
      diary: "Enfermedades del sistema nervioso",
      imageUrl: "/images/neurologia.jpg"
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
      commission: "4H",
      professor: "Dra. Ramos",
      schedule: "Viernes 14:00-18:00",
      examDates: ["25/07/2024", "25/10/2024", "25/01/2025"],
      grades: [],
      finalGrade: null,
      diary: "Patología ocular y visual",
      imageUrl: "/images/oftalmologia.jpg"
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
      commission: "4I",
      professor: "Dr. Suárez",
      schedule: "Sábados 8:00-12:00",
      examDates: ["30/07/2024", "30/10/2024", "30/01/2025"],
      grades: [],
      finalGrade: null,
      diary: "Traumatología y cirugía ortopédica",
      imageUrl: "/images/traumatologia.jpg"
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
      commission: "4J",
      professor: "Dr. Vega",
      schedule: "Martes 18:00-22:00",
      examDates: ["05/08/2024", "05/11/2024", "05/02/2025"],
      grades: [],
      finalGrade: null,
      diary: "Patología de oído, nariz y garganta",
      imageUrl: "/images/otorrinolaringologia.jpg"
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
      commission: "4K",
      professor: "Dra. Campos",
      schedule: "Miércoles 18:00-22:00",
      examDates: ["10/08/2024", "10/11/2024", "10/02/2025"],
      grades: [],
      finalGrade: null,
      diary: "Psicopatología y trastornos mentales",
      imageUrl: "/images/psiquiatria.jpg"
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
      commission: "4L",
      professor: "Dr. Espinoza",
      schedule: "Jueves 18:00-22:00",
      examDates: ["15/08/2024", "15/11/2024", "15/02/2025"],
      grades: [],
      finalGrade: null,
      diary: "Políticas y sistemas de salud",
      imageUrl: "/images/salud-publica.jpg"
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
      commission: "4M",
      professor: "Dr. Miranda",
      schedule: "Viernes 18:00-22:00",
      examDates: ["20/08/2024", "20/11/2024", "20/02/2025"],
      grades: [],
      finalGrade: null,
      diary: "Patología del sistema genitourinario",
      imageUrl: "/images/urologia.jpg"
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
      commission: "Op10",
      professor: "Bioq. Herrera",
      schedule: "Sábados 14:00-18:00",
      examDates: ["25/08/2024", "25/11/2024", "25/02/2025"],
      grades: [],
      finalGrade: null,
      diary: "Laboratorio clínico y diagnóstico bioquímico",
      imageUrl: "/images/bioquimica-clinica.jpg"
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
      commission: "Op11",
      professor: "Dr. Paz",
      schedule: "Domingo 9:00-13:00",
      examDates: ["30/08/2024", "30/11/2024", "28/02/2025"],
      grades: [],
      finalGrade: null,
      diary: "Aspectos filosóficos de la medicina",
      imageUrl: "/images/filosofia-medica.jpg"
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
      commission: "Op12",
      professor: "Lic. Nutr. Torres",
      schedule: "Sábados 18:00-21:00",
      examDates: ["05/09/2024", "05/12/2024", "05/03/2025"],
      grades: [],
      finalGrade: null,
      diary: "Nutrición en el ámbito clínico",
      imageUrl: "/images/nutricion.jpg"
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
      commission: "5A",
      professor: "Dr. Blanco",
      schedule: "Lunes a Viernes 8:00-12:00",
      examDates: ["10/09/2024", "10/12/2024", "10/03/2025"],
      grades: [],
      finalGrade: null,
      diary: "Cirugía especializada y técnicas avanzadas",
      imageUrl: "/images/cirugia-ii.jpg"
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
      commission: "5B",
      professor: "Dr. Leyes",
      schedule: "Martes y Jueves 16:00-20:00",
      examDates: ["15/09/2024", "15/12/2024", "15/03/2025"],
      grades: [],
      finalGrade: null,
      diary: "Aspectos legales y éticos de la medicina",
      imageUrl: "/images/medicina-legal.jpg"
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
      commission: "5C",
      professor: "Dr. Rayos",
      schedule: "Miércoles 14:00-18:00",
      examDates: ["20/09/2024", "20/12/2024", "20/03/2025"],
      grades: [],
      finalGrade: null,
      diary: "Técnicas avanzadas de diagnóstico por imágenes",
      imageUrl: "/images/imagenes-ii.jpg"
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
      commission: "5D",
      professor: "Dra. Mujer",
      schedule: "Viernes 8:00-12:00",
      examDates: ["25/09/2024", "25/12/2024", "25/03/2025"],
      grades: [],
      finalGrade: null,
      diary: "Patología ginecológica y salud reproductiva",
      imageUrl: "/images/ginecologia.jpg"
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
      commission: "5E",
      professor: "Dr. Clínica",
      schedule: "Lunes a Viernes 14:00-16:00",
      examDates: ["30/09/2024", "30/12/2024", "30/03/2025"],
      grades: [],
      finalGrade: null,
      diary: "Medicina interna avanzada",
      imageUrl: "/images/medicina-interna-ii.jpg"
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
      commission: "5F",
      professor: "Dra. Embarazo",
      schedule: "Sábados 8:00-12:00",
      examDates: ["05/10/2024", "05/01/2025", "05/04/2025"],
      grades: [],
      finalGrade: null,
      diary: "Atención del embarazo, parto y puerperio",
      imageUrl: "/images/obstetricia.jpg"
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
      commission: "5G",
      professor: "Dr. Niños",
      schedule: "Lunes a Viernes 16:00-18:00",
      examDates: ["10/10/2024", "10/01/2025", "10/04/2025"],
      grades: [],
      finalGrade: null,
      diary: "Medicina del niño y adolescente",
      imageUrl: "/images/pediatria.jpg"
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
      commission: "5H",
      professor: "Dra. Mente",
      schedule: "Domingo 14:00-18:00",
      examDates: ["15/10/2024", "15/01/2025", "15/04/2025"],
      grades: [],
      finalGrade: null,
      diary: "Psiquiatría clínica avanzada",
      imageUrl: "/images/psiquiatria-ii.jpg"
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
      commission: "5I",
      professor: "Dr. Población",
      schedule: "Martes 18:00-22:00",
      examDates: ["20/10/2024", "20/01/2025", "20/04/2025"],
      grades: [],
      finalGrade: null,
      diary: "Gestión y administración en salud pública",
      imageUrl: "/images/salud-publica-ii.jpg"
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
      commission: "5J",
      professor: "Dr. Cuidados",
      schedule: "Miércoles 20:00-24:00",
      examDates: ["25/10/2024", "25/01/2025", "25/04/2025"],
      grades: [],
      finalGrade: null,
      diary: "Cuidados intensivos y medicina crítica",
      imageUrl: "/images/terapia-intensiva.jpg"
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
      commission: "5K",
      professor: "Dr. Venenos",
      schedule: "Jueves 20:00-22:00",
      examDates: ["30/10/2024", "30/01/2025", "30/04/2025"],
      grades: [],
      finalGrade: null,
      diary: "Intoxicaciones y tratamiento toxicológico",
      imageUrl: "/images/toxicologia.jpg"
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
      commission: "Op13",
      professor: "Dr. Ética",
      schedule: "Sábados 14:00-18:00",
      examDates: ["05/11/2024", "05/02/2025", "05/05/2025"],
      grades: [],
      finalGrade: null,
      diary: "Aspectos éticos en la práctica médica",
      imageUrl: "/images/bioetica.jpg"
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
      commission: "Op14",
      professor: "Bioq. Análisis",
      schedule: "Domingo 8:00-12:00",
      examDates: ["10/11/2024", "10/02/2025", "10/05/2025"],
      grades: [],
      finalGrade: null,
      diary: "Laboratorio clínico avanzado",
      imageUrl: "/images/bioquimica-clinica-ii.jpg"
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
      commission: "Op15",
      professor: "Dr. Pulmón",
      schedule: "Viernes 20:00-24:00",
      examDates: ["15/11/2024", "15/02/2025", "15/05/2025"],
      grades: [],
      finalGrade: null,
      diary: "Cirugía torácica especializada",
      imageUrl: "/images/cirugia-torax.jpg"
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
      commission: "Op16",
      professor: "Dra. Inclusión",
      schedule: "Sábados 9:00-13:00",
      examDates: ["20/11/2024", "20/02/2025", "20/05/2025"],
      grades: [],
      finalGrade: null,
      diary: "Atención médica de personas con discapacidad intelectual",
      imageUrl: "/images/discapacidad.jpg"
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
      commission: "Op17",
      professor: "Dr. Órganos",
      schedule: "Domingo 16:00-20:00",
      examDates: ["25/11/2024", "25/02/2025", "25/05/2025"],
      grades: [],
      finalGrade: null,
      diary: "Medicina de trasplantes y donación de órganos",
      imageUrl: "/images/trasplantes.jpg"
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
      commission: "Op18",
      professor: "Dra. Familia",
      schedule: "Martes 19:00-23:00",
      examDates: ["30/11/2024", "28/02/2025", "30/05/2025"],
      grades: [],
      finalGrade: null,
      diary: "Atención integral del paciente crónico y su familia",
      imageUrl: "/images/enfermedad-cronica.jpg"
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
      commission: "Op19",
      professor: "Dr. Raras",
      schedule: "Miércoles 17:00-21:00",
      examDates: ["05/12/2024", "05/03/2025", "05/06/2025"],
      grades: [],
      finalGrade: null,
      diary: "Diagnóstico y manejo de enfermedades raras",
      imageUrl: "/images/enfermedades-raras.jpg"
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
      commission: "6A",
      professor: "Rotación por servicios",
      schedule: "Lunes a Viernes 8:00-16:00",
      examDates: ["10/12/2024", "10/03/2025", "10/06/2025"],
      grades: [],
      finalGrade: null,
      diary: "Práctica clínica supervisada en servicios hospitalarios: Clínica Médica, Cirugía, Pediatría y Toco-Ginecología",
      imageUrl: "/images/pfo.jpg"
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