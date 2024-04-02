import React from "react";

function Cardtwo(props) {
  const { cardData } = props;
  return (
    <div className="relative h-[720px] w-[800px] rounded-[20px]">
      <img
        src={cardData.img}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">
          {cardData.cardName}
        </h1>
        <p className="mt-2 text-sm text-gray-300">{cardData.desc}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          Explore &rarr;
        </button>
      </div>
    </div>
  );
}

export default Cardtwo;
