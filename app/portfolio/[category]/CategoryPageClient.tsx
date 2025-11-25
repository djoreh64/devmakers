"use client";

import { Portfolio } from "@widgets/Portfolio/Portfolio";
import { useRouter } from "next/navigation";

type CategoryPageClientProps = {
  category: string;
};

export function CategoryPageClient({ category }: CategoryPageClientProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/portfolio");
  };

  const handleProjectClick = (projectCategory: string, index: number) => {
    router.push(`/portfolio/${projectCategory}/${index}`);
  };

  return (
    <Portfolio
      category={category}
      onBack={handleBack}
      onProjectClick={handleProjectClick}
    />
  );
}

