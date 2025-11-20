import Image from "next/image";
import { Oooh_Baby } from "next/font/google";
import FadeIn from "../components/FadeIn";

const ooohBaby = Oooh_Baby({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});


export default function Hero() {
    return (
        <section className="relative md:max-w-6xl mx-auto md:px-18 py-22">
            {/* Bild rechts */}
            <FadeIn amount={0.4} delay={0.5} duration={2.5}>
            <div className="relative w-full flex justify-center md:justify-end">
                <Image
                    src="/clover.jpg"
                    alt="Portfolio preview"
                    width={600}
                    height={400}
                    className="w-full md:w-[60%] object-cover opacity-70"
                    priority
                />
            </div>
            </FadeIn>

            <FadeIn amount={0.4}>
            {/* Grosse screens: textblock, der auf dem Bild liegt */}
            <div className=" absolute hidden md:block top-[60%] left-48 -translate-y-1/2 z-20">

                <h1 className={`${ooohBaby.className} text-7xl md:text-9xl leading-none`}>
                    huinya
                </h1>
                <h2 className="text-4xl md:text-6xl tracking-[0.4em] mt-8">PORTFOLIO</h2>
                <div className="flex text-sm md:text-lg space-x-16 tracking-[0.4em] mt-3 text-gray-700">
                    <p>web design</p>
                    <p>illustration</p>
                    <p>ux</p>
                </div>

            </div>
            </FadeIn>

            <FadeIn amount={0.4} >
            {/* mobile screen: text */}
            <div className=" absolute md:hidden top-[80%] left-5 -translate-y-1/2 z-20">

                <h1 className={`${ooohBaby.className} text-6xl`}>
                    huinya
                </h1>
                <h2 className="text-5xl tracking-widest mt-7">PORTFOLIO</h2>
                <div className="flex text-sm space-x-4 tracking-wide mt-3 text-gray-700">
                    <p>web design</p>
                    <p>illustration</p>
                    <p>ux</p>
                </div>

            </div>
            </FadeIn>

        </section>


    );
}
