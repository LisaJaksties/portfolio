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
                            {/*<Image
                                src="/example.jpg"
                                alt="Portfolio preview"
                                fill
                                className="object-cover shadow-md"
                                priority
                            />*/}
                        </FadeIn>
                    </div>


                    <div className="max-w-full">

                        <FadeIn delay={2} duration={2}>
                            <p className="text-sm font-normal tracking-wide leading-loose text-justify">
                                You can also call me Huinya. I am a (UX) designer and
                                illustrator with roots in Germany
                                and a second home in Busan, South Korea.
                            </p>
                        </FadeIn>

                        <FadeIn delay={2.3} duration={2}>
                            <p className="mt-4 text-sm font-normal tracking-wide leading-loose text-justify">
                                I design and develop personalised websites
                                that look beautiful and feel good, paying great
                                attention to detail. With my background in CS
                                I understand architectures behind digital products
                                but my passion lies in its visual and human expression
                                striving to enhance peoples quality of life.
                            </p>
                        </FadeIn>

                        <FadeIn delay={2.5} duration={2}>
                            <p className="mt-4 text-sm font-normal tracking-wide leading-loose text-justify">
                                Art, design, and people have been with me my
                                whole life. I always wanted to be an artist.
                                I like everything crafty from illustration over
                                pottery to baking. You can find more of my Art in the link below.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <p className="mt-4 text-sm font-normal tracking-wide leading-loose text-justify">
                                When I am not immersed into
                                creative work, I like to travel or spend time with my
                                inspiring husband.
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