"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "@shared/figma/ImageWithFallback";
import { JOBS_EMAIL } from "@shared/lib/constants";
import { stats, teamCategories } from "./Team.data";

export function Team() {
  return (
    <section id="team" className="px-6 lg:px-8 bg-secondary/20 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2
            style={{
              fontSize: "3rem",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
            className="text-foreground mb-4"
          >
            Наша команда
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Профессионалы своего дела
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-center"
            >
              <div
                style={{ fontSize: "3rem", lineHeight: "1" }}
                className="text-accent mb-2"
              >
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main content: Team photo + Roles panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Team Photo - larger, takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-secondary/30 backdrop-blur-sm h-full min-h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690191863988-f685cddde463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcGhvdG8lMjBvZmZpY2V8ZW58MXx8fHwxNzYyMTA1MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Наша команда"
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p
                  className="text-foreground mb-2"
                  style={{ fontSize: "1.5rem" }}
                >
                  Команда из 15+ профессионалов
                </p>
                <p className="text-muted-foreground">
                  Мы объединили экспертизу в веб-разработке, дизайне, AI и
                  автоматизации процессов
                </p>
              </div>
            </div>

            {/* Accent glow */}
            <div className="absolute -inset-4 bg-linear-to-br from-accent/5 to-purple-500/5 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Roles Panel - takes 1 column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {teamCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="group p-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <category.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground">{category.title}</h3>
                  </div>
                  <div className="text-accent" style={{ fontSize: "1.5rem" }}>
                    {category.count}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 rounded-2xl border border-border bg-linear-to-br from-accent/5 to-transparent backdrop-blur-sm"
        >
          <h3 style={{ fontSize: "1.5rem" }} className="text-foreground mb-4">
            Хотите присоединиться?
          </h3>
          <p className="text-muted-foreground mb-6">
            Мы всегда ищем талантливых специалистов в команду
          </p>
          <motion.a
            href={`mailto:${JOBS_EMAIL}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 border border-accent text-accent rounded-full hover:bg-accent/10 transition-all duration-300"
          >
            Открытые вакансии
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
