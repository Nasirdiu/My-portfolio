import React from "react";
import icon from '../../images/icon/web.webp'
import icon1 from '../../images/icon/reactjs-web-development-service.png'
import icon3 from '../../images/icon/Back-End-Developer.webp'
const Service = () => {
  return (
    <div  className="mt-10 bg-black " id="service">
      <h1 className="text-center text-3xl font-bold text-orange-400 uppercase">
        My <span className="text-red-500">Services</span>
      </h1>
      <div data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
     className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20  container mx-auto py-4">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src={icon}
              alt="Shoes"
              class="rounded-xl w-48"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Web Design</h2>
            <p>A web designer creates the layout and design of a website. In simple terms, a website designer makes a site look good. They use design programs to create visual elements</p>
            
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src={icon1}
              alt="Shoes"
              class="rounded-xl w-40"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">React js </h2>
            <p>React JS is a JavaScript library used in web development to build interactive elements on websites.</p>
            
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src={icon3}
              alt="Shoes"
              class="rounded-xl w-64"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">backend developer</h2>
            <p>Though requirements vary between jobs, back end developers will need to have a passing familiarity with, if not command of, several technical languages and programs. These essential back end developer skills include but are not limited to: Node js,Express js,Mongodb</p>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Service;
