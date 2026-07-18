import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

type HeroSectionProps = {
    id: string;
    image: string;
    title: string;
    links: {
        label: string;
        url: string;
    }[];
};

export default function Herosection({id, image, title, links}: HeroSectionProps) {


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

                <div className="hidden md:flex gap-4 absolute -bottom-14 right-25 z-20">
                    {links?.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className="
                                            flex items-center justify-center
                                            text-text text-xl text-center
                                            w-32 h-24
                                            bg-accent rounded-b-full
                                            hover:translate-y-1
                                            hover:scale-y-110
                                            transition duration-150"
                            >
                                <p className="text-sm font-light">
                                    {link.label}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                {/*
                <Link href={`${address}`} target="_blank" rel="noreferrer">
                    <div className="hidden md:flex md:absolute items-center justify-center text-text text-xl
                             text-center -bottom-14 right-25 w-32 h-24 bg-accent rounded-b-full z-20
                             hover:translate-y-1 hover:scale-y-110 transition duration-150">
                        <p className="text-sm font-light">view design</p>
                    </div>
                </Link>

                */}
            </div>
            <div className="md:hidden block pt-8">
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

            {/*
            <Link href={`${address}`} target="_blank" rel="noreferrer">
                <p className="md:hidden block pt-8 hover:underline text-sm text-center items-center font-light">view
                    design</p>
            </Link>
            */}

            <div className="flex flex-wrap justify-center gap-x-10 px-6 mx-auto">
            {links?.map((link, i) => (
                <Link
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="md:hidden group space-x-2 flex flex-row items-center pt-10 w-fit"
                >
                    <Image
                        src="/Frame 1.png"
                        alt="Flower"
                        width={20}
                        height={20}
                        className="transition-all duration-300 ease-out  group-hover:scale-110 group-hover:rotate-30 group-active:scale-110 group-active:rotate-30 "
                    />

                    <p className="text-text text-sm font-light transition-all duration-300 ease-out group-hover:scale-105 group-hover:underline group-active:scale-105 group-active:underline">
                        {link.label}
                    </p>

                </Link>
            ))}
            </div>
        </div>
    );
}