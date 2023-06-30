"use client";
import { useEffect, useState } from "react";
import Greetings from "./components/Greetings";
import Terminal from "./components/Terminal";
import Bye from "./components/Bye";

const Home = () => {
  const [showGreetings, setShowGreetings] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showBye, setShowBye] = useState(false);

  useEffect(() => {
    if (!showGreetings) {
      const timer = setTimeout(() => {
        setShowTerminal(true);
      }, 600);
    }
  }, [showGreetings]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreetings(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showTerminal && !showGreetings) {
      const timer = setTimeout(() => {
        console.log("bye");
        setShowBye(true);
      }, 600);
    }
  }, [showTerminal]);

  return (
    <>
      <div id="homeapp">
        <Greetings showGreetings={showGreetings} />
        <Terminal
          showTerminal={showTerminal}
          onExit={() => {
            setShowTerminal(() => !showTerminal);
          }}
        />
        <Bye showBye={showBye} />
      </div>
    </>
  );
};

export default Home;
