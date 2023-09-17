import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"

export default function FloatingMenu({ setCursor }) {
    const [hover, setHover] = useState("")
    const [pos, setPos] = useState({ x: 0, y: 0 })

    const updateMouse = (e) => {
        setPos({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        if (hover) {
            setCursor(false)
        } else {
            setCursor(true)
        }
    }, [hover, setCursor])

    useEffect(() => {
        document.addEventListener('mousemove', updateMouse)

        return () => {
            document.removeEventListener('mousemove', updateMouse)
        }
    }, [])

    return (
        <>
            <AnimatePresence>

                {hover === "top" ? (

                    <motion.div layoutId="sidecur" className="w-5 h-5 bg-black top-2 rounded-xl fixed" initial={{ x: pos.x }} animate={{ x: pos.x }} exit={{ x: pos.x }} transition={{ type: "spring", duration: 1 }}></motion.div>)

                    : hover === "bottom" ? (

                        <motion.div layoutId="sidecur" className="w-5 h-5 bg-black bottom-2 rounded-xl fixed" initial={{ x: pos.x }} animate={{ x: pos.x }} exit={{ x: pos.x }} transition={{ type: "spring", duration: 1 }}></motion.div>)

                        : null}
            </AnimatePresence>
            <div
                onMouseEnter={() => setHover("top")}
                //onMouseLeave={() => setHover("")}
                className="w-full h-20 fixed top-0 border-2 border-solid border-black">

            </div>
            <div
                onMouseEnter={() => setHover("bottom")}
                //onMouseLeave={() => setHover("")}
                className="w-full h-20 fixed bottom-0 border-2 border-solid border-black">

            </div>
        </>
    )
}
