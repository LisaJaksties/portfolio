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

export default function ArtPage(){
    return (
        <main>
            {/* Titel section*/}
            <section className="py-40 z-0">

                <FadeIn amount={0.8} duration={1.0}>
                    <div className="absolute bottom-20 right-50 rotate-180 -z-5">
                        <SlideUp y={100} delay={0.4} duration={1.0}>
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={150}
                            height={150}
                            className="pointer-events-none"
                        />
                        </SlideUp>
                    </div>

                    <div className="absolute top-40 left-70 rotate-0 -z-5">
                        <SlideUp y={100} delay={0.2} duration={1.0}>
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={100}
                            height={100}
                            className="pointer-events-none"
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
            <section className=" py-50 max-w-7xl mx-auto text-center">
                <FadeIn>
                    <h2 className={`${ooohBaby.className} -translate-x-36 text-text text-center mb-5 md:mb-10 text-5xl md:text-7xl mt-5 md:mt-10 leading-none tracking-wide`}>
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
                    <h2 className={`${ooohBaby.className} translate-x-36 text-text text-center text-5xl md:text-7xl mt-5 md:mt-10 leading-none tracking-wide`}>
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
            <section className=" py-50 max-w-7xl mx-auto text-center">

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <Imageview
                            src="/light.jpg"
                            alt="illustration1"
                            width={1200}
                            height={1000}
                            className="block max-h-[800px] mx-auto object-contain"
                        />
                        <FadeIn>
                            <p className="text-text text-sm md:text-md text-start translate-x-6 mt-4">
                                illustration title 1 <br/> Gondola soft pastels and Farber Castell pitt pastel pencil
                            </p>
                        </FadeIn>
                    </div>
                    <div>
                        <Imageview
                            src="/light.jpg"
                            alt="illustration2"
                            width={1200}
                            height={1000}
                            className="block max-h-[800px] mx-auto object-contain"
                        />
                        <FadeIn>
                            <p className="text-text text-sm md:text-md text-start translate-x-6 mt-4">
                                illustration title 1 <br/> Gondola soft pastels and Farber Castell pitt pastel pencil
                            </p>
                        </FadeIn>
                    </div>
                </div>

                <div className="text-center py-40 md:py-60">
                    <Imageview
                        src="/light.jpg"
                        alt="illustration3"
                        width={800}
                        height={1000}
                        className="block max-h-[800px] mx-auto object-contain"
                    />
                    <FadeIn>
                        <p className="text-text text-sm md:text-md mt-4">
                            illustration title 1 <br/> Gondola soft pastels and Farber Castell pitt pastel pencil
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <Imageview
                            src="/light.jpg"
                            alt="illustration4"
                            width={1200}
                            height={1000}
                            className="block max-h-[800px] mx-auto object-contain"
                        />
                        <FadeIn>
                            <p className="text-text text-sm md:text-md text-start translate-x-6 mt-4">
                                illustration title 1 <br/> Gondola soft pastels and Farber Castell pitt pastel pencil
                            </p>
                        </FadeIn>
                    </div>
                    <div>
                        <Imageview
                            src="/light.jpg"
                            alt="illustration5"
                            width={1200}
                            height={1000}
                            className="block max-h-[800px] mx-auto object-contain"
                        />
                        <FadeIn>
                            <p className="text-text text-sm md:text-md text-start translate-x-6 mt-4">
                                illustration title 1 <br/> Gondola soft pastels and Farber Castell pitt pastel pencil
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className=" py-20 max-w-7xl mx-auto text-center">
                <FadeIn>
                    <h2 className={`${soligant.className} z-5 text-secondarydark text-center text-5xl md:text-7xl mb-5 md:mb-10 leading-none tracking-wide`}>
                        Book cover design
                    </h2>
                </FadeIn>
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <Imageview
                            src="/light.jpg"
                            alt="bookcover1"
                            width={1200}
                            height={1000}
                            className="block max-h-[600px] mx-auto object-contain"
                        />
                        <FadeIn>
                            <p className="text-text text-sm md:text-md text-start mt-4">
                                illustration title 1 <br/> Gondola soft pastels and Farber Castell pitt pastel pencil
                            </p>
                        </FadeIn>
                    </div>
                    <div>
                        <Imageview
                            src="/light.jpg"
                            alt="bookcover2"
                            width={1200}
                            height={1000}
                            className="block max-h-[600px] mx-auto object-contain"
                        />
                        <FadeIn>
                            <p className="text-text text-sm md:text-md text-start mt-4">
                                illustration title 1 <br/> Gondola soft pastels and Farber Castell pitt pastel pencil
                            </p>
                        </FadeIn>
                    </div>
                    <div>
                        <Imageview
                            src="/light.jpg"
                            alt="bookcover3"
                            width={1200}
                            height={1000}
                            className="block max-h-[600px] mx-auto object-contain"
                        />
                        <FadeIn>
                            <p className="text-text text-sm md:text-md text-start mt-4">
                                illustration title 1 <br/> Gondola soft pastels and Farber Castell pitt pastel pencil
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    )
}