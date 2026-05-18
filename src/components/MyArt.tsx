import Image from "next/image";
import { Oooh_Baby } from "next/font/google";
import FadeIn from "../components/FadeIn";
import SlideUp from "../components/SlideUp"
import {soligant} from "@/fonts/soligant";
import Link from "next/link";



export default function MyArt() {
    return (

        <section className="bg-accent flex flex-col items-center rounded-t-full mx-auto text-center px-4 md:px-12 pt-32 pb-32 md:pt-52 md:pb-40">

            <FadeIn amount={0.5} duration={1.0}>
                <SlideUp y={80} delay={0.2} duration={1.0}>
                    <h1 className={`${soligant.className} text-text text-3xl leading-20 md:leading-40 tracking-tight md:text-[6vw]`}>
                        I also make
                    </h1>
                    <h1 className={`${soligant.className} text-text text-5xl leading-20 md:leading-40 tracking-widest md:text-[9vw]`}>
                        illustrations
                    </h1>
                    <h3 className="mt-10 md:mt-8 font-medium tracking-tight">
                        find out more {" "}
                        <Link href="/art"
                              className="inline-block text-secondarydark underline hover:text-primary transition-all duration-300 ease-out
                                       hover:scale-110 hover:translate-x-0.5 origin-left transition ease-in-out">
                            here
                        </Link>
                    </h3>
                    <Image
                        src="/Frame 4.png"
                        alt="pastels"
                        width={140}
                        height={50}
                        className="w-24 md:w-48 mx-auto pt-8 md:pt-4 "
                    />
                </SlideUp>
            </FadeIn>


        </section>


    );
}