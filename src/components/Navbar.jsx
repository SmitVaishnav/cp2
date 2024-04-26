import { motion, px } from "framer-motion";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isEventPage = location.pathname === "/events";
  const [isHovering, setHovering] = useState(false);
  const [isHovering2, setHovering2] = useState(false);

  return (
    <div
      className={`fixed w-full h-20 text-[#faddc5] flex font-['GT_Walsheim'] font-medium justify-between items-center px-6 z-[999] ${
        isHomePage && "text-zinc-200"
      } ${isEventPage && "text-zinc-200"} `}
    >
      <div>
        <Link to="/">
          <h1 className="uppercase text-[1.3vw] font-semibold">
            studentcorner
          </h1>
        </Link>
      </div>
      <div className="  mr-10 text-[0.9vw]">
        <ul className="flex gap-8 uppercase">
          <li>
            <motion.div
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              initial={{ filter: "blur(0px)" }}
              animate={
                isHovering2 ? { filter: "blur(3px)" } : { filter: "blur(0px)" }
              }
            >
              <Link to="/about">About</Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              onMouseEnter={() => setHovering2(true)}
              onMouseLeave={() => setHovering2(false)}
              initial={{ filter: "blur(0px)" }}
              animate={
                isHovering ? { filter: "blur(3px)" } : { filter: "blur(0px)" }
              }
            >
              <Link to="/login">Login</Link>
            </motion.div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
