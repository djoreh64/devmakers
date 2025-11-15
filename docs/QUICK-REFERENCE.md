# 🚀 Быстрая шпаргалка

## 🎨 Фоновые эффекты

### Ambient gradient system (v2.0.2)
- **4 bloom-эффекта** с Motion анимациями (800-1200px)
- **Цвета:** accent/6-8, purple/6-7 (снижена интенсивность)
- **Blur:** 120-150px для мягких переходов
- **Позиции:** top, left-1/4, right-1/2, bottom (равномерно)
- **Анимации:** opacity + scale + y-движение (10-14s)
- **Overlays:** 
  - Базовый градиент по всей странице
  - Vignette (background/40 сверху/снизу)
  - Radial fade от краёв
- **Результат:** Плавное перетекание без резких переходов

## Структура проекта

```
📁 Premium Studio Website
├── 📄 App.tsx                     # Главный роутер
├── 📂 components/
│   ├── 📂 pages/                  # 8 страниц
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── PortfolioPage.tsx
│   │   ├── ProjectDetailPage.tsx  # 15 проектов
│   │   ├── TeamPage.tsx
│   │   ├── AIConsultantPage.tsx   # 🆕 AI-чат с ссылками
│   │   ├── FAQPage.tsx
│   │   └── NotFoundPage.tsx       # 404
│   ├── 📂 ui/                     # 40+ Shadcn компонентов
│   ├── ChatMessage.tsx            # 🆕 Компонент с ссылками
│   ├── Navigation.tsx
│   ├── SEO.tsx
│   └── ...
├── 📂 utils/
│   ├── analytics.ts               # GA4 + Яндекс.Метрика
│   └── linkParser.ts              # 🆕 Парсинг ссылок
├── 📂 styles/
│   └── globals.css                # Дизайн-система
└── 📂 public/
    ├── sitemap.xml
    └── robots.txt
```

---

## Ключевые команды

```bash
# Разработка
npm run dev          # Запуск на localhost:5173

# Билд
npm run build        # Создает /dist

# Preview
npm run preview      # Проверка билда
```

---

## Дизайн-система (globals.css)

### Цвета
```css
--background: #0A0A0A      /* Почти черный */
--accent: #6366F1          /* Индиго */
--foreground: #FFFFFF      /* Белый */
--border: rgba(255,255,255,0.1)
```

### Размеры
```css
--radius: 0.75rem          /* 12px */
--font-size: 16px
```

### Breakpoints (Tailwind)
```css
sm:   ≥640px    /* Телефоны landscape */
md:   ≥768px    /* Планшеты */
lg:   ≥1024px   /* Десктопы */
xl:   ≥1280px   /* Широкие экраны */
xs:   ≥480px    /* 🆕 Кастомный */
```

---

## Основные компоненты

### Navigation
```tsx
// Фиксированная навигация с blur
<Navigation />
```

### SEO
```tsx
<SEO 
  title="Заголовок"
  description="Описание"
  keywords={["ключ1", "ключ2"]}
/>
```

### 🆕 Stats - Живая статистика
```tsx
<Stats />
// Анимированные цифры, 4 метрики, hover эффекты
```

### 🆕 Testimonials - Отзывы
```tsx
<Testimonials />
// 6 отзывов, рейтинги, аватары, CTA
```

### 🆕 Clients - Логотипы партнеров
```tsx
<Clients />
// Infinite marquee, 12 клиентов, fade edges
```

### 🆕 BentoGrid - Бенто-сетка
```tsx
<BentoGrid />
// 8 фич, неравномерная сетка, градиенты
```

### 🆕 Pricing - Тарифы
```tsx
<Pricing />
// 3 плана, highlighted, детальные features
```

### 🆕 FloatingChatButton - Плавающий чат
```tsx
<FloatingChatButton onNavigate={handleNavigate} />
// Pulse, popup, быстрые вопросы
```

### 🆕 CTASection - Призыв к действию
```tsx
<CTASection />
// Крупный CTA, shine effect, trust badges
```

### ChatMessage
```tsx
<ChatMessage 
  message={{
    id: 1,
    text: "Посетите https://studio.ai",
    sender: "ai"
  }}
/>
// Автоматически парсит и оформляет ссылки!
```

---

## Работа со ссылк��ми в ч��те

### Добавление ссылок в ответы

```typescript
// /components/pages/AIConsultantPage.tsx
const aiResponses = {
  "ключ": "Текст с https://studio.ai ссылкой",
};
```

### Парсинг ссылок

