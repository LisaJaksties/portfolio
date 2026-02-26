import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import {soligant} from "@/fonts/soligant";
import ContactMe from "@/components/ContactMe";
import MyArt from "@/components/MyArt";

export default function ProjectsPage(){
    return (
        <main className="pt-20 pb-20">

            <div className=" pb-64 max-w-7xl text-start m-3 md:mx-auto">
                <h1 className={`${soligant.className}  text-text text-6xl md:text-[11vw] text-center md:text-start `}>have a look <br/>at my recent </h1>
                <h1 className={`${soligant.className}  text-center text-secondarydark md:translate-x-24 md:-translate-y-12 opacity-70 text-7xl md:text-[14vw] 
                leading-20 md:leading-none tracking-widest md:tracking-[0.35em] text-primary-2  pb-30`}>
                    projects
                </h1>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:gap-12 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project}/>
                    ))}
                </div>
            </div>

            <MyArt/>
            <ContactMe />
        </main>
    )
}