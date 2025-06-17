"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import successAnimation from "@/assets/lotties/success-animation.json";

const cases = [
  {
    title: "Despacho Contable Ágil",
    challenge: "Procesamiento manual de XML y conciliaciones lentas.",
    solution:
      "Sistema automatizado de carga masiva XML, conciliación y reportes SAT.",
    result: "Reducción del 85% en tiempo de validación y errores fiscales.",
  },
  {
    title: "Startup de Reservas Médicas",
    challenge: "Sin sistema digital para citas ni usuarios.",
    solution:
      "Web app con control de agenda, autenticación y estadísticas.",
    result: "120% más reservas mensuales y atención optimizada.",
  },
  {
    title: "Empresa Logística Regional",
    challenge: "Seguimiento ineficiente de entregas y rutas.",
    solution:
      "App móvil con tracking, GPS y base centralizada de datos.",
    result: "40% menos incidencias y mejora trazabilidad.",
  },
];

export default function CasosExitoSection() {
  return (
    <section
      id="casos-exito"
      className="relative w-full py-20 bg-background text-white overflow-hidden"
    >
      {/* Lottie de fondo */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <Lottie animationData={successAnimation} loop={true} className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Empresas reales que confiaron en LUFATSEC y lograron transformar sus operaciones con tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-muted/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-secondary">{c.title}</h3>
              <p className="text-sm mb-1 text-text-light">
                <span className="font-medium text-white">Reto:</span> {c.challenge}
              </p>
              <p className="text-sm mb-1 text-text-light">
                <span className="font-medium text-white">Solución:</span> {c.solution}
              </p>
              <p className="text-sm text-text-light">
                <span className="font-medium text-white">Resultado:</span> {c.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
