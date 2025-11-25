interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Алексей Петров",
    role: "CEO",
    company: "TechStart",
    content:
      "Студия превзошла все ожидания. Разработали SaaS-платформу за 8 недель с идеальным UX. Конверсия выросла на 240%.",
    rating: 5,
  },
  {
    name: "Мария Сидорова",
    role: "Маркетинг-директор",
    company: "Digital Agency",
    content:
      "AI-агент автоматизировал 70% рутинных задач. Команда профессионалов, которые понимают бизнес-задачи, а не просто пишут код.",
    rating: 5,
  },
  {
    name: "Дмитрий Козлов",
    role: "Основатель",
    company: "E-commerce Pro",
    content:
      "Интернет-магазин окупился за 3 месяца. Отличная техподдержка и консультации на каждом этапе. Рекомендую!",
    rating: 5,
  },
  {
    name: "Анна Волкова",
    role: "Product Manager",
    company: "FinTech Solutions",
    content:
      "Сложный финтех-проект с интеграциями банков. Сделали быстро, безопасно и с вниманием к деталям. Лучшая студия!",
    rating: 5,
  },
  {
    name: "Игорь Смирнов",
    role: "CTO",
    company: "AI Startup",
    content:
      "Разработали MVP за 2 недели, что позволило привлечь инвестиции. Гибкий подход и современные технологии.",
    rating: 5,
  },
  {
    name: "Елена Новикова",
    role: "Директор",
    company: "Beauty Network",
    content:
      "Корпоративный сайт с CRM интеграцией работает безупречно. Лиды увеличились на 180%. Спасибо за качество!",
    rating: 5,
  },
];
