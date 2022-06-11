import React from "react";
import icon from "../../images/icon/bootstrap-logo.png";
import icon1 from "../../images/icon/download (1).png";
import icon2 from "../../images/icon/download (2).png";
import icon3 from "../../images/icon/download (3).png";
import icon4 from "../../images/icon/download.png";
import icon5 from "../../images/icon/logo-2582748_1280.webp";
import icon6 from "../../images/icon/mongodb-logo.png";
import icon7 from "../../images/icon/Tailwind_CSS_Logo.svg.png";
import icon8 from "../../images/icon/js-logo.webp";
const Experience = () => {
  return (
    <div className="bg-neutral " id="experience">
      <h1 className="text-center text-3xl font-bold uppercase p-10">
        Exper<span className="text-orange-500">ience </span>
      </h1>
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className=" grid grid-cols-3 lg:grid-cols-9  mx-auto py-20 container "
      >
        <img className="w-24 mx-5 rounded" src={icon5} alt="" />
        <img className="w-24 mx-5 rounded" src={icon4} alt="" />
        <img className="w-24 mx-5 rounded" src={icon} alt="" />
        <img className="w-24 mx-5 rounded" src={icon7} alt="" />
        <img className="w-24 mx-5 rounded" src={icon8} alt="" />
        <img className="w-24 mx-5 rounded" src={icon1} alt="" />
        <img className="w-24 mx-5 rounded" src={icon2} alt="" />
        <img className="w-24 mx-5 rounded" src={icon3} alt="" />

        <img className="w-24 mx-5 rounded" src={icon6} alt="" />
      </div>
    </div>
  );
};

export default Experience;
