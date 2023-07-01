import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contactContainer relative flex h-[auto] w-[auto] m-auto justify-center items-center">
        <section className="flex justify-center items-cetner relative w-[100vw] h-[100vh] max-w-[1000px] usm:flex-col usm:hidden">
          <div className="contactCard flex justify-center items-center m-auto w-[40%] h-[80%] flex-col bg-[#333333] rounded-xl">
            <div className="w-[100%] h-[100%] px-[2vw] flex flex-col m-auto">
              <div className="w-[auto] h-[auto]">
                <div className="py-[20px]">
                  <p className="text-[#9FEF00] text-[2rem] md:text-[1.7rem] sm:text-[1.3rem] text-center umd:text-[1.2rem]">
                    Add Description
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">Subject</legend>
                <input
                  type="text"
                  name="subject"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative px-[10px] h-[35px] w-[100%] border-b-[2px] border-[#FFFFFF]"
                ></input>
              </div>

              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">
                  Description
                </legend>
                <textarea
                  name="description"
                  className="text-[1rem] caret-[#9FEF00] outline-none rounded-lg relative px-[10px] h-[35px] w-[100%] border-[2px] border-[#FFFFFF] min-h-[30vh]"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="contactCard relative flex justify-center items-center m-auto w-[50%] h-[80%] flex-col bg-[#333333] rounded-xl">
            <div className="w-[100%] h-[100%] px-[2vw] flex flex-col m-auto">
              <div className="w-[auto] h-[auto]">
                <div className="py-[20px]">
                  <p className="text-[#9FEF00] text-[2rem] md:text-[1.7rem] sm:text-[1.3rem] text-center umd:text-[1.2rem]">
                    Contact Me
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">Name</legend>
                <input
                  type="text"
                  name="name"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative px-[10px] h-[35px] w-[100%] border-b-[2px] border-[#FFFFFF]"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">Email</legend>
                <input
                  type="email"
                  name="email"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative px-[10px] h-[35px] w-[100%] border-b-[2px] border-[#FFFFFF]"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">
                  Mobile Number
                </legend>
                <input
                  type="text"
                  name="number"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative px-[10px] h-[35px] w-[100%] border-b-[2px] border-[#FFFFFF]"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">
                  Profession
                </legend>
                <input
                  type="text"
                  name="profession"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative px-[10px] h-[35px] w-[100%] border-b-[2px] border-[#FFFFFF]"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-center m-auto">
                <input
                  type="submit"
                  value={"Contact"}
                  className="cursor-pointer outline-none border-none rounded-[50px] hover:bg-[#FFFFFF] button-transition h-[35px] w-[auto] px-[1rem] bg-[#9FEF00] text-[#101010]"
                ></input>
              </div>
            </div>
          </div>
        </section>

        <section className="contact justify-center items-cetner relative w-[100vw] h-[auto] usm:flex usm:flex-col hidden">
          <div className="contactCard relative flex justify-center items-center m-auto w-[50%] h-[80%] flex-col bg-[#333333] rounded-xl usm:w-[90%] usm:h-[100vh] usm:my-[1rem]">
            <div className="w-[auto] h-[auto]">
              <div className="py-[20px]">
                <p className="text-[#9FEF00] text-[2rem] md:text-[1.7rem] sm:text-[1.3rem] text-center umd:text-[1.2rem]">
                  Contact Me
                </p>
              </div>
            </div>
            <div className="w-[100%] h-[100%] px-[6vw] flex flex-col m-auto mb-[1rem]">
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">Name</legend>
                <input
                  type="text"
                  name="name"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative px-[10px] h-[35px] w-[100%] border-b-[2px] border-[#FFFFFF]"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">Email</legend>
                <input
                  type="email"
                  name="email"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative px-[10px] h-[35px] w-[100%] border-b-[2px] border-[#FFFFFF]"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">
                  Mobile Number
                </legend>
                <input
                  type="text"
                  name="number"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative px-[10px] h-[35px] w-[100%] border-b-[2px] border-[#FFFFFF]"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">
                  Profession
                </legend>
                <input
                  type="text"
                  name="profession"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative px-[10px] h-[35px] w-[100%] border-b-[2px] border-[#FFFFFF]"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">Subject</legend>
                <input
                  type="text"
                  name="subject"
                  className="text-[1rem] caret-[#9FEF00] outline-none relative px-[10px] h-[35px] w-[100%] border-b-[2px] border-[#FFFFFF]"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-start m-auto w-[100%]">
                <legend className="text-[0.9rem] py-[0.4rem]">
                  Description
                </legend>
                <textarea
                  name="description"
                  className="text-[1rem] rounded-lg caret-[#9FEF00] outline-none relative px-[10px] w-[100%] border-[2px] border-[#FFFFFF] h-[auto] min-h-[20vh]"
                ></textarea>
              </div>
              <div className="flex flex-col justify-center items-center m-auto">
                <input
                  type="submit"
                  value={"Contact"}
                  className="cursor-pointer outline-none border-none rounded-[50px] hover:bg-[#FFFFFF] button-transition h-[35px] w-[auto] px-[1rem] bg-[#9FEF00] text-[#101010]"
                ></input>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
