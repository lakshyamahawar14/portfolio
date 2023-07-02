"use client";
import Projects from "../components/Projects";
import Header from "../components/Header";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { showHeaderAtom } from "../states/atoms";

const ProjectsPage = () => {
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
      <Projects />
    </div>
  );
};

export default ProjectsPage;
