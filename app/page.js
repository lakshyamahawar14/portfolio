"use client";
import Terminal from "./components/Terminal";
import Header from "./components/Header";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { showHeaderAtom } from "./states/atoms";

const HomePage = () => {
  const [showHeader, setShowHeader] = useRecoilState(showHeaderAtom);

  useEffect(() => {
    if (!showHeader) {
      if (typeof window !== "undefined") {
        const headerStatus = localStorage.getItem("ShowHeader") === "true";
        if (headerStatus) {
          setShowHeader(true);
        }
      }
    }
  }, []);

  return (
    <div>
      {showHeader && <Header />}
      <Terminal />
    </div>
  );
};

export default HomePage;
