import React from "react";
import { Input } from "./sub";

function Contact() {
  return (
    <div className="container ">
      <div className="flex justify-center flex-col lg:w-3/6 mx-auto py-8">
        <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-900 dark:text-white">
          Contact Me
        </h1>
        <div className="flex flex-wrap m-2">
          <Input label="Name" type="text" placeholder="Enter your name" />
          <Input label="Email" type="email" placeholder="Enter your email" />
          <div className="w-full p-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <textarea
              placeholder="Enter your message..."
              id="message"
              name="message"
              className="w-full bg-gray-100 dark:bg-white bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="w-full py-2">
            <button className="w-full inline-block rounded-md border border-transparent bg-gray-900 px-8 py-3 text-center font-medium text-white hover:bg-gray-700">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center flex-col lg:w-3/6 mx-auto">
        <div className="w-5/6 mx-auto lg:w-full border-2 h-0"></div>
        <p className="text-center   text-gray-700 text-md lg:text-md">
          or send me direct email at
        </p>
        <p className="text-center text-md font-bold lg:text-xl text-gray-700">
          <a href="mailto:kukreti.rs@gmail.com">kukreti.rs@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
