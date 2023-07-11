import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";

const About = () => {
  return (
    <>
      <section className="about pt-[8vh] relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#78dbbd]">
        <div className="px-[3vw] flex flex-col justify-center items-start sm:items-center w-[80%]">
          <Image
            src="/assets/images/heathjoker_pfp.jpg"
            width={256}
            height={256}
            key={Math.random}
            className="relative w-[70%] sm:w-[80%] h-[auto] rounded-xl"
            alt="Picture picture of Author"
            priority={true}
          />
          <p className="text-[1rem] pl-[10px] tracking-wide text-[#134c4d] pt-[1.3rem] md:text-[0.9rem] sm:text-[0.8rem] md:pt-[1rem] sm:py-[0.8rem]">
            Pic - Admin (Me)
          </p>
        </div>
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <h1 className="text-[2.5rem] text-[#134c4d] text-start md:text-[2rem] sm:text-[1.5rem]">
            I&apos;m{" "}
            <span className=" text-[#134c4d] tracking-wider">
              Lakshya Mahawar
            </span>
          </h1>
          <p className="text-[1.3rem] py-[2rem] md:text-[1.2rem] tracking-wide  text-[#134c4d] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
            I&apos;m <span className="text-[#63155b]">20</span> Years Old. My
            hobby is playing video games and watching movies. My favourite movie
            is{" "}
            <a
              href="https://www.imdb.com/title/tt0816692/"
              target="_blank"
              className="text-[#63155b] underline"
            >
              Interstellar
            </a>{" "}
            (but my character is more like{" "}
            <a
              href="https://batman.fandom.com/wiki/The_Joker_(Nolanverse)"
              target="_blank"
              className="text-[#63155b] underline"
            >
              Joker
            </a>{" "}
            from{" "}
            <a
              href="https://www.imdb.com/title/tt0468569/"
              target="_blank"
              className="text-[#63155b] underline"
            >
              The Dark Knight
            </a>
            ) and favourte game is{" "}
            <a
              href="https://store.steampowered.com/app/225540/Just_Cause_3/"
              target="_blank"
              className="text-[#63155b] underline"
            >
              Just Cause 3
            </a>{" "}
            (underrated, tho i&apos;ve played almost all major AAA games). And
            yeah, I study in{" "}
            <a
              href="https://en.wikipedia.org/wiki/IIT_Roorkee"
              target="_blank"
              className="text-[#63155b] underline"
            >
              IIT Roorkee
            </a>{" "}
            under B. Tech programme.
          </p>
        </div>
      </section>

      <section className="about py-[8vh] relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#96e5f3]">
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[80%] sm:max-w-[none] w-[100%]">
          <h2 className="text-[2.5rem] text-[#0c3b43] text-center md:text-[2rem] sm:text-[1.5rem] w-[100%]">
            Social Media & Other Links
          </h2>
          {/* <p className="text-[1.3rem] flex flex-col items-start justify-center py-[2rem] md:text-[1.2rem] tracking-wide w-[100%] m-auto text-[#0c3b43] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
            <a
              href="https://github.com/lakshyamahawar14"
              target="_blank"
              className="ml-[45%] flex justify-center items-center my-[10px] md:ml-[40%] sm:ml-[34%]"
            >
              <span className="flex justify-center items-center my-[10px]">
                <AiFillGithub size={25} color="#0c3b43" />{" "}
                <span className="px-[5px]">Github</span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshya-mahawar-099788209/"
              target="_blank"
              className="ml-[45%] flex justify-center items-center my-[10px] md:ml-[40%] sm:ml-[34%]"
            >
              <span className="flex justify-center items-center my-[10px]">
                <AiFillLinkedin size={25} color="#0c3b43" />{" "}
                <span className="px-[5px]">LinkedIn</span>
              </span>
            </a>
            <a
              href="https://www.instagram.com/lakshyamahawar14/"
              target="_blank"
              className="ml-[45%] flex justify-center items-center my-[10px] md:ml-[40%] sm:ml-[34%]"
            >
              <span className="flex justify-center items-center my-[10px]">
                <AiFillInstagram size={25} color="#0c3b43" />{" "}
                <span className="px-[5px]">Instagram</span>
              </span>
            </a>
            <a
              href="https://www.codechef.com/users/the_scammer"
              target="_blank"
              className="ml-[45%] flex justify-center items-center my-[10px] md:ml-[40%] sm:ml-[34%]"
            >
              <span className="flex justify-center items-center my-[10px]">
                <BiCodeAlt size={25} color="#0c3b43" />{" "}
                <span className="px-[5px]">CodeChef</span>
              </span>
            </a>
            <a
              href="https://leetcode.com/lakshyamahawar14/"
              target="_blank"
              className="ml-[45%] flex justify-center items-center my-[10px] md:ml-[40%] sm:ml-[34%]"
            >
              <span className="flex justify-center items-center my-[10px]">
                <BiCodeAlt size={25} color="#0c3b43" />{" "}
                <span className="px-[5px]">LeetCode</span>
              </span>
            </a>
          </p> */}
          <div className="w-[100%]">
            <p className="max-w-[250px] m-auto flex items-center justify-between">
              <a
                href="https://github.com/lakshyamahawar14"
                target="_blank"
                className="flex justify-center items-center my-[10px]"
              >
                <span className="flex justify-center items-center my-[10px]">
                  <AiFillGithub size={25} color="#0c3b43" />{" "}
                  <span className="px-[5px]">Github</span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/lakshya-mahawar-099788209/"
                target="_blank"
                className="flex justify-center items-center my-[10px]"
              >
                <span className="flex justify-center items-center my-[10px]">
                  <AiFillLinkedin size={25} color="#0c3b43" />{" "}
                  <span className="px-[5px]">LinkedIn</span>
                </span>
              </a>
            </p>

            <p className="max-w-[250px] m-auto flex items-center justify-between">
              <a
                href="https://www.instagram.com/lakshyamahawar14/"
                target="_blank"
                className="flex justify-center items-center my-[10px]"
              >
                <span className="flex justify-center items-center my-[10px]">
                  <AiFillInstagram size={25} color="#0c3b43" />{" "}
                  <span className="px-[5px]">Instagram</span>
                </span>
              </a>
              <a
                href="https://www.codechef.com/users/the_scammer"
                target="_blank"
                className="flex justify-center items-center my-[10px]"
              >
                <span className="flex justify-center items-center my-[10px]">
                  <BiCodeAlt size={25} color="#0c3b43" />{" "}
                  <span className="px-[5px]">CodeChef</span>
                </span>
              </a>
            </p>

            <p className="max-w-[250px] m-auto flex items-center justify-between">
              <a
                href="https://leetcode.com/lakshyamahawar14/"
                target="_blank"
                className="flex justify-center items-center my-[10px]"
              >
                <span className="flex justify-center items-center my-[10px]">
                  <BiCodeAlt size={25} color="#0c3b43" />{" "}
                  <span className="px-[5px]">LeetCode</span>
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
