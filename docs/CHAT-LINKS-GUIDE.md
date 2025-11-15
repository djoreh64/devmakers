# 🔗 Система автоматического определения и оформления ссылок в чате

## Обзор

AI-консультант теперь автоматически распознает ссылки в сообщениях и красиво оформляет их в соответствии с дизайн-системой сайта.

---

## Возможности

✅ **Автоматическое определение URL**
- Распознает все ссылки формата `http://` и `https://`
- Работает с любыми доменами и путями
- Поддерживает query параметры и якоря

✅ **Inline-ссылки**
- Ссылки в тексте подчеркнуты и кликабельны
- Показывают только домен вместо полного URL
- Иконка `ExternalLink` для визуального указания
- Hover эффекты для лучшего UX

✅ **Карточки ссылок (только для AI-сообщений)**
- Красивые интерактивные карточки под текстом
- Показывают домен и полный URL
- Hover и tap анимации
- Визуальное выделение при наведении

---

## Структура

### Файлы

```
/utils/linkParser.ts          # Утилита для парсинга ссылок
/components/ChatMessage.tsx    # Компонент сообщения с поддержкой ссылок
```

### Типы

```typescript
interface TextPart {
  type: 'text' | 'link';
  content: string;
  url?: string;
}
```

---

## Использование

### 1. Добавление ссылок в ответы AI

Просто добавьте URL в текст ответа:

```typescript
const aiResponses = {
  "пример": "Посмотрите наши работы: https://studio.ai/portfolio\nИли почитайте кейсы: https://studio.ai/projects",
  
  "default": "Рекомендую:\n• FAQ: https://studio.ai/faq\n• Telegram: https://t.me/studio_ai\n• Email: hello@studio.ai",
};
```

### 2. Функции утилиты

#### `parseTextWithLinks(text: string): TextPart[]`

Разбивает текст на части (текст и ссылки):

```typescript
import { parseTextWithLinks } from "@utils/linkParser";

const text = "Посетите https://studio.ai для деталей";
const parts = parseTextWithLinks(text);
// [
//   { type: 'text', content: 'Посетите ' },
//   { type: 'link', content: 'https://studio.ai', url: 'https://studio.ai' },
//   { type: 'text', content: ' для деталей' }
// ]
```

#### `getDomainFromUrl(url: string): string`

Извлекает чистое доменное имя из URL:

```typescript
import { getDomainFromUrl } from "@utils/linkParser";

getDomainFromUrl("https://www.studio.ai/portfolio");
// Вернет: "studio.ai"
```

---

## Примеры

### Пример 1: Inline-ссылка

**Входное сообщение:**
```
Посетите наш сайт https://studio.ai для подробной информации
```

**Результат:**
- Текст "Посетите наш сайт" остается обычным
- "studio.ai" отображается как кликабельная ссылка с иконкой
- Текст "для подробной информации" остается обычным

### Пример 2: Несколько ссылок (AI-сообщение)

**Входное сообщение:**
```
Рекомендую:
• Портфолио: https://studio.ai/portfolio
• FAQ: https://studio.ai/faq
• Telegram: https://t.me/studio_ai
```

**Результат:**
- Inline-ссылки в тексте
- 3 красивые карточки под текстом с:
  - Иконкой внешней ссылки
  - Доменом как заголовком
  - Полным URL как подписью
  - Hover эффектами

---

## Стилизация

### Inline-ссылки

```tsx
// Для AI-сообщений
className="text-accent hover:text-accent/80"

// Для пользовательских сообщений
className="text-accent-foreground hover:opacity-80"
```

### Карточки ссылок

```tsx
className="
  flex items-center gap-3 
  px-3 py-2 
  rounded-lg 
  border border-border 
  bg-secondary/30 
  hover:bg-secondary/50 
  hover:border-accent/50 
  transition-all duration-300 
  group
"
```

---

## Анимации

### Motion компоненты

```tsx
// Карточка ссылки
<motion.a
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.2, delay: 0.1 }}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
```

### Transition классы

- `transition-all duration-300` - плавные изменения
- `group-hover:` - эффекты при наведении на карточку

