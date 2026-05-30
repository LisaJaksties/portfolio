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
                <SlideUp y={80} delay={0.0} duration={1.0}>
                    <h1 className={`${soligant.className} text-text text-3xl leading-20 md:leading-40 tracking-tight md:text-[6vw]`}>
                        I also make
                    </h1>
                    <h1 className={`${soligant.className} text-text text-5xl leading-20 md:leading-30 tracking-widest md:text-[9vw]`}>
                        illustrations
                    </h1>

                    <Link
                        href="/art"
                        className="group mx-auto flex flex-row items-center gap-3 w-fit pt-10"
                    >
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={40}
                            height={40}
                            className="h-5 w-5 md:h-10 md:w-10 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-30"
                        />

                        <p
                            className="text-text text-sm md:text-lg font-light transition-all duration-300 ease-out group-hover:scale-105 group-hover:underline"
                        >
                            find out more
                        </p>
                    </Link>
                    <Image
                        src="/Frame 4.png"
                        alt="pastels"
                        width={150}
                        height={150}
                        quality={100}
                        className="w-24 md:w-48 mx-auto pt-10 "
                    />
                </SlideUp>
            </FadeIn>


        </section>


    );
}