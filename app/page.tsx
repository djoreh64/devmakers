"use client";

import dynamic from "next/dynamic";
import { Hero } from "@widgets/Hero";
import { Stats } from "@widgets/Stats";
import { useRouter } from "next/navigation";

// Lazy load components below the fold for better performance
const Services = dynamic(
  () =>
    import("@widgets/Services").then((mod) => ({
      default: mod.Services,
    })),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);
const Work = dynamic(
  () => import("@widgets/Work/Work").then((mod) => ({ default: mod.Work })),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);
const Clients = dynamic(
  () =>
    import("@widgets/Clients").then((mod) => ({
      default: mod.Clients,
    })),
  {
    loading: () => <div className="min-h-[300px]" />,
  }
);
const Process = dynamic(
  () =>
    import("@widgets/Process").then((mod) => ({
      default: mod.Process,
    })),
  {
    loading: () => <div className="min-h-[600px]" />,
  }
);
const Testimonials = dynamic(
  () =>
    import("@widgets/Testimonials").then((mod) => ({
      default: mod.Testimonials,
    })),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);
const AIConsultantPreview = dynamic(
  () =>
    import("@widgets/AIConsultantPreview").then((mod) => ({
      default: mod.AIConsultantPreview,
    })),
  {
    loading: () => <div className="min-h-[500px]" />,
  }
);
const CTASection = dynamic(
  () =>
    import("@widgets/CTASection").then((mod) => ({
      default: mod.CTASection,
    })),
  {
    loading: () => <div className="min-h-[300px]" />,
  }
);

export default function Home() {
  const router = useRouter();

  const handleProjectClick = (projectId: string) => {
    // projectId format: "landings-0", "chatbots-0", etc.
    const [category, id] = projectId.split("-");
    router.push(`/portfolio/${category}/${id}`);
  };
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient background gradient system */}
      {/* <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-accent/5 to-background md:hidden" />

        <div className="hidden md:block absolute inset-0 bg-linear-to-b from-accent/5 via-transparent to-accent/5" />

        <div
          className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 
  w-[1200px] h-[600px] bg-accent/8 rounded-full blur-[150px]"
        />

        <div
          className="hidden md:block absolute top-1/4 -left-1/4 
  w-[800px] h-[800px] bg-purple-500/6 rounded-full blur-[120px]"
        />

        <div
          className="hidden md:block absolute top-1/2 -right-1/4 
  w-[900px] h-[900px] bg-accent/6 rounded-full blur-[140px]"
        />

        <div
          className="hidden md:block absolute bottom-0 left-1/3 
  w-[1000px] h-[500px] bg-purple-500/7 rounded-full blur-[130px]"
        />

        <div className="hidden md:block absolute inset-0 bg-linear-to-b from-background/40 via-transparent to-background/40" />
        <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_100%)] opacity-60" />
      </div> */}

      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Clients/Partners */}
      <Clients />

      {/* Services Preview */}
      <Services />

      {/* AI Consultant Preview */}
      <AIConsultantPreview />

      {/* Work Preview */}
      <Work onProjectClick={handleProjectClick} />

      {/* Testimonials */}
      <Testimonials />

      {/* Process Preview */}
      <Process />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
