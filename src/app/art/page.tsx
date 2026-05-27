import FadeIn from "@/components/FadeIn";
import {soligant} from "@/fonts/soligant";
import Image from "next/image";
import Imageview from "@/components/Imageview";
import {Oooh_Baby} from "next/font/google";
import SlideUp from "@/components/SlideUp";
const ooohBaby = Oooh_Baby({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const illustrations = [
    {
        src: "/illustration1.jpg",
        alt: "illustration1",
        title: "Strawberry picking in winter",
        medium: "Watercolor",
    },
    {
        src: "/illustration2.jpg",
        alt: "illustration2",
        title: "Cherry Blossom Road",
        medium: "Soft pastels",
    },
    {
        src: "/illustration3.jpg",
        alt: "illustration3",
        title: "Salty Riot",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/illustration4.jpg",
        alt: "illustration4",
        title: "Fasching",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/illustration5.jpg",
        alt: "illustration1",
        title: "Cherry",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/illustration6.jpg",
        alt: "illustration2",
        title: "View from my childhood window",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/illustration7.jpg",
        alt: "illustration3",
        title: "Huinya",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/illustration8.jpg",
        alt: "illustration4",
        title: "Ballerina",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/illustration9.jpg",
        alt: "illustration4",
        title: "Kitchen view",
        medium: "Soft pastels and pastel pencil",
    },
];

const editorials = [
    {
        src: "/Book-Mockup Das Kind.jpg",
        alt: "bookcover1",
        title: "Bookcover for 걔",
        medium: "Adobe Photoshop, InDesign",
    },
    {
        src: "/blue bird.png",
        alt: "bookcover2",
        title: "Bookcover for 귀 안의 파랑새",
        medium: "Clip Studio Paint, InDesign",
    },
    {
        src: "/muksan cover.png",
        alt: "bookcove3",
        title: "Bookcover for '묵산'",
        medium: "Watercolor, Adobe Photoshop, InDesign",
    },
    {
        src: "/novel mailing.png",
        alt: "editorial",
        title: "Poster AD Design",
        medium: "Adobe Photoshop",
    },
    {
        src: "/restdays1.png",
        alt: "editorial",
        title: "Visual Activism Poster Design",
        medium: "Figma, Clip Studio Paint",
    },
    {
        src: "/restdays2.png",
        alt: "editorial",
        title: "Visual Activism Poster Design",
        medium: "Figma, Clip Studio Paint",
    },
    {
        src: "/restdays3.png",
        alt: "editorial",
        title: "Visual Activism Poster Design",
        medium: "Figma, Clip Studio Paint",
    },
];
export default function ArtPage(){
    return (
        <main>
            {/* Titel section*/}
            <section className="py-40 z-0">

                <FadeIn amount={0.8} duration={1.0}>
                    <div className="absolute bottom-70 left-5 md:bottom-20 md:right-50 rotate-180 -z-5">
                        <SlideUp y={100} delay={0.4} duration={1.0}>
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={150}
                            height={150}
                            className="h-20 md:h-50 w-fit pointer-events-none"
                        />
                        </SlideUp>
                    </div>

                    <div className="absolute top-50 right-10 md:top-40 md:left-70 rotate-0 -z-5">
                        <SlideUp y={100} delay={0.2} duration={1.0}>
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={100}
                            height={100}
                            className="h-10 md:h-26 w-fit pointer-events-none"
                        />
                        </SlideUp>
                    </div>

                </FadeIn>

                <FadeIn>
                    <h1 className={`${soligant.className} z-5 text-secondarydark text-center text-6xl md:text-[10vw] mt-5 md:mt-10 leading-none tracking-wide`}>
                        Illustrations
                    </h1>
                </FadeIn>
            </section>

            {/* My materials section*/}
            <section className=" py-40 max-w-7xl px-6 md:px-0 mx-auto text-center">
                <FadeIn>
                    <h2 className={`${ooohBaby.className} md:-translate-x-36 text-text text-center mb-5 md:mb-10 text-5xl md:text-7xl mt-5 md:mt-10 leading-none tracking-wide`}>
                        soft pastels
                    </h2>
                </FadeIn>
                <SlideUp y={10} delay={0.4} duration={1.0}>
                    <Imageview
                        src="/clover.jpg"
                        alt="materials"
                        width={800}
                        height={600}
                        className="block max-h-[400px] mx-auto object-cover"
                    />
                </SlideUp>

                <FadeIn>
                    <h2 className={`${ooohBaby.className} md:translate-x-36 text-text text-center text-5xl md:text-7xl mt-5 md:mt-10 leading-none tracking-wide`}>
                        watercolor
                    </h2>
                </FadeIn>
            </section>

            <Image
                src="/Frame 7.png"
                alt="line"
                width={900}
                height={200}
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover mx-auto">
            </Image>

            {/* My illustrations section*/}
            <section className="py-20 max-w-7xl px-6 md:px-0 mx-auto text-center">

                <div className="grid grid-cols-1 md:grid-cols-4 md:space-y-10 gap-15 md:gap-8">

                    {illustrations.map((item, i) => (
                        <div key={i}>

                            <Imageview
                                src={item.src}
                                alt={item.alt}
                                width={1200}
                                height={1200}
                                className="aspect-square w-full object-cover "
                            />

                            <FadeIn>
                                <p className=" text-text text-sm md:text-md mt-4 leading-relaxed">
                                    {item.title}
                                    <br/>
                                    <span className="text-text/60">
                                        {item.medium}
                                    </span>
                                </p>
                            </FadeIn>

                        </div>
                    ))}

                </div>

            </section>

            <section className="py-20 max-w-7xl mx-auto px-6 md:px-0 text-center">
                <FadeIn>
                    <h2 className={`${soligant.className} z-5 text-secondaryverydark text-center text-5xl md:text-7xl mb-5 md:mb-10 leading-none tracking-wide`}>
                        Editorial Design
                    </h2>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-4 md:space-y-10 gap-15 md:gap-8">

                    {editorials.map((item, i) => (
                        <div key={i}>

                            <Imageview
                                src={item.src}
                                alt={item.alt}
                                width={1200}
                                height={1200}
                                className="aspect-square w-full object-cover "
                            />

                            <FadeIn>
                                <p className=" text-text text-sm md:text-md mt-4 leading-relaxed">
                                    {item.title}
                                    <br/>
                                    <span className="text-text/60">
                                        {item.medium}
                                    </span>
                                </p>
                            </FadeIn>

                        </div>
                    ))}

                </div>
            </section>
        </main>
    )
}