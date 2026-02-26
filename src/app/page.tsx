import Image from "next/image";
import Hero from "@/components/Hero";
import LatestProject from "@/components/latestProject";
import { getLatestProject } from "@/lib/projects";
import Catchphrase from "@/components/Catchphrase";
import {soligant} from "@/fonts/soligant";
import ContactMe from "@/components/ContactMe";
import MyArt from "@/components/MyArt";

export default function Home() {
    const latest = getLatestProject();

  return (
      <main>
          <Hero/>

          <Catchphrase/>

          <div className="px-4 md:max-w-7xl pt-32 md:pt-40 pb-32  mx-auto">
              <h1 className={`${soligant.className} text-center text-text text-7xl md:text-[12vw] tracking-widest`}>
                  My recent projects
              </h1>
          </div>

          {latest.map((project) => (
              <LatestProject key={project.slug} project={project}/>
          ))}

          <MyArt/>

          <ContactMe/>
      </main>
  );
}
