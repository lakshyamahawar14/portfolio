import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <section className="projects pt-[8vh] luxhealth relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#5dc6ea]">
        <div className="px-[3vw] flex flex-col justify-center items-start sm:items-center w-[80%]">
          <Image
            src="/assets/images/chatbot_pfp.png"
            width={300}
            height={600}
            key={Math.random}
            className="relative h-[100%] w-[auto] rounded-xl"
            alt="A picture of Lux Chatbot"
            priority={true}
          />
        </div>
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <h1 className="text-[2.5rem] text-[#111649] tracking-wider text-start md:text-[2rem] sm:text-[1.5rem] ">
            LuxHealth
          </h1>
          <p className="text-[1.3rem] py-[2rem]  md:text-[1.2rem] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem] text-[#111649]">
            It&apos;s a chatbot integrated in a website specially designed to
            provide mental health support to Individuals. This website is made
            with ReactJS framework. Users can give{" "}
            <a
              href="https://my.clevelandclinic.org/health/articles/22306-cognitive-test"
              target="_blank"
              className="text-[#144b2d] underline"
            >
              cognitive assessment tests
            </a>{" "}
            and get personalized support materials.
            <br />
            Access the website{" "}
            <a
              href="http://healthgpt.surge.sh/"
              target="_blank"
              className="underline text-[#144b2d]"
            >
              here
            </a>
            .
          </p>
        </div>
      </section>

      <section className="projects mazeai relative flex justify-center items-center py-[8vh] h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#76eb84]">
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <h2 className="text-[2.5rem] text-[#125413] tracking-wider text-start md:text-[2rem] sm:text-[1.5rem] ">
            MazeAI
          </h2>
          <p className="text-[1.3rem] py-[2rem]  md:text-[1.2rem] text-[#125413] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem]">
            It&apos;s a <span className="text-[#100f48]">Maze</span> puzzle game
            project in which user can generate maze of any size and desired
            difficulty and play the game to solve that. Machine learning is also
            used in the project to determine the{" "}
            <a
              href="https://puzzling.stackexchange.com/questions/5919/whats-the-best-way-to-rate-how-difficult-a-maze-is"
              target="_blank"
              className="underline text-[#100f48]"
            >
              difficulty of the maze
            </a>{" "}
            based on many metrics. The original project code is written in{" "}
            Python, this is just a ReactJS implementation of that project.
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
            className="relative h-[100%] w-[auto] rounded-xl"
            alt="A 15x15 Generated Maze"
            priority={true}
          />
        </div>
      </section>

      <section className="projects pt-[8vh] luxhealth relative flex justify-center items-center h-[100vh] w-[100vw] sm:flex-col px-[6vw] bg-[#f3b17b]">
        <div className="px-[3vw] flex flex-col justify-center items-start sm:items-center w-[80%]">
          <Image
            src="/assets/images/visualreact_pfp.png"
            width={600}
            height={300}
            key={Math.random}
            className="relative h-[100%] w-[auto] rounded-xl"
            alt="A screenshot of Visual React website"
            priority={true}
          />
        </div>
        <div className="px-[3vw] flex justify-center items-start flex-col sm:items-center max-w-[50%] sm:max-w-[none]">
          <h2 className="text-[2.5rem] text-[#583112] tracking-wider text-start md:text-[2rem] sm:text-[1.5rem] ">
            Visual React
          </h2>
          <p className="text-[1.3rem] py-[2rem]  md:text-[1.2rem] sm:text-[1rem] md:py-[1.7rem] sm:py-[1.3rem] text-[#583112]">
            It&apos;s a website made in{" "}
            <a
              href="https://svelte.dev/"
              target="_blank"
              className="underline text-[#ad4040]"
            >
              Svelte
            </a>{" "}
            framework. This website simplifies the process of making a React
            website by allowing people to generate the react code by joining
            cards to achieve the functionality. This feature is similar to{" "}
            <a
              href="https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/GettingStarted/"
              target="_blank"
              className="underline text-[#ad4040]"
            >
              Blueprints
            </a>{" "}
            in Unreal Engine.
            <br />
            Access the website{" "}
            <a
              href="https://visual-react.vercel.app/"
              target="_blank"
              className="underline text-[#ad4040]"
            >
              here
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
