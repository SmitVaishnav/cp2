import { Input } from "postcss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs'

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    password: "",
  });

  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      fetch("http://localhost:3000/api/users/signup", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            email: email,
            password: password
          }
        ),
      }
      ).then((response) => {
        console.log(response);
        const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        // setting username and password in cookies with hash
        document.cookie = `username=${email}; path=/`;
        document.cookie = `password=${hashedPassword}; path=/`;

      });

      alert("Sign up successful!");
      // redirect to Landing page
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   createUserWithEmailAndPassword(database, email, password).then((data) => {
  //     console.log(data, "authData");
  //   });
  // };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch("/signup", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });
  //       const data = await response.json();
  //       console.log(data); // Log the response from the server
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  return (
    <div className="flex h-screen bg-[url('./assets/64a6d9e3b3affa8513290f40_account-gradient.jpg')]">
      <div className=" w-1/2 h-screen  flex flex-col  justify-center px-24 -mt-16 leading-[6.2vw]">
        <div className="flex gap-5">
          <h1 className="text-[7.5vw] text-[#faddc5] font-['GT_Walsheim'] font-black uppercase">
            create
          </h1>
          <h1 className=" text-[2vw] -mb-8 text-[#faddc5] font-['Saol_Display']">
            an
          </h1>
        </div>
        <h1 className="text-[7.5vw] text-[#faddc5] font-['GT_Walsheim'] font-black uppercase">
          account
        </h1>
      </div>
      <div className=" w-1/2 h-screen uppercase py-20 pr-10 ">
        <div className="bg-[#fceadc] w-full h-[88vh] px-36 flex flex-col rounded-xl gap-28 ">
          <form
            action=""
            onSubmit={(e) => {
              handleSignUp(e);
            }}
          >
            <div className="flex flex-col mt-16">
              <label
                htmlFor=""
                className="font-['GT_Walsheim'] text-[#3f4527] font-black text-[1.4vw] mb-2"
              >
                email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" px-5 text-[1vw] border-[1px] bg-[#fceadc] border-[#3f4527] rounded-[5px] w-full h-[6vh] focus:outline-none focus:border-zinc-700 border-opacity-30 mb-7"
              />
              {/* <label
                htmlFor=""
                className="font-['GT_Walsheim'] text-[#3f4527] font-black text-[1.4vw] mb-2"
              >
                full name
              </label>
              <input
                type="text"
                className="px-5 text-[1vw] border-[1px] bg-[#fceadc] border-[#3f4527] rounded-[5px] w-full h-[6vh] focus:outline-none focus:border-zinc-700 border-opacity-30 mb-7"
              /> */}
              {/* <label
                htmlFor=""
                className="font-['GT_Walsheim'] text-[#3f4527] font-black text-[1.4vw] mb-2"
              >
                phone number
              </label>
              <input
                type="text"
                className=" px-5 text-[1vw] border-[1px] bg-[#fceadc] border-[#3f4527] rounded-[5px] w-full h-[6vh] focus:outline-none focus:border-zinc-700 border-opacity-30 mb-7"
              /> */}
              <label
                htmlFor=""
                className="font-['GT_Walsheim'] text-[#3f4527] font-black text-[1.4vw] mb-2"
              >
                password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-5 text-[1vw] border-[1px] bg-[#fceadc] border-[#3f4527] rounded-[5px] w-full h-[6vh] focus:outline-none focus:border-zinc-700 border-opacity-30 mb-10"
              />
              <input
                type="submit"
                value="Create account"
                className="w-48 h-16 bg-[#c4b94f] rounded-md font-['GT_Walsheim'] text-[#3f4527] font-medium uppercase text-[1.1vw] py-3"
              />
            </div>
          </form>
          <div className="border-t-[1px] border-[#3f4527] py-5">
            <div className="flex items-center justify-between">
              <div className="font-['GT_Walsheim'] text-[#3f4527] font-medium text-[1.1vw]">
                already have an account?
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

export default Signup;
