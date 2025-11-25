import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import { notFound } from "next/navigation";
import "./LegalPage.styles.css";

export function LegalPage({ doc }: { doc: string }) {
  if (!doc) notFound();

  const filePath = path.join(
    process.cwd(),
    "src/app-pages/LegalPage/data",
    doc + ".md"
  );

  let content: string | null = null;

  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch {
    notFound();
  }

  return (
    <div className="markdown-body min-h-screen py-24 max-w-7xl mx-auto px-3">
      <Markdown>{content}</Markdown>
    </div>
  );
}
