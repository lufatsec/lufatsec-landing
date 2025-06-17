"use client";

import {
  Facebook,
  Github,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-800 text-text-light text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Marca */}
        <div className="space-y-3 col-span-2">
          <h2 className="text-xl font-bold">LUFATSEC</h2>
          <p className="text-muted text-sm">
            Tecnología útil. Hecha con propósito.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="font-semibold mb-2 text-white">Secciones</h3>
          <ul className="space-y-1">
            <li><a href="#hero" className="hover:underline">Inicio</a></li>
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#casos-exito" className="hover:underline">Casos de éxito</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h3 className="font-semibold mb-2 text-white">Síguenos</h3>
          <div className="flex gap-4 mt-1">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 hover:text-secondary transition" />
            </a>
            <a href="https://github.com/lufatsec" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 hover:text-secondary transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 hover:text-secondary transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-800 text-center py-4 text-xs text-muted">
        © {new Date().getFullYear()} LUFATSEC · Hecho en México · <a href="#" className="hover:underline">Aviso de privacidad</a>
      </div>
    </footer>
  );
}
