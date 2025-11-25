"use client";

import { trackAIConsultant } from "@shared/lib/analytics";
import { SITE_ORIGIN, STUDIO_NAME } from "@shared/lib/constants";
import { Bot, Lock, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SEO } from "@utils/seo/SEO";
import { validateTelegramOrPhone } from "./AiConsultant.utils";
import { Header } from "./Header";
import { InfoBanner } from "./InfoBanner";
import QuickQuestions from "./QuickQuestions";
import { useAIChat } from "./hooks/useAIChat";
import { ChatMessage } from "@shared/ui/blocks/ChatMessage";

export default function AIConsultantPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [telegramInput, setTelegramInput] = useState("");
  const [validationError, setValidationError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const { messages, isTyping, sendMessage } = useAIChat();

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check if chat was previously unlocked
  useEffect(() => {
    const savedTelegram = localStorage.getItem("ai_consultant_telegram");
    if (savedTelegram) setIsUnlocked(true);
  }, []);

  // Scroll chat to bottom on new messages or typing
  useEffect(() => {
    if (hasInteracted && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping, hasInteracted]);

  const handleTelegramInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTelegramInput(e.target.value);
    if (validationError) setValidationError("");
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateTelegramOrPhone(telegramInput);

    if (!validation.isValid) {
      setValidationError(validation.error || "Неверный формат");
      return;
    }

    localStorage.setItem("ai_consultant_telegram", telegramInput.trim());
    setIsUnlocked(true);
    setValidationError("");
    trackAIConsultant("chat_unlocked");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setHasInteracted(true);
    sendMessage(inputValue);
    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO
        title="AI-консультант"
        description={`Задайте вопрос AI-консультанту ${STUDIO_NAME} и получите мгновенные ответы о наших услугах, ценах, сроках разработки и технологиях. Интерактивный чат-бот работает 24/7.`}
        keywords="AI консультант, чат-бот, онлайн консультация, вопросы о разработке, стоимость сайта, сроки проекта, технологии разработки"
        canonical={`${SITE_ORIGIN}/ai-consultant`}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Header />

        <div className="flex flex-col-reverse gap-6 sm:flex-col sm:gap-8">
          {/* Quick Questions */}
          <QuickQuestions isUnlocked={isUnlocked} />

          {/* Chat Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-border bg-secondary/20 backdrop-blur-sm overflow-hidden relative"
          >
            {/* Messages */}
            <div
              ref={messagesContainerRef}
              className={`h-[500px] sm:h-[600px] overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 transition-all duration-500 ${
                !isUnlocked ? "blur-sm pointer-events-none" : ""
              }`}
            >
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 sm:gap-3"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div className="px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-background/50 border border-border">
                    <div className="flex gap-1">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay,
                          }}
                          className="w-2 h-2 rounded-full bg-accent"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div
              className={`border-t border-border p-3 sm:p-4 bg-background/50 transition-all duration-500 ${
                !isUnlocked ? "blur-sm pointer-events-none" : ""
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex gap-2 sm:gap-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Задайте вопрос..."
                    maxLength={300}
                    className="flex-1 min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-accent-foreground rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 sm:gap-2 shrink-0"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden xs:inline sm:inline">
                      Отправить
                    </span>
                  </button>
                </div>
                {inputValue.length > 0 && (
                  <div className="flex justify-end">
                    <span
                      className={`text-xs ${
                        inputValue.length >= 300
                          ? "text-red-500"
                          : "text-muted-foreground"
                      }`}
                    >
                      {inputValue.length}/300
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Unlock Overlay */}

            <AnimatePresence>
              {!isUnlocked && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center p-6 z-10"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="max-w-md w-full mx-4"
                  >
                    <div className="bg-secondary/50 rounded-2xl border border-border p-5 sm:p-8 shadow-2xl">
                      <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 mx-auto mb-4 sm:mb-6">
                        <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                      </div>
                      <h3
                        className="text-foreground text-center mb-2 sm:mb-3"
                        style={{ fontSize: "1.25rem" }}
                      >
                        Доступ к AI-консультанту
                      </h3>
                      <p className="text-muted-foreground text-center mb-5 sm:mb-6 text-sm sm:text-base">
                        Укажите ваш Telegram, чтобы получить доступ к чату
                      </p>
                      <form
                        onSubmit={handleUnlock}
                        className="space-y-3 sm:space-y-4"
                      >
                        <input
                          type="text"
                          value={telegramInput}
                          onChange={handleTelegramInputChange}
                          placeholder="@username или +79001234567"
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background/50 border rounded-xl focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground text-sm sm:text-base ${
                            validationError
                              ? "border-red-500 focus:border-red-500"
                              : "border-border focus:border-accent"
                          }`}
                          required
                        />
                        {validationError && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-500 text-xs sm:text-sm mt-2"
                          >
                            {validationError}
                          </motion.p>
                        )}
                        <button
                          type="submit"
                          className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-accent-foreground rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          Начать общение
                        </button>
                      </form>
                    </div>
                </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <InfoBanner />
      </div>
    </div>
  );
}
