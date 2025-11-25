"use client";

import { CONTACT_EMAIL, TELEGRAM_URL } from "@shared/lib/constants";
import { useAnimationConfig } from "@shared/lib/hooks";
import { throttle } from "@shared/lib/performance";
import { ChevronDown, Mail, Menu, Moon, Send, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { Logo } from "../ui/atoms/Logo";

const portfolioItems = [
  {
    category: "Веб разработка",
    items: [
      { label: "Лендинги", key: "landings" },
      { label: "Корпоративные сайты", key: "corporate" },
      { label: "Интернет-магазины", key: "ecommerce" },
      { label: "Веб-приложения", key: "webapps" },
    ],
  },
  {
    category: "Дизайн",
    items: [
      { label: "UI/UX дизайн", key: "uiux" },
      { label: "Логотипы", key: "logos" },
      { label: "Брендинг", key: "branding" },
      { label: "Дизайн-системы", key: "designsystems" },
    ],
  },
  {
    category: "AI-агенты",
    items: [
      { label: "Чат-боты", key: "chatbots" },
      { label: "Telegram боты", key: "telegrambots" },
      { label: "Голосовые ассистенты", key: "voiceassistants" },
      { label: "Автоматизация поддержки", key: "aisupport" },
    ],
  },
  {
    category: "Автоматизация",
    items: [
      { label: "CRM системы", key: "crm" },
      { label: "Email-маркетинг", key: "emailmarketing" },
      { label: "Интеграции", key: "integrations" },
      { label: "Аналитика", key: "analytics" },
    ],
  },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const animConfig = useAnimationConfig();

  useEffect(() => {
    // Throttle scroll handler for better performance
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setMobilePortfolioOpen(false); // Close portfolio submenu when mobile menu closes
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleItemClick = () => {
    setShowPortfolio(false);
    setMobileMenuOpen(false);
  };

  const handleNavigate = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
              <Logo width={32} height={32} />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/services"
              className={`text-muted-foreground hover:text-foreground transition-colors duration-300 relative ${
                isActive("/services") ? "text-foreground" : ""
              }`}
            >
              Услуги
              {isActive("/services") && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Pricing temporarily hidden */}
            {/* <Link
              href="/pricing"
              className={`text-muted-foreground hover:text-foreground transition-colors duration-300 relative ${
                isActive("/pricing") ? "text-foreground" : ""
              }`}
            >
              Цены
              {isActive("/pricing") && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link> */}

            <div
              className="relative"
              onMouseEnter={() => setShowPortfolio(true)}
              onMouseLeave={() => setShowPortfolio(false)}
            >
              <Link
                href="/portfolio"
                className={`flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-300 relative ${
                  pathname?.startsWith("/portfolio") ? "text-foreground" : ""
                }`}
              >
                Портфолио
                <ChevronDown className="w-4 h-4" />
                {pathname?.startsWith("/portfolio") && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Dropdown menu */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: showPortfolio ? 1 : 0,
                  y: showPortfolio ? 0 : 10,
                  pointerEvents: showPortfolio ? "auto" : "none",
                }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setShowPortfolio(true)}
                onMouseLeave={() => setShowPortfolio(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
              >
                <div className="w-[600px] p-6 rounded-2xl border border-border bg-background/95 md:backdrop-blur-xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {portfolioItems.map((section) => (
                      <div key={section.category}>
                        <h3 className="text-foreground mb-3">
                          {section.category}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item.key}>
                              <Link
                                href={`/portfolio/${item.key}`}
                                onClick={handleItemClick}
                                className="text-muted-foreground hover:text-accent transition-colors duration-300 text-left w-full block"
                              >
                                • {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <Link
              href="/ai-consultant"
              className={`text-muted-foreground hover:text-foreground transition-colors duration-300 relative ${
                isActive("/ai-consultant") ? "text-foreground" : ""
              }`}
            >
              AI-консультант
              {isActive("/ai-consultant") && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            <Link
              href="/faq"
              className={`text-muted-foreground hover:text-foreground transition-colors duration-300 relative ${
                isActive("/faq") ? "text-foreground" : ""
              }`}
            >
              FAQ
              {isActive("/faq") && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-border bg-background/50 md:backdrop-blur-sm text-foreground hover:border-accent/50 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex px-5 py-2 bg-accent text-accent-foreground rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Telegram
            </motion.a>

            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex px-5 py-2 border border-border bg-background/50 md:backdrop-blur-sm text-foreground rounded-full transition-all duration-300 hover:border-accent/50 items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-background/95 md:backdrop-blur-xl"
            style={{ maxHeight: "calc(100vh - 4rem)" }}
          >
            <div
              className="max-w-7xl h-screen mx-auto px-6 py-6 space-y-4 overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 4rem)" }}
            >
              {/* Services */}
              <Link
                href="/services"
                onClick={handleNavigate}
                className={`block w-full text-left py-3 px-4 rounded-xl transition-colors ${
                  isActive("/services")
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
              >
                Услуги
              </Link>

              {/* Pricing - temporarily hidden */}
              {/* <Link
                href="/pricing"
                onClick={handleNavigate}
                className={`block w-full text-left py-3 px-4 rounded-xl transition-colors ${
                  isActive("/pricing")
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
              >
                Цены
              </Link> */}

              {/* Portfolio */}
              <div>
                <button
                  onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                  className={`flex items-center justify-between w-full py-3 px-4 rounded-xl transition-colors ${
                    pathname?.startsWith("/portfolio")
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  <span>Портфолио</span>
                  <motion.div
                    animate={{ rotate: mobilePortfolioOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {mobilePortfolioOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-2 space-y-2">
                        {portfolioItems.map((section) => (
                          <div key={section.category} className="space-y-1">
                            <div className="text-foreground py-2 px-4">
                              {section.category}
                            </div>
                            {section.items.map((item) => (
                              <Link
                                key={item.key}
                                href={`/portfolio/${item.key}`}
                                onClick={handleItemClick}
                                className="block w-full text-left py-2 px-6 text-muted-foreground hover:text-accent transition-colors"
                              >
                                • {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* AI Consultant */}
              <Link
                href="/ai-consultant"
                onClick={handleNavigate}
                className={`block w-full text-left py-3 px-4 rounded-xl transition-colors ${
                  isActive("/ai-consultant")
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
              >
                AI-консультант
              </Link>

              {/* FAQ */}
              <Link
                href="/faq"
                onClick={handleNavigate}
                className={`block w-full text-left py-3 px-4 rounded-xl transition-colors ${
                  isActive("/faq")
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
              >
                FAQ
              </Link>

              {/* Theme Toggle in Mobile Menu */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-between w-full py-3 px-4 rounded-xl transition-colors text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              >
                <span>Тема</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">
                    {theme === "dark" ? "Темная" : "Светлая"}
                  </span>
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-border">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-accent text-accent-foreground rounded-xl transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-border bg-background/50 md:backdrop-blur-sm text-foreground rounded-xl transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
