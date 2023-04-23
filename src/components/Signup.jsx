import React from "react";
import Navbar_signup from "./Navbar_signup";

const signup = () => {
     return (
          <div>
               <Navbar_signup/>
          <div className="font-body flex justify-center items-center h-screen w-full bg-gray-200">
               <div className="font-l h-[300px] w-[600px] bg-white flex flex-col  items-center border-dashed  rounded-xl">
                    <div className="justify-center text-[28px] underline font-bold mt-[20px]">
                         Sign-Up
                    </div>

                    <div className="text-[18px]">
                         <div className="font-bold flex flex-row gap-[95px] mt-[30px] ">
                              <label htmlFor="email">Email :</label>
                              <input
                                   className="pl-5 bg-black rounded-sm text-gray-200
              "
                                   type="email"
                              />
                         </div>

                         <div className="">
                              <button class="bg-gray-400 hover:bg-gray-700 text-white font-bold  rounded-lg w-[140px] text-[13px] h-6 ml-[200px] mt-[10px]">
                                   Get OTP
                              </button>
                         </div>

                         <div className="font-bold flex flex-row mt-[30px] gap-[60px] ">
                              <label htmlFor="email ">Enter OTP:</label>
                              <input
                                   className="pl-5 rounded-sm bg-black text-gray-200 filter invert-100"
                                   type="password"
                              />
                         </div>
                    </div>

                    <div className="">
                         <button class="bg-gray-400 hover:bg-gray-700 text-white font-bold  rounded-lg w-[140px] text-[13px] h-6 ml-[152px] mt-[10px]">
                              Verify OTP
                         </button>
                    </div>
               </div>
          </div>
     </div>
     );
};

export default signup;
// flex flex-col
//