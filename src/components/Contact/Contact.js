import React from "react";
import "./Contact.css";

import mail_icon from "../../assets/mail_icon.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

function Contact() {
  return (
    <div
      id="contact"
      className="contact flex flex-col items-center justify-center gap-[60px] mx-[170px] my-[10px]"
    >
      <div className="contact-title relative">
        <h1 className="px-[30px] py-0 text-[60px] font-semibold">
          Get in touch
        </h1>
        <img
          className="absolute bottom-[0] right-[0] z-[-1]"
          src={theme_pattern}
          alt=""
        />
      </div>
      <div className="contact-section flex gap-[150px]">
        <div className="contact-left">
          <h1 className="contact-left-h">Let's talk</h1>
          <p className="">
            I'm currently available to take new project,so feel free to send me
            massage about anything that you want me to work on.You can contact
            me anytime
          </p>
          <div className="contact-details  mt-20 flex flex-col gap-[30px] text-[#d8d8d8] text-[22px]">
            <div className="contact-detail flex items-center gap-[20px]">
              <img src={mail_icon} alt="" />
              <p>mohdshiraz980@gmail.com</p>
            </div>
            <div className="contact-detail flex items-center gap-[20px]">
              <img src={call_icon} alt="" />
              <p>+91-8299519060</p>
            </div>
            <div className="contact-detail flex items-center gap-[20px]">
              <img src={location_icon} alt="" />
              <p>Utter Pradesh,INDIA</p>
            </div>
          </div>
        </div>
        <form
          className="contact-right flex flex-col gap-[30px] items-start"
          action=""
        >
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your name" name="email" />
          <label htmlFor="">Write your massage here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message here"
            id=""
          ></textarea>
          <button
            type="submit"
            className="contact-submit border-[none] text-[white] rounded-[50px] bg-[linear-gradient(267deg,_#da7c25_0.36%,_#b923e1_100%)] text-[22px] px-[60px] py-[20px] mb-[50px] cursor-pointer [transition:0.3s] hover:scale-110 hover:[transition:0.3s]"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
