# 🎨 Визуальный гайд по компонентам

## Новые компоненты версии 2.0

---

## 0. 🌈 HomePage - Ambient Background System (v2.0.2)

### Визуальная концепция
```
      ╭───────────────────────────────────╮
      │   ◉ Top bloom (accent/8)         │
      │         ↕ scale + opacity        │
      ├───────────────────────────────────┤
   ◉  │  Left gradient (purple/6)        │
   ↕  │        ↕ y-movement + fade       │
      ├───────────────────────────────────┤
      │     Right gradient (accent/6)  ◉ │
      │       ↕ y-movement + fade      ↕ │
      ├───────────────────────────────────┤
      │   ◉ Bottom bloom (purple/7)      │
      │         ↕ scale + opacity        │
      ╰───────────────────────────────────╯
```

### Ключевые особенности
- ✅ 4 крупных bloom-эффекта (800-1200px)
- ✅ Motion анимации с разной длительностью (10-14s)
- ✅ Движение по Y-оси для органичности
- ✅ Базовый градиент `from-accent/5 via-transparent to-accent/5`
- ✅ Двойной overlay: vignette + radial fade
- ✅ Blur 120-150px для мягких границ

### Слои overlay
```tsx
1. Base gradient: bg-linear-to-b
2. Vignette: background/40 сверху/снизу via-50%
3. Radial: circle_at_center → transparent → background
```

### Почему это работает
- Нет резких vh-позиций (было top-[80vh], теперь top-1/4)
- Равномерное распределение по высоте
- Снижена интенсивность (6-8% вместо 8-12%)
- Увеличен blur для плавности
- Radial fade убирает резкие края

---

## 1. 📊 Stats - Живая статистика

### Внешний вид
```
┌──────────────────────────────────────────┐
│         📊 Статистика                    │
│                                          │
│    Цифры говорят сами                    │
│    Результаты нашей работы в цифрах      │
│                                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ 🏆      │ │ 👥      │ │ 📈      │   │
│  │ 150+    │ │ 98%     │ │ 5x      │   │
│  │ Проектов│ │ Клиентов│ │ ROI     │   │
│  └─────────┘ └─────────┘ └─────────┘   │
│  ┌─────────┐                            │
│  │ ⚡      │                            │
│  │ 24/7    │                            │
│  │Поддержка│                            │
│  └────────���┘                            │
└──────────────────────────────────────────┘
```

### Ключевые особенности
- ✅ Анимация цифр от 0 до целевого значения
- ✅ Триггер при скролле (useInView)
- ✅ Hover эффект с glow
- ✅ Сетка: 2x2 (mobile) → 4x1 (desktop)

### Анимация
```typescript
// Плавный счет от 0 до value за 2 секунды
useEffect(() => {
  requestAnimationFrame(animate);
}, [isInView]);
```

---

## 2. ⭐ Testimonials - Отзывы клиентов

### Внешний вид
```
┌──────────────────────────────────────────┐
│         ⭐ Отзывы                        │
│                                          │
│    Что говорят клиенты                   │
│                                          │
│  ┌────────┐  ┌────────┐  ┌────────┐    │
│  │ "..."  │  │ "..."  │  │ "..."  │    │
│  │ ⭐⭐⭐⭐⭐│  │ ⭐⭐⭐⭐⭐│  │ ⭐⭐⭐⭐⭐│    │
│  │        │  │        │  │        │    │
│  │ 👤 Имя │  │ 👤 Имя │  │ 👤 Имя │    │
│  │ Должн. │  │ Должн. │  │ Должн. │    │
│  └────────┘  └────────┘  └────────┘    │
│                                          │
│     [Начать проект] ←                   │
└──────────────────────────────────────────┘
```

### Структура отзыва
```tsx
{
  name: "Алексей Петров",
  role: "CEO",
  company: "TechStart",
  content: "Студия превзошла все ожидания...",
  rating: 5
}
```

### Сетка
- Mobile: 1 колонка
- Tablet: 2 колонки  
- Desktop: 3 колонки

---

## 3. 🏢 Clients - Логотипы партнеров

### Внешний вид
```
┌──────────────────────────────────────────┐
│        Нам доверяют                      │
│   Более 150 компаний по всему миру       │
│                                          │
│  → [Logo] [Logo] [Logo] [Logo] →        │
│    ← бесконечное движение →              │
│                                          │
│   150+        50+         5+             │
│  Проектов   Клиентов   Лет опыта        │
└──────────────────────────────────────────┘
```

### Анимация
```tsx
<motion.div
  animate={{ x: [0, -1920] }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "linear"
  }}
>
```

### Особенности
- ✅ Infinite loop (2 набора элементов)
- ✅ Fade edges слева и справа
- ✅ Hover для паузы (опционально)
- ✅ 12 клиентов

