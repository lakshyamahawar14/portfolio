import React, { useState, useEffect, useRef } from "react";

const Terminal = (props) => {
  const baseVisitorUserLabel = "visitor@lakshya:";
  const baseRootUserLabel = "root@lakshya:";
  const [terminalLabel, setTerminalLabel] = useState(
    `${baseVisitorUserLabel}/`
  );
  const [commands, setCommands] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isRootUser, setIsRootUser] = useState(false);
  const inputRef = useRef(null);

  const directoryMap = {
    "/": [
      { name: "lakshya", type: "directory", protected: true },
      { name: "go_for_gui", type: "directory", protected: false },
    ],
    "/lakshya/": [
      { name: "skills", type: "directory", protected: false },
      { name: "projects", type: "directory", protected: false },
      { name: "about", type: "directory", protected: false },
      { name: "contact", type: "directory", protected: true },
    ],
    "/go_for_gui/": [
      { name: "enable_header.sh", type: "file", protected: false },
    ],
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputBlur = () => {
    inputRef.current.focus();
  };

  const handleScroll = () => {
    const commandsContainer = document.querySelector(".commandsContainer");
    const lastCommand = commandsContainer.lastElementChild;
    lastCommand.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    handleScroll();
  }, [commands, inputRef.current?.value]);

  const handleSubmit = (cmd) => {
    if (cmd === "ls") {
      const currentDirectory = getCurrentDirectory();

      const directories = directoryMap[currentDirectory] || [];

      let outputs = [];
      if (directories.length > 0) {
        directories.map((directory, index) => {
          outputs.push(directory);
        });
      } else {
        outputs.push({ error: "No directories found." });
      }

      let result = "";

      result = outputs.map((directory, index) => {
        if (directory.error) {
          return (
            <span
              key={index}
              className="pr-[10px]"
              style={{
                color: "#FFFFFF",
              }}
            >
              {directory.error}
            </span>
          );
        } else {
          return (
            <span
              key={index}
              className="pr-[10px]"
              style={{
                color:
                  directory.protected && !isRootUser ? "#ca1111" : "#44da44",
              }}
            >
              {directory.name}
            </span>
          );
        }
      });

      const newCommand = {
        input: cmd,
        output: result,
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
      const cwd = getCurrentDirectory();
      if (!isRootUser) {
        setIsRootUser(true);
        setTerminalLabel(`${baseRootUserLabel}${cwd}`);
        const newCommand = {
          input: cmd,
          output: "You are now logged in as root.",
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
      } else {
        const newCommand = {
          input: cmd,
          output: "You are already logged in as root.",
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
      }
    } else if (cmd === "exit") {
      setCommands([]);
      props.onExit();
    } else if (cmd.startsWith("cd")) {
      if (cmd.length >= 3 && cmd[2] != " ") {
        const newCommand = {
          input: cmd,
          output: "Command not found",
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
        return;
      }
      if (cmd === "cd") {
        cmd = "cd ";
      }
      const directory = cmd.substring(3).trim();

      if (directory === "") {
        const newTerminalLabel = isRootUser
          ? `${baseRootUserLabel}/`
          : `${baseVisitorUserLabel}/`;

        const newCommand = {
          input: cmd,
          output: "",
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
        setTerminalLabel(newTerminalLabel);
      } else if (directory === ".") {
        const newCommand = {
          input: cmd,
          output: "",
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
      } else if (directory === "..") {
        const currentDirectory = getCurrentDirectory();
        let parentDirectory = getParentDirectory(currentDirectory);
        const newTerminalLabel = isRootUser
          ? `${baseRootUserLabel}${parentDirectory}`
          : `${baseVisitorUserLabel}${parentDirectory}`;
        const newCommand = {
          input: cmd,
          output: "",
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
        setTerminalLabel(newTerminalLabel);
      } else if (directory === "/") {
        const newTerminalLabel = isRootUser
          ? `${baseRootUserLabel}/`
          : `${baseVisitorUserLabel}/`;
        const newCommand = {
          input: cmd,
          output: "",
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
        setTerminalLabel(newTerminalLabel);
      } else {
        const currentDirectory = getCurrentDirectory();
        const directoryPermission =
          isRootUser || !isDirectoryProtected(directory);

        if (
          directoryPermission &&
          isDirectoryExists(directory, currentDirectory)
        ) {
          const newTerminalLabel = `${terminalLabel}${directory}/`;

          const newCommand = {
            input: cmd,
            output: "",
            terminalLabel: terminalLabel,
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
    const currentDirectory = getCurrentDirectory();
    const currentDirectoryMap = directoryMap[currentDirectory];
    let isprotected = false;
    currentDirectoryMap.forEach((dir) => {
      if (dir.name === directory) {
        isprotected = dir.protected;
        return;
      }
    });
    return isprotected;
  };

  const getParentDirectory = (directory) => {
    const lastSlashIndex = directory.lastIndexOf("/");
    const secondLastSlashIndex = directory.lastIndexOf("/", lastSlashIndex - 1);

    if (directory === "/" || directory === "") {
      return "/";
    }

    const parentDirectory = directory.slice(0, secondLastSlashIndex + 1);
    return parentDirectory;
  };

  const isRootDirectory = (directory) => {
    return directory === "/";
  };

  const isDirectoryExists = (directory, currentDirectory) => {
    const directories = directoryMap[currentDirectory] || [];
    return directories.some(
      (dir) => dir.type === "directory" && dir.name === directory
    );
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
      <div className="terminalContainer relative flex h-[auto] w-[auto] m-auto justify-center items-center">
        <div className="terminal flex justify-center items-cetner relative w-[100vw] h-[100vh]">
          <div className="terminal-overlay relative rounded-xl m-auto h-[85%] sm:h-[75%] sm:w-[90%] w-[75%] overflow-y-scroll">
            <div className="terminalheader fixed w-[inherit] flex items-center justify-end h-[5vh] sm:h-[5vh] rounded-xl rounded-b-none m-[auto] bg-[#101010]">
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
            <div className="commandsContainer h-[auto] bg-transparent pt-[5vh]">
              {commands.map((command, index) => (
                <React.Fragment key={index}>
                  <p className="command text-[#9FEF00] flex text-[1rem] px-[1rem] py-[1rem] w-[100%] m-auto bg-transparent sm:text-[0.8rem]">
                    {command.terminalLabel}{" "}
                    <span className="text-[1rem] px-[1vw] w-[100%] m-auto bg-transparent sm:text-[0.8rem]">
                      {command.input}
                    </span>
                  </p>
                  <p className="output text-[#FFFFFF] flex text-[1rem] px-[1rem] oppacity-[0.8] w-[100%] m-auto bg-transparent sm:text-[0.8rem]">
                    {command.output}
                  </p>
                </React.Fragment>
              ))}
              <p className="command text-[#9FEF00] flex text-[1rem] px-[1rem] py-[1rem] w-[100%] m-auto bg-transparent sm:text-[0.8rem]">
                {terminalLabel}{" "}
                <span className="text-[1rem] px-[1vw] w-[100%] m-auto bg-[transparent] sm:text-[0.8rem]">
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
      </div>
    </>
  );
};

export default Terminal;
