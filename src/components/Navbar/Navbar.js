import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div
      id="navbar"
      className="flex navbar justify-between  items-center my-[25px] mx-[150px]"
    >
      <img className="w-[80px]   rounded-full" src={logo} />
      <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt="" />
      <ul
        ref={menuRef}
        className="flex nav-menu list-none gap-[60px] items-center   text-[20px]"
      >
        <img
          onClick={closeMenu}
          src={menu_close}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className=" no-underline text-white" href="home">
            <p
              onClick={() => {
                setMenu("home");
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="no-underline text-white"
            href="#about"
            offset={50}
          >
            <p
              onClick={() => {
                setMenu("skill");
              }}
            >
              Skill
            </p>
          </AnchorLink>
          {menu === "skill" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="no-underline text-white"
            href="#project"
            offset={50}
          >
            <p
              onClick={() => {
                setMenu("project");
              }}
            >
              Project
            </p>
          </AnchorLink>
          {menu === "project" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="no-underline text-white"
            href="#contact"
            offset={50}
          >
            <p
              onClick={() => {
                setMenu("contact me");
              }}
            >
              Contact Me
            </p>
          </AnchorLink>
          {menu === "contact me" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="px-[25px] py-[15px] nav-connect rounded-[50px]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[22px] cursor-pointer hover:scale-105  transition duration-500">
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;
