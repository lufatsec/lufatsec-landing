"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import contactAnimation from "@/assets/lotties/contact-us.json";

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const urlWebApp =
        "https://script.google.com/macros/s/AKfycbyNhkdKqDt5ab2cEn4Sr0l7arGAr53OtQE03y0qaAuePzS3XDkVAYt7rsUyOlNwdGn14Q/exec";

      const res = await fetch(urlWebApp, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Mensaje enviado con éxito ✅");
        setFormData({ nombre: "", correo: "", empresa: "", mensaje: "" });
      } else {
        toast.error("Error al enviar. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      toast.error("No se pudo enviar el formulario. Revisa tu conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      className="py-20 px-6 bg-background text-white relative"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para escalar tu negocio?
          </h2>
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
              disabled={loading}
              className="w-full bg-secondary hover:bg-teal-500 transition-colors py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                "Enviar mensaje"
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Lottie
            animationData={contactAnimation}
            className="w-full h-auto max-h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
