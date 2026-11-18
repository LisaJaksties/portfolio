import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Imageview from "@/components/Imageview";
import {Oooh_Baby} from "next/font/google";
import SlideUp from "@/components/SlideUp";
import { cormorant } from "@/fonts/cormorant";
const ooohBaby = Oooh_Baby({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const illustrations = [
    {
        src: "/Pink gloves.jpg",
        alt: "Pink gloves",
        title: "Daily things",
        medium: "Soft pastels",
    },
    {
        src: "/huinya2.jpg",
        alt: "huinya2",
        title: "Huinya",
        medium: "Soft pastels",
    },
    {
        src: "/Illustration salty riot.jpg",
        alt: "Illustration salty riot",
        title: "Salty Riot",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/Illustration dragon girl.jpg",
        alt: "Illustration dragon girl",
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
        src: "/Illustration window view.jpg",
        alt: "Illustration window view",
        title: "View from my childhood window",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/Illustration huinya1.jpg",
        alt: "Illustration huinya1",
        title: "Huinya",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/Illustration schuhe.jpg",
        alt: "Illustration schuhe",
        title: "Ballerina",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/Illustration rooftop.jpg",
        alt: "Illustration rooftop",
        title: "Rooftop view",
        medium: "Soft pastels and pastel pencil",
    },
    {
        src: "/Illustration cafe.jpg",
        alt: "Illustration cafe",
        title: "Café",
        medium: "Watercolor and Fineliner",
    },
    {
        src: "/Illustration carnation.jpg",
        alt: "Illustration carnation",
        title: "Carnation",
        medium: "Watercolor and Fineliner",
    },
    {
        src: "/Illustration cat milk tea.jpg",
        alt: "Illustration cat milk tea",
        title: "Cat milk tea",
        medium: "Watercolor and Fineliner",
    },
    {
        src: "/Illustration no parking.jpg",
        alt: "Illustration no parking",
        title: "No Parking",
        medium: "Watercolor and Fineliner",
    },
    {
        src: "/Illustration pottery artwork.jpg",
        alt: "Illustration pottery artwork",
        title: "Pottery artwork",
        medium: "Watercolor and Fineliner",
    },
    {
        src: "/portrait lena.jpg",
        alt: "portrait lena",
        title: "Portrait",
        medium: "Watercolor and Colored Pencil",
    },
    {
        src: "/portrait alexander.jpg",
        alt: "portrait alexander",
        title: "Portrait",
        medium: "Watercolor and Colored Pencil",
    },
];

const editorials = [
    {
        src: "/Book-Mockup Das Kind.jpg",
        alt: "bookcover1",
        title: "Bookcover for an independent publisher",
        medium: "Adobe Photoshop, InDesign",
    },
    {
        src: "/blue bird.jpg",
        alt: "bookcover2",
        title: "Bookcover for an independent publisher",
        medium: "Clip Studio Paint, InDesign",
    },
    {
        src: "/muksan cover.jpg",
        alt: "bookcove3",
        title: "Bookcover for an independent publisher",
        medium: "Watercolor, Adobe Photoshop, InDesign",
    },
    {
        src: "/novel mailing.jpg",
        alt: "editorial",
        title: "Poster AD design",
        medium: "Adobe Photoshop",
    },
    {
        src: "/Paper namecard.jpg",
        alt: "editorial",
        title: "Namecard design for a Korean novelist",
        medium: "Adobe Photoshop",
    },
    {
        src: "/Restdays Poster 1.jpg",
        alt: "editorial",
        title: "Poster series for a activist movement",
        medium: "Adobe Illustrator, Clip Studio Paint",
    },
    {
        src: "/Restdays Poster 2.jpg",
        alt: "editorial",
        title: "Poster series for a activist movement",
        medium: "Adobe Illustrator, Clip Studio Paint",
    },
    {
        src: "/Restdays Poster 3.jpg",
        alt: "editorial",
        title: "Poster series for a activist movement",
        medium: "Adobe Illustrator, Clip Studio Paint",
    },
    {
        src: "/Poster Design Love Letter.jpg",
        alt: "editorial",
        title: "Poster experimental",
        medium: "Adobe Illustrator, Photoshop",
    },
    {
        src: "/Poster Design Love Letter 2.jpg",
        alt: "editorial",
        title: "Poster experimental",
        medium: "Adobe Illustrator, Photoshop",
    },
    {
        src: "/Poster Exhibition.jpg",
        alt: "editorial",
        title: "Poster for a gallery exhibition",
        medium: "Adobe Illustrator, Photoshop",
    },
    {
        src: "/Letter Design Embossed 1.jpg",
        alt: "editorial",
        title: "Letter Design Initials experimental",
        medium: "Adobe Illustrator",
    },
    {
        src: "/Letter Design Embossed 2.jpg",
        alt: "editorial",
        title: "Letter Design Initials experimental",
        medium: "Adobe Illustrator",
    },
    {
        src: "/Letter Design 1.jpg",
        alt: "editorial",
        title: "Letter Design Initials experimental",
        medium: "Adobe Illustrator",
    },
    {
        src: "/Letter Design 2.jpg",
        alt: "editorial",
        title: "Letter Design Initials experimental",
        medium: "Adobe Illustrator",
    },
];
export default function ArtPage(){
    return (
        <main>
            {/* Titel section*/}
            <section className="pt-20 lg:pt-36 z-0">

                <FadeIn>
                    <h1 className={`${cormorant.className} z-5 text-secondaryverydark text-center text-5xl md:text-7xl lg:text-8xl leading-none tracking-wide`}>
                        Illustrations
                    </h1>
                </FadeIn>
            </section>


            {/* My illustrations section*/}
            <section className="py-10 lg:py-20 max-w-7xl lg:max-w-[90vw] px-6 md:px-0 mx-auto text-center">

                <div className="grid grid-cols-1 md:grid-cols-4 md:space-y-10 gap-15 md:gap-8">

                    {illustrations.map((item, i) => (
                        <div key={i}>

                            <Imageview
                                src={item.src}
                                alt={item.alt}
                                width={1200}
                                height={1200}
                                className="aspect-square w-full object-scale-down "
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

            <section className="py-20 max-w-7xl lg:max-w-[90vw] mx-auto px-6 md:px-0 text-center">
                <FadeIn>
                    <h2 className={`${cormorant.className} z-5 text-secondaryverydark text-center text-5xl md:text-7xl lg:text-8xl mb-5 md:mb-10 lg:mb-20 leading-none tracking-wide`}>
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
                                className="aspect-square w-full object-scale-down "
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