import React from "react";
import "./Project.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import myProjectData from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Project = () => {
  return (
    <div
      id="project"
      className="myProject flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px]"
    >
      <div className="myProject-title relative">
        <h1 className="px-[30px] py-0 text-[60px] font-semibold ">
          My Project
        </h1>
        <img
          className="absolute bottom-[0] right-[0] z-[-1]"
          src={theme_pattern}
          alt=""
        />
      </div>
      <div className="myProject-container grid grid-cols-[1fr_1fr_1fr] gap-[40px]">
        {myProjectData.map((work, index) => {
          return (
            <img
              className="box-border w-[450px]  h-[300px] [transition:0.3s] cursor-pointer hover:scale-110 hover:border-[4px] hover:border-[solid] hover:border-[#ff00ff] hover:rounded-[10px] hover:[transition:0.3s]"
              key={index}
              src={work.w_img}
              alt=""
            ></img>
          );
        })}
      </div>
      <div className="myproject-showmore flex gap-[15px] px-[60px] py-[30px] text-[22px] font-medium mb-[80px] [transition:0.6s] cursor-pointer border-[2px] border-[solid] border-[white] rounded-[50px] hover:gap-[30px] hover:[transition:0.6s]">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Project;
