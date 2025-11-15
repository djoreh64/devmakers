"use client";

import { motion } from "motion/react";
import { STUDIO_NAME } from "@shared/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            © {currentYear} {STUDIO_NAME} — Digital & AI решения
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
