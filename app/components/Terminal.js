import React, { useState, useEffect, useRef } from "react";

const Terminal = (props) => {
  const [showFadeIn, setShowFadeIn] = useState(true);
  const [terminalLabel, setTerminalLabel] = useState("visitor@lakshya:~$");
  const [commands, setCommands] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setShowFadeIn(false);
  }, []);

  const handleInputBlur = () => {
    inputRef.current.focus();
  };

  const handleSubmit = (cmd) => {
    if (cmd === "ls") {
      const newCommand = { input: cmd, output: "Listing files..." };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd === "pwd") {
      const newCommand = { input: cmd, output: "/home/visitor" };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd === "help") {
      const newCommand = {
        input: cmd,
        output: "Available commands: ls, pwd, help",
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd === "clear") {
      setCommands([]);
    } else if (cmd === "sudo") {
      setTerminalLabel("root@kali:~#");
      const newCommand = { input: cmd, output: "Switched to root user" };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd === "exit") {
      setCommands([]);
      props.onExit();
    } else {
      const newCommand = { input: cmd, output: "Command not found" };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      const newCommand = event.target.value;
      handleSubmit(newCommand);
      event.target.value = "";
      setCurrentCommand("");
    }
  };

  const handleInputChange = (event) => {
    setCurrentCommand(event.target.value);
  };

  return (
    <>
      <div
        className={`terminalContainer m-auto flex justify-center items-center absolute w-[100vw] h-[100vh] ${
          props.showTerminal ? "fade-in" : "fade-out"
        } ${showFadeIn ? "fade-in" : ""}`}
      >
        <div className="terminal bg-[#111111] rounded-xl h-[80%] w-[80%] sm:h-[90%] sm:w-[90%] overflow-y-scroll overflow-x-hidden">
          {commands.map((command, index) => (
            <React.Fragment key={index}>
              <p className="command text-[#9FEF00] flex text-[1rem] px-[2vw] sm:px-[6vw] md:px-[4vw] py-[3vh] w-[100%] m-auto bg-[transparent]">
                {terminalLabel}{" "}
                <span className="text-[1rem] px-[1vw] w-[100%] m-auto bg-[transparent]">
                  {command.input}
                </span>
              </p>
              <p className="output text-[#FFFFFF] flex text-[1rem] px-[2vw] sm:px-[6vw] md:px-[4vw] opacity-[0.5] w-[100%] m-auto bg-[transparent]">
                {command.output}
              </p>
            </React.Fragment>
          ))}
          <p className="command text-[#9FEF00] flex text-[1rem] px-[2vw] sm:px-[6vw] py-[3vh] md:px-[4vw] w-[100%] m-auto bg-[transparent]">
            {terminalLabel}{" "}
            <span className="text-[1rem] px-[1vw] w-[100%] m-auto bg-[transparent]">
              <input
                type="text"
                className="bg-transparent outline-none w-[100%] caret-[#9FEF00] text-[#FFFFFF] opacity-[0.8]"
                ref={inputRef}
                onBlur={handleInputBlur}
                onKeyDown={handleEnter}
                onChange={handleInputChange}
                spellCheck={false}
                value={currentCommand}
              ></input>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Terminal;
