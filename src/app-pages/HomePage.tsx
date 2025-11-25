"use client";

import { CTASection } from "@widgets/CTASection";
import { Hero } from "@widgets/Hero";
import { motion } from "motion/react";
import { SITE_ORIGIN, STUDIO_NAME } from "@shared/lib/constants";
import { AIConsultantPreview } from "@widgets/AIConsultantPreview/AIConsultantPreview";
import { Clients } from "@widgets/Clients/Clients";
import { Process } from "@widgets/Process/Process";
import { SEO, organizationSchema } from "@shared/lib/seo/SEO";
import { Services } from "@widgets/Services/Services";
import { Testimonials } from "@widgets/Testimonials/Testimonials";
import { Work } from "@widgets/Work/Work";
import { Stats } from "@widgets/Stats/Stats";

interface HomePageProps {
  onNavigate?: (page: string) => void;
  onProjectClick?: (projectId: string) => void;
}

export function HomePage({ onNavigate, onProjectClick }: HomePageProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO
        title="Главная"
        description={`${STUDIO_NAME} — премиум студия веб-разработки, дизайна и AI-решений. Создаем сайты, дизайн, AI-агентов и автоматизируем бизнес-процессы. От идеи до полной реализации.`}
        keywords={`${STUDIO_NAME}, веб-разработка, создание сайтов, UI/UX дизайн, AI-агенты, чат-боты, автоматизация бизнеса, CRM системы, разработка под ключ, разработка сайта под ключ`}
        canonical={`${SITE_ORIGIN}/`}
        structuredData={organizationSchema}
      />

      {/* Ambient background gradient system */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Base gradient - full page smooth transition */}
        <div className="absolute inset-0 bg-linear-to-b from-accent/5 via-transparent to-accent/5" />

        {/* Top accent bloom */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent/8 rounded-full md:blur-[150px]"
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Left side gradient flow */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-purple-500/6 rounded-full md:blur-[120px]"
          animate={{
            opacity: [0.6, 0.8, 0.6],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Right side gradient flow */}
        <motion.div
          className="absolute top-1/2 -right-1/4 w-[900px] h-[900px] bg-accent/6 rounded-full md:blur-[140px]"
          animate={{
            opacity: [0.7, 0.9, 0.7],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Bottom accent bloom */}
        <motion.div
          className="absolute bottom-0 left-1/3 w-[1000px] h-[500px] bg-purple-500/7 rounded-full md:blur-[130px]"
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Smooth vignette overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-transparent via-50% to-background/40" />

        {/* Radial fade from edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_100%)] opacity-60" />
      </div>

      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Clients/Partners */}
      <Clients />

      {/* Services Preview */}
      <Services onNavigate={onNavigate} />

      {/* AI Consultant Preview */}
      <AIConsultantPreview onNavigate={() => onNavigate?.("ai-consultant")} />

      {/* Work Preview */}
      <Work onProjectClick={onProjectClick} />

      {/* Testimonials */}
      <Testimonials onContactClick={() => scrollToSection("contact")} />

      {/* Process Preview */}
      <Process />

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
