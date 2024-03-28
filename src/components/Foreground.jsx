import React, { useState } from 'react';

function Foreground() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="text-[7vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center align-middle font-medium text-zinc-900 ">
      <div
        className={isHovered ? "text-hovered" : ""}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        EVENTS
      </div>
      <div className="h-44">HACKATHONS</div>
      <div className="h-44">SCHOLORSHIPS</div>
    </div>
  );
}

export default Foreground;