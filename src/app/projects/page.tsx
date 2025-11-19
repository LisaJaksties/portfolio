import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage(){
    return (
        <main className="p-2 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">All Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project}/>
                ))}
            </div>
        </main>
    )
}