
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Herosection from "@/sections/Herosection"
import Descriptionsection from "@/sections/Descriptionsection";
import Problemsection from "@/sections/Problemsection";
import {SectionRenderer} from "@/sections/Sectionrenderer";
import FloatingContents from "@/components/FloatingContents";

export default async function ProjectPage({ params }: {params: Promise <{slug: string}> }) {

    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) return notFound();

    return (
        <main className="max-w-full text-center mx-auto">
            <Herosection id="ffp" image={project.image} title={project.title} links={project.links}/>
            <Descriptionsection id="project-description" title={project.title} description={project.description}/>

            {/*line*/}
            <hr className="border-t border-gray-400 max-w-7xl mx-auto my-5 md:my-12"/>

            <Problemsection
                id="overview"
                problem_description={project.problem_description} challenge_description={project.challenge_description}
                            solution_description={project.solution_description} type={project.type}
                            tasks={project.tasks} tools={project.tools}/>

            {/*line*/}
            <hr className="border-t border-gray-400 max-w-7xl mx-auto my-5 md:my-12"/>

            {/*sections rendered depending on the definded sections in each projectfile*/}
            {project.sections?.map((section, index) => (
                <SectionRenderer key={index} section={section}/>
            ))}

            <Link
                href="/projects"
                className="group mx-auto flex flex-row items-center gap-3 w-fit pt-20"
            >
                <Image
                    src="/Frame 1.png"
                    alt="Flower"
                    width={30}
                    height={30}
                    className="transition-all duration-300 ease-out  group-hover:scale-110 group-hover:rotate-30 group-active:scale-110 group-active:rotate-30 "
                />

                <p
                    className="text-text text-sm md:text-lg font-light transition-all duration-300 ease-out group-hover:scale-105 group-hover:underline group-active:scale-105 group-active:underline"
                >
                    explore more works
                </p>
            </Link>

            <FloatingContents sections={project.sections || []} />
        </main>
    );
}
