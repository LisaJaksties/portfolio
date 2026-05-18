"use client";

import { useState } from "react";
import Image from "next/image";


type Props = {
    src: string;
    alt?: string;
    width: number;
    height: number;
    className?: string;
};

export default function Imageview({
                                          src,
                                          alt = "",
                                          width,
                                          height,
                                          className,
                                      }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="relative group inline-block">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                onClick={() => setIsOpen(true)}
                className={`cursor-zoom-in ${className}`}
            />

            <span
                className="absolute bottom-4 right-4 bg-text/70 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Click to enlarge
            </span>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-white flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-[90%] max-h-[90%] rounded-xl"
                    />
                </div>
            )}
        </>
    );
}