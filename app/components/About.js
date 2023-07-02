import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="about relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw]">
        <div className="px-[3vw] flex flex-col justify-center items-start sm:items-center w-[80%] image-loaded">
          <Image
            src="/assets/images/joker_pfp.jpg"
            width={200}
            height={200}
            key={Math.random}
            className="relative w-[80%] h-[auto]"
            alt="Picture picture of Author"
            priority={true}
          />
          <p className="text-[1.2rem] py-[1.3rem] md:text-[1rem] sm:text-[0.8rem] md:py-[1rem] sm:py-[0.8rem]">
            Pic - Admin (Me)
          </p>
        </div>
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <p className="text-[2.5rem] text-[#9FEF00] text-start md:text-[2rem] sm:text-[1.5rem]">
            I&apos;m Lakshya Mahawar
          </p>
          <p className="text-[1.3rem] py-[2rem] md:text-[1.2rem] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
            I&apos;m <span className="text-[#fcfcfc]">20</span> Years Old. My
            hobby is playing video games and watching movies. My favourite movie
            is <span className="text-[#fcfcfc]">Interstellar</span> (but my
            character is more like <span className="text-[#fcfcfc]">Joker</span>{" "}
            from <span className="text-[#fcfcfc]">The Dark Knight</span>) and
            favourte game is{" "}
            <span className="text-[#fcfcfc]">Just Cause 3</span> (underrated,
            tho i&apos;ve played almost all major AAA games). And yeah, I study
            in <span className="text-[#fcfcfc]">IIT Roorkee</span> under B. Tech
            programme.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