---

## 4. 🎯 BentoGrid - Бенто-сетка

### Внешн��й вид (Desktop)
```
┌────────────────────────────────┐
│      ✨ Возможности            │
│   Всё для вашего успеха        │
│                                │
│  ┌──────────┬─────┬─────┐     │
│  │    🤖    │ ⚡  │ 🛡️  │     │
│  │    AI    │ Fast│ Safe│     │
│  │ (2x2)    ├─────┴─────┤     │
│  │          │  💻 Code  │     │
│  ├──────────┼─────┬─────┤     │
│  │ 📱Mobile │ 🎨  │ 🤖  │     │
│  │  (1x2)   │Design│ Bot│     │
│  │          ├─────┼─────┤     │
│  │          │ 🚀  │     │     │
│  └──────────┴─────┴─────┘     │
│                                │
│    [Запустить проект] ←       │
└────────────────────────────────┘
```

### Grid классы
```tsx
className="grid grid-cols-1 md:grid-cols-3 gap-6"

// Размеры карточек
"md:col-span-2 md:row-span-2"  // AI (2x2)
"md:col-span-1"                 // Fast (1x1)
"md:col-span-1 md:row-span-2"  // Mobile (1x2)
"md:col-span-2"                 // Code (2x1)
```

### Градиенты
```tsx
from-purple-500/20 to-pink-500/20    // AI
from-yellow-500/20 to-orange-500/20  // Fast
from-blue-500/20 to-cyan-500/20      // Mobile
```

---

## 5. 💰 Pricing - Тарифные планы

### Внешний вид
```
┌──────────────────────────────────────────┐
│         💰 Тарифы                        │
│      Прозрачные цены                     │
│                                          │
│  ┌────────┐  ┌────────┐  ┌────────┐    │
│  │ ⚡      │  │ ⭐ Поп.│  │ 👑      │    │
│  │ Старт  │  │ Бизнес │  │ Энтерп.│    │
│  │        │  │(Highlighted)│       │    │
│  │ 50k₽   │  │ 150k₽  │  │ 500k₽  │    │
│  │        │  │        │  │        │    │
│  │ ✓ Фича │  │ ✓ Фича │  │ ✓ Фича │    │
│  │ ✓ Фича │  │ ✓ Фича │  │ ✓ Фича │    │
│  │ ✓ Фича │  │ ✓ Фича │  │ ✓ Фича │    │
│  │        │  │        │  │        │    │
│  │[Начать]│  │[Выбрать]│ │[Обсуд.]│    │
│  └────────┘  └────────┘  └────────┘    │
└──────────────────────────────────────────┘
```

### Highlighted план
```tsx
className={`
  ${plan.highlighted 
    ? "lg:-mt-4 border-2 border-accent" 
    : "border border-border"
  }
`}
```

### Иконки планов
- ⚡ Zap - Старт
- ✨ Sparkles - Бизнес
- 👑 Crown - Энтерпрайз

---

## 6. 💬 FloatingChatButton - Плавающий чат

### Внешний вид (Закрыт)
```
                        ┌─────┐
                        │ 🟢  │ ← Dot
                        │ 🤖  │
                        │pulse│
                        └─────┘
                     (Правый нижний)
```

### Внешний вид (Открыт)
```
          ┌──────────────────────┐
          │ 🤖 AI-консультант    │
          │ 🟢 Онлайн            │
          │ Задайте вопрос...    │
          │                      │
          │ [💬 Начать чат] →    │
          │                      │
          │ Популярные вопросы:  │
          │ • Сколько стоит?     │
          │ • Какие сроки?       │
          │ • Есть поддержка?    │
          │                      │
          │ Ответ в течение 1 мин│
          └──────────────────────┘
                 ┌─────┐
                 │  ✕  │
                 └─────┘
```

### Анимация иконки
```tsx
<AnimatePresence mode="wait">
  {isOpen ? (
    <X />    // Крестик при открытии
  ) : (
    <Bot />  // Бот при закрытии
  )}
</AnimatePresence>
```

### Pulse эффект
```tsx
<span className="animate-ping opacity-20" />
```

---

## 7. 🚀 CTASection - Призыв к действию

### Внешний вид
```
┌──────────────────────────────────────────┐
│        ╭───────────────────╮             │
│        │    ✨ Sparkles    │             │
│        ╰───────────────────╯             │
│                                          │
│    Готовы начать ваш проект?             │
│                                          │
│  Давайте обсудим вашу идею и создадим   │
│  что-то невероятное вместе. Первая      │
│  консультация — бесплатно.              │
│                                          │
│  [Обсудить проект →] [Задать вопрос AI] │
│         (Shine ✨)                       │
│                                          │
│  🟢 Бесплатная    🟢 NDA        🟢 24ч  │
│     консультация    по запросу   ответ  │
└──────────────────────────────────────────┘
```

