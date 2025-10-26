"use client"

import { motion } from "motion/react"

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: { y: { stiffness: 1000 } },
    },
}

export const MenuItem = ({ i }: { i: number }) => {
    const style = { borderColor: colors[i % colors.length] }
    return (
        <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex cursor-pointer items-center space-x-4 rounded-md p-2 hover:bg-gray-100 transition-colors"
        >
            <div className="h-10 w-10 rounded-full border-2" style={style}></div>
            <div className="h-4 w-40 rounded bg-gray-200"></div>
        </motion.li>
    )
}
