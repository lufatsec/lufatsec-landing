"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Bot, DatabaseZap, Smartphone, FileText, Cpu } from "lucide-react";

const services = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Automatización Inteligente",
    description:
      "Bots y scripts que eliminan tareas repetitivas y aumentan tu eficiencia operativa.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Sistemas Web a Medida",
    description:
      "CRMs, ERPs o sistemas contables hechos a la medida de tu negocio.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Apps Móviles Profesionales",
    description:
      "Aplicaciones para Android y iOS conectadas a bases de datos, login y funciones clave.",
  },
  {
    icon: <DatabaseZap className="w-6 h-6" />,
    title: "Backends y APIs",
    description:
      "Microservicios y APIs RESTful robustos para conectar sistemas, apps y servicios externos.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Reportes CFDI y Facturación",
    description:
      "Recepción, validación y análisis de archivos XML conforme al SAT.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Chatbots & IA Integrada",
    description:
      "Atención automatizada con GPT, WhatsApp, Telegram y sistemas de voz.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="bg-[#0e1b2a] text-white py-section px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Servicios Profesionales
        </motion.h2>
        <p className="text-text-light max-w-3xl mx-auto mb-12">
          Soluciones tecnológicas personalizadas para automatizar, escalar y transformar tu negocio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <div className="bg-secondary text-white w-10 h-10 flex items-center justify-center rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
