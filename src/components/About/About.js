import React from "react";
import "./About.css";
import theam_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";
function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px]"
    >
      <div className=" relative">
        <h1 className="px-[30px] py-0 text-[60px] font-semibold">About me</h1>
        <img className="  about-img" src={theam_pattern} alt="" />
      </div>
      <div className="flex gap-[80px]">
        <div className="flex flex-col gap-[80px]">
          <img
            className=" rounded-lg border-[2px] border-slate-900     w-[800px]"
            src={profile_img}
            alt=""
          />
        </div>
        <div className="about-right flex flex-col gap-[60px] ">
          <div className="about-para flex flex-col gap-[18px] text-[20px] font-medium">
            <p>
              Welcome to my portfolio! I'm Mohammad Shiraz, a passionate web
              developer with a knack for creating immersive digital experiences.
              I specialize in crafting clean and efficient code to bring ideas
              to life.
            </p>
            <p>
              In my portfolio, you'll find a collection of projects that
              showcase my skills in front-end and back-end development.
            </p>
          </div>
          <div className="about-skills flex flex-col gap-[18px]">
            <div className="about-skill ">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>NODE JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>EXPRESS JS</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
