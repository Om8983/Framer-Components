"use client";

import { AnimatePresence, motion, MotionValue, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import Tabs from "./Tabs";
import Hover from "./Hover";


export default function AuthBtn() {
    const [position, setPosition] = useState({
        opacity: 0,
        left: 0,
        width: 0
    })
    return (
        <ul className="flex relative justify-center items-center gap-4"
            onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}>
            <Tabs
                children="Login"
                setPosition={setPosition}
                svg={
                    <AnimatePresence>
                        <motion.svg
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.124, ease: "easeInOut" }}
                            layout
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </motion.svg>
                    </AnimatePresence>
                }
            />
            <Tabs
                children="SignUp"
                setPosition={setPosition}
                svg={
                    <AnimatePresence>
                        <motion.svg
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.124, ease: "easeInOut" }}
                            layout
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </motion.svg>
                    </AnimatePresence>
                }
            />


            <Hover position={position}></Hover>
        </ul>
    )
}


