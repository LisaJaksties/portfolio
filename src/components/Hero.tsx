import Image from "next/image";
import { Oooh_Baby } from "next/font/google";
import FadeIn from "../components/FadeIn";
import SlideUp from "../components/SlideUp"
import ArrowAnimation from "@/components/ArrowAnimation";
import RotatingSmiley from "@/components/RotatingSmiley";
import { costaline } from "@/fonts/costaline";
import {costaline_italic} from "@/fonts/costaline_italic";
import {soligant} from "@/fonts/soligant";

const ooohBaby = Oooh_Baby({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});



export default function Hero() {
    return (

        <section className="md:max-w-7xl pt-32 pb-32 md:pt-44 md:pb-44 mx-auto text-center">

            <FadeIn amount={0.4} duration={1.0}>
                <div className="max-w-7xl text-text ">

                    <SlideUp y={80} delay={0.2} duration={1.0}>
                    <h1 className={`${soligant.className} text-center text-4xl md:text-7xl leading-none tracking-tight`}>
                        Welcome to the
                    </h1>
                    </SlideUp>

                    <div className=" md:flex md:justify-center md:space-x-10">
                        <SlideUp y={60} delay={0.4} duration={1.0}>
                        <h1 className={`${soligant.className} text-center text-7xl md:text-[11vw] mt-5 md:mt-10 leading-none tracking-wide`}>
                            creative
                        </h1>
                        </SlideUp>

                        <SlideUp y={60} delay={0.5} duration={1.0}>
                            <h1 className={`${soligant.className} text-center text-7xl md:text-[11vw] mt-5 md:mt-10 leading-none tracking-wide`}>
                                space
                            </h1>
                        </SlideUp>

                        {/*<FadeIn amount={0.8} delay={1.0} duration={2.0}>
                        <div className="hidden md:flex items-center gap-6">
                            <span className="text-7xl md:text-8xl font-light text-muted">(</span>

                            <p className={`${costaline.className}  text-gray-700 text-lg mt-8 `}>
                                I work with design, code and illustration to create <br/>
                                thoughtful and human centered experiences.
                            </p>

                            <span className="text-7xl md:text-8xl font-light text-muted">)</span>
                        </div>
                        </FadeIn>*/}
                    </div>

                    <SlideUp y={40} delay={0.4} duration={1.0}>
                    <h1 className={`${soligant.className} mt-5 md:mt-10 text-center text-7xl md:text-[11vw] tracking-widest`}>
                        of <br/> lisa choi
                    </h1>
                    </SlideUp>

                    <FadeIn amount={0.8} delay={0.4} duration={1.5}>
                        <div className={`${ooohBaby.className} text-primary pt-20 md:-translate-y-85 md:translate-x-100 -rotate-7 text-4xl md:pt-4 px-8`}>
                                I work with design, code and illustration <br/>
                                to create thoughtful and <br/> human centered experiences.
                        </div>
                    </FadeIn>

                </div>
            </FadeIn>


        </section>


    );
}
