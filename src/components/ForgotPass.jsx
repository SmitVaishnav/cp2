import { Input } from "postcss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPass() {
  const [identifier, setIdentifier] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your code to handle the form submission goes here
  };
  return (
    <div className="flex h-screen bg-[url('./assets/64a6d9e3b3affa8513290f40_account-gradient.jpg')]">
      <div className=" w-1/2 h-screen  flex flex-col  justify-center px-24 -mt-16 gap-5 leading-[6.2vw]">
        <div className="flex gap-5 pl-4">
          <h1 className="text-[7.5vw] text-[#faddc5] font-['Saol_Display'] capitalize">
            forgot
          </h1>
        </div>
        <h1 className="text-[7.5vw] text-[#faddc5] font-['GT_Walsheim'] font-black uppercase">
          password
        </h1>
      </div>
      <div className=" w-1/2 h-screen uppercase py-20 pr-10 ">
        <div className="bg-[#fceadc] w-full h-[88vh] p-36 flex flex-col rounded-xl gap-40 ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-28">
              <label
                htmlFor="identifier"
                className="font-['GT_Walsheim'] text-[#3f4527] font-black text-[1.4vw] mb-2"
              >
                email or phone number
              </label>
              <input
                type="text"
                id="identifier"
                name="identifier"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className=" px-5 text-[1vw] border-[1px] bg-[#fceadc] border-[#3f4527] rounded-[5px] w-full h-[6vh] focus:outline-none focus:border-zinc-700 border-opacity-30 mb-7"
              />

              <Link to="/otp">
                <input
                  type="submit"
                  value="Send OTP"
                  className="w-32 h-16 bg-[#c4b94f] rounded-md font-['GT_Walsheim'] text-[#3f4527] font-medium uppercase text-[1.1vw] py-3"
                />
              </Link>
            </div>
          </form>
          <div className="border-t-[1px] border-[#3f4527] py-5">
            <div className="flex items-center justify-between">
              <div className="font-['GT_Walsheim'] text-[#3f4527] font-medium text-[1.1vw]">
                remembered your password
              </div>
              <Link
                to="/login"
                className="font-['GT_Walsheim'] text-[#3f4527] border-b-[1px] border-[#3f4527] font-medium text-[1.1vw]"
              >
                log IN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
