import { Project } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {soligant} from "@/fonts/soligant";

export default function LatestProject({ project }: { project: Project }){
    return (
        <section className="py-10 md:py-30 max-w-full">

            <div className="flex flex-col items-center">
            <FadeIn amount={0.4}>
                <Link href={`/projects/${project.slug}`}>

                    <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={300}
                        className="h-[500px] w-80 md:h-[450px] md:w-5xl p-2 md:p-6 border border-2 rounded-4xl inset-2
                        border-secondaryverydark
                         transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-104
                         md:hover:scale-105 object-cover hover:border-background"
                        style={{zIndex: 10}}
                    />

                </Link>

            </FadeIn>

                <FadeIn>
                    <div className="text-center md:text-end w-80 md:w-5xl">
                        <Link href={`/projects/${project.slug}`}>
                            <p className="text-md text-text mt-5">{project.date}</p>
                            <h2 className="pt-6 pb-2 text-3xl md:text-6xl text-text font-semibold hover:text-accent transition ease-in">{project.title}</h2>
                            <p className="text-lg text-text/50">{project.description}</p>

                        </Link>
                    </div>
                </FadeIn>
            </div>

        </section>

    )
}