"use client";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import { Menu } from "lucide-react";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            // If clicked outisde of menu AND button
            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);


    return (
        <nav className="flex justify-between items-center p-4">
            <div className="text-lg md:text-3xl">
                <Link href="/"> huinya <span className="text-sm">design</span> </Link>
            </div>

            {/* Menu Button */}
            <button
                ref={buttonRef}
                onClick={() => setOpen(!open)}
                className="p-2 md:p-4 border rounded-full border-gray-500 hover:bg-gray-200 transition"
            >
                <Menu />
            </button>

            {open && (
                <div ref={menuRef}
                    className="absolute top-16 right-4 bg-white shadow-xl p-4 pr-18 flex flex-col gap-5 z-30 ">
                    <Link
                        href="/about"
                        className="m-3 hover:text-blue-300 transition"
                        onClick={() => setOpen(false)}
                    >
                        About me
                    </Link>
                    <Link
                        href="/projects"
                        className="m-3 hover:text-blue-300 transition"
                        onClick={() => setOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/blog"
                        className="m-3 hover:text-blue-300 transition"
                        onClick={() => setOpen(false)}
                    >
                        Blog
                    </Link>
                </div>
            )}
        </nav>
    );
}
