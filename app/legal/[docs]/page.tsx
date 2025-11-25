import { LegalPage } from "@pages/LegalPage";

interface PageProps {
  params: { docs: string };
}

export default async function Page({ params }: PageProps) {
  const { docs } = await params;
  return <LegalPage doc={docs} />;
}
