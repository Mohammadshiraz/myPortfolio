import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <div id="hero" className="flex items-center flex-col gap-[35px]">
      <img className="mt-[30px] w-[300px]" src={profile} alt="" />
      <h1 className=" text-center w-[70%] font-semibold text-[70px]">
        <span className="hero-span">I'm Mohammad Shiraz,</span>
        Web Developer
      </h1>
      <p className="w-[50] text-center text-[24px] leading-[40px]">
        I am a MERN stack Developer
      </p>
      <div className="flex items-center gap-[25px] text-[24px] font-medium mb-[50px]">
        <div className="px-[45px] py-[25px] rounded-[50px]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer hover:border-[2px] hover:border-solid hover:border-white">
          Connect With Me
        </div>
        <div className="px-[75px] py-[25px] rounded-[50px] cursor-pointer border-2 border-solid border-white hover:border-[#b415ff] ">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
