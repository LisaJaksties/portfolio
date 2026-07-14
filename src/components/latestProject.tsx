import { Project } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CursorHover from "@/components/CursorHover";

export default function LatestProject({ project }: { project: Project }){
    return (
        <section className=" max-w-full">


            <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-0 items-stretch max-w-7xl mx-auto gap-6 md:gap-8 pb-20">

                <FadeIn amount={0.4}>

                        <Link href={`/projects/${project.slug}`}>

                            <Image
                                src={project.image}
                                alt={project.title}
                                width={900}
                                height={500}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="
                                          w-full
                                          h-[280px] md:h-[420px]
                                          object-cover
                                          shadow-lg
                                          hover:scale-103
                                          duration-400 transition ease-in-out
                                        "
                            />
                        </Link>


                </FadeIn>

                <FadeIn>
                    <div className="text-center md:text-start px-4 md:px-8 h-full flex flex-col justify-between">
                        <Link href={`/projects/${project.slug}`}>
                            <CursorHover hoverText="project details" className="inline-block cursor-pointer">
                            <h2 className="text-3xl md:text-6xl text-text font-semibold active:text-accent hover:text-accent transition leading-tight">
                                {project.title}
                            </h2>
                            </CursorHover>
                        </Link>

                        <p className="text-sm md:text-lg text-text mt-3">
                            {new Date(project.date).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                            })}
                        </p>

                        <div className="flex flex-wrap md:gap-3 md:mt-auto mt-5 space-x-2">
                            {project.tasks?.map((task, i) => (
                                <span
                                    key={i}
                                    className="text-sm font-light text-secondaryverydark"
                                >
                                    #{task}
                                </span>
                            ))}
                        </div>

                        <p className="text-md md:text-lg text-text/80 font-light md:mt-auto mt-10 leading-relaxed text-justify">{project.description}</p>

                        <div className="flex md:gap-5 gap-3">
                            {project.links?.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div
                                        className={`
                                            self-center md:self-start  items-center justify-center
                                            bg-accent rounded-3xl px-4 py-2
                                            hover:bg-background hover:text-primary
                                            border border-accent
                                            duration-300 transition ease-in-out
                                            hover:scale-105
                                            cursor-pointer mt-8
                                         `}>

                                        <p className="text-sm font-light">
                                            {link.label}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>

            <Image
                src="/Frame 7.png"
                alt="line"
                width={900}
                height={200}
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover  mx-auto pb-20">
            </Image>

        </section>

    )
}