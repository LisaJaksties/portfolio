import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: {params: Promise <{slug: string}> }) {

    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) return notFound();

    return (
        <main className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover rounded-xl mb-6"
            />
            <p className="text-gray-700">{project.description}</p>
        </main>
    );
}
