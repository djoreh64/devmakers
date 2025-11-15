"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "@shared/figma/ImageWithFallback";
import { useState } from "react";
import { portfolioData } from "@shared/data/portfolioData";

type PortfolioProps = {
  category: string;
  onBack: () => void;
  onProjectClick: (category: string, index: number) => void;
};

export function Portfolio({
  category,
  onBack,
  onProjectClick,
}: PortfolioProps) {
  const data = portfolioData[category];
  const [visibleCount, setVisibleCount] = useState(6);

  if (!data) return null;

  const visibleProjects = data.projects.slice(0, visibleCount);
  const hasMore = visibleCount < data.projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="min-h-screen bg-background pt-24 px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Вернуться назад
          </button>

          <h1
            style={{
              fontSize: "3.5rem",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              overflowWrap: "break-word",
              hyphens: "auto",
            }}
            lang="ru"
            className="text-foreground mb-4"
          >
            {data.title}
          </h1>

          <p className="text-muted-foreground max-w-2xl">
            Реализованные проекты в категории «{data.title}»
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => onProjectClick(category, index)}
              className="group rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-80 md:h-64 overflow-hidden bg-secondary/20 pt-3">
                <div className="relative w-full aspect-16/10 overflow-visible">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3
                    style={{ fontSize: "1.5rem" }}
                    className="text-foreground flex-1"
                  >
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-3" />
                </div>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {project.results && (
                  <div className="mb-4 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                    <p className="text-accent">{project.results}</p>
                  </div>
                )}

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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              Загрузить еще
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
