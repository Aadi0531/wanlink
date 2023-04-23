import React from "react";
import women from "../assets/icons/women.svg";
import storage from "../assets/icons/cloud.svg";
import women2 from "../assets/icons/women2.svg";
import Foot from "./Foot";
const Hero = () => 
{
  return (
    <div className="w-full">
      <div>
        <div className="flex h-auto bg-white shadow-2xl rounded-2xl border-2 absolute top-20 border-gray-500 mx-12 mt-10 w-auto ">
          <div className="w-[83rem] h-48">
            <div className="flex space-x-72">
              <div className="text-black border-transparent ml-[10rem] ">
                <img className="h-24 " src={women2} />
                <p className="text-xl">STORE FILE</p>
              </div>
              <div className="border-transparent  h-8">
                <img className="h-24" src={women} />
                <p className="text-xl">SHARE FILE</p>
              </div>
              <div>
                <img className="h-24" src={storage} />
                <p className="text-xl">ACCESS FILE</p>
              </div>
            </div>
            <div className="bg-black h-[3rem] w-auto rounded-br-xl rounded-bl-xl text-white relative top-[1.3rem] ">
              <p className="text-l font-light text-center p-2">
                <span className="text-red-400">Create </span>  and <span className="text-green-200">Share</span> your work online and <span className="text-blue-300">Access</span> your document from
                anywhere
              </p>
            </div>
          </div>
        </div>

        <div className="flex absolute top-[20rem]">
          <div >
            <div className="bg-white my-10 h-[10rem] w-[35rem] rounded-l border-2  border-gray-500 mx-20 flex">
              <p className="pl-16 py-[65px] pr-2 text-xl font-bold">
                WE BELIEVE IN{" "}
              </p>
              <div className="bg-black my-[13px] ml-10 h-32 w-[5px] ">
                
              </div>
              <div className="pl-10  py-6 text-l space-y-4">
                <p>keeping it minimal</p>
                <p>keeping it simple</p>
                <p>keeping it practical</p>
              </div>
            </div>
          <div className="bg-white my-[0px] h-[8rem] w-[35rem] rounded-l border-2  border-gray-500 mx-20">

          </div>
          </div>
          <div className="bg-white my-10 h-[20.5rem] w-[40rem] rounded-l border-2  border-gray-500 mx-[-10px] flex">
            <h1>hello</h1>
          </div>
        </div>
      </div>
      <Foot/>
    </div>
  );
};

export default Hero;
