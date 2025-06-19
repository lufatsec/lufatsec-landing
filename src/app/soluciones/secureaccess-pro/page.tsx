"use client";

import { motion } from "framer-motion";
import { soluciones } from "@/data/soluciones"; // Ajusta la ruta si está en otro lugar
import { CheckCircle } from "lucide-react";

const solucion = soluciones.find((s) => s.slug === "secureaccess-pro");

export default function SecureAccessProPage() {
  if (!solucion) return <div>Solución no encontrada</div>;

  return (
    <section className="min-h-screen px-6 py-20 md:px-16 lg:px-24 bg-background text-white">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full">
              <solucion.icon className="w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold">{solucion.nombre}</h1>
          </div>

          <p className="text-text-light text-lg">{solucion.descripcion}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">¿Qué beneficios ofrece?</h2>
          <ul className="space-y-2">
            {solucion.beneficios.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-white/90">
                <CheckCircle className="text-secondary" size={18} />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Más información</h2>
          <p className="text-white/80 leading-relaxed whitespace-pre-line">
            {solucion.contenido}
          </p>
        </motion.div>

        <div className="pt-6">
          <a
            href="#contacto"
            className="inline-block bg-secondary hover:bg-teal-500 transition-all text-white px-6 py-3 rounded-xl font-semibold"
          >
            {solucion.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
