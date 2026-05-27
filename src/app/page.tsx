import Image from "next/image";
import Hero from "@/components/Hero";
import LatestProject from "@/components/latestProject";
import { getLatestProject } from "@/lib/projects";
import Catchphrase from "@/components/Catchphrase";
import {soligant} from "@/fonts/soligant";
import ContactMe from "@/components/ContactMe";
import MyArt from "@/components/MyArt";
import SlideUp from "@/components/SlideUp";
import FloatIn from "@/components/FLoatIn";

export default function Home() {
    const latest = getLatestProject();

  return (
      <main>
          <Hero/>

          <Catchphrase/>

          <div className="relative px-4 md:max-w-7xl pt-20 md:pt-40 mx-auto">
              <div className="absolute -bottom-5 md:-bottom-30 md:right-1/5 flex justify-center items-center -z-10 pointer-events-none">
                  <FloatIn x={-20} y={-60} delay={0.2}>
                      <Image
                          src="/Frame 5.png"
                          alt="Flower"
                          width={800}
                          height={700}
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                      />
                  </FloatIn>
              </div>

              <SlideUp y={60} delay={0.2} duration={1.2}>
                  <h1 className={`${soligant.className} text-center text-text text-7xl md:text-[13vw] md:leading-40 tracking-widest`}>
                      Have a <br/> look at my <br/> works
                  </h1>
              </SlideUp>

          </div>


          <div className="py-20 md:py-60">
              {latest.map((project) => (
                  <LatestProject key={project.slug} project={project}/>
              ))}

          </div>
          <MyArt/>

          <ContactMe/>
      </main>
  );
}
