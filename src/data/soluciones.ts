import {
  Cpu,
  BarChart3,
  FileSearch,
  Bot,
  ShieldCheck,
  ScrollText,
} from "lucide-react";

export const soluciones = [
  {
    slug: "cfdi-intelligence",
    nombre: "CFDI Intelligence",
    icon: FileSearch,
    descripcion:
      "Valida, concilia y analiza XMLs automáticamente con reportes SAT avanzados.",
    beneficios: [
      "Carga masiva de XMLs",
      "Conformidad fiscal 100%",
      "Alertas automáticas",
    ],
    cta: "Ver más",
    contenido: `CFDI Intelligence es una herramienta especializada para empresas que manejan grandes volúmenes de comprobantes fiscales (XML). Automatiza la validación contra el SAT, genera reportes personalizados y permite la conciliación entre facturas emitidas y recibidas, así como sus complementos de pago. El sistema detecta inconsistencias, facturas duplicadas o canceladas, y emite alertas en tiempo real para asegurar una gestión fiscal eficiente y sin errores.

Entre sus funciones se encuentran:
- Validación masiva contra el SAT.
- Detección de CFDIs con problemas de estructura o uso indebido.
- Conciliación entre CFDIs tipo ingreso y complemento de pago.
- Reportes descargables en Excel o PDF.
- Panel de control con métricas clave.`.trim(),
  },
  {
    slug: "business-dashboards",
    nombre: "Business Dashboards",
    icon: BarChart3,
    descripcion:
      "Visualiza tus KPIs, ventas, clientes y proyecciones en tiempo real.",
    beneficios: [
      "Conexión a Excel o API",
      "Reportes personalizados",
      "Panel por área",
    ],
    cta: "Ver más",
    contenido: `Business Dashboards transforma tus datos en visualizaciones claras y accionables. Se conecta fácilmente con archivos Excel, APIs o bases de datos internas para mostrar paneles actualizados en tiempo real, adaptados a cada área de la empresa.

Ideal para gerentes, directores y analistas que necesitan tomar decisiones informadas basadas en indicadores clave (KPIs), permite configurar reportes por área: ventas, finanzas, marketing, operaciones, entre otros. También incluye funciones de proyección y comparación histórica.`.trim(),
  },
  {
    slug: "inventario-rapido",
    nombre: "Inventario Rápido",
    icon: Cpu,
    descripcion:
      "Controla tus existencias, entradas/salidas y alertas de stock en la nube.",
    beneficios: [
      "Alertas de stock mínimo",
      "Multi-sucursal",
      "Lectura con QR",
    ],
    cta: "Ver más",
    contenido: `Inventario Rápido es un sistema ligero, veloz y en la nube que permite gestionar tu inventario de manera centralizada. Podrás registrar entradas, salidas y transferencias entre sucursales, con reportes de existencias en tiempo real.

Incluye lectura de códigos QR, alertas de stock mínimo, control de lotes y fechas de caducidad. Además, permite integrar diferentes niveles de usuario para supervisión, operación o consulta. Perfecto para retail, almacenes, distribuidores y centros logísticos.`.trim(),
  },
  {
    slug: "autobot-admin",
    nombre: "AutoBot Admin",
    icon: Bot,
    descripcion:
      "Bots inteligentes para atención automática por WhatsApp, Telegram y Web.",
    beneficios: [
      "Soporte 24/7",
      "Flujos personalizables",
      "Integración GPT/IA",
    ],
    cta: "Ver demo",
    contenido: `AutoBot Admin te permite desplegar asistentes virtuales inteligentes para brindar atención automática a tus clientes en distintos canales como WhatsApp, Telegram y páginas web.

Diseñado con flujos personalizables y lógica condicional, el bot puede atender consultas frecuentes, tomar pedidos, brindar soporte técnico y escalar a agentes humanos cuando sea necesario. Además, puedes integrar modelos de lenguaje como GPT para respuestas más naturales y contextuales.`.trim(),
  },
  {
    slug: "secureaccess-pro",
    nombre: "SecureAccess Pro",
    icon: ShieldCheck,
    descripcion:
      "Sistema de control de accesos, visitantes y empleados en tiempo real.",
    beneficios: ["QR y RFID", "Bitácora automática", "Alertas por anomalías"],
    cta: "Ver más",
    contenido: `SecureAccess Pro es un sistema profesional para gestionar el ingreso y salida de personal, visitantes o vehículos en instalaciones empresariales o institucionales. Controla accesos con códigos QR, tarjetas RFID o reconocimiento facial.

Genera bitácoras automáticas, identifica anomalías (como entradas fuera de horario o accesos no autorizados) y emite alertas configurables. Su dashboard centralizado permite supervisión en tiempo real, y es ideal para oficinas, plantas, escuelas o edificios corporativos.`.trim(),
  },
  {
    slug: "firma-digital-express",
    nombre: "Firma Digital Express",
    icon: ScrollText,
    descripcion:
      "Generación y firma de documentos digitales de forma rápida y legal.",
    beneficios: [
      "Validación de identidad",
      "Historial seguro",
      "Plantillas personalizadas",
    ],
    cta: "Ver más",
    contenido: `Firma Digital Express permite generar, enviar y firmar documentos legales de forma segura desde cualquier dispositivo. Compatible con normativas legales y estándares criptográficos, facilita procesos de contratación, acuerdos, autorizaciones y más.

Puedes crear plantillas, integrar validación de identidad (INE, selfie, token), y mantener un historial detallado de accesos y firmas. Es ideal para empresas que necesitan procesos legales rápidos, seguros y sin papeleo.`.trim(),
  },
];
