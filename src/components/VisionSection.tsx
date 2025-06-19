"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import visionAnimation from "@/assets/lotties/vision-animation.json";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="w-full py-20 px-6 md:px-16 lg:px-24 bg-background text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Animación izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <Lottie
            animationData={visionAnimation}
            className="w-full h-auto max-h-[360px]"
          />
        </motion.div>

        {/* Texto derecho */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nuestra <span className="text-secondary">Visión</span>
          </h2>
          <p className="text-xl text-white/80 mb-6">
            En LUFATSEC creemos que la tecnología debe tener un propósito:
            simplificar, impulsar y conectar.
          </p>
          <p className="text-md text-white/60">
            Soñamos con un mundo donde las empresas escalen sin fricciones, con
            herramientas digitales a su medida, seguras y realmente inteligentes.
            No hacemos software por hacerlo: lo diseñamos para transformar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
