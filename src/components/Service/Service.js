import React from "react";
import icon from '../../images/icon/web.webp'
import icon1 from '../../images/icon/reactjs-web-development-service.png'
import icon3 from '../../images/icon/Back-End-Developer.webp'
const Service = () => {
  return (
    <div className="mt-10" id="service">
      <h1 className="text-center text-3xl font-bold text-orange-400">
        My Service
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12 mt-20">
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
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
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
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
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
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Service;
