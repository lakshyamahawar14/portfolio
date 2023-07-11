import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";

const About = () => {
  return (
    <>
      <section className="pt-[8vh] relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#78dbbd]">
        <div className="px-[3vw] flex flex-col justify-center items-start sm:items-center w-[80%]">
          <Image
            src="/assets/images/heathjoker_pfp.jpg"
            width={300}
            height={300}
            key={Math.random}
            className="relative h-[100%] w-[auto] rounded-xl"
            alt="Picture picture of Lakshya Mahawar"
            priority={true}
          />
          <p className="text-[1rem] pl-[10px] tracking-wide text-[#134c4d] pt-[1.3rem] md:text-[0.9rem] sm:text-[0.8rem] md:pt-[1rem] sm:py-[0.8rem]">
            Profile picture of Lakshya Mahawar
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
            I&apos;m 20 Years Old. I live in Rajasthan, India. My hobby is
            playing video games and watching movies. My favourite movie is{" "}
            <a
              href="https://www.imdb.com/title/tt0816692/"
              target="_blank"
              className="text-[#63155b] underline"
            >
              Interstellar
            </a>{" "}
            . My favourite movie character is{" "}
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
            . My favourite game is{" "}
            <a
              href="https://store.steampowered.com/app/225540/Just_Cause_3/"
              target="_blank"
              className="text-[#63155b] underline"
            >
              Just Cause 3
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-[8vh] relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#92b0e8]">
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <h1 className="text-[2.5rem] text-[#0c1c3b] text-start md:text-[2rem] sm:text-[1.5rem]">
            I study in{" "}
            <span className=" text-[#0c1c3b] tracking-wider">IIT Roorkee</span>
          </h1>
          <p className="text-[1.3rem] py-[2rem] md:text-[1.2rem] tracking-wide  text-[#0c1c3b] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
            I am currently in final year of my Bachelor degree. I&apos;m
            persuing engineering in field of Electronics and Communication
            Engineering from one of the India&apos;s oldest and one of the most
            prestiguous college,{" "}
            <a
              href="https://en.wikipedia.org/wiki/IIT_Roorkee"
              target="_blank"
              className="text-[#41280e] underline"
            >
              IIT Roorkee
            </a>
            .
          </p>
        </div>
        <div className="px-[3vw] flex flex-col justify-center items-end sm:items-center w-[80%]">
          <Image
            src="/assets/images/iitr_bg-min.jpg"
            width={300}
            height={300}
            key={Math.random}
            className="relative h-[100%] w-[auto] rounded-xl"
            alt="Picture IIT Roorkee"
            priority={true}
          />
          <p className="text-[1rem] pr-[10px] tracking-wide text-[#134c4d] pt-[1.3rem] md:text-[0.9rem] sm:text-[0.8rem] md:pt-[1rem] sm:py-[0.8rem]">
            Picture IIT Roorkee
          </p>
        </div>
      </section>

      <section className="about py-[8vh] relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#96e5f3]">
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[80%] sm:max-w-[none] w-[100%]">
          <h2 className="text-[2.5rem] text-[#0c3b43] text-center md:text-[2rem] sm:text-[1.5rem] w-[100%]">
            Social Media & Other Links
          </h2>
          <div className="w-[100%]">
            <p className="max-w-[250px] m-auto flex items-center justify-between">
              <a
                href="https://github.com/lakshyamahawar14"
                target="_blank"
                className="flex justify-center items-center my-[10px]"
              >
                <span className="flex justify-center items-center my-[10px] sm:text-[0.8rem]">
                  <AiFillGithub size={25} color="#0c3b43" />{" "}
                  <span className="px-[5px]">Github</span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/lakshya-mahawar-099788209/"
                target="_blank"
                className="flex justify-center items-center my-[10px]"
              >
                <span className="flex justify-center items-center my-[10px] sm:text-[0.8rem]">
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
                <span className="flex justify-center items-center my-[10px] sm:text-[0.8rem]">
                  <AiFillInstagram size={25} color="#0c3b43" />{" "}
                  <span className="px-[5px]">Instagram</span>
                </span>
              </a>
              <a
                href="https://www.codechef.com/users/the_scammer"
                target="_blank"
                className="flex justify-center items-center my-[10px]"
              >
                <span className="flex justify-center items-center my-[10px] sm:text-[0.8rem]">
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
                <span className="flex justify-center items-center my-[10px] sm:text-[0.8rem]">
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
