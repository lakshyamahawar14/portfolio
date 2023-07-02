import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <section className="projects luxhealth relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw]">
        <div className="px-[3vw] flex flex-col justify-center items-start sm:items-center w-[80%] image-loaded">
          <Image
            src="/assets/images/chatbot_pfp.png"
            width={400}
            height={800}
            key={Math.random}
            className="relative w-[60%] h-[75%] sm:w-[90%] sm:h-[auto]"
            alt="A picture of Lux Chatbot"
            priority={true}
          />
          <p className="text-[1.2rem] py-[1.3rem] md:text-[1rem] sm:text-[0.8rem] md:py-[1rem] sm:py-[0.8rem]">
            A screenshot of Lux Chatbot
          </p>
        </div>
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <p className="text-[2.5rem] text-[#9FEF00] text-start md:text-[2rem] sm:text-[1.5rem]">
            LuxHealth
          </p>
          <p className="text-[1.3rem] py-[2rem] md:text-[1.2rem] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
            It&apos;s a chatbot integrated in a website specially designed to
            provide{" "}
            <span className="text-[#fcfcfc]">mental health support</span> to
            Individuals. This website is made with{" "}
            <span className="text-[#fcfcfc]">ReactJS</span>. User can give
            Cognitive assessment tests and get personalized support materials.
          </p>
        </div>
      </section>

      <section className="projects mazeai relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw]">
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <p className="text-[2.5rem] text-[#9FEF00] text-start md:text-[2rem] sm:text-[1.5rem]">
            MazeAI
          </p>
          <p className="text-[1.3rem] py-[2rem] md:text-[1.2rem] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
            It&apos;s a <span className="text-[#fcfcfc]">Maze</span> puzzle game
            project in which user can generate maze of any size and desired
            difficulty and play the game to solve that. Machine learning is also
            used in the project to determine the difficulty of the maze based on
            many parameters. The original project code is made in{" "}
            <span className="text-[#fcfcfc]">Python</span>, this is just a
            ReactJS implementation of that project.
          </p>
        </div>
        <div className="px-[3vw] flex flex-col justify-center items-end sm:items-center w-[80%] image-loaded">
          <Image
            src="/assets/images/maze_pfp.png"
            width={300}
            height={300}
            key={Math.random}
            className="relative w-[80%] h-[auto]"
            alt="A 15x15 Generated Maze"
            priority={true}
          />
          <p className="text-[1.2rem] py-[1.3rem] md:text-[1rem] sm:text-[0.8rem] md:py-[1rem] sm:py-[0.8rem]">
            A generated 15x15 maze
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
