import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@shared/layout/Navigation";
import { Footer } from "@shared/layout/Footer";
import { FloatingChatButton } from "@shared/ui/blocks/FloatingChatButton";
import { ThemeProvider } from "@shared/providers/ThemeProvider";
import { QueryProvider } from "@shared/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "devmakers - Разработка сайтов, дизайн и AI для вашего бизнеса",
  description: "Разрабатываем сайты, создаем дизайн, внедряем AI-агентов и автоматизируем бизнес-процессы. От идеи до полной реализации.",
  icons: {
    icon: [
      { url: "/logo-new.svg", type: "image/svg+xml" },
      { url: "/logo-new.svg", type: "image/svg+xml", sizes: "any" }
    ],
    apple: "/logo-new.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-background">
              <Navigation />
              {children}
              <Footer />
              <FloatingChatButton />
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
