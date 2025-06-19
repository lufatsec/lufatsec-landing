"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Lottie from "lottie-react";
import whyLufatsecAnimation from "@/assets/lotties/por-que-lufatsec2.json";

export default function WhyLufatsecSection() {
  const differentiators = [
    "Automatización con propósito real",
    "Soluciones 100% personalizadas",
    "Enfoque en eficiencia y resultados",
    "Seguridad y escalabilidad garantizadas",
    "Trato cercano y consultoría experta",
    "Visión humana + tecnología inteligente",
  ];

  return (
    <section
      id="por-que-lufatsec"
      className="w-full py-20 bg-background text-white px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto izquierdo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            ¿Por qué <span className="text-secondary">LUFATSEC</span>?
          </h2>
          <p className="text-xl text-text-light mb-6">
            Tecnología útil, hecha con propósito. Creamos soluciones que
            combinan automatización, inteligencia y diseño para ayudarte a
            crecer sin complicaciones.
          </p>

          <ul className="space-y-3 mb-8">
            {differentiators.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-secondary mt-1" size={20} />
                <span className="text-lg text-white">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#vision"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-500 transition-all duration-300"
          >
            Conoce nuestra visión
          </a>
        </motion.div>

        {/* Animación derecha */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <Lottie
            animationData={whyLufatsecAnimation}
            loop
            autoplay
            className="w-full max-w-[360px] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
