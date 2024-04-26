import { motion } from "framer-motion";
import React, { useState } from "react";
import { dummyData } from "../utils/dummydata";
import { Link } from "react-router-dom";

function LandingPage() {
  const [isHovering, setHovering] = useState(false);
  return (
    <motion.div
      initial={{ backgroundColor: "#E6E6DA", opacity: 1 }} // Set initial opacity to 1
      animate={
        isHovering
          ? {
              backgroundColor: "#B0A4D1",
              opacity: 1, // Ensure opacity remains at 1 while hovering
              backgroundImage: `url(src/assets/Desktop-8.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: { duration: 1 }, // Adjust the duration as needed
            }
          : { backgroundColor: "#E6E6DA", opacity: 1 } // Ensure opacity remains at 1 when not hovering
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
          {/* <Link to="/events"> */}
          events
          {/* </Link> */}
        </motion.div>

        <div>hackathons</div>
        <div>scholorships</div>
      </div>
    </motion.div>
  );
}

export default LandingPage;
