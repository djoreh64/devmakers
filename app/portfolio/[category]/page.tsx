"use client";

import { Portfolio } from "@widgets/Portfolio/Portfolio";
import { useRouter, useParams } from "next/navigation";

export default function CategoryPage() {
  const router = useRouter();
  const params = useParams();
  const category = params.category as string;

  const handleBack = () => {
    router.push("/portfolio");
  };

  const handleProjectClick = (category: string, index: number) => {
    router.push(`/portfolio/${category}/${index}`);
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-background pt-24 px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold text-foreground mb-4">Загрузка...</h1>
        </div>
      </div>
    );
  }

  return (
    <Portfolio 
      category={category} 
      onBack={handleBack}
      onProjectClick={handleProjectClick}
    />
  );
}

