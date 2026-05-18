"use client";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";
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
                <div className="flex gap-4 pl-2 md:pl-4 md:gap-8 text-text">
                    <Link href="https://instagram.com/huinya.illust" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" className="w-5 h-5 md:w-7 md:h-7 fill-text hover:fill-accent hover:scale-120 transition-transform duration-300"><title>Instagram</title>
                            <path
                                d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
                        </svg>
                    </Link>

                    <Link href="https://github.com/LisaJaksties" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96"
                             className="w-5 h-5 md:w-7 md:h-7 fill-text hover:fill-accent hover:scale-120 transition-transform duration-300">
                            <g clipPath="url(#clip0_730_27126)">
                                <path
                                    d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_730_27126">
                                    <rect width="98" height="96" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>

                {/* Logo */}

                <Link href="/"
                      className=" absolute left-1/2 -translate-x-1/2 top-6 hover:scale-110 transition-transform duration-300">
                        <Image
                            src="/Logo.png"
                            alt="logo"
                            width={140}
                            height={40}
                            className="w-20 md:w-28"
                        />
                </Link>


                {/* Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="relative z-50 p-4  rounded-full hover:scale-110 transition-transform duration-300"
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
                                <Menu
                                    className="w-6 h-6 md:w-8 md:h-8 text-text hover:text-accent cursor-pointer transition"/>
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
                        <div
                            className="flex flex-col justify-center items-center h-full gap-10 md:gap-12 text-4xl md:text-6xl text-text font-light">

                            <div className="relative group hover:scale-110 transition-transform duration-300">
                                <Link
                                    href="/about"
                                    onClick={() => setOpen(false)}
                                    className={`relative z-10 hover:text-accent transition  ${linkClass("/about")}`}
                                >
                                    About me
                                </Link>

                                <motion.img
                                    src="/Frame%201.png"
                                    alt="flower"
                                    className="pointer-events-none absolute right-full mr-6 top-1/2 -translate-y-1/2 w-10 h-10 opacity-0 group-hover:opacity-100"
                                    animate={{rotate: 360}}
                                    transition={{repeat: Infinity, duration: 4, ease: "linear"}}
                                />

                            </div>

                            <div className="relative group hover:scale-110 transition-transform duration-300">
                                <Link
                                    href="/projects"
                                    onClick={() => setOpen(false)}
                                    className={`relative z-10 hover:text-accent  transition ${linkClass("/projects")}`}
                                >
                                    Works
                                </Link>

                                <motion.img
                                    src="/Frame%201.png"
                                    alt="flower"
                                    className="pointer-events-none absolute right-full mr-6 top-1/2 -translate-y-1/2 w-10 h-10 opacity-0 group-hover:opacity-100"
                                    animate={{rotate: 360}}
                                    transition={{repeat: Infinity, duration: 4, ease: "linear"}}
                                />
                            </div>

                            <div className="relative group hover:scale-110 transition-transform duration-300">
                                <Link
                                    href="/art"
                                    onClick={() => setOpen(false)}
                                    className={`relative z-10 hover:text-accent  transition ${linkClass("/art")}`}
                                >
                                    Illustration
                                </Link>

                                <motion.img
                                    src="/Frame%201.png"
                                    alt="flower"
                                    className="pointer-events-none absolute right-full mr-6 top-1/2 -translate-y-1/2 w-10 h-10 opacity-0 group-hover:opacity-100"
                                    animate={{rotate: 360}}
                                    transition={{repeat: Infinity, duration: 4, ease: "linear"}}
                                />
                            </div>


                            <div className="relative group hover:scale-110 transition-transform duration-300">
                                <Link
                                    href="/contact"
                                    onClick={() => setOpen(false)}
                                    className={`relative z-10 hover:text-accent  transition ${linkClass("/contact")}`}
                                >
                                    Contact
                                </Link>

                                <motion.img
                                    src="/Frame%201.png"
                                    alt="flower"
                                    className="pointer-events-none absolute right-full mr-6 top-1/2 -translate-y-1/2 w-10 h-10 opacity-0 group-hover:opacity-100"
                                    animate={{rotate: 360}}
                                    transition={{repeat: Infinity, duration: 4, ease: "linear"}}
                                />
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
