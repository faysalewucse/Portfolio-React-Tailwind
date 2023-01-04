import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const card =
    "bg-gray-900 px-5 py-10 rounded lg:text-xl hover:cursor-pointer lg:hover:-mt-2 transition-all duration-300";
  const formStyle = "bg-gray-800 p-2 rounded";
  return (
    <section
      id="contact-section"
      className="bg-gray-800 text-white min-[1600px]:px-72 md:px-24 px-6 py-12 text-center"
    >
      <div className="max-w-7xl mx-auto">
        <h5 className="after:content-[''] after:bg-green-600 after:inline-block after:h-[3px] after:relative after:align-middle after:ml-5 after:w-1/6 before:content-[''] before:bg-green-600 before:inline-block before:h-[3px] before:relative before:align-middle before:w-1/6 before:mr-5 text-xl">
          Have Any Query?
        </h5>
        <i className="fa fa-arrow-down text-green-600 font-bold" />
        <h1 className="font-bold text-4xl mb-10">Contact Me</h1>
        <p className="text-xl lg:w-3/5 w-full text-justify mx-auto">
          I am a professional WordPress and Graphic Designer. I work in these
          fields for 3 years. I am confident, I will satisfy you with my
          professional experiences.
        </p>
        <hr className="w-1/3 mx-auto border border-green-600 my-10" />
        <div className="grid lg:grid-cols-3 gap-5 my-10">
          <div>
            <div className={card}>
              <i className="fa fa-map mt-3 mb-4 text-green-600 text-4xl" />
              <h4 className="lg:text-3xl font-bold">Meeting Address</h4>
              <p className="lead">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div>
            <div className={card}>
              <i className="fa fa-phone mt-3 mb-4 text-blue-600 text-4xl" />
              <h4 className="lg:text-3xl font-bold">Give Me a Call</h4>
              <p className="lead">+8801634495020</p>
            </div>
          </div>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=faysal.ewucse@gmail.com">
            <div className={card}>
              <i className="fa fa-envelope mb-4 mt-3 text-red-600 text-4xl" />
              <h4 className="lg:text-3xl font-bold">Send Me Mail</h4>
              <p className="lead">faysal.ewucse@gmail.com</p>
            </div>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail} className="mt-5 bg-gray-900">
          <div className="grid grid-cols-1 lg:p-10 p-5 gap-2">
            <input
              name="from_email"
              type="email"
              required
              placeholder="E-mail"
              className={`${formStyle}`}
            />
            <textarea
              name="message"
              required
              rows={10}
              placeholder="Message"
              defaultValue={""}
              className={`${formStyle}`}
            />
          </div>
          <input
            className="submit bg-green-700 py-2 px-4 w-full hover:bg-green-600 hover:cursor-pointer"
            type="submit"
            value={"Send"}
          />
        </form>
      </div>
    </section>
  );
}
