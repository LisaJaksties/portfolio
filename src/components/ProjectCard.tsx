import { Project } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="group relative shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="absolute group-hover:opacity-100 p-4 text-end content-end inset-0 opacity-0 bg-black/50 transition-all duration-300 ease-in-out">
                    <h2 className="font-semibold text-white text-2xl">{project.title}</h2>
                    <p className="text-white text-lg mt-1">{project.description}</p>
                </div>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="h-80 w-full object-cover"
                />
            </div>
        </Link>
    );
}