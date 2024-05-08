import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function LandingPage2() {
  const [isHovering, setHovering] = useState(false);
  const [isHovering1, setHovering1] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const navigate = useNavigate();

  function getCookie(name) {
    const cookieName = `${name}=`;
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookies.split(';');
  
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return '';
  }

  useEffect(()=>{
    // check if the user is correctly logged in using cookies
    console.log("Checking if user is logged in");
    console.log(getCookie("username"));
    console.log(getCookie("password"));
    fetch(
      "http://localhost:3000/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: getCookie("username"),
          password: getCookie("password"),
        }),
      }
    ).then((response) => {
     if(response.status === 200){
       console.log("User is logged in");
      }
      else{
        console.log("User is not logged in");
        navigate("/login");
      }
    }).catch((error) => {
      console.log(error);
    }
    )


  },[])

  return (
    <div className="div-1 bg-zinc-900 h-screen flex">
      <div className="w-1/2 h-screen text-zinc-200 font-['GT_Walsheim'] font-black text-[10vw] uppercase leading-none flex flex-col ">
        <div className="  translate-y-1/2 z-[999]">
          <Link to="/events">
            {" "}
            <motion.h1
              onMouseEnter={() => {
                setHovering(true);
              }}
              onMouseLeave={() => {
                setHovering(false);
              }}
              initial={{ filter: "blur(0px)" }}
              animate={{
                opacity: isHovering1 || isHovering2 ? 0 : 1,
                color: isHovering ? "#B0A4D1" : "#ffffff",
              }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-[33vw]"
            >
              events
            </motion.h1>
          </Link>
          <Link to="/hackathons">
            <motion.h1
              onMouseEnter={() => {
                setHovering1(true);
              }}
              onMouseLeave={() => {
                setHovering1(false);
              }}
              initial={{ filter: "blur(0px)" }}
              animate={{
                opacity: isHovering || isHovering2 ? 0 : 1,
                color: isHovering1 ? "#B0A4D1" : "#ffffff",
              }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            >
              hackathons
            </motion.h1>
          </Link>

          <Link to="/scholorships">
            <motion.h1
              onMouseEnter={() => {
                setHovering2(true);
              }}
              onMouseLeave={() => {
                setHovering2(false);
              }}
              initial={{ filter: "blur(0px)" }}
              animate={{
                opacity: isHovering || isHovering1 ? 0 : 1,
                color: isHovering2 ? "#B0A4D1" : "#ffffff",
              }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            >
              scholorships
            </motion.h1>
          </Link>
        </div>
      </div>
      <div className="relative div-2 w-1/2 h-screen overflow-hidden">
        <motion.img
          src="src/assets/event.jpg"
          alt="Image 1"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0, x: isHovering && 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(-50%, -50%)",
          }}
        />
        <motion.img
          src="src/assets/hack.jpg"
          alt="Image 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering1 ? 1 : 0, x: isHovering1 && 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            // top: "50%",
            // left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <motion.img
          src="src/assets/scholor.jpg"
          alt="Image 3"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering2 ? 1 : 0, x: isHovering2 && 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            // top: "50%",
            // left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
}

export default LandingPage2;
