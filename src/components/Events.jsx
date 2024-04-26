import React, { useEffect, useState } from "react";
import EventDivs from "./EventDivs";
import { dummyData } from "../utils/dummydata";
import { Link } from "react-router-dom";

function Events(props) {
  const [searchText, setSearchText] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(dummyData);

  //   useEffect(() => {
  //     setFilteredEvents(dummyData);
  //   });

  const { eventData } = props;

  return (
    <div className="bg-zinc-900 min-h-screen p-52 ">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="uppercase text-[6vw] font-['GT_Walsheim'] font-black text-zinc-200 leading-none -mb-20">
            events
          </h1>
        </div>
        <div>
          <p className="">somthing</p>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-500 border-b-[1px] p-10  mt-32 flex gap-5 ">
        <input
          type="text"
          className="search-box h-10 bg-zinc-900 border-[1px] border-zinc-700 rounded-md text-zinc-100 p-3 focus:outline-none focus:border-zinc-500"
          input={searchText}
          placeholder="filter"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="text-zinc-500 border-[1px] w-24 rounded-full border-zinc-700"
          onClick={() => {
            if (searchText.trim() === "") {
              // If search text is empty, show all events
              setFilteredEvents(dummyData);
            } else {
              // Otherwise, filter the events based on search text
              const filteredList = dummyData.filter((event) =>
                Object.values(event).some(
                  (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(searchText.toLowerCase())
                )
              );
              setFilteredEvents(filteredList);
            }
          }}
        >
          search
        </button>
      </div>
      <div>
        {filteredEvents.map((events) => (
          <Link to={"eventid=" + events.moreDetails.eventid}>
            <EventDivs eventData={events} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Events;
