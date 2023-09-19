import ReactCurvedText from "react-curved-text";
import FloatingMenu from "./components/FloatingMenu";
import "./index.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function App() {
  const [state, setState] = useState("");

  return (
    <>
      <div
        className={`fixed w-full h-full z-20 pointer-events-none border-10rem border-white rounded-lg transition duration-500ms ${
          state === "overlay" ? "scale-100%" : "scale-200%"
        }`}
      >
        {state === "overlay" && (
          <>
            <motion.div
              className="text-xl absolute top-0 text-black z-10"
              initial={{ y: -500 }}
              animate={{ y: -100, transition: { type: "spring", duration: 1 } }}
            >
              <Marquee className="overflow-hidden" gradient autoFill>
                <ul className="flex gap-1rem fw-400 uppercase">
                  <li> - Back to Main - </li>
                  <li> - Back to Main - </li>
                </ul>
              </Marquee>
            </motion.div>
            <motion.div
              className="text-xl absolute bottom-0 text-black z-10"
              initial={{ y: 500 }}
              animate={{ y: 100, transition: { type: "spring", duration: 1 } }}
            >
              <Marquee
                className="overflow-hidden"
                gradient
                autoFill
                direction="right"
              >
                <ul className="flex gap-1rem fw-400 uppercase">
                  <li> - Back to Main - </li>
                  <li> - Back to Main - </li>
                </ul>
              </Marquee>
            </motion.div>
          </>
        )}
      </div>
      <div
        className={`fixed w-full h-full ${
          state === "bg" ? "bg-red" : "bg-white"
        } transition duration-300ms`}
      ></div>
      <div className="h-full">
        <FloatingMenu setState={setState} />
        <div className="body">
          <motion.div
            className="absolute top-5 left-5  overflow-hidden fw-200"
            animate={{
              rotate: 360,
              transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            <ReactCurvedText
              width={100}
              height={100}
              text="Creative Menu by Evan Solanoy - Creative Menu"
              cx={50}
              cy={50}
              rx={50}
              ry={50}
              //textProps={{ style: { color: "black", fontSize: 20, position: "absolute" } }}
            />
            <div className="h-50px w-50px absolute top-6 left-6  rounded-full bg-black z--20"></div>
          </motion.div>
          <div className="flex justify-center items-center z--10">
            <div className="absolute top-50">
              <h1 className="text-8xl text-center animate-pulse z-1">
                Creative Menu <br /> by Evan
              </h1>
              <div className="flex justify-center items-center p-10 gap-10">
                {state === "only" && (
                  <>
                    <motion.a
                      href="https://evansolanoy.vercel.app"
                      className={`border-2 border-solid border-black p-5 rounded-full z-35`}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <button className="fw-700">My Portfolio</button>
                    </motion.a>
                    <motion.a
                      href="https://bento.me/evansolanoy"
                      className={`border-2 border-solid border-black p-5 rounded-full z-31`}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <button className="fw-700">My Bento</button>
                    </motion.a>
                  </>
                )}
              </div>
            </div>
            <img
              src="https://i.ibb.co/t870Lw1/evan.webp"
              alt="evan"
              className="w-10vw h-10vh absolute bottom-20 object-contain left-45%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
