"use client";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import { Menu } from "lucide-react";
import {usePathname} from "next/navigation";
import Image from "next/image";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const pathname= usePathname();

    const linkClass = (path: string) =>
        pathname === path
            ? "underline underline-offset-6 font-light text-blue-300"
            : "";

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
            <div className="text-lg md:text-3xl tracking-wide">
                <Link href="/">
                    <Image
                        src="/huinya logo.png"
                        alt="logo"
                        width={140}
                        height={40}
                        className=""
                        style={{zIndex: 10}}
                    />

                </Link>
            </div>

            <div className="md:flex gap-4 hidden tracking-wide">
                <Link
                    href="/about"
                    className={`m-3 hover:text-blue-300 transition ${linkClass('/about')}`}
                    onClick={() => setOpen(false)}
                >
                    About me
                </Link>
                <Link
                    href="/projects"
                    className={`m-3 hover:text-blue-300 transition ${linkClass('/projects')}`}
                    onClick={() => setOpen(false)}
                >
                    Projects
                </Link>
                <Link
                    href="/contact"
                    className={`m-3 hover:text-blue-300 transition ${linkClass('/contact')}`}
                    onClick={() => setOpen(false)}
                >
                    Contact
                </Link>

            </div>

            {/* Menu Button */}
            <button
                ref={buttonRef}
                onClick={() => setOpen(!open)}
                className="block md:hidden p-2 md:p-4 border rounded-full border-gray-500 hover:bg-gray-200 transition"
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
                        href="/contact"
                        className="m-3 hover:text-blue-300 transition"
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
