"use client"

import { motion, stagger } from "motion/react"
import { MenuItem } from "./MenuItem"

const navVariants = {
    open: {
        transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
    },
    closed: {
        transition: { delayChildren: stagger(0.05, { from: "last" }) },
    },
}

export const Navigation = () => (
    <motion.ul variants={navVariants} className="absolute top-20 w-64 p-6">
        {[0, 1, 2, 3, 4].map((i) => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
)
