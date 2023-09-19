import ReactCurvedText from "react-curved-text";
import FloatingMenu from "./components/FloatingMenu";
import "./index.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Marquee from 'react-fast-marquee'

function App() {
  const [state, setState] = useState('')

  return (
    <>

      <div className={`fixed w-full h-full z-20 pointer-events-none border-10rem border-white rounded-lg transition duration-500ms ${state === 'overlay' ? 'scale-100%' : 'scale-200%'}`}>

        {state === 'overlay' && (
          <>
            <motion.div className="text-2xl absolute top-0 text-black z-10" initial={{y: -500}} animate={{y: -100, transition: {type: "spring",duration: 1}}}>
              <Marquee className="overflow-hidden" gradient autoFill>
                <ul className="flex gap-1rem">
                  <li> - Back to Main - </li>
                  <li> - Back to Main - </li>
                </ul>
                
              </Marquee>
            </motion.div>
            <motion.div className="text-2xl absolute bottom-0 text-black z-10" initial={{y: 500}} animate={{y: 100, transition: {type:"spring" ,duration: 1}}}>
            <Marquee className="overflow-hidden" gradient autoFill direction="right">
                <ul className="flex gap-1rem">
                  <li> - Back to Main - </li>
                  <li> - Back to Main - </li>
                </ul>
            </Marquee>

            </motion.div>
          </>
        )}
      </div>
      <div className={`fixed w-full h-full ${state === 'bg' ? 'bg-red' : 'bg-white'} transition duration-300ms`}></div>
      <div className="h-full">
        <FloatingMenu setState={setState} />
        <div className="body">
          <div className="absolute top--82 left--82 animate-[spin_6s_linear_infinite]">
            <ReactCurvedText
              width={800}
              height={800}
              text="Creative Menu by Evan Solanoy - Creative Menu"
              cx={400}
              cy={400}
              rx={60}
              ry={60}
              textProps={{ style: { color: "black", fontSize: 20, position: "absolute" } }}
            />
            <div className="h-15 w-15 absolute top-93.1 left-93.1  rounded-full bg-black z--20">
            </div>
          </div>
          <div className="flex justify-center items-center z--10">
            <div className="absolute top-50">
              <h1 className="text-8xl text-center animate-pulse z-1">Creative Menu <br /> by Evan</h1>
              <div className="flex justify-center items-center p-10 gap-10">

                {state === 'none' && (
                  <>
                  <a href="https://evansolanoy.vercel.app" className={`border-2 border-solid border-black p-5 rounded-full z-35`} target="_blank" rel="noreferrer">
                  <button>
                    My Portfolio
                    </button>
                  </a>
                <a href="https://bento.me/evansolanoy" className={`border-2 border-solid border-black p-5 rounded-full z-31`} target="_blank" rel="noreferrer">
                  <button>
                  My Bento
                  </button>
                </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
