import { ImageWithFallback } from "@shared/figma/ImageWithFallback";
import { generateBreadcrumbSchema, SEO } from "@shared/lib/seo/SEO";
import { CTASection } from "@widgets/CTASection";
import { Grid3x3, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  categories,
  portfolioProjects,
  tagCategories,
} from "./PortfolioPage.data";
import { SITE_ORIGIN } from "@shared/lib/constants";

interface PortfolioCategoryProps {
  onCategoryClick: (category: string) => void;
  onNavigate?: (page: string) => void;
}

const allTags = Array.from(
  new Set(portfolioProjects.flatMap((p) => p.tags))
).sort();

export function PortfolioPage({
  onCategoryClick,
  onNavigate,
}: PortfolioCategoryProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Главная", url: SITE_ORIGIN },
    { name: "Портфолио", url: `${SITE_ORIGIN}/portfolio` },
  ]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setActiveCategory("all");
    setSelectedTags([]);
    setSortBy("newest");
  };

  const filteredProjects = useMemo(() => {
    let filtered = portfolioProjects;

    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((p) =>
        selectedTags.every((tag) => p.tags.includes(tag))
      );
    }

    const sorted = [...filtered];
    switch (sortBy) {
      case "newest":
        sorted.sort((a, b) => b.year - a.year);
        break;
      case "oldest":
        sorted.sort((a, b) => a.year - b.year);
        break;
      case "a-z":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return sorted;
  }, [activeCategory, selectedTags, sortBy]);

  const hasActiveFilters =
    activeCategory !== "all" || selectedTags.length > 0 || sortBy !== "newest";

  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <SEO
        title="Портфолио"
        description="120+ успешных проектов studio.ai в веб-разработке, дизайне, AI-агентах и автоматизации. Работаем со стартапами и крупными корпорациями. Примеры наших работ и кейсы."
        keywords="портфолио веб-разработка, примеры сайтов, кейсы дизайна, примеры AI-проектов, выполненные работы, интернет-магазины, корпоративные сайты"
        canonical="https://studio.ai/portfolio"
        structuredData={breadcrumbSchema}
      />

      <div className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Grid3x3 className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent text-sm">Портфолио</span>
            </motion.div>

            <h1
              style={{
                fontSize: "3.5rem",
                lineHeight: "1.1",
                letterSpacing: "-0.025em",
              }}
              className="text-foreground mb-5 max-w-4xl mx-auto"
            >
              Наши работы
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Избранные проекты в области веб-разработки, дизайна, AI и
              автоматизации.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-8"
          >
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 rounded-xl bg-secondary/20 border border-border">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-foreground">Фильтр по технологиям</h3>
                      {selectedTags.length > 0 && (
                        <button
                          onClick={() => setSelectedTags([])}
                          className="text-sm text-accent hover:text-accent/80 transition-colors"
                        >
                          Очистить теги
                        </button>
                      )}
                    </div>

                    <div className="space-y-6">
                      {Object.entries(tagCategories).map(
                        ([categoryName, categoryTags]) => {
                          const availableTags = categoryTags.filter((tag) =>
                            allTags.includes(tag)
                          );
                          if (availableTags.length === 0) return null;

                          return (
                            <div key={categoryName}>
                              <h4 className="text-sm text-muted-foreground mb-3">
                                {categoryName}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {availableTags.map((tag) => (
                                  <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                                      selectedTags.includes(tag)
                                        ? "bg-accent text-white shadow-lg shadow-accent/25"
                                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    }`}
                                  >
                                    {tag}
                                  </button>
                                ))}
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-8"
          >
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    px-5 py-2.5 rounded-full text-sm transition-all duration-300
                    ${
                      activeCategory === category.id
                        ? "bg-accent text-white shadow-lg shadow-accent/25"
                        : "bg-secondary/30 text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }
                  `}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "проект" : "проектов"}
              </span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  Сбросить все
                </button>
              )}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.a
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                      <div className="relative aspect-4/3 overflow-hidden bg-secondary/20">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-background/80 backdrop-blur-sm border border-border">
                          <span className="text-xs text-muted-foreground">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {project.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full text-center py-20"
                >
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                      <Grid3x3 className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-foreground mb-2">Проекты не найдены</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Попробуйте изменить фильтры
                    </p>
                    <button
                      onClick={clearFilters}
                      className="px-5 py-2.5 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
                    >
                      Сбросить фильтры
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
