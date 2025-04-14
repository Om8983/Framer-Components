import { motion } from "motion/react"

export default function Hover({ position }: { position: { width: number, opacity: number, left: number } }) {

    return (
        <>
            <motion.div
                animate={{ ...position, padding: 2 }}
                className="z-0 absolute outline-1 outline-violet-200 h-6 mt-1 rounded-[8px] bg-gradient-to-l from-blue-400 to-violet-500 -inset-0 blur-xl"
            />
        </>

    )
}
