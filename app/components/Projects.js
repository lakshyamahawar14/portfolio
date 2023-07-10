import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <section className="projects pt-[8vh] luxhealth relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#5dc6ea]">
        <div className="px-[3vw] flex flex-col justify-center items-start sm:items-center w-[80%]">
          <Image
            src="/assets/images/chatbot_pfp.png"
            width={400}
            height={800}
            key={Math.random}
            className="relative w-[60%] h-[70%] sm:w-[90%] sm:h-[auto] rounded-xl"
            alt="A picture of Lux Chatbot"
            priority={true}
          />
          <p className="text-[1rem] pl-[10px]  text-[#111649] pt-[1.3rem] md:text-[0.9rem] sm:text-[0.8rem] md:pt-[1rem] sm:py-[0.8rem]">
            A screenshot of Lux Chatbot
          </p>
        </div>
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <p className="text-[2.5rem] text-[#111649] tracking-wider text-start md:text-[2rem] sm:text-[1.5rem] ">
            LuxHealth
          </p>
          <p className="text-[1.3rem] py-[2rem]  md:text-[1.2rem] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem] text-[#111649]">
            It&apos;s a chatbot integrated in a website specially designed to
            provide{" "}
            <span className="text-[#19633c]">mental health support</span> to
            Individuals. This website is made with{" "}
            <span className="text-[#19633c]">ReactJS</span>. User can give
            Cognitive assessment tests and get personalized support materials.
            <br />
            Access the website{" "}
            <a
              href="http://healthgpt.surge.sh/"
              target="_blank"
              className="underline text-[#19633c]"
            >
              here
            </a>
            .
          </p>
        </div>
      </section>

      <section className="projects mazeai relative flex justify-center items-center py-[8vh] h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#76eb84]">
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <p className="text-[2.5rem] text-[#125413] tracking-wider text-start md:text-[2rem] sm:text-[1.5rem] ">
            MazeAI
          </p>
          <p className="text-[1.3rem] py-[2rem]  md:text-[1.2rem] text-[#125413] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
            It&apos;s a <span className="text-[#100f48]">Maze</span> puzzle game
            project in which user can generate maze of any size and desired
            difficulty and play the game to solve that. Machine learning is also
            used in the project to determine the difficulty of the maze based on
            many parameters. The original project code is made in{" "}
            <span className="text-[#100f48]">Python</span>, this is just a
            <span className="text-[#100f48]"> ReactJS</span> implementation of
            that project.
            <br />
            Access the website{" "}
            <a
              href="https://maze-ai.netlify.app/"
              target="_blank"
              className="underline text-[#100f48]"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="px-[3vw] flex flex-col justify-center items-end sm:items-center w-[80%]">
          <Image
            src="/assets/images/maze15_pfp.png"
            width={300}
            height={300}
            key={Math.random}
            className="relative w-[70%] sm:w-[80%] h-[auto] rounded-xl"
            alt="A 15x15 Generated Maze"
            priority={true}
          />
          <p className="text-[1rem] pr-[10px]  text-[#125413] pt-[1.3rem] md:text-[0.9rem] sm:text-[0.8rem] md:pt-[1rem] sm:py-[0.8rem]">
            A generated 15x15 maze
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
