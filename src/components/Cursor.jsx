import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function Cursor({state}) {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    const updateMouse = (e) => {
        setPos({ x: e.clientX, y: e.clientY })
        console.log(e.clientX, e.clientY)
    }

    useEffect(() => {
        document.addEventListener('mousemove', updateMouse)
        
        return () => {
            document.removeEventListener('mousemove', updateMouse)
        }
    }, [])




    return (
        <>
        {state && (
            <motion.div
            className="w-5 h-5 bg-black rounded-xl absolute"
            layoutId="sidecur"
            animate={{ x: pos.x, y: pos.y }}
            transition={{type: "tween", ease: "backOut"}}
            ></motion.div>
            )}
        </>
    )
}

export default Cursor;