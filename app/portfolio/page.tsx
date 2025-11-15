"use client";

import { PortfolioPage } from "@pages/PortfolioPage";
import { useRouter } from "next/navigation";

export default function Portfolio() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/portfolio/${category}`);
  };

  return <PortfolioPage onCategoryClick={handleCategoryClick} />;
}
