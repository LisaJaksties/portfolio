import Image from "next/image";
import {Oooh_Baby, Poppins} from "next/font/google";
import FadeIn from "../components/FadeIn";
import SlideUp from "../components/SlideUp"
import {soligant} from "@/fonts/soligant";
import Link from "next/link";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

export default function Catchphrase() {
    return (

        <section className="bg-accent rounded-t-4xl mx-auto text-center px-4 md:px-12 pt-26 pb-26 md:pt-40 md:pb-40">

            <FadeIn amount={0.5} duration={1.4}>
                <SlideUp y={80} delay={0.2} duration={1.0}>
                    <h1 className={`${soligant.className} text-primary text-center text-4xl md:text-7xl tracking-widest`}>
                        Creating culture aware digital experiences through usability<span className={`${poppins.className} font-light`}>, </span>visual storytelling and thoughtful design.
                    </h1>
                </SlideUp>
                <SlideUp y={80} delay={0.4} duration={1.0}>
                    <h2 className={`text-secondarydark hidden md:block pt-20 text-center font-semibold md:text-5xl leading-none tracking-widest`}>
                        UX/UI · Communication Design · Illustration
                    </h2>
                </SlideUp>
                <SlideUp y={80} delay={0.4} duration={1.0}>
                    <h2 className={`text-secondarydark block md:hidden pt-20 text-center text-xl font-semibold leading-10 tracking-widest`}>
                        UX/UI <br/> Communication Design <br/> Illustration
                    </h2>
                </SlideUp>

                <SlideUp y={80} delay={0.4} duration={1.0}>
                <Link
                    href="/about"
                    className="group mx-auto flex flex-row items-center gap-3 w-fit pt-10 md:pt-20"
                >
                    <Image
                        src="/Frame 3.png"
                        alt="Flower"
                        width={40}
                        height={40}
                        className="h-5 md:h-10 w-fit transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-30"
                    />

                    <p
                        className="text-text text-sm md:text-lg font-light transition-all duration-300 ease-out group-hover:scale-105 group-hover:underline"
                    >
                        more about me
                    </p>
                </Link>
                </SlideUp>
            </FadeIn>


        </section>


    );
}
