// app/components/ContactoSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import contactAnimation from "@/assets/lotties/contact-us.json";

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Gracias por tu mensaje. Te contactaremos pronto.");
    setFormData({ nombre: "", correo: "", empresa: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-background text-white relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Listo para escalar tu negocio?</h2>
          <p className="text-lg text-text-light mb-8">
            Contáctanos hoy mismo y recibe una asesoría gratuita sin compromiso.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="text"
              name="empresa"
              placeholder="Empresa (opcional)"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-teal-500 transition-colors py-3 px-6 rounded-lg font-semibold"
            >
              Enviar mensaje
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Lottie animationData={contactAnimation} className="w-full h-auto max-h-[400px]" />
        </motion.div>
      </div>
    </section>
  );
}
