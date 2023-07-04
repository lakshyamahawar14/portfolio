import React from "react";

const Contact = () => {
  return (
    <>
      <div className="isolate bg-[#56cae1] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-[#0e2f36] sm:text-4xl rubik font-[700] tracking-wide">
            Contact Me
          </h2>
        </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                className="block text-sm leading-6 text-[#0e2f36] ubuntu tracking-wide font-[700]"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#0e2f36] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                className="block text-sm leading-6 ubuntu tracking-wide font-[700] text-[#0e2f36]"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="company"
                className="block text-sm leading-6 ubuntu tracking-wide font-[700] text-[#0e2f36]"
              >
                Profession
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="profession"
                  id="profession"
                  autocomplete="profession"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="email"
                className="block text-sm leading-6 ubuntu tracking-wide font-[700] text-[#0e2f36]"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="phone"
                className="block text-sm leading-6 ubuntu tracking-wide font-[700] text-[#0e2f36]"
              >
                Phone Number
              </label>
              <div className="mt-2.5">
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autocomplete="phone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block text-sm leading-6 ubuntu tracking-wide font-[700] text-[#0e2f36]"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-[auto] bg-[#970bde] rounded-md ubuntu tracking-wide font-[700] px-3.5 py-2.5 text-center text-sm shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-[#fcfcfc]"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
