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
                            <p className="text-sm font-normal tracking-wide leading-loose text-justify">
                                I am a multidisciplinary designer and
                                illustrator with a background in computer science
                                and a strong passion for visual storytelling.
                                I enjoy working across different areas of design
                                from UX/UI and digital experiences to illustration,
                                branding, and editorial visuals.
                            </p>
                        </FadeIn>

                        <FadeIn delay={2.6} duration={1.5}>
                            <p className="mt-4 text-sm font-normal tracking-wide leading-loose text-justify">
                                I design digital user interfaces
                                that captivate users attention and feel good, paying great
                                attention to detail. With my background in CS
                                I understand architectures behind digital products
                                but my passion lies in its visual and human expression
                                striving to enhance peoples quality of life.
                            </p>
                        </FadeIn>

                        <FadeIn delay={2} duration={1.5}>
                            <p className="mt-4 text-sm font-normal tracking-wide leading-loose text-justify">
                                I am especially interested in how culture influences usability, trust,
                                visual communication, and user behavior.
                                My interest in cross-cultural design grew through both personal experiences
                                and academic research. In my bachelor thesis, I explored how cultural context
                                influence usability and digital booking experiences.
                            </p>
                        </FadeIn>

                        <FadeIn delay={2} duration={1.5}>
                            <p className="mt-4 text-sm font-normal tracking-wide leading-loose text-justify">
                                Creativity has always been a central part of my life.
                                Beyond UX/UI design, I enjoy exploring branding, poster design, and visual
                                storytelling as additional ways to create emotional and memorable experiences.
                                I like exploring creative disciplines like illustration
                                and pottery, which influence my visual thinking and attention to detail and
                                inspire my design perspective.
                            </p>

                        </FadeIn>
                    </div>
                </div>
            </div>

            <MyArt/>

            <ContactMe/>
        </main>
    )
}