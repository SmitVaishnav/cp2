import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

function Login() {
  const navigate =  useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const hashedPassword = bcrypt.hashSync(
      e.target.password.value,
      "$2a$10$CwTycUXWue0Thq9StjUM0u"
    );
    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: hashedPassword,
      }),
    })
      .then((response) => {
        document.cookie = `username=${e.target.email.value}; path=/`;
        document.cookie = `password=${hashedPassword}; path=/`;

        navigate('/');
      })
      .catch((error) => {
        alert("Invalid email or password");
        console.log(error);
      });
  };

  return (
    <div className="flex h-screen bg-[url('./assets/64a6d9e3b3affa8513290f40_account-gradient.jpg')]">
      <div className=" w-1/2 h-screen flex flex-col justify-center px-24 -mt-20 leading-[6.2vw]">
        <h1 className=" text-[2vw] -mb-8 text-[#faddc5] font-['Saol_Display']">
          Log in
        </h1>
        <h1 className="text-[7.5vw] text-[#faddc5] font-['GT_Walsheim'] font-black uppercase">
          Welcome
        </h1>
        <h1 className="text-[7.5vw] text-[#faddc5] font-['GT_Walsheim'] font-black uppercase">
          back
        </h1>
      </div>
      <div className=" w-1/2 h-screen uppercase py-20 pr-10 ">
        <div className="bg-[#fceadc] w-full h-[88vh] p-36 flex flex-col rounded-xl gap-32 ">
          <form action="" onSubmit={(e) => handleLogin(e)}>
            <div className="flex flex-col">
              <div className="mb-8">
                <h2 className="font-['GT_Walsheim'] font-black text-[3.2vw] text-[#3f4527]">
                  Your account
                </h2>
              </div>
              <label
                htmlFor="email"
                className="font-['GT_Walsheim'] text-[#3f4527] font-black text-[1.4vw] mb-2"
              >
                email
              </label>
              <input
                type="text"
                name="email"
                className="px-5 text-[1vw] border-[1px] bg-[#fceadc] border-[#3f4527] rounded-[5px] w-full h-[6vh] mb-7 focus:outline-none focus:border-zinc-700 border-opacity-30 "
              />
              <label
                htmlFor="password"
                className="font-['GT_Walsheim'] text-[#3f4527] font-black text-[1.4vw] mb-2"
              >
                password
              </label>
              <input
                type="text"
                name="password"
                className="px-5 text-[1vw] border-[1px] bg-[#fceadc] border-[#3f4527] rounded-[5px] w-full h-[6vh] mb-10 focus:outline-none focus:border-zinc-700 border-opacity-30 "
              />
              <input
                type="submit"
                value="Log IN"
                className="w-24 h-16 bg-[#c4b94f] rounded-md font-['GT_Walsheim'] text-[#3f4527] font-medium uppercase text-[1.1vw] py-3"
              />
            </div>
          </form>
          <div className="border-t-[1px] border-[#3f4527] py-5">
            <div className="flex items-center justify-between">
              <div className="font-['GT_Walsheim'] text-[#3f4527] font-medium text-[1.1vw]">
                <h1>don't have an account?</h1>
                <h1 className="border-b-[1px] border-[#3f4527] w-40">
                  <Link to="/forgot-password">forgot password</Link>
                </h1>
              </div>
              <Link
                to="/sign-up"
                className="font-['GT_Walsheim'] text-[#3f4527] border-b-[1px] -mt-10 border-[#3f4527] font-medium text-[1.1vw]"
              >
                sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;