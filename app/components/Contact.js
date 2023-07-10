"use client";
import React, { useRef, useState } from "react";
import axios from "axios";

const initValues = {
  fullname: "",
  profession: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

const Contact = () => {
  const [contactState, setContactState] = useState(initState);
  const nameRef = useRef(null);
  const professionRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const { values } = contactState;

  const handleChange = ({ target }) => {
    setContactState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [target.name]: target.value,
      },
    }));
  };

  const handleSubmit = async () => {
    if (
      (nameRef && nameRef.current.value === "") ||
      (professionRef && professionRef.current.value === "") ||
      (emailRef && emailRef.current.value === "") ||
      (phoneRef && phoneRef.current.value === "") ||
      (subjectRef && subjectRef.current.value === "") ||
      (messageRef && messageRef.current.value === "")
    ) {
      alert("Please fill the form!");
      return;
    }
    const contactBtnElement = document.getElementById("contactbtn");
    if (contactBtnElement) {
      contactBtnElement.innerText = "Mailing...";
    }
    setContactState((prevState) => ({
      ...prevState,
    }));

    axios({
      url: "https://lakshya-mahawar.vercel.app/api/mail",
      method: "post",
      data: JSON.stringify(values),
    }).then((res) => {
      contactBtnElement.innerText = "Let's Talk";
      alert("Mail Sent Successfully!");
    });
  };
  return (
    <>
      <div className="isolate bg-[#56cae1] px-[6vw] py-[8vh]">
        <div className="mx-auto max-w-2xl text-center mt-[4vh]">
          <h1 className="text-[2.5rem] md:text-[2rem] sm:text-[1.5rem] text-[#0e2f36] sm:text-4xl  tracking-wide">
            Contact Me
          </h1>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="fullname"
                className="block text-sm leading-6  tracking-wide text-[#0e2f36]"
              >
                Full Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  ref={nameRef}
                  name="fullname"
                  id="fullname"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={values.fullname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="profession"
                className="block text-sm leading-6  tracking-wide text-[#0e2f36]"
              >
                Profession
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  ref={professionRef}
                  name="profession"
                  id="profession"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={values.profession}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm leading-6  tracking-wide text-[#0e2f36]"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm leading-6  tracking-wide text-[#0e2f36]"
              >
                Phone Number
              </label>
              <div className="mt-2.5">
                <input
                  type="phone"
                  ref={phoneRef}
                  name="phone"
                  id="phone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                  required
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm leading-6  tracking-wide text-[#0e2f36]"
              >
                Subject
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  ref={subjectRef}
                  name="subject"
                  id="subject"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={values.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm leading-6  tracking-wide text-[#0e2f36]"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  ref={messageRef}
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              id="contactbtn"
              type="submit"
              onClick={handleSubmit}
              className="block w-[auto] bg-[#970bde] rounded-md  tracking-wide px-3.5 py-2.5 text-center text-sm shadow-sm hover:bg-indigo-500 focus:bg-indigo-500 text-[#fcfcfc]"
            >
              {"Let's Talk"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
