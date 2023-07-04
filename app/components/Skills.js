import React from "react";

const Skills = () => {
  const frameworks = [
    {
      name: "ReactJS",
      description: "ReactJS for Frontend Development and Client Side Rendering",
    },
    {
      name: "NextJS",
      description: "NextJS for Frontend Development and Server Side Rendering",
    },
    {
      name: "Node",
      description: "Node for Backend Development with Javascript",
    },
    {
      name: "Machine Learning",
      description: "Regression and Neural Networks for NLP",
    },
    {
      name: "Django",
      description:
        "For both Backend and Frontend Development with inbuilt database system",
    },
    {
      name: "Docker",
      description: "For containerization of server side applications (APIs)",
    },
  ];
  const languages = [
    { name: "C++", description: "For Data Structures and Algorithms" },
    { name: "Python", description: "For Machine Learning" },
    { name: "Java", description: "For Object Oriented Programming" },
    { name: "Javascript/Typescript", description: "For Web development" },
    { name: "Shell", description: "For Linux/Ubuntu based systems" },
  ];
  const databases = [
    {
      name: "Firebase Realtime",
      description:
        "For realtime store and retrieval of data in chat based apps",
    },
    { name: "MongoDB Atlas", description: "For website's main data storage" },
    { name: "SQLite3", description: "For storing the data locally in server" },
  ];

  return (
    <>
      <section className="frameworks flex flex-col m-auto justify-center items-start py-[8vh] min-h-[100vh] h-[auto] w-[100vw] sm:flex-col px-[6vw] bg-[#e9c1de]">
        <div className="h-[15vh] py-[2rem] flex justify-center w-[100%]">
          <h1 className="rubik font-[800] text-[#5d1048] text-[2rem] sm:text-[1.2rem] tracking-wide w-[100%]">
            Frameworks and Domains
          </h1>
        </div>
        <div className="cardContainer h-auto flex">
          {frameworks.map((framework, index) => (
            <div
              className="card rounded bg-[#e8dde7] flex flex-col justify-between"
              key={index}
            >
              <h2 className="rubik font-[800] text-[#5d1048] text-center">
                {framework.name}
              </h2>
              <p className="plex font-[700] text-start text-[#2aabc8]">
                {framework.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="frameworks relative flex flex-col justify-center items-start py-[8vh] min-h-[100vh] h-[auto] w-[100vw] sm:flex-col px-[6vw] bg-[#eaffa0]">
        <div className="h-[15vh] py-[2rem] flex justify-center w-[100%]">
          <h1 className="rubik font-[800] text-[#5b710e] text-[2rem] sm:text-[1.2rem] tracking-wide w-[100%]">
            Programming Languages
          </h1>
        </div>
        <div className="cardContainer">
          {languages.map((language, index) => (
            <div
              className="card rounded bg-[#e2e8ca] flex flex-col justify-between"
              key={index}
            >
              <h2 className="rubik font-[800] text-[#5b710e] text-center">
                {language.name}
              </h2>
              <p className="plex font-[700] text-start text-[#51b52d]">
                {language.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="frameworks relative flex flex-col justify-center items-start py-[8vh] min-h-[100vh] h-[auto] w-[100vw] sm:flex-col px-[6vw] bg-[#cbadfc]">
        <div className="h-[15vh] py-[2rem] flex justify-center w-[100%]">
          <h1 className="rubik font-[800] text-[#2b1154] text-[2rem] sm:text-[1.2rem] tracking-wide w-[100%]">
            Programming Languages
          </h1>
        </div>
        <div className="cardContainer">
          {languages.map((language, index) => (
            <div
              className="card rounded bg-[#d7cddd] flex flex-col justify-between"
              key={index}
            >
              <h2 className="rubik font-[800] text-[#2b1154] text-center">
                {language.name}
              </h2>
              <p className="plex font-[700] text-start text-[#b040d6]">
                {language.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
