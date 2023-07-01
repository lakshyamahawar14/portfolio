"use client";
import Terminal from "./components/Terminal";
import Header from "./components/Header";
import { useRecoilState } from "recoil";
import { showHeaderAtom } from "./states/atoms";

const HomePage = () => {
  const [showHeader, setShowHeader] = useRecoilState(showHeaderAtom);

  return (
    <div>
      {showHeader && <Header />}
      <Terminal />
    </div>
  );
};

export default HomePage;
