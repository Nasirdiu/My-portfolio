import React from "react";
import { Link } from "react-scroll/modules";
import TypeAnimation from "react-type-animation";
const Navbar = () => {
  const menu = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="service" spy={true} smooth={true}>
          Services
        </Link>
      </li>
      <li>
        <Link to="experience" spy={true} smooth={true}>
          Experience
        </Link>
      </li>
      <li>
        <Link to="portfolio" spy={true} smooth={true}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
      </li>
      <li>
        <Link to="contacts" spy={true} smooth={true}>
          Contact
        </Link>
      </li>
      
    </>
  );

  return (
    <div class="navbar container mx-auto" id="slider">
      <div class="navbar-start">
        <div class="dropdown ">
          <label tabindex="0" class="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <h1 className="text-2xl font-bold text-white ml-32">
          <TypeAnimation
            className="animition"
            cursor={false}
            sequence={["Portfolio", 1000, ""]}
            wrapper="h2"
            repeat={Infinity}
          />
        </h1>
      </div>
      <div class="navbar-center hidden lg:flex  text-white ">
        <ul class="menu menu-horizontal p-0">{menu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
