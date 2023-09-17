import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function Cursor() {
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
            <motion.div
                className="w-5 h-5 bg-black rounded-xl absolute"
                id="cursor"
                animate={{ x: pos.x, y: pos.y }}
            ></motion.div>
        </>
    )
}

export default Cursor;