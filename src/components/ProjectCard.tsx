import { Project } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <FadeIn>
            <div className="group relative shadow-md overflow-hidden rounded-3xl hover:shadow-lg hover:scale-102 transition-transform duration-300">

                <div className="absolute md:group-hover:opacity-100 md:opacity-0 md:translate-y-4
                md:group-hover:translate-y-0 p-4 text-end content-end bottom-0
                left-0 right-0 h-2/3 opacity-100 transition-all duration-600 ease-in-out">
                    <h2 className="font-semibold text-white text-2xl md:text-4xl">{project.title}</h2>
                    <p className="text-white text-xl mt-3">{project.description}</p>
                </div>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="h-96 w-full object-cover"
                />
            </div>
            </FadeIn>
        </Link>
    );
}