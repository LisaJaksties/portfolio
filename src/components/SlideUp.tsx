"use client";
import { motion } from "framer-motion";

type SlideUpProps = {
    children: React.ReactNode;
    y?: number;
    amount?: number;    // Sichtbarkeits-Schwelle
    duration?: number;
    delay?: number;
    once?: boolean;
};

export default function SlideUp({
                            children,
                            y = 40,
                            amount = 0.6,
                            duration = 1.2,
                            delay = 0,
                            once = true,
                        }: SlideUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            viewport={{ once, amount }}
        >
            {children}
        </motion.div>
    )
}
