"use client";
import { useState } from "react";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home = () => {
  const [showTerminal, setShowTerminal] = useState(true);

  return (
    <>
      <Header />
      <div id="homeapp">
        <Terminal
          showTerminal={showTerminal}
          onExit={() => {
            setShowTerminal(() => !showTerminal);
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
