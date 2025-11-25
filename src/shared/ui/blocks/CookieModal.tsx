"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

interface Props {
  visible: boolean;
  onAccept: () => void;
}

export function CookieModal({ visible, onAccept }: Props) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-11 max-w-[330px] bg-background border right-8 p-6 z-40 rounded-2xl"
        >
          <div className="mx-auto flex flex-col gap-6">
            <p className="text-sm">
              <span>
                Мы используем файлы cookie для работы сайта, анализа и улучшения
                сервиса. Продолжая пользоваться сайтом, вы соглашаетесь с нашей{" "}
              </span>
              <Link className="text-accent" href="/legal/privacy-policy">
                политикой использования cookie
              </Link>
            </p>
            <button
              onClick={onAccept}
              className="px-4 py-2 rounded-lg cursor-pointer bg-accent text-accent-foreground"
            >
              Принять
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
