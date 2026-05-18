import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

type HeroSectionProps = {
    id: string;
    image: string;
    title: string;
    address: string;
};

export default function Herosection({id, image, title, address}: HeroSectionProps) {


    return (
        <div>
            <div id={id} className="relative  pb-10  pt-14 hidden md:block">
                <FadeIn>
                <Image
                    src={image}
                    alt={title}
                    width={1024}
                    height={384}
                    className="w-full mx-auto object-cover h-[600px] z-20 "
                    priority
                />
                </FadeIn>

                <Link href={`${address}`} target="_blank" rel="noreferrer">
                    <div className="hidden md:flex md:absolute items-center justify-center text-text text-xl
                             text-center -bottom-14 right-25 w-32 h-24 bg-accent rounded-b-full z-20
                             hover:translate-y-1 hover:scale-y-110 transition duration-150">
                        <p className="text-sm font-light">view design</p>
                    </div>
                </Link>
            </div>
            <div className="md:hidden block">
                <FadeIn>
                <Image
                    src={image}
                    alt={title}
                    width={1024}
                    height={384}
                    className="max-w-full mx-auto object-cover"
                    priority
                />
                </FadeIn>
            </div>

            <Link href={`${address}`} target="_blank" rel="noreferrer">
                <p className="md:hidden block pt-8 hover:underline text-sm text-center items-center font-light">view design</p>
            </Link>
        </div>
    );
}