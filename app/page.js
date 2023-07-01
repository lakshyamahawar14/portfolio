"use client";
import { useState } from "react";
import Terminal from "./components/Terminal";
import Header from "./components/Header";

const Home = () => {
  const [showTerminal, setShowTerminal] = useState(true);

  return (
    <>
      <div>
        {/* <Header /> */}
        <Terminal
          showTerminal={showTerminal}
          onExit={() => {
            setShowTerminal(() => !showTerminal);
          }}
        />
      </div>
    </>
  );
};

export default Home;
