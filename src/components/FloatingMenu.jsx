import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingMenu() {
    const [hover,setHover] = useState("")
    const [pos, setPos] = useState({ x: 0, y: 0 })

    const updateMouse = (e) => {
        setPos({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        document.addEventListener('mousemove', updateMouse)

        return () => {
            document.removeEventListener('mousemove', updateMouse)
        }
    }, [])

    return (
        <>
        {hover === "top" ? (<div>top</div>) : null}
        <div onMouseEnter={() => setHover("top")} className="w-full h-20 absolute top-0 border-2 border-solid border-black">
            <motion.div className="w-5 h-5 bg-black top-2 rounded-xl absolute" id="cursor" animate={{ x: pos.x }}></motion.div>
        </div>
            <motion.div className="w-5 h-5 bg-black bottom-2 rounded-xl absolute" id="cursor" animate={{ x: pos.x }}></motion.div>
            <motion.div className="w-5 h-5 bg-black left-2 rounded-xl absolute" id="cursor" animate={{ y: pos.y }}></motion.div>
            <motion.div className="w-5 h-5 bg-black right-2 rounded-xl absolute" id="cursor" animate={{ y: pos.y }}></motion.div>
        </>
    )
}
