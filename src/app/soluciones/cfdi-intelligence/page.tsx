"use client";

import { motion } from "framer-motion";
import { soluciones } from "@/data/soluciones";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function CFDIIntelligencePage() {
  const slug = "cfdi-intelligence";
  const solucion = soluciones.find((s) => s.slug === slug);

  if (!solucion) return notFound();

  const Icon = solucion.icon;

  return (
    <section className="min-h-screen bg-background text-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
              <Icon className="w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold">{solucion.nombre}</h1>
          </div>

          <p className="text-lg text-text-light mb-6">{solucion.descripcion}</p>

          <div className="text-white/80 leading-relaxed mb-8 whitespace-pre-line">
            {solucion.contenido}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Beneficios clave:</h2>
          <ul className="space-y-2 mb-8">
            {solucion.beneficios.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-secondary mt-1" size={18} />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-500 transition-all"
          >
            {solucion.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