### Shine effect
```tsx
<motion.div
  animate={{ x: ["-100%", "200%"] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatDelay: 1
  }}
  className="bg-linear-to-r from-transparent via-white/20"
/>
```

### Градиентный фон
- Blur круги в углах с пульсацией
- `from-accent/5 via-transparent`
- Animated gradient circles

### Кнопки
1. **"Обсудить проект"** - Открывает ContactModal
2. **"Задать вопрос AI"** - Переход на AI консультанта

### Использование
```tsx
import { CTASection } from "./components/CTASection";
<CTASection />
```

---

## Цветовая палитра

### Основные цвета
```css
--accent: #6366F1        /* Индиго */
--background: #0A0A0A    /* Почти черный */
--foreground: #FFFFFF    /* Белый */
--border: rgba(255,255,255,0.1)
```

### Градиенты (с opacity)
```tsx
from-purple-500/20 to-pink-500/20     // Фиолетовый → Розовый
from-yellow-500/20 to-orange-500/20   // Желтый → Оранжевый  
from-blue-500/20 to-cyan-500/20       // Синий → Циан
from-indigo-500/20 to-purple-500/20   // Индиго → Фиолетовый
from-green-500/20 to-emerald-500/20   // Зеленый → Изумрудный
```

---

## Общие паттерны

### Заголовок секции
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 
  rounded-full bg-accent/10 border border-accent/20 mb-6">
  <Icon className="w-4 h-4 text-accent" />
  <span className="text-sm text-accent">Метка</span>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
  Заголовок секции
</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Описание
</p>
```

### Карточка
```tsx
<div className="p-6 rounded-2xl bg-secondary/30 border border-border 
  backdrop-blur-sm hover:bg-secondary/50 hover:border-accent/50 
  transition-all duration-300">
  {/* Контент */}
</div>
```

### Hover glow
```tsx
<div className="absolute inset-0 rounded-2xl bg-accent/5 
  opacity-0 group-hover:opacity-100 transition-opacity 
  duration-300 -z-10 blur-xl" />
```

### CTA кнопка
```tsx
<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 rounded-xl bg-accent text-accent-foreground 
    hover:bg-accent/90 transition-colors"
>
  Текст кнопки
</motion.a>
```

---

## Адаптивность

### Стандартные breakpoints
```tsx
// Tailwind по умолчанию
sm:  ≥640px   // Телефоны landscape
md:  ≥768px   // Планшеты
lg:  ≥1024px  // Десктопы
xl:  ≥1280px  // Широкие экраны

// Кастомный
xs:  ≥480px   // Маленькие телефоны
```

### Типичные паттерны
```tsx
// Padding
className="p-4 sm:p-6 lg:p-8"

// Text size
className="text-sm sm:text-base lg:text-lg"

// Grid columns
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Gap
className="gap-4 sm:gap-6 lg:gap-8"

// Visibility
className="hidden sm:block"
```

---

## Анимации

### Стандартная анимация
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Stagger эффект
```tsx
transition={{ duration: 0.6, delay: index * 0.1 }}
```

### Hover эффекты
```tsx
whileHover={{ scale: 1.05, y: -5 }}
whileTap={{ scale: 0.95 }}
```

### Viewport trigger
```tsx
viewport={{ once: true, margin: "-100px" }}
```

---

## Иконки (Lucide React)

### Используемые иконки
```tsx
// Stats
Award, Users, TrendingUp, Zap

// Testimonials  
Star, Quote

// BentoGrid
Sparkles, Zap, Shield, Smartphone, Code2, 
Palette, Bot, Rocket

// Pricing
Check, Sparkles, Zap, Crown

// Floating Chat
Bot, X, MessageCircle

// CTA
ArrowRight, Sparkles
```

---

## Производительность

### Best practices

✅ **DO:**
- Использовать `viewport={{ once: true }}`
- Hardware-accelerated properties (`transform`, `opacity`)
- CSS animations где возможно
- Мемоизация дорогих вычислений
- Lazy loading для изображений

❌ **DON'T:**
- Анимировать `width`, `height`, `top`, `left`
- Слишком много одновременных анимаций
- Тяжелые re-renders
- Inline styles без необходимости

---

## Accessibility (a11y)

### Checkли
- [ ] Все кнопки имеют текст или aria-label
- [ ] Контрастность текста ≥4.5:1
- [ ] Keyboard navigation работает
- [ ] Focus states видны
- [ ] Alt text для изображений
- [ ] Semantic HTML (`<section>`, `<article>`, etc.)

---

**Версия:** 2.0.0  
**Дата:** 04.11.2025  
**Визуальная документация компонентов редизайна**
