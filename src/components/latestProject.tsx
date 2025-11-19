import { Project } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function LatestProject({ project }: { project: Project }){
    return (
        <section className="relative py-32 md:py-48 max-w-5xl mx-auto">

            <FadeIn amount={0.4}>
            {/* Scrapbook-Bildercontainer */}
            <div className="relative w-full md:w-[910px] md:h-[520px]">
                <Link href={`/projects/${project.slug}`}>
                    {/* Erstes (linkes, kleineres) Bild */}
                    <div className="hidden md:block md:absolute -top-10 left-44 w-20 h-20 bg-neutral-300/70 rounded-full z-20"/>

                    <Image
                        src="/light.jpg"
                        alt="Portfolio preview"
                        width={300}
                        height={100}
                        className="hidden md:block absolute top-0 left-0 h-72 w-[350px] md:w-[450px] shadow-md object-cover transform"
                        style={{zIndex: 10}}
                    />

                    {/* washi tape otpik on mobile only */}
                    <div className="absolute md:hidden -top-4 left-28 w-24 h-10 bg-gray-300/70 rotate-3"></div>

                    {/* Zweites (rechtes, größeres) Bild */}
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={350}
                        className="block md:absolute mx-auto h-60 w-[80%] object-cover
                                    md:bottom-0 md:-right-10 md:w-[550px] md:h-[420px]"
                        style={{zIndex: 5}}
                    />

                    {/* Desktop Screen size only: Textblock unten links */}
                    <div
                        className="hidden md:block absolute bottom-6 left-0 p-4 max-w-[35%]">
                        <h2 className="text-xl md:text-2xl font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-600">{project.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{project.date}</p>
                    </div>

                </Link>
            </div>
            </FadeIn>

            <FadeIn>
            <div className="md:hidden p-4 max-w-fit">
                <Link href={`/projects/${project.slug}`}>
                <h2 className="text-xl md:text-2xl font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
                <p className="text-xs text-gray-500 mt-1">{project.date}</p>
                </Link>
            </div>
            </FadeIn>

        </section>

    )
}