"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    once = false,
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{
                once,
                amount: 0.2,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}