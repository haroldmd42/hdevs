export const categories = [
  { id: 'all', label: 'Todos los Proyectos' },
  { id: 'qa', label: 'QA & Automatización' },
  { id: 'dev', label: 'Desarrollo Web & Tools' },
  { id: 'extension', label: 'Extensiones de Navegador' },
];

export const projectsData = [
  {
    id: 'qa-tools',
    title: 'QA Tools & Productivity Suite',
    subtitle: 'Plataforma Integral de Productividad para QA & Desarrolladores',
    category: ['qa', 'dev'],
    featured: true,
    badge: 'Suite QA & Dev • 18+ Módulos',
    badgeType: 'coral',
    iconType: 'qatools',
    isPrivate: false,
    description:
      'Plataforma integral con más de 18 utilidades diseñadas para acelerar el ciclo de vida de calidad de software y desarrollo. Integra IA Generativa para casos de prueba BDD Gherkin y exportación directa a Azure DevOps, simulador multi-viewport en tiempo real, generador de datos colombianos (NIT con DV, Cédulas, tarjetas Luhn), evaluador Regex, decodificador JWT, convertidor multimedia en el navegador y academia de preparación ISTQB®.',
    highlights: [
      'Suite IA para QA: Conversión de requerimientos a escenarios BDD Gherkin, matrices de prueba y scripts Playwright/Cypress',
      'Simulador Responsive Multi-Pantalla en vivo con marcos reales (+15 dispositivos móvil, tablet y desktop)',
      'QA Faker Colombia: Generación de NIT con DV DIAN, Cédulas, teléfonos (+57) y biblioteca de archivos mock',
      'Desarrollo & Seguridad: Inspector JWT local, comparador visual Diff, evaluador Regex y convertidor de datos (JSON/XML/YAML/CSV)',
      'Academia & Cursos QA: Formación interactiva ISTQB® con narrador de voz natural y simulacros de certificación puntuados'
    ],
    tags: ['React', 'GenAI (Gemini)', 'Playwright & Cypress', 'Responsive Testing', 'QA Faker CO', 'JWT Security', 'ISTQB Prep'],
    demoUrl: 'https://haroldmd42.github.io/contador_caracteres/',
    githubUrl: 'https://github.com/haroldmd42/contador_caracteres',
    role: 'Arquitectura & Desarrollo Frontend',
  },
  {
    id: 'state-news',
    title: 'Azure DevOps Real-Time Notifier',
    subtitle: 'Extensión de Navegador (Chrome & Edge) • Manifest V3',
    category: ['extension', 'qa', 'dev'],
    featured: true,
    badge: 'Extensión Destacada',
    badgeType: 'coral',
    iconType: 'extension',
    isPrivate: false,
    description:
      'Extensión profesional basada en Manifest V3 para Google Chrome, Edge y Brave enfocada en monitorización en tiempo real de Historias de Usuario (HU) y Bugs en Azure DevOps. Incorpora toasts in-page, alertas nativas del sistema operativo, sonido personalizado vía offscreen document, filtro fuzzy matching de usuarios y portal web de opciones con simulador de eventos en vivo.',
    highlights: [
      'Arquitectura Manifest V3 con Background Service Workers y Offscreen Documents para audio',
      'Monitoreo de flujo de QA: "In QA", "Testing", "Review PO", "Blocked" y reapertura de Bugs',
      'Filtro Fuzzy Matching para asignaciones individuales y roles de equipo',
      'Panel de control interactivo con 11 eventos de prueba en tiempo real'
    ],
    tags: ['Chrome Extension', 'Manifest V3', 'Azure DevOps API', 'JavaScript', 'Web APIs', 'Service Workers'],
    demoUrl: null,
    githubUrl: 'https://github.com/haroldmd42/state_news.git',
    role: 'Desarrollo & Arquitectura',
  },
  {
    id: 'aut-kanoa',
    title: 'Framework de Automatización con Playwright',
    subtitle: 'Suite de Pruebas E2E & Regresión en Producción',
    category: ['qa'],
    featured: true,
    badge: 'Playwright E2E Suite',
    badgeType: 'coral',
    iconType: 'playwright',
    isPrivate: true,
    privateLabel: 'Proyecto de Producción • Confidencial (NDA)',
    description:
      'Framework modular de pruebas automatizadas End-to-End con Playwright implementando el patrón Page Object Model (POM). Diseñado para ejecutar suites de pruebas paralelas y multi-navegador (Chromium, Firefox, WebKit), con aserciones resilientes a esperas dinámicas y generación de reportes HTML enriquecidos.',
    highlights: [
      'Patrón Page Object Model (POM) para alta mantenibilidad y escalabilidad',
      'Ejecución multi-browser en paralelo (Chromium, Firefox, WebKit)',
      'Captura automática de evidencias (screenshots en fallos y videos de ejecución)',
      'Integración en pipelines de CI/CD para validación continua'
    ],
    tags: ['Playwright', 'Test Automation', 'Page Object Model', 'E2E Testing', 'JavaScript', 'CI/CD'],
    demoUrl: null,
    githubUrl: null,
    role: 'Automatización de Pruebas',
  },
  {
    id: 'automatizacion-redpavi',
    title: 'Automatización de Flujos Críticos Web',
    subtitle: 'Suite de Pruebas Funcionales & Regresión',
    category: ['qa'],
    featured: false,
    badge: 'QA Automation',
    badgeType: 'slate',
    iconType: 'testing',
    isPrivate: true,
    privateLabel: 'Proyecto de Producción • Confidencial (NDA)',
    description:
      'Suite de automatización orientada a la validación de flujos de negocio críticos y pruebas de regresión sobre aplicaciones web en entornos empresariales, minimizando riesgos en despliegues a producción y asegurando la estabilidad del sistema.',
    highlights: [
      'Validación automatizada de escenarios de usuario y flujos transaccionales',
      'Reducción drástica en tiempos de pruebas de regresión manual',
      'Aserciones de integridad y consistencia de datos'
    ],
    tags: ['QA Testing', 'Regression Testing', 'JavaScript', 'Test Cases', 'Business Logic'],
    demoUrl: null,
    githubUrl: null,
    role: 'Automatización & QA',
  },
  {
    id: 'bot-page',
    title: 'Motor de Automatización & Web Bot',
    subtitle: 'Automatización de Tareas y Procesos con Python',
    category: ['qa', 'dev'],
    featured: false,
    badge: 'Python Bot',
    badgeType: 'slate',
    iconType: 'python',
    isPrivate: true,
    privateLabel: 'Proyecto de Producción • Confidencial (NDA)',
    description:
      'Motor de automatización desarrollado en Python para navegación programática, extracción estructurada de información y ejecución recurrente de validaciones web con manejo resiliente de errores y trazabilidad.',
    highlights: [
      'Scripts autónomos para extracción y verificación de datos en plataformas web',
      'Manejo robusto de errores, tiempos de espera y cabeceras dinámicas',
      'Optimización de procesos repetitivos para equipos de operaciones y pruebas'
    ],
    tags: ['Python', 'Web Automation', 'Bot Scripting', 'QA Tasks', 'Data Scraping'],
    demoUrl: null,
    githubUrl: null,
    role: 'Desarrollo de Automatización',
  }
];
