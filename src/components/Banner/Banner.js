import React from 'react';
import nasir from '../../images/nasir.png'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { toast } from 'react-toastify';
import './Banner.css'
const Banner = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    toast(container);
  };
    return (
        <div class="hero min-h-screen  bg-black" >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={nasir}
          class="max-w-sm rounded-lg shadow-2xl" alt=""
        />
        <div>
          <h1 class="text-3xl font-bold text-white">Hi ! <span className='text-orange-500'>I Am</span></h1>
          <h1 class="text-5xl font-bold banner-me">Nasir Uddin</h1>
          <p class="py-6 text-white">
          Frontend Developer with high level of experience in web designing and development, producting the Quality work.
          </p>
          <a href="https://www.linkedin.com/in/nasir369/" target='blank'><button class="btn btn-primary text-white" id='contact'>Hire Me</button></a>
        </div>
        
      </div>
       <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "black",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    /> 
    </div>
    );
};

export default Banner;