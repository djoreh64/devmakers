"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./Work.data";
import { useAnimationConfig } from "@shared/lib/hooks";

interface WorkProps {
  onProjectClick?: (projectId: string) => void;
}

export function Work({ onProjectClick }: WorkProps) {
  const animConfig = useAnimationConfig()

  return (
    <section
      id="work"
      className="py-16 sm:py-24 lg:py-32 px-6 lg:px-8 bg-secondary/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: animConfig.duration }}
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
            Портфолио
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Реализованные решения для бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: animConfig.duration, delay: index * 0.1 }}
              whileHover={animConfig.shouldAnimate ? { y: -4 } : {}}
              onClick={() => onProjectClick?.(project.id)}
              className="group p-8 rounded-2xl border border-border bg-background/50 md:backdrop-blur-sm hover:border-accent/50 transition-all duration-300 cursor-pointer"
              style={{
                willChange: animConfig.shouldAnimate ? "transform" : "auto",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      style={{ fontSize: "1.5rem" }}
                      className="text-foreground"
                    >
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <p className="text-indigo-600 dark:text-accent font-medium mb-3">
                    {project.category}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
