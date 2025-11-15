"use client";

import { motion } from "motion/react";
import { Team } from "./Team";
import { Send, Mail } from "lucide-react";
import { ImageWithFallback } from "@shared/figma/ImageWithFallback";
import { SEO } from "@shared/lib/seo/SEO";
import {
  STUDIO_NAME,
  SITE_ORIGIN,
  TELEGRAM_URL,
  CONTACT_EMAIL,
} from "@shared/lib/constants";
import { achievements, culture, expertise, teamPhotos } from "./TeamPage.data";

export function TeamPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO
        title="Команда"
        description={`Познакомьтесь с командой ${STUDIO_NAME}: опытные разработчики, дизайнеры и AI-специалисты мирового уровня. 5+ лет опыта, современный стек технологий, награды и достижения.`}
        keywords="команда разработчиков, UI/UX дизайнеры, AI разработка, frontend developer, backend developer, React команда, дизайн студия"
        canonical={`${SITE_ORIGIN}/team`}
      />
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            style={{
              fontSize: "4rem",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
            className="text-foreground mb-6"
          >
            Наша команда
          </h1>
          <p
            className="text-muted-foreground max-w-3xl mx-auto"
            style={{ fontSize: "1.25rem" }}
          >
            Опытные специалисты мирового уровня в разработке, дизайне и AI
          </p>
        </motion.div>

        {/* Team Photos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {teamPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative h-96 rounded-2xl overflow-hidden group"
            >
              <ImageWithFallback
                src={photo}
                alt={`Team photo ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-foreground mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Main Team Component */}
      <Team />

      {/* Expertise */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
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
            Экспертиза команды
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Глубокие знания в современных технологиях и лучших практиках
            разработки
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((expert, index) => {
            const Icon = expert.icon;
            return (
              <motion.div
                key={expert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3
                  style={{ fontSize: "1.25rem" }}
                  className="text-foreground mb-2"
                >
                  {expert.title}
                </h3>
                <p className="text-accent mb-4">{expert.experience}</p>
                <div className="flex flex-wrap gap-2">
                  {expert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Culture */}
      <div className="bg-secondary/20 py-20">
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
              Культура и ценности
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Что делает нашу команду особенной и почему с нами приятно работать
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culture.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3
                    style={{ fontSize: "1.5rem" }}
                    className="text-foreground mb-3"
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Join CTA */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 rounded-2xl border border-border bg-linear-to-br from-accent/5 to-purple-500/5"
        >
          <h3
            style={{ fontSize: "2.5rem", lineHeight: "1.2" }}
            className="text-foreground mb-4"
          >
            Присоединяйтесь к команде
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ищем талантливых разработчиков, дизайнеров и менеджеров для работы
            над интересными проектами
          </p>
          <div className="flex items-center justify-center gap-4">
            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Telegram
            </motion.a>

            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-border bg-background/50 backdrop-blur-sm text-foreground rounded-full transition-all duration-300 hover:border-accent/50 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
