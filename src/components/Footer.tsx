"use client";

import Link from "next/link";
import {Github, Instagram, Linkedin} from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Footer() {
    return (
        <section className="pt-20 pb-8 mb-2 text-center flex flex-col items-center gap-4">

            <FadeIn>
                <Link href="mailto:huinya.illust@gmail.com" className="text-lg underline font-light text-text/80 tracking-wide">
                    huinya.illust@gmail.com
                </Link>
            </FadeIn>

            <FadeIn>
                <div className="flex gap-4 text-text/80">
                    <Link href="https://instagram.com/huinya.illust" target="_blank">
                        <Instagram className="w-8 h-8 hover:text-accent transition"/>
                    </Link>

                    <Link href="https://github.com/LisaJaksties" target="_blank">
                        <Github className="w-8 h-8 hover:text-accent transition"/>
                    </Link>

                    <Link href="https://linkedin.net/deinProfil" target="_blank">
                        <Linkedin className="w-8 h-8 hover:text-accent transition"/>
                    </Link>
                </div>
            </FadeIn>

            <FadeIn>
                <div className="flex gap-2 text-lg font-light text-text/80 tracking-widest">
                    <p>Lisa Choi © 2026. All rights reserved.</p>
                    <Link href="/impressum" className="hover:underline transition ease-in duration-200">
                        Impressum
                    </Link>
                </div>
            </FadeIn>

        </section>
    )
}