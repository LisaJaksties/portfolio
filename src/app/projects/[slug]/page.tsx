import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Herosection from "@/sections/Herosection"
import Descriptionsection from "@/sections/Descriptionsection";
import Problemsection from "@/sections/Problemsection";
import {SectionRenderer} from "@/sections/Sectionrenderer";

export default async function ProjectPage({ params }: {params: Promise <{slug: string}> }) {

    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) return notFound();

    return (
        <main className="max-w-full text-center mx-auto">
            <Herosection  image={project.image} title={project.title} address={project.address}/>
            <Descriptionsection title={project.title} description={project.description}/>

            {/*line*/}
            <hr className="border-t border-gray-400 max-w-7xl mx-auto my-12"/>

            <Problemsection problem_description={project.description} solution_description={project.solution_description} type={project.type} tasks={project.tasks} tools={project.tools}/>

            {/*line*/}
            <hr className="border-t border-gray-400 max-w-7xl mx-auto my-12"/>

            {/*sections rendered depending on the definded sections in each projectfile*/}
            {project.sections?.map((section, index) => (
                <SectionRenderer key={index} section={section} />
            ))}

        </main>
    );
}
