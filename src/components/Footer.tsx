"use client";

import Link from "next/link";
import {Github, Instagram, Linkedin} from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Footer() {
    return (
        <section className="pt-20 pb-8 mb-2 text-center flex flex-col items-center gap-4">
            <FadeIn>
                <Link href="mailto:huinya.illust@gmail.com" className="text-lg underline font-light text-gray-500 tracking-wide">
                    huinya.illust@gmail.com
                </Link>
            </FadeIn>

            <FadeIn>
                <div className="flex gap-4 text-gray-500">
                    <Link href="https://instagram.com/huinya.illust" target="_blank">
                        <Instagram className="w-5 h-5 hover:text-black transition"/>
                    </Link>

                    <Link href="https://github.com/LisaJaksties" target="_blank">
                        <Github className="w-5 h-5 hover:text-black transition"/>
                    </Link>

                    <Link href="https://linkedin.net/deinProfil" target="_blank">
                        <Linkedin className="w-5 h-5 hover:text-black transition"/>
                    </Link>
                </div>
            </FadeIn>

        </section>
    )
}