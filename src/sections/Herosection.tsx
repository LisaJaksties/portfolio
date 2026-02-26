import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
    image: string;
    title: string;
    address: string;
};

export default function Herosection({image, title, address}: HeroSectionProps) {


    return (
        <div>
            <div className="relative bg-orange-50 p-10  hidden md:block">
                <Image
                    src={image}
                    alt={title}
                    width={1024}
                    height={384}
                    className="max-w-5xl mx-auto object-cover h-[500px]"
                    priority
                />

                <Link href={`${address}`} target="_blank" rel="noreferrer">
                    <div className="hidden md:flex md:absolute items-center justify-center
                             text-center bottom-8 right-16 w-24 h-24 border border-gray-400 rounded-full z-20">
                        <p className="text-sm font-light">view design</p>
                    </div>
                </Link>
            </div>
            <div className="md:hidden block">
                <Image
                    src={image}
                    alt={title}
                    width={1024}
                    height={384}
                    className="max-w-full mx-auto object-cover"
                    priority
                />
            </div>

            <Link href={`${address}`} target="_blank" rel="noreferrer">
                <p className="md:hidden block pt-8 hover:underline text-sm text-center items-center font-light">view design</p>
            </Link>
        </div>
    );
}