"use client";

import { ProjectDetailPage, type ProjectDetail } from "@pages/ProjectDetailPage";
import { useRouter } from "next/navigation";

type ProjectPageClientProps = {
  category: string;
  project: ProjectDetail;
};

export function ProjectPageClient({
  category,
  project,
}: ProjectPageClientProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push(`/portfolio/${category}`);
  };

  return <ProjectDetailPage project={project} onBack={handleBack} />;
}

