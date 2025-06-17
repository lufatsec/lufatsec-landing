"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Bot,
  DatabaseZap,
  Smartphone,
  FileText,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automatización Inteligente",
    description:
      "Bots y scripts que eliminan tareas repetitivas y aumentan tu eficiencia operativa.",
  },
  {
    icon: MonitorSmartphone,
    title: "Sistemas Web a Medida",
    description:
      "CRMs, ERPs o sistemas contables hechos a la medida de tu negocio.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles Profesionales",
    description:
      "Aplicaciones para Android y iOS conectadas a bases de datos, login y funciones clave.",
  },
  {
    icon: DatabaseZap,
    title: "Backends y APIs",
    description:
      "Microservicios y APIs RESTful robustos para conectar sistemas, apps y servicios externos.",
  },
  {
    icon: FileText,
    title: "Reportes CFDI y Facturación",
    description:
      "Recepción, validación y análisis de archivos XML conforme al SAT.",
  },
  {
    icon: Cpu,
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
          className="text-3xl md:text-4xl font-extrabold mb-4"
        >
          Servicios Profesionales
        </motion.h2>
        <p className="text-text-light max-w-3xl mx-auto mb-12 text-lg">
          Soluciones tecnológicas personalizadas para automatizar, escalar y transformar tu negocio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#121f30] border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] relative overflow-hidden cursor-pointer"
              >
                <div className="bg-secondary/90 text-white w-12 h-12 flex items-center justify-center rounded-full mb-5 group-hover:rotate-6 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {service.description}
                </p>

                {/* Decorativo: luz en fondo */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-500 opacity-10 rounded-full blur-2xl pointer-events-none group-hover:opacity-20 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="#contacto"
            className="inline-block bg-secondary text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-500 transition-all duration-300 text-lg shadow-md"
          >
            ¿Listo para automatizar tu empresa? Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
