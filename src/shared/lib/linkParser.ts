/**
 * Утилита для парсинга текста и определения ссылок
 */

export interface TextPart {
  type: "text" | "link";
  content: string;
  url?: string;
}

/**
 * Парсит текст и находит все ссылки (URL)
 * Возвращает массив частей текста с типами
 */
export function parseTextWithLinks(text: string): TextPart[] {
  // Regex для определения URL
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const parts: TextPart[] = [];
  let lastIndex = 0;
  let match;

  while ((match = urlRegex.exec(text)) !== null) {
    // Добавляем текст перед ссылкой
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        content: text.substring(lastIndex, match.index),
      });
    }

    // Добавляем ссылку
    parts.push({
      type: "link",
      content: match[0],
      url: match[0],
    });

    lastIndex = match.index + match[0].length;
  }

  // Добавляем оставшийся текст после последней ссылки
  if (lastIndex < text.length) {
    parts.push({
      type: "text",
      content: text.substring(lastIndex),
    });
  }

  // Если не нашли ссылок, возвращаем весь текст как одну часть
  if (parts.length === 0) {
    parts.push({
      type: "text",
      content: text,
    });
  }

  return parts;
}

/**
 * Получает красивое имя домена из URL
 */
export function getDomainFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace("www.", "");
  } catch {
    return url;
  }
}
