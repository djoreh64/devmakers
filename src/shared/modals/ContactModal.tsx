"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@shared/ui/lib/dialog";
import { CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export function ContactModal({
  open,
  onOpenChange,
  title,
  description,
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", telegram: "", message: "" });
      setIsSubmitted(false);
      onOpenChange(false);
    }, 3000);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && !isSubmitted) {
      setFormData({ name: "", email: "", telegram: "", message: "" });
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className={`
    sm:max-w-[767px] bg-background border-border p-0 overflow-hidden
    max-h-[90vh] flex flex-col
    transition-all
    ${open ? "dialog-enter" : "dialog-exit"}
  `}
      >
        <DialogHeader className="p-8 sm:p-8 sm:pb-0 shrink-0">
          <DialogTitle className="text-foreground text-xl sm:text-2xl md:text-3xl">
            {title || "Готовы начать проект?"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2 text-sm sm:text-base">
            {description ||
              "Оставьте заявку и мы свяжемся с вами в течение 24 часов"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 sm:gap-8 p-4 md:p-8 pt-2 overflow-y-auto">
          {/* Contact Form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-foreground mb-2"
                  >
                    Заявка отправлена!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-muted-foreground text-center"
                  >
                    Мы свяжемся с вами в течение 24 часов
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="modal-name"
                        className="block text-foreground mb-2"
                      >
                        Как к вам обращаться?{" "}
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-foreground"
                        placeholder="Иван"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="modal-email"
                        className="block text-foreground mb-2"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-foreground"
                        placeholder="ivan@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="modal-telegram"
                      className="block text-foreground mb-2"
                    >
                      Telegram или номер телефона{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="modal-telegram"
                      value={formData.telegram}
                      onChange={(e) =>
                        setFormData({ ...formData, telegram: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-foreground"
                      placeholder="@username или +79991234567"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-message"
                      className="block text-foreground mb-2"
                    >
                      Сообщение
                    </label>
                    <textarea
                      id="modal-message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-accent transition-colors resize-none text-foreground"
                      placeholder="Расскажите о вашем проекте..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                        />
                        Отправка...
                      </>
                    ) : (
                      "Отправить заявку"
                    )}
                  </motion.button>
                  <div className="text-muted-foreground mt-2 text-center">
                    <span>*Нажимая на кнопку, вы даете согласие </span>
                    <Link href="/legal/privacy-policy" className="text-accent">
                      на обработку персональных данных
                    </Link>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Direct Contact */}
          {/* <div className="space-y-4">
            <div>
              <h3 className="text-foreground mb-2">Или свяжитесь напрямую</h3>
              <p className="text-muted-foreground mb-6">
                Выберите удобный для вас способ связи
              </p>
            </div>

            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-5 border border-border bg-secondary/30 rounded-xl hover:border-accent/50 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Send className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-foreground">Telegram</div>
                <div className="text-muted-foreground">
                  @{TELEGRAM_URL.replace("https://t.me/", "")}
                </div>
              </div>
            </motion.a>

            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-5 border border-border bg-secondary/30 rounded-xl hover:border-accent/50 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-foreground">Email</div>
                <div className="text-muted-foreground">{CONTACT_EMAIL}</div>
              </div>
            </motion.a>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
