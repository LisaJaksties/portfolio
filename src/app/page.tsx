import Image from "next/image";
import Hero from "@/components/Hero";
import LatestProject from "@/components/latestProject";
import { getLatestProject } from "@/lib/projects";

export default function Home() {
    const latest = getLatestProject();

  return (
      <main>
        <Hero/>
          {latest.map((project) => (
              <LatestProject key={project.slug} project={project} />
          ))}
      </main>
  );
}
