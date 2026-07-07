import Image from "next/image";
import FadeIn from "../components/FadeIn";
import SlideUp from "../components/SlideUp"
import Link from "next/link";
import { cormorant } from "@/fonts/cormorant";


export default function ContactMe() {
    return (

        <section className="bg-background rounded-t-4xl mx-auto text-center px-4 md:px-12 pt-32 pb-32 md:pt-40 md:pb-40">

            <FadeIn amount={0.5} duration={1.4}>
                <SlideUp y={80} delay={0.2} duration={1.0}>
                    <h1 className={`${cormorant.className} text-text text-8xl leading-24 md:leading-34 tracking-wider md:text-[10vw]`}>
                       IF <br/> YOU
                    </h1>
                    <h2 className={`${cormorant.className}  tracking-widest text-2xl`}>
                        WONDER
                    </h2>

                    <Link
                        href="/contact"
                        className="group mx-auto flex flex-row items-center gap-3 w-fit pt-10"
                    >
                        <Image
                            src="/Frame 1.png"
                            alt="Flower"
                            width={30}
                            height={30}
                            className="h-5 w-5 md:h-8 md:w-8 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-30"
                        />

                        <p
                            className="text-text text-sm md:text-md font-light transition-all duration-300 ease-out group-hover:scale-105 group-hover:underline"
                        >
                            let`s stay in contact
                        </p>
                    </Link>
                </SlideUp>
            </FadeIn>


        </section>


    );
}
