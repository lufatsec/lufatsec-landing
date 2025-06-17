"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";
import successAnimation from "@/assets/lotties/success-animation.json";

const cases = [
  {
    title: "Despacho Contable Ágil",
    challenge: "Procesamiento manual de XML y conciliaciones lentas.",
    solution: "Sistema automatizado de carga masiva XML, conciliación y reportes SAT.",
    result: "Reducción del 85% en tiempo de validación y errores fiscales.",
  },
  {
    title: "Startup de Reservas Médicas",
    challenge: "Sin sistema digital para citas ni usuarios.",
    solution: "Web app con control de agenda, autenticación y estadísticas.",
    result: "120% más reservas mensuales y atención optimizada.",
  },
  {
    title: "Empresa Logística Regional",
    challenge: "Seguimiento ineficiente de entregas y rutas.",
    solution: "App móvil con tracking, GPS y base centralizada de datos.",
    result: "40% menos incidencias y mejora trazabilidad.",
  },
];

export default function CasosExitoSection() {
  return (
    <section
      id="casos-exito"
      className="relative w-full py-24 bg-background text-white overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-5 z-0 pointer-events-none">
        <Lottie animationData={successAnimation} loop={true} className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 border-b-4 border-secondary inline-block pb-2">
            Casos de Éxito
          </h2>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Empresas reales que confiaron en <span className="text-secondary font-semibold">LUFATSEC</span> y lograron transformar sus operaciones con tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, rotate: 0.2 }}
              transition={{ type: "spring", stiffness: 180, damping: 18, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary"
            >
              <h3 className="text-2xl font-bold text-secondary mb-4 text-center group-hover:scale-[1.02] transition-transform">
                {c.title}
              </h3>
              <div className="space-y-3 text-sm text-text-light">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="text-yellow-400 mt-0.5 shrink-0" size={18} />
                  <p>
                    <span className="text-white font-medium">Reto:</span> {c.challenge}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Lightbulb className="text-blue-400 mt-0.5 shrink-0" size={18} />
                  <p>
                    <span className="text-white font-medium">Solución:</span> {c.solution}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={18} />
                  <p>
                    <span className="text-white font-medium">Resultado:</span> {c.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
