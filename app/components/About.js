import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="about pt-[8vh] relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#78dbbd]">
        <div className="px-[3vw] flex flex-col justify-center items-start sm:items-center w-[80%]">
          <Image
            src="/assets/images/joker_dp.jpg"
            width={300}
            height={300}
            key={Math.random}
            className="relative w-[60%] sm:w-[80%] h-[auto] rounded-xl"
            alt="Picture picture of Author"
            priority={true}
          />
          <p className="text-[1rem] tracking-wide ubuntu text-[#134c4d] font-[700] pt-[1.3rem] md:text-[0.9rem] sm:text-[0.8rem] md:pt-[1rem] sm:py-[0.8rem]">
            Pic - Admin (Me)
          </p>
        </div>
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <p className="text-[2.5rem] text-[#134c4d] font-[600] rubik text-start md:text-[2rem] sm:text-[1.5rem]">
            I&apos;m{" "}
            <span className="font-[800] text-[#134c4d] rubik tracking-wider">
              Lakshya Mahawar
            </span>
          </p>
          <p className="text-[1.3rem] py-[2rem] md:text-[1.2rem] plex tracking-wide font-[700] text-[#134c4d] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
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
    </>
  );
};

export default About;
