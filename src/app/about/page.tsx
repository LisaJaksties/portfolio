import { Oooh_Baby } from "next/font/google";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const ooohBaby = Oooh_Baby({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export default function AboutPage(){
    return (
        <main className="max-w-5xl mx-auto pt-30 pb-30 space-y-8 grid grid-cols-2 gap-32">

            <div className="">
                <FadeIn>
                <h1 className={`${ooohBaby.className} text-5xl`}>I&#39;m huinya</h1>
                </FadeIn>

                <FadeIn delay={1}>
                <p className="mt-10 font-normal tracking-wide leading-loose">
                    I am a designer and illustrator with roots in Germany
                    and a second home in Busan, South Korea.
                    I design and develop personalised websites
                    that look beautiful and feel good, paying great
                    attention to detail.</p>
                </FadeIn>

                <FadeIn delay={2}>
                <p className="mt-4 font-normal tracking-wide leading-loose">
                    My background in computer science lets me bring together
                    design and development, and put ideas straight into the
                    front end. When I&#39;m working on visual prototypes, I often use
                    Figma or Adobe Creative Suite to bring my ideas to life.
                    <br/>Art, design, and people have been with me my
                    whole life. I always wanted to be an artist, 
                    but at the same time, my path led me more and more 
                    into the world of technology. The combination 
                    of aesthetics and logic fascinated me and that&#39;s
                    where I found my passion for web design and UX.
                </p>
                </FadeIn>

                <FadeIn >
                <p className="mt-4 font-normal tracking-wide leading-loose">
                    Today, I combine illustration, design, and web
                    development to create thoughtful digital experiences.
                    I am open to new projects or roles in UX design,
                    web design, or front-end development.
                    In addition, I also work on illustration and graphic
                    design projects such as book covers, posters, name cards,
                    and invitation cards.</p>

                </FadeIn>
            </div>


            <div className="">
                <FadeIn delay={1} duration={2.5}>
                <Image
                    src="/clover.jpg"
                    alt="Portfolio preview"
                    width={400}
                    height={600}
                    className="w-full object-cover"
                    priority
                />
                </FadeIn>
            </div>



        </main>
    )
}