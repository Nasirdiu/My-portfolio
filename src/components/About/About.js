import React from "react";
import nasir from "../../images/nasir3.png";
import cv from "../../images/Md.Nasir Uddin Resume.pdf";
import TypeAnimation from 'react-type-animation';
import './About.css'
const About = () => {
  return (
    <div className="mt-40 bg-neutral" id="about">
      <h1 className="text-center text-3xl font-bold uppercase p-10">
        About <span className="text-orange-500">Me</span>
      </h1>
      <div>
        <div class="hero min-h-screen">
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            class="hero-content flex-col lg:flex-row "
          >
            <img src={nasir} class="max-w-sm rounded-lg shadow-2xl" alt="" />
            <div
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="ml-40"
            >
              <h1 class="text-2xl font-bold text-orange-500">
               I'm a{" "}
                <TypeAnimation className='animition'
                  cursor={true}
                  sequence={[
                    "Developer",
                    2000,
                    "Blogger",
                    2000,
                    "Designer",
                    2000,
                    "YouTuber",
                    2000,
                    "Freelancer",
                    2000,
                  ]}
                  wrapper="p"
                  repeat={3}
                />
              </h1>
              <p class="py-6">
                I am Web developer . We are interested in learning new features
                of development. We try to learn new technologies very quickly. i
                are able to work as a developer of any champ. More than a year
                of efficient website and application coding using React Js, CSS,
                React Router, Tailwind CSS, Bootstrap, JavaScript, Firebase
                Authentication, Node JS, Express JS, MongoDB, etc. Education :
                Bsc In Computer Science Engineer
              </p>
              <a href={cv} download>
                {" "}
                <button class="btn btn-accent btn-outline ">Download Cv</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
