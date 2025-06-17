"use client";

import { motion } from "framer-motion";
import { Cpu, BarChart3, FileSearch, Rocket, Settings2, Zap, Bot, ShieldCheck, ScrollText } from "lucide-react";

const soluciones = [
    {
      icon: <FileSearch className="w-6 h-6" />,
      nombre: "CFDI Intelligence",
      descripcion:
        "Valida, concilia y analiza XMLs automáticamente con reportes SAT avanzados.",
      beneficios: ["Carga masiva de XMLs", "Conformidad fiscal 100%", "Alertas automáticas"],
      cta: "Solicitar demo",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      nombre: "Business Dashboards",
      descripcion:
        "Visualiza tus KPIs, ventas, clientes y proyecciones en tiempo real.",
      beneficios: ["Conexión a Excel o API", "Reportes personalizados", "Panel por área"],
      cta: "Ver más",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      nombre: "Inventario Rápido",
      descripcion:
        "Controla tus existencias, entradas/salidas y alertas de stock en la nube.",
      beneficios: ["Alertas de stock mínimo", "Multi-sucursal", "Lectura con QR"],
      cta: "Solicitar demo",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      nombre: "AutoBot Admin",
      descripcion:
        "Bots inteligentes para atención automática por WhatsApp, Telegram y Web.",
      beneficios: ["Soporte 24/7", "Flujos personalizables", "Integración GPT/IA"],
      cta: "Ver demo",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      nombre: "SecureAccess Pro",
      descripcion:
        "Sistema de control de accesos, visitantes y empleados en tiempo real.",
      beneficios: ["QR y RFID", "Bitácora automática", "Alertas por anomalías"],
      cta: "Solicitar demo",
    },
    {
      icon: <ScrollText className="w-6 h-6" />,
      nombre: "Firma Digital Express",
      descripcion:
        "Generación y firma de documentos digitales de forma rápida y legal.",
      beneficios: ["Validación de identidad", "Historial seguro", "Plantillas personalizadas"],
      cta: "Ver más",
    },
  ];
  

export default function SolucionesLufatsecSection() {
  return (
    <section
      id="soluciones"
      className="py-section bg-[#0e1b2a] text-white px-6 md:px-16 relative"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Soluciones LUFATSEC
        </motion.h2>
        <p className="text-text-light max-w-3xl mx-auto mb-12">
          Sistemas listos para usar que resuelven problemas clave en tu empresa y se adaptan a tu operación.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {soluciones.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-lg hover:shadow-xl backdrop-blur-md"
            >
              <div className="bg-secondary text-white w-10 h-10 flex items-center justify-center rounded-full mb-4 mx-auto">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{sol.nombre}</h3>
              <p className="text-sm text-text-light mb-4 min-h-[60px]">
                {sol.descripcion}
              </p>
              <ul className="text-sm text-white/80 mb-4 space-y-1">
                {sol.beneficios.map((b, i) => (
                  <li key={i} className="before:content-['✔'] before:text-secondary before:mr-2">
                    {b}
                  </li>
                ))}
              </ul>
              <button className="mt-auto px-4 py-2 text-sm font-medium rounded-md bg-secondary hover:bg-secondary/90 transition">
                {sol.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
