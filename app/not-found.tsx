"use client";

import { useRouter } from "next/navigation";
import { NotFoundPage } from "@pages/NotFoundPage";

export default function NotFoundWrapper() {
  const router = useRouter();

  return (
    <NotFoundPage
      onNavigate={(page) => {
        switch (page) {
          case "home":
            router.push("/");
            break;
          case "services":
            router.push("/services");
            break;
          case "portfolio":
            router.push("/portfolio");
            break;
          case "ai-consultant":
            router.push("/ai-consultant");
            break;
          default:
            router.push("/");
        }
      }}
    />
  );
}
