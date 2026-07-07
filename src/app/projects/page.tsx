import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ContactMe from "@/components/ContactMe";
import MyArt from "@/components/MyArt";
import SlideUp from "@/components/SlideUp";
import { cormorant } from "@/fonts/cormorant";

export default function ProjectsPage(){
    return (
        <main className="pt-20 pb-20">

            <div className=" pb-30 md:pb-90 max-w-7xl text-start m-5  md:mx-auto">
                <SlideUp y={60} delay={0.1} duration={1.2}>
                    <h1 className={`${cormorant.className}  text-text text-6xl md:text-[11vw] text-center md:text-start leading-20 md:leading-none `}>have a look <br/>at my recent </h1>
                </SlideUp>
                <SlideUp y={60} delay={0.2} duration={1.2}>
                    <h1 className={`${cormorant.className}  text-center text-secondarydark md:translate-x-24 md:-translate-y-12 opacity-70 text-7xl md:text-[14vw] 
                    leading-30 md:leading-none tracking-widest md:tracking-[0.35em] text-primary-2  pb-30 md:pb-50`}>
                        projects
                    </h1>
                </SlideUp>
                <SlideUp y={60} delay={0} duration={1.0}>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:gap-12 gap-10">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project}/>
                    ))}
                </div>
                </SlideUp>
            </div>

            <MyArt/>
            <ContactMe />
        </main>
    )
}