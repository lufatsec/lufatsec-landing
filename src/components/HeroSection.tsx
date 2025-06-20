"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-gradient-to-br from-background via-[#0f2637] to-[#0e1b2a] text-white flex items-center justify-center px-6"
    >
      {/* Elementos visuales decorativos */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="radial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1abc9c" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1abc9c" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="20%" cy="30%" r="80" fill="url(#radial)">
            <animate
              attributeName="cy"
              values="30%;35%;30%"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="80%" cy="60%" r="60" fill="url(#radial)">
            <animate
              attributeName="cy"
              values="60%;55%;60%"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Contenido central animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-xl">
          Soluciones digitales para empresas que quieren escalar con eficiencia
        </h1>
        <p className="text-lg md:text-xl text-text-light mb-8 max-w-2xl mx-auto">
          Software a medida, automatización inteligente e integración segura en la nube.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#contacto"
            className="bg-secondary hover:bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
          >
            Solicita una asesoría gratuita
          </a>
          <a
            href="#servicios"
            className="border border-white hover:bg-white hover:text-background text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition-all duration-300"
          >
            Ver servicios
          </a>
        </div>
      </motion.div>
    </section>
  );
}
