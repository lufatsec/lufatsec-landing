"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones LUFATSEC", href: "#soluciones" },
  { label: "¿Por qué LUFATSEC?", href: "#por-que-lufatsec" },
  { label: "Casos Éxito", href: "#casos-exito" },
  { label: "Testimonios", href: "#testimonios" },
  
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    console.log("Navbar montado");
    const handleScroll = () => {
      console.log("scrollY:", window.scrollY); // <-- ¿se ejecuta?
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (
          section instanceof HTMLElement &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.clientHeight > scrollPosition
        ) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={clsx(
          "transition-all duration-500 backdrop-blur",
          "bg-background/80",
          activeSection &&
            "shadow-[inset_0_0_0_rgba(255,255,255,0.05),0_1px_4px_rgba(0,209,178,0.3)] backdrop-saturate-200"
        )}
      >
        <nav
          className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between"
          role="navigation"
          aria-label="Navegación principal"
        >
          <a
            href="#hero"
            className="text-xl font-bold text-white tracking-tight"
          >
            LUFATSEC
          </a>

          <ul className="hidden md:flex gap-6 items-center text-sm text-text-light font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <div className="relative group">
                  <a
                    href={link.href}
                    className={clsx(
                      "px-3 py-1 rounded-xl transition-all duration-300 ease-in-out",
                      "group-hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/10 group-hover:backdrop-blur-sm",
                      activeSection === link.href
                        ? "text-secondary font-semibold"
                        : "text-text-light"
                    )}
                  >
                    {link.label}
                  </a>

                  {/* Burbuja / fondo animado */}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="active-link"
                      className="absolute inset-0 rounded-xl bg-secondary/20 backdrop-blur-sm ring-2 ring-secondary/30 shadow-[0_2px_10px_rgba(0,209,178,0.4)] z-[-1]"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      {/* Flare animado */}
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/70 rounded-full blur-sm animate-bubble" />
                    </motion.span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="hidden md:inline-block bg-secondary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-teal-600 transition"
          >
            Solicita una asesoría
          </a>

          <button
            className="md:hidden text-text-light"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

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
