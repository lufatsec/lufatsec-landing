"use client";

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SolucionesLufatsecSection from "@/components/SolucionesLufatsecSection";
import WhyLufatsecSection from "@/components/WhyLufatsecSection";
import SuccessCasesSection from "@/components/SuccessCasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FaqsSection from "@/components/FaqsSection";
import FloatingCTA from "@/components/FloatingCTA";
import VisionSection from "@/components/VisionSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center pb-28">
        <HeroSection />
        <ServicesSection />
        <SolucionesLufatsecSection />
        <WhyLufatsecSection />
        <VisionSection />
        <SuccessCasesSection />
        <TestimonialsSection />
        <FaqsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
