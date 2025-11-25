"use client";

import { motion, AnimatePresence } from "motion/react";
import { Bot, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  cookieVisible: boolean;
}

export function FloatingChatButton({ cookieVisible }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigateToChat = () => {
    setIsOpen(false);
  };

  if (pathname === "/ai-consultant") {
    return null;
  }

  return (
    <>
      {/* Main floating button */}
      <motion.div
        layout
        initial={{ y: 50, scale: 0.6, opacity: 0 }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
          bottom: cookieVisible ? 270 : 24,
        }}
        transition={{
          y: { duration: 0.5, ease: "easeOut" },
          scale: { duration: 0.5, ease: "easeOut" },
          opacity: { duration: 0.5, ease: "easeOut" },
          bottom: { duration: 1, ease: "easeOut" },
        }}
        className="fixed right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={
            isOpen
              ? "Закрыть меню AI-консультанта"
              : "Открыть меню AI-консультанта"
          }
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent shadow-lg shadow-accent/50 flex items-center justify-center group hover:shadow-xl hover:shadow-accent/70 transition-shadow"
          style={{ willChange: "transform" }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-accent-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="bot"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-accent-foreground" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />

          {/* Notification dot */}
          {!isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"
            />
          )}
        </motion.button>
      </motion.div>

      {/* Popup menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed right-6"
            style={{ bottom: cookieVisible ? 270 + 96 : 96 }}
          >
            <div className="rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="p-6 bg-linear-to-br from-accent/10 to-transparent border-b border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg">AI-консультант</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-muted-foreground">
                        Онлайн
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Задайте любой вопрос о наших услугах, ценах и сроках
                </p>
              </div>

              {/* Quick actions */}
              <div className="p-4 space-y-2">
                <Link href="/ai-consultant" onClick={handleNavigateToChat}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-4 rounded-xl bg-accent/5 hover:bg-accent/10 border border-accent/20 hover:border-accent/40 transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-accent" />
                      <div className="flex-1">
                        <div className="text-sm mb-1">Начать чат</div>
                        <div className="text-xs text-muted-foreground">
                          Получите ответы за секунды
                        </div>
                      </div>
                      <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  </motion.div>
                </Link>

                {/* Quick questions */}
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground mb-2 px-1">
                    Популярные вопросы:
                  </p>
                  <div className="space-y-1">
                    {[
                      "Сколько стоит разработка?",
                      "Какие сроки проекта?",
                      "Есть ли техподдержка?",
                    ].map((question, index) => (
                      <Link
                        key={index}
                        href="/ai-consultant"
                        onClick={handleNavigateToChat}
                      >
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="w-full p-2 rounded-lg hover:bg-secondary/50 text-xs text-left text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                        >
                          {question}
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 bg-secondary/30 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Обычно отвечаем в течение минуты
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
