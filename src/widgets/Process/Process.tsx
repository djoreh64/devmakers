"use client";

import { motion } from "motion/react";
import { processSteps } from "./Process.data";
import { CheckCircle2 } from "lucide-react";

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            style={{
              fontSize: "3rem",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
            className="text-foreground mb-4"
          >
            Процесс работы
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            От первого звонка до запуска продукта — прозрачный и предсказуемый
            процесс
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              const isLast = index === processSteps.length - 1;

              return (
                <div key={step.number} className="relative">
                  {/* Desktop Layout - Alternating sides */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-16 items-center">
                    {/* Left Side */}
                    {isEven ? (
                      <>
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          whileHover={{ y: -8 }}
                          className="relative p-8 rounded-2xl border border-border bg-background/50 md:backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
                        >
                          {/* Number Badge */}
                          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg">
                            <span style={{ fontSize: "1.25rem" }}>
                              {step.number}
                            </span>
                          </div>

                          {/* Icon */}
                          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                            <Icon className="w-7 h-7 text-accent" />
                          </div>

                          <h3
                            style={{ fontSize: "1.5rem" }}
                            className="text-foreground mb-3"
                          >
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {step.description}
                          </p>

                          <ul className="space-y-2">
                            {step.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          whileHover={{ y: -8 }}
                          className="relative p-8 rounded-2xl border border-border bg-background/50 md:backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
                        >
                          {/* Number Badge */}
                          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg">
                            <span style={{ fontSize: "1.25rem" }}>
                              {step.number}
                            </span>
                          </div>

                          {/* Icon */}
                          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                            <Icon className="w-7 h-7 text-accent" />
                          </div>

                          <h3
                            style={{ fontSize: "1.5rem" }}
                            className="text-foreground mb-3"
                          >
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {step.description}
                          </p>

                          <ul className="space-y-2">
                            {step.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="md:hidden relative p-8 rounded-2xl border border-border bg-background/50 md:backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg">
                      <span style={{ fontSize: "1.25rem" }}>{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    <h3
                      style={{ fontSize: "1.5rem" }}
                      className="text-foreground mb-3"
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Curved connecting lines */}
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="relative z-0 flex justify-center py-0 md:py-0"
                    >
                      {/* Desktop - alternating curved paths */}
                      <svg
                        className="hidden md:block absolute left-1/2 -translate-x-1/2 overflow-visible"
                        width="600"
                        height="120"
                        viewBox="0 0 600 120"
                        style={{ top: "-20px" }}
                      >
                        <motion.path
                          d={
                            isEven
                              ? "M 300 20 Q 250 40, 280 60 Q 310 80, 300 100"
                              : "M 300 20 Q 350 40, 320 60 Q 290 80, 300 100"
                          }
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: 0.5,
                            ease: "easeInOut",
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgb(99, 102, 241)"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="50%"
                              stopColor="rgb(99, 102, 241)"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgb(99, 102, 241)"
                              stopOpacity="0.3"
                            />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Mobile - wavy vertical path */}
                      <svg
                        className="md:hidden"
                        width="80"
                        height="100"
                        viewBox="0 0 80 100"
                      >
                        <motion.path
                          d={
                            index % 2 === 0
                              ? "M 40 10 Q 35 30, 40 50 Q 45 70, 40 90"
                              : "M 40 10 Q 45 30, 40 50 Q 35 70, 40 90"
                          }
                          stroke="url(#gradient-mobile)"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.4,
                            ease: "easeInOut",
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="gradient-mobile"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgb(99, 102, 241)"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="50%"
                              stopColor="rgb(99, 102, 241)"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgb(99, 102, 241)"
                              stopOpacity="0.3"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom gradient separator for smooth transition to CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-b from-transparent via-purple-500/3 to-accent/5 pointer-events-none" />
    </section>
  );
}
