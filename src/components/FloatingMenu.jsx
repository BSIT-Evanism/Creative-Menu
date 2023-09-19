import { useState, useEffect } from 'react'
import { motion, useAnimate } from "framer-motion";
import { useRef } from 'react'
import ReactCurvedText from "react-curved-text";




export default function FloatingMenu({ setState }) {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [value, setValue] = useState('')


  const masksize = hover && !active ? "800px" : active ? "5000px" : active && hover ? "2000px" : "500px"
  const position = active ? "-700px" : "-200px"

  useEffect(() => {
    if (hover && active) {
      setState('overlay')
    } else if (hover && !active) {
      setState('bg')
    } else if (!active) {
      setState('only')
    } else {
      setState('none')
    }
  }, [hover, active, setState])



  return (
    <>
      <motion.div
        className="mask z-10"
        animate={{ WebkitMaskSize: masksize, WebkitMaskPosition: `${position} ${position}`, transition: { duration: 1.5, type: "tween", ease: "backOut" } }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <motion.div
          className="absolute top-5 left-5  overflow-hidden"
          animate={{ rotate: 360, transition: { duration: 10, repeat: Infinity, repeatType: "loop" } }}
        >
          <ReactCurvedText
            width={100}
            height={100}
            text="Creative Menu by Evan Solanoy - Creative Menu"
            cx={50}
            cy={50}
            rx={50}
            ry={50}
            textPathProps={{ "fill": "#ffffff" }}
            textProps={{ style: { color: "white", fontSize: 20, position: "absolute" } }}
          />
        </motion.div>
        <div
          className={`h-15 w-15 absolute top-10 left-10  rounded-full ${active ? 'bg-red' : 'bg-pink'} ${active && 'translate-y-80vh'} transition-all duration-300ms`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setActive(!active)}
        ></div>
        <nav className='absolute top-40 left-50 flex justify-center items-center group/over '>
          <ul className='text-pink text-7xl leading-25 '>
            <li className='cursor-pointer uppercase opacity-100% group-hover/over:opacity-50% hover:translate-x-3 hover:important:opacity-100% transition-all duration-500ms' onClick={() => setActive(!active)}
              onMouseEnter={() => setValue('About')}
              onMouseLeave={() => setValue('')}
            >About</li>

            <li className='cursor-pointer uppercase opacity-100% group-hover/over:opacity-50% hover:translate-x-3 hover:important:opacity-100% transition-all duration-500ms' onClick={() => setActive(!active)}
              onMouseEnter={() => setValue('Projects')}
              onMouseLeave={() => setValue('')}
            >Projects</li>

            <li className='cursor-pointer uppercase opacity-100% group-hover/over:opacity-50% hover:translate-x-3 hover:important:opacity-100% transition-all duration-500ms' onClick={() => setActive(!active)}
              onMouseEnter={() => setValue('Contacts')}
              onMouseLeave={() => setValue('')}
            >Contacts</li>
          </ul>


          <div className={`h-full w-full masks flex justify-center items-center ${value === 'About' ? 'bg-red' : value === 'Projects' ? 'bg-pink' : value === 'Contacts' ? 'bg-purple' : null }`}>

          </div>
      </nav>
    </motion.div>
  </>
  )
}
