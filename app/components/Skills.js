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
    { name: "Shell", description: "For Linux based systems" },
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
      <section className="relative flex flex-col justify-center items-center py-[8vh] min-h-[100vh] h-[auto] w-[auto] max-w-[100vw] sm:flex-col bg-[#e9c1de]">
        <div className="py-[2rem] flex justify-center w-[100%] px-[6vw]">
          <h1 className=" text-[#5d1048] text-[2rem] sm:text-[1.2rem] tracking-wide w-[100%]">
            Frameworks and Domains
          </h1>
        </div>
        <div className="cardContainer flex flex-wrap px-[6vw] w-[100%]">
          {frameworks.map((framework, index) => (
            <div
              className="card rounded bg-[#ffffff] flex flex-col justify-between "
              key={index}
            >
              <h2 className="  text-[#5d1048] text-center">{framework.name}</h2>
              <p className="  text-start text-[#2aabc8]">
                {framework.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center py-[8vh] min-h-[100vh] h-[auto] w-[auto] max-w-[100vw] sm:flex-col bg-[#eaffa0]">
        <div className="py-[2rem] flex justify-center w-[100%] px-[6vw]">
          <h1 className="  text-[#5d1048] text-[2rem] sm:text-[1.2rem] tracking-wide w-[100%]">
            Programming Languages
          </h1>
        </div>
        <div className="cardContainer flex flex-wrap px-[6vw] w-[100%]">
          {languages.map((language, index) => (
            <div
              className="card rounded bg-[#ffffff] flex flex-col justify-between "
              key={index}
            >
              <h2 className="  text-[#5d1048] text-center">{language.name}</h2>
              <p className="  text-start text-[#51b52d]">
                {language.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center py-[8vh] min-h-[100vh] h-[auto] w-[auto] max-w-[100vw] sm:flex-col bg-[#cbadfc]">
        <div className="py-[2rem] flex justify-center w-[100%] px-[6vw]">
          <h1 className="  text-[#5d1048] text-[2rem] sm:text-[1.2rem] tracking-wide w-[100%]">
            Databases
          </h1>
        </div>
        <div className="cardContainer flex flex-wrap px-[6vw] w-[100%]">
          {databases.map((database, index) => (
            <div
              className="card rounded bg-[#ffffff] flex flex-col justify-between "
              key={index}
            >
              <h2 className="  text-[#5d1048] text-center">{database.name}</h2>
              <p className="  text-start text-[#b040d6]">
                {database.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
