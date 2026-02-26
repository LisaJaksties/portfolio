"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ArrowAnimation() {
    return (
        <motion.div
            className="absolute top-3/4 left-96"
            initial={{opacity: 0, y: -40, x: -20, rotate:-6}}
            animate={{opacity: 1, y: 0, x: 0 , rotate:0}}
            transition={{
                duration: 1.8,
                delay: 1.5,
                ease: "easeOut",
            }}
        >
            <Image
                src="/arrow.png"
                alt="arrow"
                width={210}
                height={100}
            />
        </motion.div>
    )
}
