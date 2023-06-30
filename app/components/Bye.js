import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicVisitorTextLoader = dynamic(() => import("./Visitor"), {
  ssr: false,
});

const Bye = (props) => {
  const [showFadeIn, setShowFadeIn] = useState(true);

  useEffect(() => {
    setShowFadeIn(false);
  }, []);

  return (
    <div
      className={`byeContainer m-auto flex justify-center absolute items-center w-[100vw] h-[100vh] ${
        props.showBye ? "fade-in" : "fade-out"
      } ${showFadeIn ? "fade-in" : ""}`}
    >
      <div className="bye text-[2.5rem] md:text-[2rem] sm:text-[1.5rem] w-[80%] flex flex-col justify-center items-center">
        {props.showBye && (
          <>
            <div className="flex flex-col justify-center items-center">
              <p className="welcome flex justify-between w-[100%] text-center">
                Bye Bye!
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="welcome flex justify-between w-[100%] m-auto text-center">
                <DynamicVisitorTextLoader text={"Haave A Nice Day!"} />
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Bye;
