import { motion } from "framer-motion";
import React, { useState } from "react";

function LandingPage() {
  const [isHovering, setHovering] = useState(false);
  return (
    <motion.div
      initial={{ backgroundColor: "#E6E6DA", backgroundImage: "" }}
      animate={
        isHovering
          ? {
              backgroundColor: "#B0A4D1",
              backgroundImage: `url(src/assets/Desktop-8.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: { duration: 2 },
            }
          : { backgroundColor: "#E6E6DA", backgroundImage: "" }
      }
      className="div-container w-full min-h-screen"
    >
      <div className="uppercase text-9xl flex flex-col items-center justify-center pt-12 translate-y-[50%] leading-[7.5vw]">
        {/* {["events", "hackathons", "scholorships"].map((item, index) => {
          return <div key={index}>{item}</div>;
        })} */}
        <motion.div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          events
        </motion.div>
        <div>hackathons</div>
        <div>scholorships</div>
      </div>
    </motion.div>
  );
}

export default LandingPage;
