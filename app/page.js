"use client";
import { useState } from "react";
import Terminal from "./components/Terminal";
import Header from "./components/Header";

const Home = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      <div>
        {showHeader && <Header />}
        <Terminal
          showTerminal={showTerminal}
          onExit={() => {
            setShowTerminal(() => !showTerminal);
          }}
          showHeader={() => setShowHeader(true)}
        />
      </div>
    </>
  );
};

export default Home;