---

## Доступность (a11y)

✅ **Внешние ссылки**
```tsx
target="_blank"
rel="noopener noreferrer"
```

✅ **Остановка всплытия событий**
```tsx
onClick={(e) => e.stopPropagation()}
```

✅ **Семантическая разметка**
- Использование тега `<a>` для ссылок
- Правильные aria-атрибуты

---

## Мобильная оптимизация

✅ **Touch optimization**
- `touch-manipulation` класс для быстрого отклика
- Достаточный размер для тапа (минимум 44x44px)

✅ **Responsive иконки**
```tsx
<ExternalLink className="w-3 h-3" />  // Компактные inline
<ExternalLink className="w-4 h-4" />  // Карточки
```

✅ **Text overflow**
```tsx
className="truncate"  // Обрезка длинных URL
```

---

## Безопасность

### Защита от XSS

Все URL автоматически обрабатываются React, что предотвращает XSS-атаки:

```tsx
// React автоматически экранирует значения
<a href={part.url}>
```

### Валидация URL

```typescript
try {
  const urlObj = new URL(url);
  return urlObj.hostname.replace('www.', '');
} catch {
  return url; // Fallback для невалидных URL
}
```

---

## Расширение функциональности

### Добавление поддержки email

Обновите regex в `linkParser.ts`:

```typescript
// Добавьте к существующему regex
const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
```

### Добавление preview изображений

Можно расширить `ChatMessage.tsx`:

```tsx
{part.type === "link" && part.url && (
  <img 
    src={`https://api.linkpreview.net/?q=${part.url}`}
    alt="Link preview"
  />
)}
```

### Добавление поддержки Markdown

Можно интегрировать библиотеку типа `react-markdown`:

```tsx
import ReactMarkdown from 'react-markdown';

<ReactMarkdown>{message.text}</ReactMarkdown>
```

---

## Тестирование

### Тестовые случаи

1. **Одна ссылка в середине текста**
   ```
   Посетите https://studio.ai для деталей
   ```

2. **Несколько ссылок**
   ```
   Ссылки: https://studio.ai и https://google.com
   ```

3. **Ссылка в начале**
   ```
   https://studio.ai - наш сайт
   ```

4. **Ссылка в конце**
   ```
   Наш сайт: https://studio.ai
   ```

5. **Только ссылка**
   ```
   https://studio.ai
   ```

6. **URL с параметрами**
   ```
   https://studio.ai/portfolio?filter=web&sort=date#top
   ```

---

## Производительность

### Оптимизации

✅ **Мемоизация парсинга**
```typescript
const parts = useMemo(
  () => parseTextWithLinks(message.text),
  [message.text]
);
```

✅ **Lazy loading для preview**
Если добавляете preview, используйте lazy loading

✅ **Debounce для анимаций**
Motion компоненты уже оптимизированы

---

## Troubleshooting

### Ссылки не распознаются

**Проблема:** URL без `http://` или `https://`

**Решение:** Убедитесь, что URL начинается с протокола:
```
❌ studio.ai
✅ https://studio.ai
```

### Карточки не показываются

**Проблема:** Карточки показываются только для AI-сообщений

**Решение:** Проверьте `message.sender === "ai"`

### Стили не применяются

**Проблема:** Конфликт с глобальными стилями

**Решение:** Используйте более специфичные селекторы или `!important`

---

## Roadmap

### Будущие улучшения

- [ ] Поддержка email адресов
- [ ] Поддержка телефонных номеров
- [ ] Preview изображений для ссылок
- [ ] Open Graph meta данные
- [ ] Favicon для доменов
- [ ] Markdown поддержка
- [ ] Syntax highlighting для кода
- [ ] Поддержка вложений (файлы, изображения)

---

## Ресурсы

- [Regular Expressions для URL](https://www.regular-expressions.info/url.html)
- [Open Graph Protocol](https://ogp.me/)
- [Link Preview APIs](https://www.linkpreview.net/)
- [Motion/React Documentation](https://motion.dev/)

---

**Дата создания:** 04.11.2025  
**Версия:** 1.0.0  
**Автор:** Studio AI Team
