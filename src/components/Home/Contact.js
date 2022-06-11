import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_9jwxene",
        "template_k6syvi6",
        form.current,
        "Vw2FLSAXDQ72MxNxK"
      )
      .then(
        (result) => {
          toast(result.text);
          setDone(true);
        },
        (error) => {
          toast(error.text);
        }
      );
    event.target.reset();
  };
  return (
    <div className="mt-40 bg-black" id="contacts">
      <h1 className="text-center uppercase text-3xl font-bold text-orange-400">
        contact <span className="text-red-500">Me</span>
      </h1>
      <div>
        <form
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          ref={form}
          onSubmit={handleSubmit}
          className="text-center mt-16"
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            name="First_name"
            class="input input-bordered input-md w-full max-w-xs mr-4 m-2"
          />
          <br />
          <input
            type="email"
            placeholder="Email Address"
            name="user_email"
            class="input input-bordered input-md w-full max-w-xs mr-4"
          />
          <br /> <br />
          <textarea
            class="textarea textarea-bordered w-96 h-40"
            placeholder="Your Message"
            required
            name="message"
          ></textarea>
          <div class="flex justify-center  p-10 ">
            <button class="btn btn-primary hover:bg-accent">
              Send Message
            </button>
          </div>
          <span className="text-white">
            {done && "Thanks for Contacting me"}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
