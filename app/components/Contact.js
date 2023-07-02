import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact relative overflow-y-hidden flex justify-center items-center h-[100vh] w-[100vw] px-[6vw] md:px-[3vw] usm:hidden">
        <div className="contactCard relative flex justify-center items-center w-[100%] h-[100%] md:h-[80%] mx-[1rem] md:mx-[10px] max-w-[450px] max-h-[70vh] flex-col rounded-xl">
          <div className="flex flex-col justify-center items-center m-auto w-[100%]">
            <div className="py-[20px]">
              <p className="text-[#9FEF00] text-[1.8rem] md:text-[1.7rem] sm:text-[1.3rem] text-center umd:text-[1.2rem]">
                Add Description
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[100%] md:w-[90%] md:h-[80%] px-[2vw] flex flex-col m-auto">
            <div className="flex flex-col justify-center items-start py-[1rem] m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Subject
                </legend>
                <input
                  type="text"
                  name="subject"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00]"
                ></input>
              </fieldset>
            </div>

            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Description
                </legend>
                <textarea
                  type="text"
                  name="description"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00] min-h-[30vh]"
                ></textarea>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="contactCard relative flex justify-center items-center w-[100%] h-[100%] md:h-[80%] mx-[1rem] md:mx-[10px] max-w-[450px] max-h-[70vh] flex-col bg-[transparent] rounded-xl">
          <div className="flex flex-col justify-center items-center m-auto w-[100%]">
            <div className="py-[20px]">
              <p className="text-[#9FEF00] text-[1.8rem] md:text-[1.7rem] sm:text-[1.3rem] text-center umd:text-[1.2rem]">
                Add Personal Details
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[100%] md:w-[90%] md:h-[80%] px-[2vw] flex flex-col m-auto">
            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Name
                </legend>
                <input
                  type="text"
                  name="name"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Email
                </legend>
                <input
                  type="email"
                  name="email"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Phone Number
                </legend>
                <input
                  type="text"
                  name="number"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Profession
                </legend>
                <input
                  type="text"
                  name="profession"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-center m-auto">
              <input
                type="submit"
                value={"Contact"}
                className="cursor-pointer outline-none border-none rounded-[50px] hover:bg-[#FCFCFC] button-transition h-[35px] w-[auto] px-[1rem] bg-[#9FEF00] text-[#101010]"
              ></input>
            </div>
          </div>
        </div>
      </section>

      <section className="contact justify-center overflow-y-hidden items-center relative w-[100vw] h-[auto] min-h-[100vh] usm:flex usm:flex-col hidden">
        <div className="contactCard relative flex justify-center items-center m-auto w-[90%] h-[90%] flex-col bg-[transparent] rounded-xl">
          <div className="flex flex-col justify-center items-center m-auto w-[100%]">
            <div className="py-[20px]">
              <p className="text-[#9FEF00] text-[1.8rem] md:text-[1.7rem] sm:text-[1.3rem] text-center umd:text-[1.2rem]">
                Contact Me
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[100%] px-[6vw] flex flex-col m-auto mb-[1rem]">
            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Name
                </legend>
                <input
                  type="text"
                  name="name"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Email
                </legend>
                <input
                  type="email"
                  name="email"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Phone Number
                </legend>
                <input
                  type="text"
                  name="number"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Profession
                </legend>
                <input
                  type="text"
                  name="profession"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Subject
                </legend>
                <input
                  type="text"
                  name="subject"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00]"
                ></input>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-start m-auto w-[100%]">
              <fieldset className="border-2 pb-[10px] w-[100%] border-[#A4B1CD]">
                <legend className="text-[0.9rem] ml-[1rem] text-[#FCFCFC]">
                  Description
                </legend>
                <textarea
                  type="text"
                  name="description"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative ml-[10px] px-[10px] h-[35px] w-[90%] broder-none border-b-[2px] border-[#9FEF00] min-h-[20vh]"
                ></textarea>
              </fieldset>
            </div>
            <div className="flex flex-col justify-center items-center m-auto">
              <input
                type="submit"
                value={"Contact"}
                className="cursor-pointer outline-none border-none rounded-[35px] hover:bg-[#FFFFFF] button-transition h-[25px] w-[auto] mt-[0.8rem] px-[0.8rem] bg-[#9FEF00] text-[#101010]"
              ></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
