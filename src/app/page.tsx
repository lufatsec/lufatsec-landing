"use client";

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyLufatsecSection from "@/components/WhyLufatsecSection";
import SuccessCasesSection from "@/components/SuccessCasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <ServicesSection />
        <WhyLufatsecSection />
        <SuccessCasesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
