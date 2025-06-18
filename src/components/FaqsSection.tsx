"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

const faqs = [
  {
    question: "¿Qué servicios ofrece LUFATSEC?",
    answer:
      "LUFATSEC ofrece soluciones de software a medida, automatización de procesos, desarrollo web, y consultoría en ciberseguridad e infraestructura cloud.",
  },
  {
    question: "¿Trabajan con empresas de cualquier tamaño?",
    answer:
      "Sí. Adaptamos nuestras soluciones a startups, pymes y corporativos. Nuestra experiencia es flexible y escalable según el cliente.",
  },
  {
    question: "¿Tienen experiencia en proyectos con altos estándares de seguridad?",
    answer:
      "Sí. Contamos con experiencia en sectores que exigen alta seguridad, incluyendo financiero, salud y gobierno, aplicando normativas ISO y OWASP.",
  },
  {
    question: "¿Cómo puedo solicitar una asesoría personalizada?",
    answer:
      "Puedes contactarnos mediante el formulario de contacto o escribirnos directamente por WhatsApp. Te responderemos en menos de 24h.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Usamos tecnologías modernas como Next.js, Node.js, Firebase, Tailwind, AWS y herramientas de inteligencia artificial y automatización.",
  },
];

export default function FaqsSection() {
  return (
    <section
      id="faqs"
      className="w-full py-20 px-6 md:px-16 lg:px-24 bg-background text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Lottie animada a la izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <Player
            autoplay
            loop
            src="https://lottie.host/6efab4cc-ff14-4c88-8051-c29e252bff2f/VNoe5a7WmN.json"
            style={{ height: "360px", width: "360px" }}
          />
        </motion.div>

        {/* Preguntas a la derecha */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-white/70">
            Resolvemos las dudas más comunes de nuestros clientes.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div
                    className={clsx(
                      "border rounded-xl transition-all duration-300",
                      open
                        ? "border-accent bg-white/10"
                        : "border-white/10 bg-white/5"
                    )}
                  >
                    <Disclosure.Button className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-white/10 transition-colors">
                      <span className="font-medium">{faq.question}</span>
                      <ChevronDown
                        className={clsx(
                          "h-5 w-5 text-accent transition-transform",
                          open && "rotate-180"
                        )}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 pb-5 text-sm text-white/80">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
