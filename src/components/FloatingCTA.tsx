"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const WhatsAppIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="currentColor"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.001 2.667c-7.362 0-13.333 5.97-13.333 13.333 0 2.352.618 4.651 1.785 6.675L2.667 29.333l6.873-1.755A13.26 13.26 0 0 0 16 29.333c7.363 0 13.334-5.97 13.334-13.333 0-7.363-5.971-13.333-13.333-13.333Zm0 24a10.657 10.657 0 0 1-5.43-1.5l-.388-.229-4.082 1.042 1.102-3.972-.253-.408a10.658 10.658 0 1 1 9.051 5.067Zm5.9-7.861c-.323-.162-1.906-.938-2.202-1.044-.295-.107-.51-.162-.724.162-.215.323-.831 1.045-1.02 1.26-.188.215-.377.242-.7.08-.324-.162-1.369-.504-2.607-1.607-.963-.86-1.612-1.92-1.802-2.244-.188-.322-.02-.496.143-.658.147-.146.324-.378.485-.567.161-.19.214-.324.323-.54.108-.215.054-.404-.027-.567-.08-.162-.724-1.747-.992-2.399-.262-.63-.527-.544-.724-.553l-.615-.01c-.215 0-.567.08-.864.378s-1.135 1.11-1.135 2.706 1.162 3.138 1.324 3.355c.162.215 2.285 3.487 5.541 4.892.774.334 1.377.535 1.847.684.775.247 1.48.212 2.037.129.621-.093 1.906-.779 2.177-1.531.27-.753.27-1.398.188-1.53-.08-.134-.295-.215-.617-.378Z" />
  </svg>
);

export default function FloatingCTA() {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBadge(true);
    }, 8000);

    const onScroll = () => {
      clearTimeout(timeout);
      setShowBadge(false);
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="https://wa.me/5215587654321?text=Hola,%20quiero%20una%20asesoría%20con%20LUFATSEC"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatea con nosotros por WhatsApp"
        className="group relative bg-accent w-14 h-14 aspect-square rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
      >
        <WhatsAppIcon />

        {/* Tooltip (solo visible en hover desktop) */}
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white text-background text-xs font-semibold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow hidden sm:inline">
          ¿Tienes dudas?
        </span>

        {/* Badge animado */}
        {showBadge && (
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
            y: 0,
            boxShadow: "0 0 0px rgba(0, 217, 166, 0.0)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -4, 0],
            boxShadow: [
              "0 0 0px rgba(0, 217, 166, 0.0)",
              "0 0 6px rgba(0, 217, 166, 0.6)",
              "0 0 0px rgba(0, 217, 166, 0.0)",
            ],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className={`
            text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-accent shadow-md
            absolute 
            sm:-top-2 sm:-right-2 
            top-0 right-0 translate-x-1/4 -translate-y-1/4
          `}
        >
          Nuevo 💬
        </motion.div>
                       
        
        )}
      </Link>
    </motion.div>
  );
}
