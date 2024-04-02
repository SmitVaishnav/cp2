import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Foreground from "./components/Foreground";
import Cards from "./components/Cards";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgetpass from "./components/Forgetpass";
import Cardtwo from "./components/Cardtwo";
import NewsLetter from "./components/NewsLetter";

//card object list
const cardObjs = [
  {
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fHww",
    cardName: "EVENTS",
    desc: "Discover the pulse of campus life with our comprehensive guide to vibrant college events and activities.",
    link: "/events",
  },
  {
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
    cardName: "HACKATHONS",
    desc: "Fuel your innovation and join the next generation of disruptors at our hackathon hub – where ideas collide and solutions emerge.",
    link: "/hackathons",
  },
  {
    img: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2UlMjBncmFkdWF0aW9ufGVufDB8fDB8fHww",
    cardName: "SCHOLARSHIPS",
    desc: "Unlock the gateway to academic excellence and financial empowerment through our curated scholarships hub.",
    link: "/scholorships",
  },
];

function App() {
  const [backgroundColor, setBackgroundColor] = useState("bg-[#E6E6DA]");
  const [textColor, setTextColor] = useState("text-[#18181B]");
  const [imageSrc, setImageSrc] = useState(null);

  //for background image transition
  //work in progress
  const onMouseEnter = (imageSrc) => {
    setImageSrc(imageSrc);
  };
  const handleMouseLeave = () => {
    setImageSrc(null);
  };

  //for text color to animate on scroll
  useEffect(() => {
    const handleTextScroll = () => {
      const textScrollPercentage =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      if (textScrollPercentage >= 45) {
        setTextColor("text-[#B0A4D1]");
      } else {
        setTextColor("text-[#18181B]");
      }
    };
    window.addEventListener("scroll", handleTextScroll);

    return () => {
      window.removeEventListener("scroll", handleTextScroll);
    };
  }, []);

  //for background color to animate on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPercentage >= 45) {
        setBackgroundColor("bg-zinc-800"); // Change background color when scroll percentage is 75% or more
      } else {
        setBackgroundColor("bg-[#E6E6DA]"); // Revert back to original background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className={` transition-all duration-500 ${textColor}`}>
        <Header />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<Forgetpass />} />
        <Route
          path="/"
          element={
            <>
              <div
                className={`min-h-screen w-[120%] transition-all duration-500  ${backgroundColor} `}
              >
                <div
                  className={`text-[7vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center align-middle font-medium text-zinc-900 `}
                >
                  <div className={``}>
                    <h1 className={`duration-500 transition-all ${textColor}`}>
                      EVENTS
                    </h1>
                  </div>
                  <div className={`text-[7vw] `}>
                    <h1 className={`duration-500 transition-all ${textColor}`}>
                      HACKATHONS
                    </h1>
                  </div>
                  <div className={`text-[7vw] `}>
                    <h1 className={`duration-500 transition-all ${textColor}`}>
                      SCHOLARSHIPS
                    </h1>
                  </div>
                </div>
                {/* <Foreground /> */}
              </div>
              <div
                className={`overflow-hidden w-[120%] h-svh flex p-10 justify-around items-center gap-10 duration-500 transition-all ${backgroundColor}`}
              >
                <Cards cardData={cardObjs[0]} />
                <Cards cardData={cardObjs[1]} />
                <Cards cardData={cardObjs[2]} />

                {/*cards two */}
                {/* <Cardtwo cardData={cardObjs[0]} />
                <Cardtwo cardData={cardObjs[1]} />
                <Cardtwo cardData={cardObjs[2]} /> */}
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
