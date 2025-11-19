"use client";
import { motion } from "framer-motion";

type FadeInProps = {
    children: React.ReactNode;
    y?: number;
    amount?: number;    // Sichtbarkeits-Schwelle
    duration?: number;
    delay?: number;
    once?: boolean;
};


export default function FadeIn({
                                   children,
                                   y = 0,
                                   amount = 0.8,
                                   duration = 1.8,
                                   delay = 0,
                                   once = true,
                               }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            viewport={{ once, amount }}
        >
            {children}
        </motion.div>
    );
}