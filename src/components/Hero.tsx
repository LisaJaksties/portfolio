import Image from "next/image";
import { Oooh_Baby } from "next/font/google";
import FadeIn from "../components/FadeIn";
import SlideUp from "../components/SlideUp"
import ArrowAnimation from "@/components/ArrowAnimation";
import RotatingSmiley from "@/components/RotatingSmiley";
import { costaline } from "@/fonts/costaline";
import {costaline_italic} from "@/fonts/costaline_italic";
import {soligant} from "@/fonts/soligant";
import FloatIn from "@/components/FLoatIn";

const ooohBaby = Oooh_Baby({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});



export default function Hero() {
    return (

        <section className="relative overflow-x-hidden z-0 md:max-w-7xl pt-32 pb-44 md:pt-44 md:pb-44 mx-auto text-center">

            <FadeIn amount={0.4} duration={1.0}>
                {/*for mobile*/}
                <div className="absolute block md:hidden top-35 right-7 -z-10 pointer-events-none">
                    <FloatIn x={10} y={-40} rotate={-20} delay={0.2}>
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={50}
                            height={50}
                        />
                    </FloatIn>
                </div>

                <div className="absolute block md:hidden top-14 left-5 rotate-210 -z-10 pointer-events-none">
                    <FloatIn x={10} y={20} rotate={-20} delay={0.2}>
                        <Image
                            src="/Frame 2.png"
                            alt="Flower"
                            width={80}
                            height={80}
                        />
                    </FloatIn>
                </div>

                <div className="absolute block md:hidden top-110 right-10 rotate-210 -z-10 pointer-events-none">
                    <FloatIn x={10} y={20} rotate={40} delay={0.6}>
                        <Image
                            src="/Frame 3.png"
                            alt="Flower"
                            width={80}
                            height={80}
                        />
                    </FloatIn>
                </div>

                <div className="absolute block md:hidden top-180 left-10 rotate-210 -z-10 pointer-events-none">
                    <FloatIn x={40} y={40} rotate={-10} delay={2.0}>
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={50}
                            height={50}

                        />
                    </FloatIn>
                </div>

                <div className="absolute block md:hidden top-240 right-6 -z-10 pointer-events-none">
                    <FloatIn x={40} y={40} rotate={20} delay={2.1}>
                        <Image
                            src="/Frame 2.png"
                            alt="Flower"
                            width={100}
                            height={100}
                        />
                    </FloatIn>
                </div>



                {/*for desktop view*/}

                <div className="absolute hidden md:block top-20 left-50 -z-10 pointer-events-none" >
                    <FloatIn x={-20} y={-60} rotate={-20} delay={0.2}>
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={100}
                            height={100}
                        />
                    </FloatIn>
                </div>

                <div className="absolute hidden md:block top-100 right-10 rotate-60 -z-10 pointer-events-none">
                    <FloatIn x={-20} y={-60} rotate={0} delay={0.2}>
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={60}
                            height={60}
                        />
                    </FloatIn>
                </div>

                <div className="absolute hidden md:block bottom-30 right-65 rotate-100 -z-5 pointer-events-none">
                    <FloatIn x={40} y={-90} rotate={20} delay={2.0}>
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={100}
                            height={100}
                        />
                    </FloatIn>
                </div>


                <div className="absolute hidden md:block top-50 left-6 -z-10 pointer-events-none">
                    <FloatIn x={-20} y={-80} rotate={-20} delay={0.2}>
                        <Image
                            src="/Frame 2.png"
                            alt="Flower"
                            width={200}
                            height={200}

                        />
                    </FloatIn>
                </div>

                <div className="absolute hidden md:block bottom-40 right-30 rotate-190 -z-10 pointer-events-none">
                    <FloatIn x={-40} y={-90} rotate={-20} delay={2.0}>
                        <Image
                            src="/Frame 2.png"
                            alt="Flower"
                            width={200}
                            height={200}

                        />
                    </FloatIn>
                </div>

                <div className="absolute hidden md:block bottom-120 rotate-80 left-100 -z-10 pointer-events-none">
                    <FloatIn x={-10} y={80} rotate={20} delay={1.0}>
                        <Image
                            src="/Frame 3.png"
                            alt="Flower"
                            width={150}
                            height={150}
                        />
                    </FloatIn>
                </div>


                <div className="max-w-7xl text-text z-10">

                    <SlideUp y={80} delay={0.2} duration={1.0}>
                    <h1 className={`${soligant.className} text-center text-4xl md:text-7xl leading-none tracking-tight`}>
                        Welcome to the
                    </h1>
                    </SlideUp>

                    <div className=" md:flex md:justify-center md:space-x-10">
                        <SlideUp y={60} delay={0.4} duration={1.0}>
                        <h1 className={`${soligant.className} text-center text-8xl md:text-[11vw] mt-5 md:mt-10 leading-none tracking-wide`}>
                            creative
                        </h1>
                        </SlideUp>

                        <SlideUp y={60} delay={0.5} duration={1.0}>
                            <h1 className={`${soligant.className} text-center text-8xl md:text-[11vw] mt-5 md:mt-10 leading-none tracking-wide`}>
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
                        <h1 className={`${soligant.className} mt-5 text-center text-6xl md:text-[9vw] tracking-widest`}>
                            of
                        </h1>
                    </SlideUp>

                    <SlideUp y={40} delay={0.4} duration={1.0}>
                    <h1 className={`${soligant.className} mt-5 text-text md:mt-8 text-center text-8xl md:text-[11vw] md:tracking-widest`}>
                        lisa choi
                    </h1>
                    </SlideUp>

                    <FadeIn amount={0.8} delay={0} duration={1.5}>
                        <div className={`${ooohBaby.className} text-secondarydark pt-40 md:-translate-y-85 md:translate-x-90 -rotate-7 text-4xl md:pt-4 px-8`}>
                                I work with design, code and illustration <br/>
                                to create thoughtful and <br/> human centered experiences.
                        </div>
                    </FadeIn>

                </div>


            </FadeIn>


        </section>


    );
}
