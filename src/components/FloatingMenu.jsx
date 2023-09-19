import { useState, useEffect } from 'react'
import { motion, useAnimate } from "framer-motion";
import { useRef } from 'react';




export default function FloatingMenu({setState}) {
  const [hover,setHover] = useState(false)
  const [active,setActive] = useState(false)
  const [value,setValue] = useState('')
 

  const masksize = hover && !active ? "800px" : active ? "5000px" : active && hover ? "2000px" : "500px"
  const position = active ? "-700px"  : "-200px"

  useEffect(() => {
    if(hover && active) {
      setState('overlay')
    } else if (hover && !active) {
      setState('bg')
    } else if (active) {
      setState('only')
    } else {
      setState('none')
    }
  },[hover, active, setState])



  return (
    <>
    <motion.div 
      className="mask z-10"
      animate={{WebkitMaskSize: masksize,WebkitMaskPosition: `${position} ${position}` , transition: {duration: 1.5, type: "tween", ease: "backOut"}}}
      transition={{type: "tween", ease: "backOut"}}
      >
        <div 
        className={`h-15 w-15 absolute top-10 left-10  rounded-full ${active ? 'bg-red' : 'bg-pink'} ${active && 'translate-y-80vh'} transition-all duration-300ms`} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setActive(!active)}
        ></div>
      <nav className='absolute top-50 left-50 flex justify-center items-center'>
        <ul className='text-pink text-8xl'>
          <li className='cursor-pointer' onClick={() => setActive(!active)}>About</li>
          <li className='cursor-pointer' onClick={() => setActive(!active)}>Projects</li>
          <li className='cursor-pointer' onClick={() => setActive(!active)}>Contacts</li>
        </ul>
      </nav>
    </motion.div>
        </>
  )
}
