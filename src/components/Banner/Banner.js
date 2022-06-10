import React from 'react';
import nasir from '../../images/nasir.png'
import './Banner.css'
const Banner = () => {
    return (
        <div class="hero min-h-screen  bg-base-200" >
      <div class="hero-content flex-col lg:flex-row-reverse  mx-40">
        <img
          src={nasir}
          class="max-w-sm rounded-lg shadow-2xl" alt=""
        />
        <div>
          <h1 class="text-5xl font-bold">Hi ! I Am</h1>
          <h1 class="text-5xl font-bold banner-me">Nasir Uddin</h1>
          <p class="py-6">
          Frontend Developer with high level of experience in web designing and development, producting the Quality work.
          </p>
          <button class="btn btn-accent text-white">Hire Me</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;