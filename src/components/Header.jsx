import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" bg-[#E6E6DA] h-12 flex font-semibold text-lg justify-between items-center px-5 ">
      <h2 className="font-custom text-[23px]">STUDENTCORNER</h2>
      <div className="flex gap-5">
        <h4 className=" no-underline hover:underline font-light">ABOUT</h4>
        <Link to="/Login">
          <h4 className="no-underline hover:underline font-light">LOGIN</h4>
        </Link>
        <Link to="/Register">
          <h4 className="no-underline hover:underline font-light">REGISTER</h4>
        </Link>
      </div>
    </div>
  );
}

export default Header;
