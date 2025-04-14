

"use client"
import { useState } from "react"
import Tabs from "./Tabs"
import Hover from "./Hover"
import { useMotionValue } from "motion/react"


export default function Menu() {
    const [position, setPosi] = useState({
        width: 0,
        opacity: 0,
        left: 0
    })


    return (
        <ul className=" relative flex justify-center items-center gap-5 cursor-pointer "
            onMouseLeave={() => {
                setPosi((prev) => ({
                    ...prev, opacity: 0
                }))

            }}

        >
            {/* relative was given above so that when hovered, the bg color for text must come starting from the text itself else it would come from the extreme left  */}
            <Tabs setPosition={setPosi}>Home </Tabs>
            <Tabs setPosition={setPosi}>About </Tabs>
            <Tabs setPosition={setPosi}>Discover </Tabs>
            <Tabs setPosition={setPosi}>Explore </Tabs>
            <Hover position={position}></Hover>
        </ul>
    )
}





// so the position values i.e opacity ( for making the bg visible when hovered), width (which would be dynamic resp. to the text width) and the left( which is the gap to be kept from left side of the text). 
// Think of these values. Where should we assign them?? Since we are creating the hover effect for the bg, its obvious to give it to the absoulutely positioned Hover() component
// we assigned it to the animate from the motion to give it a sliding effect wherever it moves