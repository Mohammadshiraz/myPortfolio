import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.svg";
// import user_icon from "../../assets/user_icon.svg";

function Footer() {
  return (
    <div
      id="footer"
      className="footer mx-[170px] mt-[200px] flex flex-col gap-[30px]"
    >
      <div className=" relative footer-top flex  justify-between ">
        <div className="footer-top-left text-[20px] max-w-[400px]">
          <img
            className="  absolute bottom-[25px] left-[-30px] w-[150px]"
            src={footer_logo}
            alt=""
          />
          <p>I am full stack web developer</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom flex justify-between text-[18px]">
        <p className="footer-bottom-left">
          © 2024 mohammad shiraz. All right reserved.
        </p>
        <div className="footer-bottom-right flex gap-[50px] mb-[50px]">
          <p>Term of Services</p>
          <p>Privacy Polocy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
