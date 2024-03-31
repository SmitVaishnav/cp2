import React, { useState, useEffect } from "react";

function Foreground({ setDivAttribute }) {
  const [backgroundColor, setBackgroundColor] = useState("bg-[#E6E6DA]");

  const handleMouseEnter = () => {
    setDivAttribute({ BackgroundColor: "bg-black" });
  };
  const handleMouseOut = () => {
    setDivAttribute({ BackgroundColor: "bg-[#E6E6DA]" });
  };



  // const [isHovered, setIsHovered] = useState(false);

  // const handleHover = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  return (
    <div className="text-[7vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center align-middle font-medium text-zinc-900 ">
      <div>EVENTS</div>
      <div className="text-[7vw]">HACKATHONS</div>
      <div className="text-[7vw]">SCHOLORSHIPS</div>
    </div>
  );
}

export default Foreground;
