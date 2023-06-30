"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicVisitorTextLoader = dynamic(() => import("./Visitor"), {
  ssr: false,
});

const Greetings = (props) => {
  const [showFadeIn, setShowFadeIn] = useState(true);

  useEffect(() => {
    setShowFadeIn(false);
  }, []);

  return (
    <div
      className={`greetingsContainer m-auto flex justify-center absolute items-center w-[100vw] h-[100vh] ${
        props.showGreetings ? "fade-in" : "fade-out"
      } ${showFadeIn ? "fade-in" : ""}`}
    >
      <div className="greetings text-[2.5rem] md:text-[2rem] sm:text-[1.5rem] w-[80%] flex flex-col justify-center items-center">
        {props.showGreetings && (
          <>
            <div className="flex flex-col justify-center items-center">
              <p className="welcome flex justify-between w-[100%] m-auto text-center">
                <DynamicVisitorTextLoader text={"Weelcome Visitor!"} />
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="count flex justify-between w-[100%] m-auto text-center">
                You are <span className="text-[#FFFFFF] ml-[1vw]">734</span>th
                visitor
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Greetings;
