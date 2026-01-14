import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
    image: string;
    title: string;
    address: string;
};

export default function Herosection({image, title, address}: HeroSectionProps) {


    return (
        <div className="relative bg-orange-50 p-24">
            <Image
                src={image}
                alt={title}
                width={896}
                height={384}
                className="max-w-4xl mx-auto block object-cover h-96"
                priority
            />

            <Link href={`${address}`} target="_blank" rel="noreferrer">
                <div className="hidden md:flex md:absolute items-center justify-center
                         text-center bottom-8 right-16 w-24 h-24 border border-gray-400 rounded-full z-20">
                    <p className="text-sm font-light">view design</p>
                </div>
            </Link>
        </div>
    );
}