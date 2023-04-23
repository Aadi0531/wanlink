import React from "react";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="h-[70px] bg-black w-full text-white top-0 fixed">
      <div className="flex flex-row ">
        <div className="rounded-3xl h-3 w-3 bg-red-500 absolute left-[40rem] top-8"></div>
        <div className="rounded-3xl h-3 w-3 bg-green-300 absolute left-[43rem] top-8"></div>
        <div className="rounded-3xl h-3 w-3 bg-blue-300 absolute left-[46rem] top-8"></div>
        <img className="pt-3 pl-3 h-[50px]" src={logo} alt="logo" />
        <div className="space-x-4 fixed right-8 text-l top-6">
          <a href="./app"> <button className="cursor-pointer hover:outline-2 outline-offset-2">Home</button></a>
          <button>Sign-Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
