import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact relative flex flex-col justify-center items-center py-[8vh] h-[100vh] w-[100vw] px-[6vw] usm:hidden bg-[#56cae1]">
        <div className="w-[100%] max-w-[1000px] flex justify-center items-center h-[100%]">
          <div className="contactCard relative flex justify-start items-center w-[100%] h-[100%] mx-[1rem] flex-col bg-[transparent] rounded-xl">
            <div className="h-[20%] flex flex-col justify-center items-center w-[100%]">
              <div className="py-[10px]">
                <p className="text-[#0c3134] text-[1.8rem] rubik font-[800] tracking-wide text-center">
                  Details
                </p>
              </div>
            </div>
            <div className="w-[100%] h-[100%] px-[2vw] flex flex-col ">
              <div className="flex flex-col justify-start items-start py-[1rem] h-[100%] w-[100%]">
                <fieldset className="border-[2px] pb-[10px] border-[#0c3134] w-[100%]">
                  <legend className="text-[0.9rem] ml-[1rem] text-[#0c3134] ubuntu font-[700]">
                    Name
                  </legend>
                  <input
                    type="text"
                    name="name"
                    className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[100%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                  ></input>
                </fieldset>
              </div>
              <div className="flex flex-col justify-start items-start py-[1rem] h-[100%] w-[100%]">
                <fieldset className="border-[2px] pb-[10px] border-[#0c3134] w-[100%]">
                  <legend className="text-[0.9rem] ml-[1rem] text-[#0c3134] ubuntu font-[700]">
                    Email
                  </legend>
                  <input
                    type="text"
                    name="email"
                    className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[100%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                  ></input>
                </fieldset>
              </div>
              <div className="flex flex-col justify-start items-start py-[1rem] h-[100%] w-[100%]">
                <fieldset className="border-[2px] pb-[10px] border-[#0c3134] w-[100%]">
                  <legend className="text-[0.9rem] ml-[1rem] text-[#0c3134] ubuntu font-[700]">
                    Phone Number
                  </legend>
                  <input
                    type="text"
                    name="phone"
                    className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[100%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                  ></input>
                </fieldset>
              </div>
              <div className="flex flex-col justify-start items-start py-[1rem] h-[100%]  w-[100%]">
                <fieldset className="border-[2px] pb-[10px] border-[#0c3134] w-[100%]">
                  <legend className="text-[0.9rem] ml-[1rem] text-[#0c3134] ubuntu font-[700]">
                    Profession
                  </legend>
                  <input
                    type="text"
                    name="profession"
                    className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[100%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                  ></input>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="contactCard min-h-[60vh] relative flex justify-start items-center w-[100%] h-[100%] mx-[1rem] flex-col bg-[transparent] rounded-xl">
            <div className="flex h-[20%] flex-col justify-center items-center w-[100%]">
              <div className="py-[10px]">
                <p className="text-[#0c3134] text-[1.8rem] rubik font-[800] tracking-wide text-center">
                  Description
                </p>
              </div>
            </div>
            <div className="w-[100%] h-[100%] px-[2vw] flex flex-col justify-center items-start">
              <div className="flex flex-col justify-start items-start py-[1rem] h-[30%] w-[100%]">
                <fieldset className="border-[2px] pb-[10px] border-[#0c3134] w-[100%]">
                  <legend className="text-[0.9rem] ml-[1rem] text-[#0c3134] ubuntu font-[700]">
                    Subject
                  </legend>
                  <input
                    type="text"
                    name="subject"
                    className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[100%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                  ></input>
                </fieldset>
              </div>
              <div className="flex flex-col justify-start items-start py-[1rem] h-[100%] w-[100%]">
                <fieldset className="border-[2px] pb-[10px] border-[#0c3134] w-[100%] h-[60%]">
                  <legend className="text-[0.9rem] ml-[1rem] text-[#0c3134] ubuntu font-[700]">
                    Description
                  </legend>
                  <textarea
                    type="text"
                    name="description"
                    className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[100%] w-[100%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                  ></textarea>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-[20%] w-[100%]">
          <input
            type="submit"
            value={"Contact"}
            className="cursor-pointer outline-none border-none rounded-[50px] hover:bg-[#FCFCFC] hover:text-[#0c3134] button-transition h-[35px] w-[auto] px-[1rem] bg-[#0c3134] text-[#FCFCFC]"
          ></input>
        </div>
      </section>

      <section className="contact justify-center overflow-y-hidden items-center py-[8vh] relative w-[100vw] h-[100%] min-h-[100vh] usm:flex usm:flex-col hidden bg-[#56cae1]">
        <div className="contactCard relative flex justify-center items-center  w-[100%] h-[100%] flex-col bg-[transparent] rounded-xl">
          <div className="flex flex-col justify-center items-center  w-[auto]">
            <div className="py-[20px]">
              <p className="text-[#0c3134] text-[1.3rem] rubik font-[800] tracking-wide text-center">
                Contact Me
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[100%] px-[6vw] flex flex-col  mb-[1rem]">
            <div className="flex flex-col justify-center items-start  w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#0c3134]">
                <legend className="text-[0.9rem] ubuntu font-[700] ml-[1rem] text-[#0c3134]">
                  Name
                </legend>
                <input
                  type="text"
                  name="name"
                  className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start  w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#0c3134]">
                <legend className="text-[0.9rem] ubuntu font-[700] ml-[1rem] text-[#0c3134]">
                  Email
                </legend>
                <input
                  type="email"
                  name="email"
                  className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start  w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#0c3134]">
                <legend className="text-[0.9rem] ubuntu font-[700] ml-[1rem] text-[#0c3134]">
                  Phone Number
                </legend>
                <input
                  type="text"
                  name="number"
                  className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start  w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#0c3134]">
                <legend className="text-[0.9rem] ubuntu font-[700] ml-[1rem] text-[#0c3134]">
                  Profession
                </legend>
                <input
                  type="text"
                  name="profession"
                  className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start  w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#0c3134]">
                <legend className="text-[0.9rem] ubuntu font-[700] ml-[1rem] text-[#0c3134]">
                  Subject
                </legend>
                <input
                  type="text"
                  name="subject"
                  className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#0c3134] text-[#0c3134]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start  w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#0c3134]">
                <legend className="text-[0.9rem] ubuntu font-[700] ml-[1rem] text-[#0c3134]">
                  Description
                </legend>
                <textarea
                  type="text"
                  name="description"
                  className="text-[1rem] caret-[#0c3134] outline-none relative ml-[10px] px-[10px] h-[35px] w-[1000%] broder-none border-b-[2px] border-[#0c3134] min-h-[20vh] text-[#0c3134]"
                ></textarea>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <input
                type="submit"
                value={"Contact"}
                className="cursor-pointer outline-none border-none rounded-[35px] hover:bg-[#FCFCFC] hover:text-[#0c3134] button-transition h-[35px] w-[auto] mt-[0.8rem] px-[0.8rem] bg-[#0c3134] text-[#FCFCFC]"
              ></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
