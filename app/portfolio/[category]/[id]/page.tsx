"use client";

import { ProjectDetailPage, ProjectDetail } from "@pages/ProjectDetailPage";
import { projectDetailsMap } from "@shared/data/projectData";
import { useRouter, useParams } from "next/navigation";
import { portfolioData } from "@shared/data/portfolioData";

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const category = params.category as string;
  const id = params.id as string;

  const handleBack = () => {
    router.push(`/portfolio/${category}`);
  };

  // Try to get from detailed project data first
  const projectKey = `${category}-${id}`;
  let project = projectDetailsMap[projectKey];

  // If not found in detailed data, generate enhanced project from portfolio data
  if (!project) {
    const categoryData = portfolioData[category];
    if (categoryData && categoryData.projects[parseInt(id)]) {
      const basicProject = categoryData.projects[parseInt(id)];

      // Generate enhanced project details
      project = {
        id: projectKey,
        title: basicProject.title,
        description: basicProject.description,
        tags: basicProject.tags,
        image: basicProject.image,
        results: basicProject.results,
        category: category,
        client: `Клиент проекта ${basicProject.title}`,
        timeline: "4-8 недель",
        fullDescription: `${basicProject.description} Проект был реализован с применением современных технологий и лучших практик разработки. Мы уделили особое внимание производительности, безопасности и пользовательскому опыту.`,
        challenge:
          "Клиент столкнулся с необходимостью создания современного и эффективного решения, которое бы отвечало требованиям бизнеса и ожиданиям пользователей. Важно было реализовать проект в сжатые сроки без потери качества.",
        solution: `Мы разработали комплексное решение, используя ${basicProject.tags
          .slice(0, 2)
          .join(
            " и "
          )}. Применили современные подходы к проектированию и разработке, что позволило создать масштабируемую и надежную систему. Особое внимание уделили оптимизации производительности и удобству использования.`,
        technologies: basicProject.tags,
        features: [
          "Современный и адаптивный дизайн",
          "Высокая производительность и оптимизация",
          "Интеграция с внешними сервисами",
          "Удобная система управления контентом",
          "Аналитика и отслеживание метрик",
          "Безопасность и защита данных",
        ],
        outcomes: [
          basicProject.results || "Успешный запуск проекта",
          "Положительные отзывы пользователей",
          "Достижение бизнес-целей клиента",
        ],
      } as ProjectDetail;
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-24 px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
          >
            Вернуться назад
          </button>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Проект не найден
            </h1>
            <p className="text-muted-foreground">
              Проект с ID "{id}" не существует.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <ProjectDetailPage project={project} onBack={handleBack} />;
}
