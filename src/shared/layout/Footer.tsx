"use client";

import { motion } from "motion/react";
import { CONTACT_EMAIL, STUDIO_NAME } from "@shared/lib/constants";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const docs = [
    {
      title: "Политика конфиденциальности",
      url: "/legal/privacy-policy",
    },
    {
      title: "Согласие на обработку данных",
      url: "/legal/processing-consent",
    },
    {
      title: "Пользовательское соглашение",
      url: "/legal/user-agreement",
    },
  ];

  return (
    <footer className="border-t border-border px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col">
          <div className="flex items-center md:justify-end justify-center md:text-left text-center py-9">
            <section className="flex flex-col gap-3.5">
              <h3>Документы</h3>
              <ul className="flex flex-col gap-3.5 text-muted-foreground">
                {docs.map(({ title, url }) => (
                  <li key={title} className="hover:text-white transition">
                    <Link href={url}>{title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="flex items-center justify-between py-9 border-y">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[20px]">
              {CONTACT_EMAIL}
            </a>
            <a
              href="https://t.me/devmakers"
              className="h-[54px] w-[54px] flex items-center justify-center bg-[#73AFFF]/10 hover:bg-[#73AFFF]/20 transition border border-[#73AFFF]/10 rounded-xl"
            >
              <svg
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.0822 0.177381L1.39475 9.16525C-0.406242 9.73591 -0.406242 10.7346 1.0673 11.0199L7.7801 12.8745L10.3997 19.7224C10.7272 20.4358 10.5635 20.7211 11.3821 20.7211C12.037 20.7211 12.3645 20.4358 12.6919 20.1504C12.8556 20.0078 14.3292 18.7238 15.9664 17.2971L22.843 21.7197C24.1528 22.2904 24.9714 22.0051 25.2989 20.7211L29.8832 2.03202C30.3744 0.46271 29.2283 -0.393278 28.0822 0.177381ZM24.644 4.45732L11.8733 14.5865L11.3821 19.2944L8.76246 12.4465L23.8253 4.17199C24.4802 3.744 25.1351 4.02933 24.644 4.45732Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="flex md:flex-row flex-col gap-3 items-center justify-between py-9">
            <small className="text-muted-foreground">
              <Link href="/legal/privacy-policy">
                152-ФЗ «О персональных данных»
              </Link>
            </small>
            <small className="text-muted-foreground">
              © {currentYear} {STUDIO_NAME} — Digital & AI решения
            </small>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
