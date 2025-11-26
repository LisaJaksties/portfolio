import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage({ params }: {params: Promise <{slug: string}> }) {

    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) return notFound();

    return (
        <main className="max-w-full text-center mx-auto">
            <div className="relative bg-orange-50 p-24">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={896}
                    height={384}
                    className="max-w-4xl mx-auto block object-cover h-96"
                    priority
                />

                <Link href={`${project.address}`} target="_blank" rel="noreferrer">
                    <div className="hidden md:flex md:absolute items-center justify-center
                         text-center bottom-8 right-16 w-24 h-24 border border-gray-400 rounded-full z-20">
                        <p className="text-sm font-light">view design</p>
                    </div>
                </Link>
            </div>

            <div className="pt-24 pb-24">
                <h1 className="text-3xl font-bold mb-8">{project.title}</h1>
                <p className="text-gray-700">{project.description}</p>
            </div>

            <hr className="border-t border-gray-400 max-w-4xl mx-auto my-12"/>

            <section className="pt-24 pb-24 max-w-4xl mx-auto">
                <div className="grid grid-cols-2 gap-6">
                    <div className="p-8 text-start ">
                        <h3 className="text-2xl font-medium mb-4">Problem</h3>
                        <p className="text-sm text-gray-700"> {project.problem_description}</p>
                        <h3 className="text-2xl font-medium mt-16 mb-4">Solution</h3>
                        <p className="text-sm text-gray-700">{project.solution_description}</p>
                    </div>

                    <div className="bg-orange-50 p-8 pt-10 pb-10 shadow-md">

                        <div className="grid grid-cols-2 gap-y-4 p-4">
                            {/* TYPE */}
                            <p className="text-start font-bold">Project Type</p>
                            <p className="text-start text-sm text-gray-700">{project.type}</p>

                            {/* TASKS */}
                            <p className="text-start font-bold">Tasks</p>
                            <div className="text-start space-y-1 text-sm text-gray-700">
                                {project.tasks?.join(", ")}
                            </div>

                            {/* TOOLS */}
                            <p className="text-start font-bold">Tools</p>
                            <div className="text-start space-y-1 text-sm text-gray-700">
                                {project.tools?.join(", ")}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-t border-gray-400 max-w-4xl mx-auto my-12"/>

        </main>
    );
}