```typescript
import { parseTextWithLinks } from "@utils/linkParser";

const parts = parseTextWithLinks("Посетите https://studio.ai");
// [
//   { type: 'text', content: 'Посетите ' },
//   { type: 'link', content: 'https://...', url: '...' }
// ]
```

---

## Аналитика

### Трекинг событий

```typescript
import { trackEvent } from "@utils/analytics";

// Кастомное событие
trackEvent("button_click", { location: "hero" });

// AI-консультант
trackAIConsultant("question_asked", "Сколько стоит?");

// Проект
trackProjectView("project-id", "Project Name");
```

### Конфигурация

```typescript
// /utils/analytics.ts
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";  // Замените
const YM_COUNTER_ID = "XXXXXXXX";          // Замените
```

---

## SEO оптимизация

### Sitemap
- Автогенерация: `/public/sitemap.xml`
- Включает все страницы и проекты

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://studio.ai/sitemap.xml
```

### Meta теги
- Автоматически через `<SEO />` компонент
- Open Graph для соцсетей
- JSON-LD структурированные данные

---

## Мобильная оптимизация

### Адаптивные классы

```tsx
// Padding
className="p-4 sm:p-6"          // 16px → 24px

// Text
className="text-sm sm:text-base" // 14px → 16px

// Display
className="hidden sm:block"     // Скрыть на мобильных

// Gap
className="gap-2 sm:gap-4"      // 8px → 16px
```

### Touch оптимизация

```tsx
className="touch-manipulation"   // Быстрый отклик
className="active:bg-accent/10"  // Визуальный feedback
```

---

## Анимации (Motion)

### Базовые

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Hover

```tsx
<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
```

### Stagger

```tsx
<motion.div
  transition={{ delay: index * 0.1 }}
>
```

---

## Типичные задачи

### Добавить новую страницу

1. Создать `/components/pages/NewPage.tsx`
2. Добавить роут в `/App.tsx`:
```tsx
<Route path="/new" element={<NewPage />} />
```
3. Добавить в Navigation.tsx (если нужно)

### Добавить проект в портфолио

1. Обновить `/components/projectDataExtended.ts`
2. Добавить объект проекта с id, title, category, etc.
3. Автоматически появится в портфолио!

### Изменить цвета

1. Открыть `/styles/globals.css`
2. Изменить CSS переменные:
```css
--accent: #6366F1;  /* Ваш цвет */
```

### Добавить иконку

```tsx
import { IconName } from "lucide-react";

<IconName className="w-5 h-5" />
```

---

## Полезные ссылки документации

📄 `/README.md` - Основная документация  
📄 `/SEO-README.md` - SEO оптимизация  
📄 `/ANALYTICS-INTEGRATION.md` - Аналитика  
📄 `/CHAT-LINKS-GUIDE.md` - Ссылки в чате  
📄 `/MOBILE-IMPROVEMENTS.md` - Мобильная версия  
📄 `/guidelines/Guidelines.md` - Дизайн-система  
📄 `/examples/chat-links-example.md` - Примеры чата  

---

## Troubleshooting

### Проблема: Порт 5173 занят
```bash
# Используйте другой порт
npm run dev -- --port 3000
```

### Проблема: Tailwind классы не работают
- Проверьте, что используете классы из v4
- Не добавляйте font-size/weight без явного указания

### Проблема: Анимации медленные
```tsx
// Уменьшите duration
transition={{ duration: 0.3 }}  // Вместо 0.6
```

### Проблема: Ссылки не распознаются
```
❌ studio.ai
✅ https://studio.ai  // Нужен протокол!
```

---

## Горячие клавиши (VS Code)

```
Ctrl + P         # Быстрый поиск файлов
Ctrl + Shift + F # Поиск по проекту
Ctrl + `         # Открыть терминал
F2               # Переименовать
Ctrl + D         # Выбрать следующее вхождение
```

---

## Лучшие практики

✅ **DO:**
- Использовать TypeScript типы
- Добавлять SEO компонент на каждую страницу
- Использовать motion для анимаций
- Тестировать на мобильных
- Добавлять аналитику для важных событий

❌ **DON'T:**
- Не использовать inline styles (используйте Tailwind)
- Не добавлять font-size/weight классы без причины
- Не забывать про accessibility
- Не делать слишком быстрые анимации (<200ms)
- Не хардкодить данные (использовать projectData)

---

**Версия:** 1.0.0  
**Последнее обновление:** 04.11.2025  
**Stack:** React 18 + TypeScript + Tailwind v4 + Vite
