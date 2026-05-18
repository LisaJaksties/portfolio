"use client";
import { motion } from "framer-motion";

type FloatInProps = {
    children: React.ReactNode;
    x?: number;
    y?: number;
    rotate?: number;
    delay?: number;
    duration?: number;
};

export default function FloatIn({
                                    children,
                                    x = 0,
                                    y = 40,
                                    rotate = 0,
                                    delay = 0,
                                    duration = 1.2,
                                }: FloatInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x, y, rotate }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}