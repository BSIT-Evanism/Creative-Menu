import { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { useRef } from "react";
import ReactCurvedText from "react-curved-text";
import { AnimatePresence } from "framer-motion";

export default function FloatingMenu({ setState }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");

  const menuItem = ["About", "Projects", "Contacts"];

  const menuAnim = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 2, delay: index * 0.4 },
    }),
    exit: (index) => ({
      opacity: 0,
      x: 100,
      transition: { type: "spring", duration: 1, delay: index * 0.2 },
    }),
  };

  const masksize =
    hover && !active
      ? "800px"
      : active
      ? "5000px"
      : active && hover
      ? "2000px"
      : "500px";

  const position = active ? "-500px" : "-200px";

  useEffect(() => {
    if (hover && active) {
      setState("overlay");
    } else if (hover && !active) {
      setState("bg");
    } else if (!active) {
      setState("only");
    } else {
      setState("none");
    }
  }, [hover, active, setState]);

  return (
    <>
      <motion.div
        className="mask z-10"
        animate={{
          WebkitMaskSize: masksize,
          WebkitMaskPosition: `${position} ${position}`,
          transition: { duration: 1.5, type: "tween", ease: "backOut" },
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <motion.div
          className="absolute top-5 left-5  overflow-hidden"
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
            textPathProps={{ fill: "#ffffff" }}
            textProps={{
              style: { color: "white", fontSize: 20, position: "absolute" },
            }}
          />
        </motion.div>
        <div
          className={`h-15 w-15 flex justify-center items-center absolute top-10 left-10 cursor-pointer  rounded-full ${
            active ? "bg-red animate-pulse" : "bg-pink"
          } ${active && "translate-y-75vh"} transition-all duration-300ms`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setActive(!active)}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {!active && (
              <>
                <circle cx="10.5" cy="10.5" r="3.5" fill="#D9D9D9" />
                <circle cx="10.5" cy="24.5" r="3.5" fill="#D9D9D9" />
                <circle cx="24.5" cy="24.5" r="3.5" fill="#D9D9D9" />
                <circle cx="24.5" cy="10.5" r="3.5" fill="#D9D9D9" />
              </>
            )}

            {active && (
              <>
                <circle cx="8.5" cy="8.5" r="3.5" fill="#D9D9D9" />
                <circle cx="8.5" cy="26.5" r="3.5" fill="#D9D9D9" />
                <circle cx="26.5" cy="26.5" r="3.5" fill="#D9D9D9" />
                <circle cx="26.5" cy="8.5" r="3.5" fill="#D9D9D9" />
                <circle cx="17.5" cy="17.5" r="3.5" fill="#D9D9D9" />
                {/* <circle cx="31.5" cy="31.5" r="3.5" fill="#D9D9D9" /> */}
                {/* <circle cx="3.5" cy="31.5" r="3.5" fill="#D9D9D9" /> */}
                {/* <circle cx="31.5" cy="3.5" r="3.5" fill="#D9D9D9" /> */}
              </>
            )}
          </svg>
        </div>
        <nav className="absolute top-50 left-50 flex justify-center items-center group/over ">
          <AnimatePresence>
            {active && (
              <ul className="text-pink text-7xl leading-25 fw-700">
                {menuItem.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={menuAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={index}
                  >
                    <li
                      className="cursor-pointer uppercase opacity-100% group-hover/over:opacity-50% hover:translate-x-3 hover:important:opacity-100% transition-all duration-500ms "
                      onClick={() => setActive(!active)}
                      onMouseEnter={() => setValue(item)}
                      onMouseLeave={() => setValue("")}
                    >
                      {item}
                    </li>
                  </motion.div>
                ))}
              </ul>
            )}
          </AnimatePresence>

          <div
            className={`h-full w-full masks flex justify-center items-center transition-all duration-2000ms ${
              value === "About"
                ? "bg-red scale-200%"
                : value === "Projects"
                ? "bg-pink scale-200%"
                : value === "Contacts"
                ? "bg-purple scale-200%"
                : hover && active
                ? "scale-50%"
                : !active
                ? "scale-400%"
                : null
            }`}
          ></div>
        </nav>

        <div className="w-80vw flex absolute justify-between items-center bottom-8vh left-10vw color-red fw-700">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            &nbsp;Close Menu
          </div>

          <div className="flex  justify-center items-center text-center gap-10 group/call transition-all duration-300ms">
            <a
              href="https://www.linkedin.com/in/john-evan-solanoy-72b829262"
              target="_blank"
              rel="noreferrer"
            >
              <p className="group-hover/call:opacity-50% hover:important:opacity-100% transition-all duration-300ms cursor-pointer">
                <i className="fa-brands fa-linkedin"></i>&nbsp;LinkedIn
              </p>
            </a>
            <a
              href="https://dribbble.com/EvanSol"
              target="_blank"
              rel="noreferrer"
            >
              <p className="group-hover/call:opacity-50% hover:important:opacity-100% transition-all duration-300ms cursor-pointer">
                <i className="fa-brands fa-dribbble"></i>&nbsp;Dribbble
              </p>
            </a>
            <a
              href="https://bento.me/evansolanoy"
              target="_blank"
              rel="noreferrer"
            >
              <p className="group-hover/call:opacity-50% hover:important:opacity-100% transition-all duration-300ms cursor-pointer">
                <i className="fa-solid fa-box-open"></i>&nbsp;Bento
              </p>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
