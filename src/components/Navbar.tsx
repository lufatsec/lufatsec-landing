"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "¿Por qué LUFATSEC?", href: "#por-que-lufatsec" },
  { label: "Casos", href: "#casos-exito" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-white/10">
      <nav
        className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between"
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-white tracking-tight">
          LUFATSEC
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 items-center text-sm text-text-light font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-block bg-secondary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-teal-600 transition"
        >
          Solicita una asesoría
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-text-light"
          aria-label="Abrir menú"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 px-6 pb-4">
          <ul className="flex flex-col gap-4 text-text-light text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block w-full py-2 border-b border-white/10 hover:text-secondary transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="block w-full text-center mt-2 bg-secondary text-white py-2 rounded-xl font-semibold hover:bg-teal-600 transition"
                onClick={() => setMobileOpen(false)}
              >
                Solicita una asesoría
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
