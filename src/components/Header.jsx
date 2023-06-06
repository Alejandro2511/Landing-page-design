import React from "react";
//icons
import {RiCheckboxBlankCircleFill} from "react-icons/ri";


const Header = () => {
    return (
        <header className="flex items-center w-full p-4">
          <div className=" w-1/4 text-center">
           <h1 className="text-xl font-bold relative">
            Power<span className="text-primary text-5xl">.</span>
            <RiCheckboxBlankCircleFill className="absolute"/></h1> 
          </div>
          <nav className=" flex-1 text-center">
            <h1>Nav</h1>
          </nav>
        </header>
    );
};

export default Header