import Image from "next/image";
import { Oooh_Baby } from "next/font/google";
import FadeIn from "../components/FadeIn";
import SlideUp from "../components/SlideUp"
import {soligant} from "@/fonts/soligant";
import Link from "next/link";



export default function MyArt() {
    return (

        <section className="bg-accent  flex flex-col items-center rounded-t-full mx-auto text-center px-4 md:px-12 pt-32 pb-32 md:pt-52 md:pb-40">

            <FadeIn amount={0.5} duration={1.4}>
                <SlideUp y={80} delay={0.2} duration={1.0}>
                    <h1 className={`${soligant.className} text-text text-6xl leading-24 md:leading-40 tracking-tight md:text-[6vw]`}>
                        I also do
                    </h1>
                    <h1 className={`${soligant.className} text-text text-9xl leading-32 md:leading-40 tracking-widest md:text-[13vw]`}>
                        ART
                    </h1>
                    <h3 className="mt-3 font-medium tracking-tight">
                        find out more {" "}
                        <Link href="/art"
                              className="text-secondarydark underline hover:text-primary transition ease-in-out">
                            here
                        </Link>
                    </h3>
                    <Image
                        src="/cat.jpg"
                        alt="placeholder"
                        width={140}
                        height={40}
                        className="w-24 md:w-34 mx-auto pt-10 "
                    />
                </SlideUp>
            </FadeIn>


        </section>


    );
}