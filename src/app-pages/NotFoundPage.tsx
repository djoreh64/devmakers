"use client";

import { motion } from "motion/react";
import { Home, Search, ArrowRight, FileQuestion } from "lucide-react";
import { SEO } from "@shared/lib/seo/SEO";
import { STUDIO_NAME, SITE_ORIGIN } from "@shared/lib/constants";

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

const popularPages = [
  { name: "Главная", page: "home", icon: Home },
  { name: "Услуги", page: "services", icon: FileQuestion },
  { name: "Портфолио", page: "portfolio", icon: Search },
  { name: "AI-консультант", page: "ai-consultant", icon: ArrowRight },
];
export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO
        title="Страница не найдена"
        description={`Запрашиваемая страница не найдена. Вернитесь на главную или выберите один из популярных разделов ${STUDIO_NAME}.`}
        keywords="404, страница не найдена, ошибка"
        canonical={`${SITE_ORIGIN}/404`}
        robots="noindex, nofollow"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          {/* Large 404 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-8"
          >
            <h1
              className="text-[12rem] lg:text-[16rem] leading-none font-bold text-transparent bg-clip-text bg-linear-to-br from-accent via-accent/80 to-accent/40"
              style={{
                letterSpacing: "-0.05em",
              }}
            >
              404
            </h1>

            {/* Glowing effect */}
            <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none">
              <div className="w-full h-full bg-linear-to-br from-accent via-accent/80 to-accent/40"></div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground mb-4"
            style={{
              fontSize: "2.5rem",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
          >
            Страница не найдена
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-xl mx-auto mb-12"
            style={{ fontSize: "1.125rem" }}
          >
            Похоже, вы попали на несуществующую страницу. Возможно, она была
            перемещена или удалена. Давайте вернем вас в нужное место.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate("home")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20"
          >
            <Home className="w-5 h-5" />
            <span style={{ fontSize: "1.125rem" }}>На главную</span>
          </motion.button>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-px bg-border mb-12"
        />

        {/* Popular Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3
            className="text-foreground text-center mb-8"
            style={{ fontSize: "1.5rem" }}
          >
            Популярные разделы
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularPages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate(item.page)}
                  className="group p-6 rounded-2xl border border-border bg-secondary/20 hover:border-accent/50 hover:bg-secondary/40 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-foreground group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Нужна помощь?{" "}
            <button
              onClick={() => onNavigate("ai-consultant")}
              className="text-accent hover:underline transition-all duration-300"
            >
              Спросите AI-консультанта
            </button>
          </p>
        </motion.div>

        {/* Animated background elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
        </div>
      </div>
    </div>
  );
}
