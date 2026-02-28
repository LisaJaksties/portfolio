"use client";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {Github, Instagram, Menu, X} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {usePathname} from "next/navigation";
import Image from "next/image";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const linkClass = (path: string) =>
        pathname === path
            ? " text-primary"
            : "";

    // Prevent background scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);



    return (
        <>
            {/* NAVBAR */}
            <nav className="flex justify-between items-center p-6 relative z-50">
                {/* Socials */}
                <div className="flex gap-4 pl-4 md:gap-8 text-text">
                    <Link href="https://instagram.com/huinya.illust" target="_blank">
                        <Instagram className="w-5 h-5 md:w-7 md:h-7 hover:text-accent transition"/>
                    </Link>
                    <Link href="https://github.com/LisaJaksties" target="_blank">
                        <Github className="w-5 h-5 md:w-7 md:h-7 hover:text-accent transition"/>
                    </Link>
                </div>

                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/lisachoilogo.svg"
                        alt="logo"
                        width={140}
                        height={40}
                        className="relative md:translate-y-4 w-14 md:w-24"
                    />
                </Link>

                {/* Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="relative z-50 p-4  rounded-full transition"
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {!open ? (
                            <motion.div
                                key="menu"
                                initial={{rotate: -120, opacity: 0}}
                                animate={{rotate: 0, opacity: 1}}
                                exit={{rotate: 120, opacity: 0}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <Menu className="w-6 h-6 md:w-8 md:h-8 text-text hover:text-accent transition"/>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="close"
                                initial={{rotate: 120, opacity: 0}}
                                animate={{rotate: 0, opacity: 1}}
                                exit={{rotate: -120, opacity: 0}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <X className="w-6 h-6 md:w-9 md:h-9 text-primary"/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </nav>

            {/* Menu full window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity: 1, y:0 }}
                        exit={{ opacity: 0, y:20 }}
                        transition={{ duration: 1, delay:0.2, ease: "easeOut" }}
                        className="fixed top-25 left-0 right-0 bottom-0 bg-background z-40"
                    >
                        <div className="flex flex-col justify-center items-center h-full gap-16 text-5xl md:text-7xl text-text font-light">
                            <Link
                                href="/about"
                                onClick={() => setOpen(false)}
                                className={`hover:text-accent transition ${linkClass("/about")}`}
                            >
                                About me
                            </Link>

                            <Link
                                href="/projects"
                                onClick={() => setOpen(false)}
                                className={`hover:text-accent  transition ${linkClass("/projects")}`}
                            >
                                Projects
                            </Link>

                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className={`hover:text-accent  transition ${linkClass("/contact")}`}
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
