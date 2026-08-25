"use client"

import { motion } from "framer-motion"

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export const RevealGroup = ({ children, className = "" }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-160px" }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const RevealItem = ({ children, className = "" }) => {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    )
}