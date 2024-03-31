import React from "react";
import { Button } from "@material-tailwind/react";
import card from "@material-tailwind/react/theme/components/card";

function Cards(props) {
  const { cardData } = props;

  return (
    <>
      {/* <div > */}

      <div className="w-[800px] h-[720px] rounded-[20px] bg-zinc-900/90 text-white">
        {/* original w-600px h-620px*/}
        <img
          className=" rounded-[20px] card-event-img h-[460px]"
          alt="event-img"
          src={cardData.img}
        />
        <div className="p-5">
          <div className="p-5 space-y-2">
            <h1 className="text-[2vw] font-custom-bold">{cardData.cardName}</h1>
            <Button className="outline outline-2 outline-offset-2 rounded-full p-2 ">
              Explore
            </Button>
            <p className="font-custom-light">{cardData.desc}</p>
          </div>
        </div>
      </div>

      {/* <div className="w-[600px] h-[620px] rounded-[20px] bg-zinc-900/90 text-white p-5"></div>
        <div className="w-[600px] h-[620px] rounded-[20px] bg-zinc-900/90 text-white p-5"></div> */}
      {/* </div> */}
      {/* 
      <div className="w-[600px] h-[620px] rounded-[20px] bg-zinc-900/90 text-white">
        <img class=" w-full object-cover" src={cardData.img} alt="Card image" />
        <div class="flex py-5 mb-5 sm:p-5 flex-col 2xl:flex-row 2xl:mb-0 ">
          <div className=" w-full pr-5 2xl:w-3/4">
            <h2 class="text-[2vw]">{cardData.cardName}</h2>
            <button class="outline outline-2 outline-offset-2 rounded-full p-2 ">
              Explore
            </button>
          </div>
          <div class="mt-4">
            <p class="mt-[24px] 2xl:mt-0 2xl:w-3/4">{cardData.desc}.</p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Cards;
