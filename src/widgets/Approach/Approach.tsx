"use client";

import { motion } from "motion/react";
import { principles } from "./Approach.data";

export function Approach() {
  return (
    <section id="approach" className="px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: "3rem",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
              }}
              className="text-foreground mb-6"
            >
              Как мы работаем
            </h2>
            <p
              className="text-muted-foreground mb-8"
              style={{ fontSize: "1.125rem" }}
            >
              Мы не просто создаем сайты и AI-агентов — мы решаем бизнес-задачи.
              Каждый проект начинается с глубокого понимания ваших целей и
              заканчивается измеримыми результатами.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-accent rounded-full" />
                <span className="text-foreground">Полный цикл разработки</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-accent rounded-full" />
                <span className="text-foreground">Прозрачная коммуникация</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-accent rounded-full" />
                <span className="text-foreground">Поддержка после запуска</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-secondary/30 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <principle.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
