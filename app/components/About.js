import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <>
      <section className="about pt-[8vh] relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#78dbbd]">
        <div className="px-[3vw] flex flex-col justify-center items-start sm:items-center w-[80%]">
          <Image
            src="/assets/images/heathjoker_pfp.jpg"
            width={300}
            height={300}
            key={Math.random}
            className="relative w-[60%] sm:w-[80%] h-[auto] rounded-xl"
            alt="Picture picture of Author"
            priority={true}
          />
          <p className="text-[1rem] pl-[10px] tracking-wide text-[#134c4d] pt-[1.3rem] md:text-[0.9rem] sm:text-[0.8rem] md:pt-[1rem] sm:py-[0.8rem]">
            Pic - Admin (Me)
          </p>
        </div>
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <p className="text-[2.5rem] text-[#134c4d] text-start md:text-[2rem] sm:text-[1.5rem]">
            I&apos;m{" "}
            <span className=" text-[#134c4d] tracking-wider">
              Lakshya Mahawar
            </span>
          </p>
          <p className="text-[1.3rem] py-[2rem] md:text-[1.2rem] tracking-wide  text-[#134c4d] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
            I&apos;m <span className="text-[#63155b]">20</span> Years Old. My
            hobby is playing video games and watching movies. My favourite movie
            is <span className="text-[#63155b]">Interstellar</span> (but my
            character is more like <span className="text-[#63155b]">Joker</span>{" "}
            from <span className="text-[#63155b]">The Dark Knight</span>) and
            favourte game is{" "}
            <span className="text-[#63155b]">Just Cause 3</span> (underrated,
            tho i&apos;ve played almost all major AAA games). And yeah, I study
            in <span className="text-[#63155b]">IIT Roorkee</span> under B. Tech
            programme.
          </p>
        </div>
      </section>

      <section className="about py-[8vh] relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#96e5f3]">
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[80%] sm:max-w-[none] w-[100%]">
          <p className="text-[2.5rem] text-[#0c3b43] text-center md:text-[2rem] sm:text-[1.5rem] w-[100%]">
            Social Media & Other Links
          </p>
          <p className="text-[1.3rem] flex flex-col items-start justify-center py-[2rem] md:text-[1.2rem] tracking-wide w-[100%] m-auto text-[#0c3b43] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
            <a
              href="https://github.com/lakshyamahawar14"
              target="_blank"
              className="ml-[40%] flex justify-center items-center my-[10px] sm:ml-[30%]"
            >
              <span className="flex justify-center items-center my-[10px]">
                <AiFillGithub size={30} color="#0c3b43" />{" "}
                <span className="px-[5px]">Github</span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshya-mahawar-099788209/"
              target="_blank"
              className="ml-[40%] flex justify-center items-center my-[10px] sm:ml-[30%]"
            >
              <span className="flex justify-center items-center my-[10px]">
                <AiFillLinkedin size={30} color="#0c3b43" />{" "}
                <span className="px-[5px]">LinkedIn</span>
              </span>
            </a>
            <a
              href="https://www.instagram.com/lakshyamahawar14/"
              target="_blank"
              className="ml-[40%] flex justify-center items-center my-[10px] sm:ml-[30%]"
            >
              <span className="flex justify-center items-center my-[10px]">
                <AiFillInstagram size={30} color="#0c3b43" />{" "}
                <span className="px-[5px]">Instagram</span>
              </span>
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
