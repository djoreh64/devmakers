"use client";

import { PortfolioPage } from "@pages/PortfolioPage";
import { useRouter } from "next/navigation";

export function PortfolioPageClient() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/portfolio/${category}`);
  };

  const handleNavigate = (page: string) => {
    router.push(page);
  };

  return (
    <PortfolioPage
      onCategoryClick={handleCategoryClick}
      onNavigate={handleNavigate}
    />
  );
}

