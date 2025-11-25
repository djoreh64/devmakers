"use client";

import { motion } from "motion/react";
import { Services } from "@widgets/Services/Services";
import { Check } from "lucide-react";
import { ImageWithFallback } from "@shared/figma/ImageWithFallback";
import { CTASection } from "@widgets/CTASection";
import { SEO, servicesSchema } from "@shared/lib/seo/SEO";
import { PageHeading, PageDescription } from "@shared/ui/lib/Typography";
import { benefits, serviceDetails, technologies } from "./ServicesPage.data";
import { fadeInUp } from "@shared/lib/motionConfig";
import { SITE_ORIGIN, STUDIO_NAME } from "@shared/lib/constants";

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO
        title="Услуги"
        description={`Комплексные digital-решения от ${STUDIO_NAME}: веб-разработка, UI/UX дизайн, AI-агенты и автоматизация бизнес-процессов. Быстрый запуск, качество кода, поддержка 24/7.`}
        keywords="услуги веб-разработки, UI/UX дизайн, создание сайтов, разработка AI-агентов, чат-боты, автоматизация бизнеса, CRM системы, Next.js, React"
        canonical={`https://${SITE_ORIGIN}/services`}
        structuredData={servicesSchema}
      />
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <PageHeading variants={fadeInUp}>Наши услуги</PageHeading>
          <PageDescription variants={fadeInUp}>
            Комплексные решения для вашего бизнеса: от идеи до готового продукта
          </PageDescription>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Main Services */}
      <Services />

      {/* Detailed Services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "3rem",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          }}
          className="text-foreground mb-16 text-center"
        >
          Что входит в услуги
        </motion.h2>

        <div className="space-y-12">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-80 rounded-2xl overflow-hidden ${
                    !isEven ? "lg:col-start-2" : ""
                  }`}
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent" />
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                  <h3
                    style={{ fontSize: "2rem", lineHeight: "1.2" }}
                    className="text-foreground mb-4"
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-muted-foreground mb-6"
                    style={{ fontSize: "1.125rem" }}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-secondary/20 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              style={{
                fontSize: "3rem",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
              }}
              className="text-foreground mb-4"
            >
              Технологии
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Используем проверенный стек технологий для создания надежных
              решений
            </p>
          </motion.div>

          {/* Infinite Marquee */}
          <div className="relative">
            <div className="flex gap-4 animate-marquee">
              {/* First set */}
              {technologies.map((tech) => (
                <div
                  key={`first-${tech.name}`}
                  className="shrink-0 px-6 py-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm"
                >
                  <div className="text-muted-foreground whitespace-nowrap">
                    {tech.name}
                  </div>
                  <div className="text-accent whitespace-nowrap">
                    {tech.category}
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {technologies.map((tech) => (
                <div
                  key={`second-${tech.name}`}
                  className="shrink-0 px-6 py-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm"
                >
                  <div className="text-muted-foreground whitespace-nowrap">
                    {tech.name}
                  </div>
                  <div className="text-accent whitespace-nowrap">
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
