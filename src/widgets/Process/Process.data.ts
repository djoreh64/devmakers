import {
  Target,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  LineChart,
  CheckCircle2,
} from "lucide-react";

export const processSteps = [
  {
    number: "01",
    title: "Исследование",
    description: "Анализ бизнеса, конкурентов и целевой аудитории",
    icon: Target,
    details: [
      "Интервью с заказчиком",
      "Изучение рынка и конкурентов",
      "Определение целевой аудитории",
      "Формирование технического задания",
    ],
  },
  {
    number: "02",
    title: "Прототипирование",
    description: "Создание прототипа и дизайн-концепции",
    icon: Lightbulb,
    details: [
      "Wireframes и user flow",
      "UI/UX дизайн",
      "Интерактивные прототипы",
      "Согласование с клиентом",
    ],
  },
  {
    number: "03",
    title: "Разработка MVP",
    description: "Создание минимальной рабочей версии за 2-4 недели",
    icon: Code,
    details: [
      "Sprint-разработка",
      "Еженедельные демо",
      "Code review",
      "Continuous integration",
    ],
  },
  {
    number: "04",
    title: "Тестирование",
    description: "Проверка качества и исправление ошибок",
    icon: TestTube,
    details: [
      "Функциональное тестирование",
      "Тестирование производительности",
      "Кросс-браузерное тестирование",
      "User acceptance testing",
    ],
  },
  {
    number: "05",
    title: "Запуск",
    description: "Деплой на production и передача проекта",
    icon: Rocket,
    details: [
      "Настройка хостинга и CI/CD",
      "Миграция данных",
      "Обучение команды клиента",
      "Документация",
    ],
  },
  {
    number: "06",
    title: "Развитие",
    description: "Итеративное улучшение на основе метрик",
    icon: LineChart,
    details: [
      "Сбор обратной связи",
      "A/B тестирование",
      "Аналитика поведения пользователей",
      "Внедрение новых функций",
    ],
  },
];
