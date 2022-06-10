import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
    const handleSubmit=event=>{
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
    }
    return (
        <div className='mt-40 bg-black'id='contacts'>
            <h1  className="text-center uppercase text-3xl font-bold text-orange-400">contact Us</h1>
            <div>
        <form  data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" ref={form} onSubmit={handleSubmit} className="text-center mt-16">
          <input
            type="text"
            placeholder="First Name"
            name='First_name'
            class="input input-bordered input-md w-full max-w-xs mr-4 "
          />
          <input
            type="text"
            name='Last_name'
            placeholder="Last Name"
            class="input input-bordered input-md w-full max-w-xs "
          />{" "}
          <br /> <br />
          <input
            type="email"
            placeholder="Email Address"
            name="user_email" 
            class="input input-bordered input-md w-full max-w-xs mr-4"
          />
          <input
            type="number"
            placeholder="Phone Number"
            name='phone'
            class="input input-bordered input-md w-full max-w-xs "
          />{" "}
          <br /> <br />
          <textarea
            class="textarea textarea-bordered w-96 h-40"
            placeholder="Your Message"
            name='message'
          ></textarea>
          <div class="flex justify-center  p-10 ">
            <button class="btn btn-secondary">Send Message</button>
          </div>
          <span className='text-white'>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>

        </div>
    );
};

export default Contact;