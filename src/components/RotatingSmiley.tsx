"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type RotatingSmileyProps = {
    src: string
    size?: number
    className?: string
}

export default function RotatingSmiley({
                                           src,
                                           size = 100,
                                           className = "",
                                       }: RotatingSmileyProps) {
    return (
        <motion.div
            whileHover={{ rotate: 360 }}
            transition={{
                rotate: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                },
            }}

            initial={{
                opacity: 0,
                x: 0,
                y: 0,
            }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
            }}


            className={`inline-block ${className}`}
        >
            <Image
                src={src}
                alt="smiley"
                width={size}
                height={size}
            />
        </motion.div>
    )
}
