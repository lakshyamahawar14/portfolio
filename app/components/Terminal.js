import React, { useState, useEffect, useRef } from "react";

const Terminal = (props) => {
  const [terminalLabel, setTerminalLabel] = useState("visitor@lakshya:/");
  const [commands, setCommands] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isRootUser, setIsRootUser] = useState(false);
  const inputRef = useRef(null);

  const directoryMap = {
    "/": [{ name: "lakshya", protected: true }],
    "/lakshya/": [
      { name: "skills", protected: false },
      { name: "projects", protected: false },
      { name: "about", protected: false },
      { name: "contact", protected: true },
    ],
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputBlur = () => {
    inputRef.current.focus();
  };

  const handleScroll = () => {
    const terminalOverlay = document.getElementById("overlay");
    terminalOverlay?.scrollTo({
      top: terminalOverlay.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScroll();
  }, [commands]);

  const handleSubmit = (cmd) => {
    if (cmd === "ls") {
      const currentDirectory = getCurrentDirectory();
      const directories = directoryMap[currentDirectory] || [];

      let output = "";
      if (directories.length > 0) {
        output = directories.map((directory, index) => (
          <span
            key={index}
            style={{
              color: directory.protected && !isRootUser ? "#ca1111" : "#44da44",
            }}
          >
            {`${directory.name} `}
          </span>
        ));

        output = <>{output}</>;
      } else {
        output = "No directories found.";
      }

      const newCommand = {
        input: cmd,
        output: output,
        terminalLabel: terminalLabel,
      };

      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd === "pwd") {
      const newCommand = {
        input: cmd,
        output: getCurrentDirectory(),
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd === "help") {
      const newCommand = {
        input: cmd,
        output: "Available commands: ls, pwd, help, clear, cd, exit",
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd === "clear") {
      setCommands([]);
    } else if (cmd === "sudo") {
      setTerminalLabel("root@lakshya:/");
      setIsRootUser(true);
      const newCommand = {
        input: cmd,
        output: "Switched to root user",
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd === "exit") {
      setCommands([]);
      props.onExit();
    } else if (cmd.startsWith("cd")) {
      const directory = cmd.substring(3).trim();

      if (directory === "") {
        const newTerminalLabel = isRootUser
          ? "root@lakshya:/"
          : "visitor@lakshya:/";

        const newCommand = {
          input: cmd,
          output: "",
          terminalLabel: newTerminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
        setTerminalLabel(newTerminalLabel);
      } else {
        const currentDirectory = getCurrentDirectory();
        const directoryPermission =
          isRootUser || !isDirectoryProtected(currentDirectory);

        if (
          directoryPermission &&
          isDirectoryExists(directory, currentDirectory)
        ) {
          const newTerminalLabel = `${terminalLabel}${directory}/`;

          const newCommand = {
            input: cmd,
            output: "",
            terminalLabel: newTerminalLabel,
          };
          setCommands((prevCommands) => [...prevCommands, newCommand]);
          setTerminalLabel(newTerminalLabel);
        } else {
          const newCommand = {
            input: cmd,
            output:
              "Directory not found or you don't have permission to access this directory",
            terminalLabel: terminalLabel,
          };
          setCommands((prevCommands) => [...prevCommands, newCommand]);
        }
      }
    } else {
      const newCommand = {
        input: cmd,
        output: "Command not found",
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    }
  };

  const getCurrentDirectory = () => {
    const terminalLabels = terminalLabel.split(":");
    const directoryLabel = terminalLabels[terminalLabels.length - 1];
    return directoryLabel.trim() || "/";
  };

  const isDirectoryProtected = (directory) => {
    const currentDirectory = directoryMap[directory];
    return currentDirectory?.protected || false;
  };

  const isDirectoryExists = (directory, currentDirectory) => {
    const directories = directoryMap[currentDirectory] || [];
    return directories.some((dir) => dir.name === directory);
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
      <div className="terminal flex justify-center items-cetner relative w-[100vw] h-[100vh]">
        <div
          id="overlay"
          className="terminal-overlay relative rounded-xl m-auto h-[75vh] w-[75vw] overflow-y-scroll"
        >
          <div className="terminalheader flex items-center justify-end h-[5vh] w-[100%] sm:h-[5vh] sm:top-[5%] rounded-xl rounded-b-none m-[auto] bg-[#101010]">
            <div className="terminalOptions flex justify-between text-[#FFFFFF] bg-transparent px-[1vw] sm:px-[3vw]">
              <div className="rounded-full mx-[5px] h-[2vh] w-[2vh] bg-[#ffff70]"></div>
              <div className="rounded-full mx-[5px] h-[2vh] w-[2vh] bg-[#44da44]"></div>
              <div
                className="rounded-full mx-[5px] h-[2vh] w-[2vh] bg-[#ca1111] cursor-pointer"
                onClick={() => {
                  setCommands([]);
                  props.onExit();
                }}
              ></div>
            </div>
          </div>
          <div className="commandsContainer h-[auto] bg-transparent">
            {commands.map((command, index) => (
              <React.Fragment key={index}>
                <p className="command text-[#9FEF00] flex text-[1rem] px-[1rem] py-[1rem] w-[100%] m-auto bg-transparent">
                  {command.terminalLabel}{" "}
                  <span className="text-[1rem] px-[1vw] w-[100%] m-auto bg-transparent">
                    {command.input}
                  </span>
                </p>
                <p className="output text-[#FFFFFF] flex text-[1rem] px-[1rem] py-[1rem]  opacity-[0.8] w-[100%] m-auto bg-transparent">
                  {command.output}
                </p>
              </React.Fragment>
            ))}

            <p className="command text-[#9FEF00] flex text-[1rem] px-[1rem] py-[1rem] w-[100%] m-auto bg-transparent">
              {terminalLabel}{" "}
              <span className="text-[1rem] px-[1vw] w-[100%] m-auto bg-[transparent]">
                <input
                  type="text"
                  className="bg-transparent outline-none w-[100%] caret-[#9FEF00] text-[#FFFFFF]"
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
      </div>
    </>
  );
};

export default Terminal;
