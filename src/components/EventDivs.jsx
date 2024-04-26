import React from "react";

function EventDivs(props) {
  const { eventData } = props;

  const {
    logo,
    eventName,
    location,
    startingTime,
    endingTime,
    month,
    day,
    deadlineDate,
  } = eventData;
  return (
    <div className="flex text-zinc-100 border-t-[1px] border-zinc-500 border-b-[1px] mt-10 w-full justify-between py-3">
      <div className="w-[5vw] h-full">
        <img src="" alt="logo" />
      </div>

      <div className="flex flex-col w-[33vw] gap-2 h-full items-start leading-none">
        <h1 className="text-[#78f59d] text-xl font-['GT_Walsheim'] font-black">
          {eventName}
        </h1>
        <h3>{location}</h3>
        <h3>
          {eventData.moreDetails.startingTime} -{" "}
          {eventData.moreDetails.endingTime}
        </h3>
      </div>
      <div className="flex flex-col w-[7vw] gap-10 h-full">
        <div className="">{month}</div>
        <div className=" opacity-50">{day}</div>
      </div>
      <div className="w-[10vw] h-full">
        <h1 className="text-[5vw] font-['GT_Walsheim'] font-black w-28 leading-none ">
          {deadlineDate.split("-")[2]}
        </h1>
      </div>
      <div className="flex gap-10 justify-between items-center h-full translate-y-1/2 capitalize  w-[25vw]">
        <div className=" flex justify-between px-6 rounded-2xl bg-[#78f59d] text-zinc-900 p-3 ml-12 w-[12vw] cursor-pointer">
          <h1>buy tickets</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M12 4V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="border-[1px] rounded-2xl border-zinc-100 w-[7vw] p-3 items-center ">
          <h1 className="ml-5 w-full">more info</h1>
        </div>
      </div>
    </div>
  );
}

export default EventDivs;
