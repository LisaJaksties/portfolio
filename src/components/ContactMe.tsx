import Image from "next/image";
import { Oooh_Baby } from "next/font/google";
import FadeIn from "../components/FadeIn";
import SlideUp from "../components/SlideUp"
import {soligant} from "@/fonts/soligant";
import Link from "next/link";



export default function ContactMe() {
    return (

        <section className="bg-background rounded-t-4xl mx-auto text-center px-4 md:px-12 pt-32 pb-32 md:pt-40 md:pb-40">

            <FadeIn amount={0.5} duration={1.4}>
                <SlideUp y={80} delay={0.2} duration={1.0}>
                    <h1 className={`${soligant.className} text-text text-8xl leading-24 md:leading-34 tracking-wider md:text-[10vw]`}>
                       IF <br/> YOU
                    </h1>
                    <h2 className={`${soligant.className}  tracking-widest text-2xl`}>
                        WONDER
                    </h2>
                    <h3 className="mt-3 font-medium tracking-tight">
                        let`s stay in <Link href="/contact" className=" inline-block text-secondarydark transition-all duration-300 ease-out
                                       hover:scale-110 hover:translate-x-0.5 origin-left underline hover:text-accent transition ease-in-out">contact</Link>
                    </h3>
                </SlideUp>
            </FadeIn>


        </section>


    );
}
