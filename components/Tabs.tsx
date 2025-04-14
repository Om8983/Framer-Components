import { motion, MotionValue, useMotionValue, useTransform } from "motion/react";
import { useRef, useState } from "react";

export default function Tabs({ children, setPosition, svg }: { svg?: React.ReactElement, children: string, setPosition: ({ width, opacity, left }: { width: number, opacity: number, left: number }) => void }) {
    const divRef = useRef<HTMLLIElement | null>(null)
    const [hovered, setHover] = useState(false)
    return (
        <motion.li
            ref={divRef}
            onMouseEnter={() => {
                if (!divRef.current) return;
                const { width } = divRef.current.getBoundingClientRect()
                setPosition({ opacity: 1, width: width, left: divRef.current.offsetLeft })
                setHover(true)
            }}
            onMouseLeave={() => setHover(false)}
            className=" z-10 flex items-center gap-1 cursor-pointer font-medium px-3 text-center text-white hover:text-violet-300 "
        >
            {children}
            {
                svg !== undefined &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                >
                    {svg}
                </motion.div>
            }

        </motion.li>
    )
}
