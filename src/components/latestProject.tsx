import { Project } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function LatestProject({ project }: { project: Project }){
    return (
        <section className=" max-w-full">


            <div className="grid grid-cols-1 md:grid-cols-2 md:items-start max-w-7xl mx-auto gap-6 md:gap-8 pb-20">

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
                                          p-2 md:p-0
                                        "
                            />
                        </Link>


                </FadeIn>

                <FadeIn>
                    <div className="text-center md:text-start px-4 md:px-8 h-full flex flex-col justify-start">
                        <Link href={`/projects/${project.slug}`}>

                            <h2 className="text-3xl md:text-6xl text-text font-semibold hover:text-accent transition leading-tight">{project.title}</h2>
                            <p className="text-md text-text mt-3">
                                {new Date(project.date).toLocaleDateString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                            <p className="text-lg text-text/50 mt-30 leading-relaxed">{project.description}</p>

                        </Link>
                        <a
                            href={project.address} target="_blank" rel="noreferrer"
                            className="
                                            self-center md:self-start  items-center justify-center
                                            bg-accent rounded-3xl px-4 py-2
                                            hover:bg-background hover:text-primary
                                            border border-accent
                                            duration-300 transition ease-in-out
                                            hover:scale-110
                                            cursor-pointer mt-8
                                          "
                        >
                            See prototype
                        </a>
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
                className="object-cover mx-auto pb-20">
            </Image>

        </section>

    )
}