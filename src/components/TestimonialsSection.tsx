"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Mariana Torres",
    role: "Grupo Consultor MT",
    image: "https://i.pravatar.cc/150?img=3",
    quote:
      "Con LUFATSEC pudimos automatizar procesos contables que nos tomaban horas. Son expertos y muy confiables.",
  },
  {
    name: "Luis Rojas",
    role: "TechBridge Solutions",
    image: "https://i.pravatar.cc/150?img=5",
    quote:
      "Nos ayudaron a escalar nuestra plataforma de atención al cliente con una arquitectura moderna. Excelente trato y resultados.",
  },
  {
    name: "Sofía Mendoza",
    role: "Servicios Médicos Del Sur",
    image: "https://i.pravatar.cc/150?img=7",
    quote:
      "La integración de sistemas con LUFATSEC fue clave para mejorar la eficiencia operativa. Los recomiendo ampliamente.",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonios"
      className="relative w-full py-20 bg-gradient-to-b from-background to-[#0e1b2a] text-white text-center overflow-hidden"
    >
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Lo que opinan nuestros clientes
        </h2>
        <p className="text-lg text-text-light max-w-xl mx-auto">
          Cada historia es una muestra de impacto real. Conoce cómo ayudamos a empresas como la tuya.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/5 rounded-2xl p-8 shadow-xl backdrop-blur-md"
          >
            <div className="flex flex-col items-center">
              <Image
                src={testimonials[index].image}
                width={72}
                height={72}
                alt={testimonials[index].name}
                className="rounded-full border-2 border-secondary mb-4"
              />
              <p className="italic text-lg mb-4">
                "{testimonials[index].quote}"
              </p>
              <h4 className="font-bold text-xl">
                {testimonials[index].name}
              </h4>
              <p className="text-text-light">{testimonials[index].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8 gap-6">
          <button
            onClick={prevTestimonial}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 transition rounded-full"
          >
            ◀
          </button>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 transition rounded-full"
          >
            ▶
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="testimonial-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1abc9c" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1abc9c" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="25%" cy="40%" r="100" fill="url(#testimonial-bg)" />
          <circle cx="75%" cy="60%" r="80" fill="url(#testimonial-bg)" />
        </svg>
      </div>
    </section>
  );
}
