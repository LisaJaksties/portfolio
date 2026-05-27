"use client";

import {Section} from "@/types/section";
import { useState } from "react";
import { TableOfContents } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
const staticSections = [
    { id: "top", label: "Back to top" },
    { id: "project-description", label: "Project description" },
    { id: "overview", label: "Overview" },
];

export default function FloatingContents({ sections }: { sections: Section [] }) {
    const [open, setOpen] = useState(false);



    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={() => setOpen(!open)}
                className="bg-primary text-md text-white p-3 rounded-full shadow-xl transition-transform duration-300
    hover:scale-105 hover:-translate-y-0.5"
            >
                <TableOfContents />
            </button>

            <AnimatePresence>
            {open && (
                <motion.div
                    initial={{opacity: 0, y: 20, scale: 0.95}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    exit={{opacity: 0, y: 20, scale: 0.95}}
                    transition={{duration: 0.35, ease: "easeOut"}}
                    className="absolute bottom-14 right-0 bg-background shadow-2xl rounded-xl p-5 w-44"
                >

                        <ul className="space-y-3">
                            {staticSections.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`}
                                       onClick={() => setOpen(false)}
                                       className=" text-end block hover:text-primary transition-all duration-300 ease-out
                                       hover:scale-105 origin-left text-text transition capitalize ">
                                        {item.label}
                                    </a>
                                </li>
                            ))}


                            {sections?.map((section, i) => (
                                <li key={i}>
                                    <a
                                        href={`#${section.type}`}
                                        onClick={() => setOpen(false)}
                                        className=" text-end block hover:text-primary transition-all duration-300 ease-out
                                          hover:scale-105
                                          origin-left text-text transition capitalize ">
                                        {section.type}
                                    </a>
                                </li>
                            ))}
                        </ul>

                </motion.div>
                    )}
                </AnimatePresence>
                </div>
                );
            }