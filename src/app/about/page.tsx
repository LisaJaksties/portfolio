import { Oooh_Baby } from "next/font/google";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ContactMe from "@/components/ContactMe";
import MyArt from "@/components/MyArt";
import Blobframe from "@/components/blobframe";

const ooohBaby = Oooh_Baby({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export default function AboutPage(){
    return (
        <main>

            <div className="pt-20 md:pt-30 md:pb-30">
                <div className="max-w-6xl p-5 md:mx-auto flex flex-col md:flex-row md:items-start gap-12 md:gap-16">
                <FadeIn>
                    <h1 className={`${ooohBaby.className} text-center mt-2 md:text-start text-5xl`}>I&#39;m Lisa Choi</h1>
                </FadeIn>
                    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex-shrink-0">
                        <FadeIn delay={1} duration={2.5}>
                            <Blobframe />
                        </FadeIn>
                    </div>


                    <div className="max-w-full">

                        <FadeIn delay={2} duration={1.5}>
                            <p className="text-sm font-normal tracking-wide leading-loose pt-34">
                                <span className="float-left text-6xl text-text font-semibold leading-none pr-4 pt-1">
                                    I
                                </span>
                                am a <span className="font-semibold"> UX designer</span> and
                                <span className="font-semibold"> illustrator</span>
                                with a bachelor degree in computer science
                                and a strong passion for visual storytelling.
                                I enjoy working across different areas of design
                                from UX/UI and digital experiences to illustration,
                                branding, and editorial visuals.
                            </p>
                        </FadeIn>

                        <FadeIn delay={1} duration={1.5}>
                            <p className="text-xs tracking-[0.2em] uppercase text-text/50 mb-3 mt-8">
                                01 — Design Philosophy
                            </p>
                            <p className="mt-2 text-sm font-normal tracking-wide leading-loose">
                                I design digital interfaces that capture attention and feel good to use.
                                My style is shaped by the visuals and design details I notice in everyday life like
                                interiors, packaging, typography, which I bring into how I approach interfaces and
                                illustration.
                            </p>
                        </FadeIn>

                    </div>
                </div>

                <div className="max-w-6xl p-5 md:mx-auto grid grid-cols-1 md:grid-cols-16 gap-y-10 pt-2">


                    <div className="md:col-span-16 md:col-start-3 mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="md:col-span-2">
                        <FadeIn delay={0.5} duration={1.5}>

                                <p className="text-xs tracking-[0.2em] uppercase text-text/50 mb-3">
                                    02 — How I Work
                                </p>
                                <p className="text-sm font-normal tracking-wide leading-loose">
                                    My interest in visual design started with a semester abroad, where I picked up
                                    fundamentals in graphic and visual communication design and worked on a design
                                    project as part of an international and interdisciplinary team.
                                    Since then, I´ve mostly taught myself,
                                    learning Figma and brand design by building an actual brand from scratch,
                                    and learning about good UX by building real projects.
                                    Even when I´m working alone, I make a point of talking to other creatives
                                    about my design decisions. It´s often the fastest way for me
                                    to catch problems or find a better solution I hadn´t considered.
                                </p>

                             </FadeIn>
                        </div>

                        {/* Pull quote, offset */}
                        <div className="md:col-span-1">
                            <FadeIn delay={0.5} duration={1.5}>

                                <p className={`${ooohBaby.className} text-2xl text-secondarydark md:text-3xl text-center pt-5 leading-snug`}>
                                    &#34; I enjoy getting the details right
                                    because I care about the end result feeling
                                    like a genuinely well-made product. &#34;
                                </p>

                            </FadeIn>
                        </div>

                    </div>

                {/* Cross-cultural + creativity, side by side */}
                    <div className="md:col-span-16 md:col-start-3 mt-10 grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="">
                    <FadeIn delay={0.5} duration={1.5}>

                            <p className="text-xs tracking-[0.2em] uppercase text-text/50 mb-3">
                                03 — Cross-Cultural Design
                            </p>
                            <p className="text-sm font-normal tracking-wide leading-loose">
                                I´m interested in how culture influences usability, trust, and user behavior —
                                explored both personally and in my bachelor thesis, where I studied how cultural
                                context influences digital booking experiences.
                            </p>

                        </FadeIn>
                    </div>

                    <div className="">
                        <FadeIn delay={0.5} duration={1.5}>

                            <p className="text-xs tracking-[0.2em] uppercase text-text/50 mb-3">
                                04 — Outside Design
                            </p>
                            <p className="text-sm font-normal tracking-wide leading-loose">
                                Creativity has always been a central part of my life.
                                I like exploring creative disciplines like illustration
                                and pottery, which influence my visual thinking and attention
                                to detail and quietly shape my design perspective.
                            </p>

                        </FadeIn>
                    </div>
                    </div>
            </div>


            </div>

            <MyArt/>

            <ContactMe/>
        </main>
    )
}