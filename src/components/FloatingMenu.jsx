import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMotionValue } from "framer-motion";



export default function FloatingMenu() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

    


  return (
    <motion.div 
      className="mask"
      whileHover={{scale: 1.2}}
      // animate={{ WebkitMaskPosition: `${mousePos.x}px ${mousePos.y}px` }}
      >
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </motion.div>
  )
}
