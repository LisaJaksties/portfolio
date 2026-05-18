import Image from "next/image";
import { Oooh_Baby } from "next/font/google";
import FadeIn from "../components/FadeIn";
import SlideUp from "../components/SlideUp"
import {soligant} from "@/fonts/soligant";



export default function Catchphrase() {
    return (

        <section className="bg-accent rounded-t-4xl mx-auto text-center px-4 md:px-12 pt-32 pb-32 md:pt-40 md:pb-40">

            <FadeIn amount={0.5} duration={1.4}>
                <SlideUp y={80} delay={0.2} duration={1.0}>
                    <h1 className={`${soligant.className} text-primary text-center text-5xl md:text-8xl`}>
                        Between Germany and Korea I create a visual language influenced by culture and nature.
                    </h1>
                </SlideUp>
                <SlideUp y={80} delay={0.4} duration={1.0}>
                    <h2 className={`text-secondarydark hidden md:block pt-20 text-center font-semibold md:text-6xl leading-none tracking-widest`}>
                        UX/UI · Design · Illustration · Web
                    </h2>
                </SlideUp>
                <SlideUp y={80} delay={0.4} duration={1.0}>
                    <h2 className={`text-secondarydark block md:hidden pt-20 text-center text-3xl font-semibold leading-14 tracking-widest`}>
                        UX/UI <br/> Design <br/> Illustration <br/> Web
                    </h2>
                </SlideUp>
            </FadeIn>


        </section>


    );
}
