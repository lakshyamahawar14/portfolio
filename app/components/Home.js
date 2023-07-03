import React from "react";

const Home = () => {
  return (
    <section className="fakehome flex justify-center items-cetner pt-[8vh] relative w-[100vw] h-[100vh] bg-[#f2dfc9]">
      <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
        <p className="text-[2.5rem] text-[#482c0c] font-[600] rubik text-start md:text-[2rem] sm:text-[1.5rem]">
          I&apos;m{" "}
          <span className="font-[800] text-[#482c0c] rubik tracking-wider">
            Lakshya Mahawar
          </span>
        </p>
        <p className="text-[1.3rem] py-[2rem] md:text-[1.2rem] plex tracking-wide font-[700] text-[#482c0c] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
          I&apos;m <span className="text-[#63155b]">20</span> Years Old. My
          hobby is playing video games and watching movies. My favourite movie
          is <span className="text-[#63155b]">Interstellar</span> (but my
          character is more like <span className="text-[#63155b]">Joker</span>{" "}
          from <span className="text-[#63155b]">The Dark Knight</span>) and
          favourte game is <span className="text-[#63155b]">Just Cause 3</span>{" "}
          (underrated, tho i&apos;ve played almost all major AAA games). And
          yeah, I study in <span className="text-[#63155b]">IIT Roorkee</span>{" "}
          under B. Tech programme.
        </p>
      </div>
    </section>
  );
};

export default Home;
