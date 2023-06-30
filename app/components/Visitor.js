import { useState, useEffect } from "react";

const Visitor = (props) => {
  const [visitorText, setVisitorText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [blinkCursor, setBlinkCursor] = useState(false);
  const text = props.text;

  useEffect(() => {
    if (!blinkCursor) {
      return () => {};
    }
    const timer = setTimeout(() => {
      setShowCursor(() => !showCursor);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, [blinkCursor, showCursor]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setVisitorText((prevText) => prevText + text[currentIndex]);

      currentIndex++;
      if (currentIndex === text.length - 1) {
        clearInterval(interval);
        setBlinkCursor(true);
      }
    }, 125);
  }, []);

  return (
    <>
      <span className="bg-transparent w-[100%] text-[#FFFFFF] ml-[1vw] min-w-[80vw] m-auto cursor-writing underline decoration-[#A4B1CD]">
        {visitorText}
        <span className="text-[#9FEF00] no-underline">{showCursor && "|"}</span>
      </span>
    </>
  );
};

export default Visitor;
