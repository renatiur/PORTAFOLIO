Portfolio.projects = [
  {
    "id": 1,
    "slug": "control-accesos-zona-primaria",
    "title": "Control de Accesos",
    "subtitle": "Zona Primaria",
    "shortDescription": "Trazabilidad y control de accesos operativos, desde el registro hasta los reportes.",
    "description": "Sistema de Control de Accesos – Zona Primaria. Una solución empresarial para registrar, consultar y dar seguimiento a los accesos operativos mediante una aplicación web MVC y una API REST.",
    "category": "Web",
    "categories": [
      "Web",
      "Backend",
      "API",
      "Oracle"
    ],
    "status": "Implementado / Producción",
    "technologies": [
      "C#",
      ".NET 5",
      "ASP.NET MVC",
      "REST API",
      "Swagger",
      "Oracle",
      "JavaScript",
      "HTML",
      "CSS",
      "IIS"
    ],
    "features": [
      "Backend API y aplicación web MVC",
      "Gestión de accesos y detalle de registros",
      "Gestión de usuarios con roles Administrador y Operador",
      "Filtros de búsqueda y catálogos dinámicos",
      "Exportación a Excel y PDF",
      "Autenticación y publicación en IIS"
    ],
    "problem": "Centralizar el registro de accesos y facilitar el seguimiento de las operaciones con permisos diferenciados.",
    "solution": "Una aplicación MVC conectada a una API REST, con persistencia en Oracle, control por roles y generación de reportes.",
    "role": "Desarrollo de funcionalidades web y backend, consultas de datos, reportes y publicación de la aplicación.",
    "challenges": [
      "Mantener la consistencia entre registros y catálogos.",
      "Aplicar los permisos de cada rol en los flujos de consulta y gestión.",
      "Integrar los reportes y la publicación en IIS."
    ],
    "results": [
      "Registro y consulta de accesos en una misma solución.",
      "Información exportable para el seguimiento operativo.",
      "Acceso diferenciado para administradores y operadores."
    ],
    "architecture": [
      "ASP.NET MVC",
      "REST API · C#",
      "Lógica de negocio",
      "Acceso a datos",
      "Oracle"
    ],
    "learned": "La importancia de separar las responsabilidades del backend, validar los datos y diseñar permisos consistentes en toda la aplicación.",
    "year": null,
    "mainImage": "assets/images/projects/control-accesos-zona-primaria.svg",
    "images": [],
    "imageCaption": "Vista conceptual · No corresponde a una captura del sistema real."
  },
  {
    "id": 2,
    "slug": "alertas-declaraciones-juradas",
    "title": "Alertas de Declaraciones",
    "subtitle": "Gestión de vencimientos",
    "shortDescription": "Declaraciones juradas y alertas programadas para anticipar cada vencimiento.",
    "description": "Sistema de Alertas de Declaraciones Juradas. Centraliza documentos y fechas de vencimiento, con recordatorios por correo a 45, 15, 7, 3 y 1 día del vencimiento.",
    "category": "Automatización",
    "categories": [
      "Automatización",
      "Backend",
      "API",
      "Oracle"
    ],
    "status": "Caso profesional",
    "technologies": [
      "C#",
      "VB.NET",
      "Oracle",
      "SMTP",
      "REST API",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "features": [
      "Registro de usuarios y gestión de declaraciones",
      "Carga de documentos PDF",
      "Alertas a 45, 15, 7, 3 y 1 día",
      "Notificaciones por correo mediante SMTP",
      "Gestión de vencimientos",
      "Roles Administrador y Operador",
      "Reportes Excel"
    ],
    "problem": "Dar seguimiento a múltiples vencimientos y disponer de la documentación necesaria para cada declaración.",
    "solution": "Gestión centralizada de declaraciones con recordatorios escalonados, documentos asociados y consulta por roles.",
    "role": "Diseño e implementación del sistema automatizado de alertas para Declaraciones Juradas de Intereses y Rentas, incluyendo la lógica de notificaciones por correo electrónico.",
    "challenges": [
      "Calcular correctamente las ventanas de aviso.",
      "Relacionar documentos y declaraciones.",
      "Mantener consistencia en los estados de vencimiento."
    ],
    "results": [
      "Vencimientos disponibles para consulta centralizada.",
      "Recordatorios asociados a plazos definidos.",
      "Documentos y reportes accesibles desde la aplicación.",
      "Automatización de aproximadamente el 90 % del proceso manual previo de alertas, según la experiencia documentada en el CV."
    ],
    "architecture": [
      "Aplicación web",
      "REST API",
      "Servicio de alertas",
      "Oracle",
      "SMTP · Correo"
    ],
    "learned": "Diseñar automatizaciones exige reglas de tiempo claras y un tratamiento cuidadoso de los estados y las notificaciones.",
    "year": null,
    "mainImage": "assets/images/projects/alertas-declaraciones-juradas.svg",
    "images": [],
    "imageCaption": "Vista conceptual · No corresponde a una captura del sistema real."
  },
  {
    "id": 3,
    "slug": "integracion-api-paqueteria",
    "title": "API de Paquetería",
    "subtitle": "Integración de servicios",
    "shortDescription": "Comunicación entre sistemas de paquetería mediante servicios SOAP y validación XML.",
    "description": "Integración API Paquetería. Transferencia y recepción de información operativa mediante servicios web, ampliando estructuras de intercambio y validando los mensajes XML.",
    "category": "Integraciones",
    "categories": [
      "Integraciones",
      "API",
      "Backend",
      "Oracle"
    ],
    "status": "Caso profesional",
    "technologies": [
      "C#",
      ".NET",
      "WCF",
      "SOAP",
      "XML",
      "Oracle"
    ],
    "features": [
      "Servicios SOAP de inserción y consulta de eventos",
      "Validación de XML y estructuras de intercambio",
      "Incorporación de campos de identificación de equipos",
      "Integración entre sistemas de paquetería"
    ],
    "problem": "Intercambiar información de paquetería entre sistemas con contratos de datos y estructuras definidas.",
    "solution": "Servicios WCF/SOAP con validación de XML y adaptación de campos para los procesos de inserción y búsqueda de eventos.",
    "role": "Mantenimiento de servicios, incorporación de campos y validación de estructuras de intercambio.",
    "challenges": [
      "Conservar la compatibilidad de los contratos.",
      "Validar mensajes antes del procesamiento.",
      "Gestionar campos opcionales y errores de estructura."
    ],
    "results": [
      "Estructuras ampliadas para el intercambio de información.",
      "Validaciones de formato en los servicios.",
      "Comunicación entre los sistemas participantes."
    ],
    "architecture": [
      "Sistema consumidor",
      "SOAP · XML",
      "Servicios WCF",
      "Validación y negocio",
      "Oracle"
    ],
    "learned": "Los contratos de integración deben evolucionar con cuidado para mantener la compatibilidad y facilitar el diagnóstico de errores.",
    "year": null,
    "mainImage": "assets/images/projects/integracion-api-paqueteria.svg",
    "images": [],
    "imageCaption": "Vista conceptual · No corresponde a una captura del sistema real."
  },
  {
    "id": 4,
    "slug": "representantes-comerciales",
    "title": "Representantes Comerciales",
    "subtitle": "Gestión operativa y financiera",
    "shortDescription": "Oficinas, recargas, ventas y envíos conectados en un sistema empresarial integral.",
    "description": "Sistema de Representantes Comerciales. Gestión integral de representantes, oficinas, recargas, operaciones, liquidaciones y envíos nacionales e internacionales, conectando procesos operativos, financieros y aduaneros.",
    "category": "Backend",
    "categories": [
      "Backend",
      "Web",
      "Oracle",
      "SAP",
      "Integraciones"
    ],
    "status": "Caso profesional",
    "technologies": [
      "VB.NET",
      "C#",
      "ASP.NET",
      "Oracle Database",
      "PL/SQL",
      "Crystal Reports",
      "SAP",
      "Servicios Web",
      "APIs"
    ],
    "features": [
      "Registro de representantes y asociación de usuarios",
      "Gestión de oficinas, sedes y modalidades de recarga",
      "Historial y trazabilidad de recargas",
      "Interacción entre representantes y cajeros con notificaciones en tiempo real",
      "Control de ventas y reportes de admisiones",
      "Alertas por saldo bajo",
      "Finanzas: operaciones pendientes, validadas y anuladas",
      "Control de vigencia y bloqueo por periodicidad",
      "Reportes mediante Crystal Reports",
      "Gestión de deuda y liquidaciones",
      "Integración financiera con SAP",
      "CDS y declaraciones aduaneras para envíos internacionales",
      "Integración de admisión internacional con Aduanas",
      "Servicios web y APIs empresariales",
      "Filtrado avanzado de admisiones y envíos por representante bajo un esquema multiempresa"
    ],
    "problem": "Conectar el trabajo de representantes, cajeros y administración manteniendo trazabilidad operativa y financiera.",
    "solution": "Módulos integrados de gestión comercial, finanzas, reportes y admisión internacional con comunicación entre sistemas empresariales.",
    "role": "Responsable del sistema RRCC: soporte técnico y desarrollo de requerimientos. Liderazgo del desarrollo de RRCC WEB para la gestión de admisiones nacionales e internacionales.",
    "challenges": [
      "Sincronizar los estados de las operaciones.",
      "Mantener trazabilidad de recargas y liquidaciones.",
      "Integrar procesos financieros y aduaneros."
    ],
    "results": [
      "Consulta centralizada de representantes y operaciones.",
      "Seguimiento de saldos, deuda y movimientos.",
      "Información integrada para procesos financieros y envíos."
    ],
    "architecture": [
      "Portal ASP.NET",
      "Servicios Web · APIs",
      "Módulos de negocio",
      "Oracle · PL/SQL",
      "SAP / CDS"
    ],
    "learned": "Los sistemas empresariales requieren reglas de negocio explícitas y trazabilidad en cada transición de estado.",
    "year": null,
    "mainImage": "assets/images/projects/representantes-comerciales.svg",
    "images": [],
    "imageCaption": "Vista conceptual · No corresponde a una captura del sistema real."
  },
  {
    "id": 5,
    "slug": "sap-transferencias",
    "title": "Transferencias SAP",
    "subtitle": "Integración financiera",
    "shortDescription": "Movimientos financieros y validaciones contables para la transferencia de datos a SAP.",
    "description": "Integración SAP – Transferencias. Módulo de transferencia de información financiera, con validaciones contables, tratamiento de errores y procesamiento por lotes.",
    "category": "SAP",
    "categories": [
      "SAP",
      "Integraciones",
      "Backend",
      "Oracle"
    ],
    "status": "Caso profesional",
    "technologies": [
      "VB.NET",
      "C#",
      "SAP .NET Connector",
      "Oracle",
      "SQL"
    ],
    "features": [
      "Transferencia de movimientos, aranceles y comisiones",
      "Validación de cuentas contables",
      "Indicadores tributarios y validación de documentos",
      "Manejo de errores SAP",
      "Procesamiento de lotes"
    ],
    "problem": "Transferir información financiera a SAP respetando las reglas contables y documentales del proceso.",
    "solution": "Un módulo de integración con SAP .NET Connector que valida los datos y procesa movimientos por lotes.",
    "role": "Desarrollo y mantenimiento de transferencias, validaciones contables y tratamiento de respuestas de SAP.",
    "challenges": [
      "Interpretar y manejar respuestas de error.",
      "Validar cuentas e indicadores tributarios.",
      "Seguir el resultado de cada movimiento del lote."
    ],
    "results": [
      "Flujo de transferencia con validaciones previas.",
      "Tratamiento de errores de integración.",
      "Procesamiento agrupado de movimientos."
    ],
    "architecture": [
      "Aplicación .NET",
      "Validación contable",
      "Oracle · SQL",
      "SAP .NET Connector",
      "SAP"
    ],
    "learned": "En una integración financiera, la consistencia y la trazabilidad son tan importantes como la transferencia de los datos.",
    "year": null,
    "mainImage": "assets/images/projects/sap-transferencias.svg",
    "images": [],
    "imageCaption": "Vista conceptual · No corresponde a una captura del sistema real."
  },
  {
    "id": 6,
    "slug": "fondo-presupuestal",
    "title": "Fondo Presupuestal",
    "subtitle": "Control de movimientos",
    "shortDescription": "Fondos, kardex y reportes conectados con procesos financieros en SAP.",
    "description": "Sistema empresarial de Fondo Presupuestal para gestionar movimientos, consultar kardex, generar reportes y transferir información mediante servicios WCF e integración con SAP.",
    "category": "SAP",
    "categories": [
      "SAP",
      "Backend",
      "Oracle",
      "Integraciones"
    ],
    "status": "Caso profesional",
    "technologies": [
      "C#",
      "VB.NET",
      "Oracle",
      "WCF",
      "SAP",
      "Crystal Reports"
    ],
    "features": [
      "Gestión de movimientos presupuestales",
      "Transferencias hacia SAP",
      "Reportes mediante Crystal Reports",
      "Consulta de kardex",
      "Integración mediante servicios WCF"
    ],
    "problem": "Disponer de un seguimiento organizado de los fondos y su relación con los procesos financieros.",
    "solution": "Gestión de movimientos con consultas de kardex, reportes e integración de servicios con SAP.",
    "role": "Administración y mantenimiento evolutivo y correctivo del Fondo Presupuestal, con mejoras en la gestión de fondos de sedes a nivel nacional y las transferencias hacia SAP.",
    "challenges": [
      "Relacionar movimientos y reportes.",
      "Mantener consistencia en las transferencias.",
      "Integrar servicios WCF con las aplicaciones existentes."
    ],
    "results": [
      "Movimientos y kardex disponibles para seguimiento.",
      "Reportes del fondo presupuestal.",
      "Integración con procesos financieros en SAP."
    ],
    "architecture": [
      "Aplicación .NET",
      "Servicios WCF",
      "Lógica presupuestal",
      "Oracle",
      "SAP"
    ],
    "learned": "Una estructura clara de movimientos facilita la generación de reportes y la integración con sistemas financieros.",
    "year": null,
    "mainImage": "assets/images/projects/fondo-presupuestal.svg",
    "images": [],
    "imageCaption": "Vista conceptual · No corresponde a una captura del sistema real."
  },
  {
    "id": 7,
    "slug": "portal-web-comercial",
    "title": "Portal Web Comercial",
    "subtitle": "Aplicación empresarial",
    "shortDescription": "Evolución de funcionalidades web y conexión con servicios empresariales.",
    "description": "Mantenimiento y desarrollo de funcionalidades de un portal web comercial empresarial, combinando ASP.NET con interfaces HTML, CSS y JavaScript y consumo de APIs REST.",
    "category": "Web",
    "categories": [
      "Web",
      "API",
      "Backend"
    ],
    "status": "Caso profesional",
    "technologies": [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "REST API"
    ],
    "features": [
      "Mantenimiento de funcionalidades del portal",
      "Desarrollo de interfaces web",
      "Integración con APIs REST",
      "Validaciones de formularios y flujos de usuario"
    ],
    "problem": "Adaptar un portal empresarial a nuevas necesidades y mantener sus funcionalidades existentes.",
    "solution": "Evolución de componentes del portal e integración de servicios, conservando la coherencia de los flujos de uso.",
    "role": "Participación en la administración y publicación de contenidos institucionales: eventos, campañas y resoluciones en el portal comercial y GOB.PE.",
    "challenges": [
      "Extender funcionalidades existentes.",
      "Gestionar estados y errores de los servicios.",
      "Mantener coherencia en la interfaz."
    ],
    "results": [
      "Funcionalidades web mantenidas y ampliadas.",
      "Servicios integrados en los flujos del portal.",
      "Validaciones en la interacción con el usuario."
    ],
    "architecture": [
      "HTML · CSS · JavaScript",
      "ASP.NET · C#",
      "REST API",
      "Servicios empresariales"
    ],
    "learned": "Mantener una aplicación requiere comprender los flujos existentes antes de introducir nuevas funcionalidades.",
    "year": null,
    "mainImage": "assets/images/projects/portal-web-comercial.svg",
    "images": [],
    "imageCaption": "Vista conceptual · No corresponde a una captura del sistema real."
  },
  {
    "id": 8,
    "slug": "control-stock",
    "title": "Control de Stock",
    "subtitle": "Proyecto personal · Marzo – julio 2023",
    "shortDescription": "Gestión de productos con Java y Spring Boot, autenticación por roles y persistencia en MySQL.",
    "description": "Sistema personal de control de stock desarrollado entre marzo y julio de 2023. Integra gestión de productos, autenticación y vistas web responsivas mediante Spring Boot, Spring Security, Spring Data JPA y Thymeleaf.",
    "problem": "Organizar la gestión de productos en una aplicación con acceso diferenciado y validación de datos.",
    "solution": "Una aplicación MVC dividida en controladores, servicios y repositorios, con autenticación mediante Spring Security y persistencia en MySQL.",
    "role": "Desarrollo del proyecto personal: autenticación, control por roles, gestión CRUD de productos, persistencia, validaciones e interfaz responsiva.",
    "challenges": [
      "Separar responsabilidades entre Controller, Service y Repository.",
      "Configurar relaciones entre entidades y consultas personalizadas.",
      "Integrar seguridad por roles con controladores y vistas."
    ],
    "results": [
      "Login, registro y control de acceso por roles implementados.",
      "Operaciones CRUD de productos disponibles desde la interfaz web.",
      "Validación de entradas mediante Hibernate Validator.",
      "Interfaz responsiva con Bootstrap."
    ],
    "category": "Web",
    "categories": [
      "Web",
      "Backend",
      "API"
    ],
    "year": 2023,
    "status": "Proyecto personal",
    "context": "Proyecto personal",
    "technologies": [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Thymeleaf",
      "MySQL",
      "Hibernate Validator",
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    "features": [
      "Login y registro de usuarios",
      "Control de acceso por roles",
      "Gestión CRUD de productos",
      "Relaciones entre entidades y consultas personalizadas",
      "Validaciones con Hibernate Validator",
      "Controladores REST y vistas Thymeleaf",
      "Interfaz responsiva con Bootstrap"
    ],
    "mainImage": "assets/images/projects/control-stock.svg",
    "imageCaption": "Vista conceptual · No corresponde a una captura del sistema real.",
    "images": [],
    "architecture": [
      "Thymeleaf · Bootstrap",
      "Controller · Spring Security",
      "Service · Spring Boot",
      "Repository · Spring Data JPA",
      "MySQL"
    ],
    "learned": "La separación en capas, la validación de datos y el control de acceso facilitan el mantenimiento de una aplicación de gestión."
  }
];
