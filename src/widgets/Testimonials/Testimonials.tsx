"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@shared/ui/lib/avatar";
import { testimonials } from "./Testiminials.data";
import { useAnimationConfig } from "@shared/lib/hooks";

interface TestimonialsProps {
  onContactClick?: () => void;
}

export function Testimonials({ onContactClick }: TestimonialsProps) {
  const animConfig = useAnimationConfig();

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-t from-accent/5 via-transparent to-transparent" />
      {animConfig.complexAnimations && (
        <>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
        </>
      )}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: animConfig.duration }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Отзывы</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Что говорят клиенты
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные отзывы от компаний, с которыми мы работали
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: animConfig.duration }}
            className="flex gap-6 animate-marquee"
          >
            {/* First set */}
            {testimonials.map((testimonial, index) => (
              <div key={`first-${index}`} className="shrink-0 w-[380px] group">
                <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-secondary/30 border border-border backdrop-blur-sm hover:bg-secondary/50 hover:border-accent/50 transition-all duration-300">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-accent/20 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Avatar className="w-12 h-12 border-2 border-accent/20">
                      <AvatarFallback className="bg-accent/10 text-accent">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`second-${index}`} className="shrink-0 w-[380px] group">
                <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-secondary/30 border border-border backdrop-blur-sm hover:bg-secondary/50 hover:border-accent/50 transition-all duration-300">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-accent/20 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Avatar className="w-12 h-12 border-2 border-accent/20">
                      <AvatarFallback className="bg-accent/10 text-accent">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Хотите стать нашим следующим успешным клиентом?
          </p>
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Начать проект
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
