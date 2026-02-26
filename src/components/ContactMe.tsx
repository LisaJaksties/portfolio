import Image from "next/image";
import { Oooh_Baby } from "next/font/google";
import FadeIn from "../components/FadeIn";
import SlideUp from "../components/SlideUp"
import {soligant} from "@/fonts/soligant";
import Link from "next/link";



export default function ContactMe() {
    return (

        <section className=" rounded-t-4xl mx-auto text-center px-4 md:px-12 pt-32 pb-32 md:pt-40 md:pb-40">

            <FadeIn amount={0.5} duration={1.4}>
                <SlideUp y={80} delay={0.2} duration={1.0}>
                    <h1 className={`${soligant.className} text-text text-5xl leading-16 md:leading-34 tracking-wider md:text-[10vw]`}>
                       IF <br/> YOU
                    </h1>
                    <h2 className={`${soligant.className}  tracking-widest text-lg`}>
                        WONDER
                    </h2>
                    <h3 className="mt-2 font-medium tracking-tight">
                        let's stay in contact
                    </h3>
                </SlideUp>
                <SlideUp y={90} delay={0.4} duration={1.0}>
                   <Link href="/contact ">
                        <h2 className={`text-secondarydark underline hover:text-accent  transition pt-20 text-3xl  md:text-5xl leading-none tracking-widest`}>
                            Contact
                        </h2>
                   </Link>
                </SlideUp>
            </FadeIn>


        </section>


    );
}
