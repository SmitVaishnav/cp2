import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" h-12 flex font-semibold text-lg justify-between items-center px-10 w-screen fixed ">
      <Link to="/" className="flex">
        <h2 className="font-custom text-[23px]">STUDENT</h2>
        <h2 className="font-custom-italic text-[23px]">CORNER</h2>
      </Link>

      <div className="flex gap-5">
        <h4 className=" no-underline hover:underline font-custom-light">
          ABOUT
        </h4>
        <Link to="/Login">
          <h4 className="no-underline hover:underline font-custom-light">
            LOGIN
          </h4>
        </Link>
        <Link to="/Register">
          <h4 className="no-underline hover:underline font-custom-light">
            REGISTER
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default Header;
