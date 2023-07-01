"use client";
import About from "../components/About";
import Header from "../components/Header";
import { useRecoilState } from "recoil";
import { showHeaderAtom } from "../states/atoms";

const HomePage = () => {
  const [showHeader, setShowHeader] = useRecoilState(showHeaderAtom);

  return (
    <div>
      {showHeader && <Header />}
      <About />
    </div>
  );
};

export default HomePage;
