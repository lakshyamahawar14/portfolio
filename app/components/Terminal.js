"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { routes } from "../states/paths";

const Terminal = () => {
  const baseVisitorUserLabel = "visitor@lakshya:";
  const baseRootUserLabel = "root@lakshya:";
  const [terminalLabel, setTerminalLabel] = useState("visitor@lakshya:/");
  const [commands, setCommands] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isRootUser, setIsRootUser] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const revokeTerminal = useRef(false);
  const inputRef = useRef(null);

  const noFileOrDirectory = "No such file or directory";
  const noDirectory = "";
  const noCommand = "<command>: command not found";
  const noPermission = "permission denied";
  const switchedToRoot = "";
  const unsupportedFile = "unsupported file";
  const invalidCode = "invalid argument";
  const availableCommands =
    "Available commands: ls, sudo, pwd, help, clear, cd, exit";

  const directoryMap = {
    "/": [
      {
        name: "cli",
        type: "directory",
        protected: true,
        protection_type: "privilage",
      },
      {
        name: "gui",
        type: "directory",
        protected: false,
        protection_type: "none",
      },
    ],
    "/cli/": [
      {
        name: "skills",
        type: "directory",
        protected: false,
        protection_type: "none",
      },
      {
        name: "projects",
        type: "directory",
        protected: false,
        protection_type: "none",
      },
      {
        name: "about",
        type: "directory",
        protected: false,
        protection_type: "none",
      },
      {
        name: "contact",
        type: "directory",
        protected: false,
        protection_type: "none",
      },
    ],
    "/gui/": [
      {
        name: "enable_gui.sh",
        type: "file",
        protected: false,
        protection_type: "none",
      },
    ],
    "/cli/about/": [
      {
        name: "profile_pic.jpg",
        type: "file",
        protected: true,
        protection_type: "access",
      },
      {
        name: "hint_1.txt",
        type: "file",
        protected: false,
        protection_type: "none",
      },
      {
        name: "favourites",
        type: "directory",
        protected: false,
        protection_type: "none",
      },
      {
        name: "hobbies",
        type: "directory",
        protected: false,
        protection_type: "none",
      },
    ],
    "/cli/about/favourites/": [
      {
        name: "game.jc3",
        type: "file",
        protected: true,
        protection_type: "codeword",
      },
      {
        name: "movie.ilr",
        type: "file",
        protected: true,
        protection_type: "codeword",
      },
      {
        name: "character.jkr",
        type: "file",
        protected: true,
        protection_type: "codeword",
      },
      {
        name: "hint_2.txt",
        type: "file",
        protected: false,
        protection_type: "none",
      },
    ],
    "/cli/about/hobbies/": [
      {
        name: "hobbies.py",
        type: "file",
        protected: true,
        protection_type: "access",
      },
    ],
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputBlur = () => {
    inputRef.current.focus();
  };

  const handleScroll = () => {
    setTimeout(() => {
      const commandsContainer = document.querySelector(".commandsContainer");
      if (commandsContainer) {
        const lastCommand = commandsContainer.lastElementChild;
        lastCommand.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }, 100);
  };

  const destroyTerminal = (time) => {
    if (inputRef.current.disabled !== undefined) {
      inputRef.current.disabled = true;
    }

    setTimeout(() => {
      if (revokeTerminal.current && commands.length === 0) {
        if (inputRef.current.disabled !== undefined) {
          inputRef.current.disabled = false;
          inputRef.current.focus();
        }
        return;
      } else {
        const terminalElement = document.getElementById("overlay");
        if (terminalElement) {
          terminalElement.classList.add("destroy");
        }
        setIsRedirect(true);
      }
    }, time);
  };

  useEffect(() => {
    handleScroll();
  }, [commands]);

  useEffect(() => {
    if (isRedirect) {
      redirect(routes.aboutPath);
      return () => {};
    }
  }, [isRedirect]);

  const handleShowProfilePic = (event) => {
    const pfpElement = event.target;
    if (pfpElement.classList.contains("pfp")) {
      let result = (
        <span className="flex flex-col justify-between items-start w-[auto] h-[auto] min-h[300px]">
          <Image
            src="/assets/images/heathjoker_pfp.jpg"
            width={300}
            height={300}
            key={Math.random}
            className="w-[100%] h-[auto]"
            alt="Picture picture of Author"
            priority={true}
          />
        </span>
      );
      const newCommand = {
        input: "",
        output: result,
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    }
  };

  const handleSubmit = (cmd) => {
    if (cmd === "") {
      const newCommand = {
        input: cmd,
        output: "",
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd === "ls") {
      const currentDirectory = getCurrentDirectory();

      const directories = directoryMap[currentDirectory] || [];

      let outputs = [];
      if (directories.length > 0) {
        directories.map((directory, index) => {
          outputs.push(directory);
        });
      } else {
        outputs.push({ error: noDirectory });
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
              className={`pr-[10px] ${
                directory.name === "profile_pic.jpg" ? "pfp" : ""
              }`}
              style={{
                color: !directory.protected
                  ? "#44da44"
                  : directory.protection_type === "privilage"
                  ? !isRootUser
                    ? "#ca1111"
                    : "#44da44"
                  : directory.protection_type === "access"
                  ? "#d9d202"
                  : "#022dd9",
              }}
              onDoubleClick={
                directory.name === "profile_pic.jpg"
                  ? handleShowProfilePic
                  : () => {}
              }
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
        output: availableCommands,
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
          output: switchedToRoot,
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
      } else {
        const newCommand = {
          input: cmd,
          output: switchedToRoot,
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
      }
    } else if (cmd === "exit") {
      setCommands([]);
    } else if (cmd.startsWith("cd")) {
      if (cmd.length >= 3 && cmd[2] != " ") {
        const newCommand = {
          input: cmd,
          output: noCommand,
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
          isRootUserAccessible(directory, currentDirectory) ||
          !isDirectoryProtected(directory);

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
            output: isDirectoryExists(directory, currentDirectory)
              ? noPermission
              : noFileOrDirectory,
            terminalLabel: terminalLabel,
          };
          setCommands((prevCommands) => [...prevCommands, newCommand]);
        }
      }
    } else if (cmd === "./enable_gui.sh") {
      const fileName = cmd.substring(2);
      const currentDirectory = getCurrentDirectory();
      const filePermission =
        isRootUserAccessible(fileName, currentDirectory) ||
        !isFileProtected(fileName);

      if (filePermission && isFileExists(fileName, currentDirectory)) {
        const newCommand = {
          input: cmd,
          output: (
            <span>
              Header enabled successfully. <br /> You will now be redirected to
              the homepage of this website.
            </span>
          ),
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
        destroyTerminal(3000);
      } else {
        const newCommand = {
          input: cmd,
          output: isFileExists(fileName, currentDirectory)
            ? noPermission
            : noFileOrDirectory,
          terminalLabel: terminalLabel,
        };
        setCommands((prevCommands) => [...prevCommands, newCommand]);
      }
    } else if (cmd.startsWith("cat")) {
      const fileName = cmd.substring(4).trim();
      const cwd = getCurrentDirectory();
      let outputs = isFileExists(fileName, cwd)
        ? unsupportedFile
        : noFileOrDirectory;
      if (isPathValid(cwd) && isFileExists(fileName, cwd)) {
        if (fileName === "hint_1.txt") {
          outputs = "How do you open images?";
        } else if (fileName === "hint_2.txt") {
          outputs = "christopher_nolan.txt text";
        }
      }
      const newCommand = {
        input: cmd,
        output: outputs,
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd.startsWith("character.jkr ")) {
      const fileName = cmd.substring(14).trim();
      const cwd = getCurrentDirectory();
      let outputs = invalidCode;
      if (!isFileExists("character.jkr", cwd)) {
        outputs = noFileOrDirectory;
      } else if (
        isPathValid(cwd) &&
        (fileName === "joker" || fileName === "Joker")
      ) {
        outputs = (
          <span>
            My favourite character is{" "}
            <span className="text-[#fcfcfc]">Joker</span> from{" "}
            <span className="text-[#fcfcfc]">The Dark Knight</span>
          </span>
        );
      }
      const newCommand = {
        input: cmd,
        output: outputs,
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd.startsWith("movie.ilr ")) {
      const fileName = cmd.substring(10).trim();
      const cwd = getCurrentDirectory();
      let outputs = invalidCode;
      if (!isFileExists("movie.ilr", cwd)) {
        outputs = noFileOrDirectory;
      } else if (
        isPathValid(cwd) &&
        (fileName === "interstellar" || fileName === "Interstellar")
      ) {
        outputs = (
          <span>
            My favourite movie is{" "}
            <span className="text-[#fcfcfc]">Interstellar</span>
          </span>
        );
      }
      const newCommand = {
        input: cmd,
        output: outputs,
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd.startsWith("game.jc3 ")) {
      const fileName = cmd.substring(9).trim();
      const cwd = getCurrentDirectory();
      let outputs = invalidCode;
      if (!isFileExists("game.jc3", cwd)) {
        outputs = noFileOrDirectory;
      } else if (
        isPathValid(cwd) &&
        (fileName === "just cause 3" || fileName === "Just Cause 3")
      ) {
        outputs = (
          <span>
            My favourte game is{" "}
            <span className="text-[#fcfcfc]">Just Cause 3</span> (underrated,
            tho i&apos;ve played almost all major AAA games)
          </span>
        );
      }
      const newCommand = {
        input: cmd,
        output: outputs,
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else if (cmd.startsWith("python3 ")) {
      const fileName = cmd.substring(8).trim();
      console.log(fileName);
      const cwd = getCurrentDirectory();
      let outputs = invalidCode;
      if (!isFileExists(fileName, cwd)) {
        outputs = noFileOrDirectory;
      } else {
        outputs = (
          <span>My hobby is playing video games and watching movies.</span>
        );
      }
      const newCommand = {
        input: cmd,
        output: outputs,
        terminalLabel: terminalLabel,
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);
    } else {
      const newCommand = {
        input: cmd,
        output: noCommand,
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

  const isPathValid = (path) => {
    return directoryMap[path] !== undefined ? true : false;
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

  const isDirectoryExists = (directory, currentDirectory) => {
    const directories = directoryMap[currentDirectory] || [];
    return directories.some(
      (dir) => dir.type === "directory" && dir.name === directory
    );
  };

  const isFileExists = (file, currentDirectory) => {
    const files = directoryMap[currentDirectory] || [];
    return files.some((f) => f.type === "file" && f.name === file);
  };

  const isFileProtected = (file, currentDirectory) => {
    const files = directoryMap[currentDirectory] || [];
    const matchedFile = files.find((f) => f.type === "file" && f.name === file);
    return matchedFile && matchedFile.protected;
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

  const isRootUserAccessible = (directory, currentDirectory) => {
    const directories = directoryMap[currentDirectory] || [];
    const matchedFile = directories.find((dir) => dir.name === directory);
    if (
      matchedFile &&
      (matchedFile.protection_type === "privilage" ||
        matchedFile.protection_type === "none")
    ) {
      return isRootUser;
    }
    return false;
  };

  const maximizeTerminal = () => {
    const terminalElement = document.getElementById("overlay");
    if (terminalElement) {
      terminalElement.classList.toggle("maximize");
    }
  };

  return (
    <>
      <section className="terminal flex justify-center items-cetner relative w-[100vw] h-[100vh] bg-[#87a2d8]">
        <div
          id="overlay"
          className="terminal-overlay rounded-xl relative m-auto h-[85%] sm:h-[75%] sm:w-[90%] w-[75%] transition-all ease-out delay-0 image-loaded bg-[#000000]"
        >
          <div className="terminalheader absolute w-[100%] top-[auto] left-[auto] flex items-center justify-end h-[5vh] sm:h-[5vh] rounded-xl rounded-b-none m-auto bg-[#1a1a1a] z-[100]">
            <div className="terminalOptions flex justify-between text-[#FFFFFF] bg-transparent px-[1vw] sm:px-[3vw]">
              <div className="rounded-full mx-[5px] h-[2vh] w-[2vh] bg-[#ffff70]"></div>
              <div
                className="rounded-full mx-[5px] h-[2vh] w-[2vh] bg-[#44da44] cursor-pointer hover:bg-[#077607]"
                onClick={() => {
                  maximizeTerminal();
                }}
              ></div>
              <div
                className="rounded-full mx-[5px] h-[2vh] w-[2vh] bg-[#ca1111] cursor-pointer hover:bg-[#a41b1b]"
                onClick={() => {
                  setCommands([]);
                  revokeTerminal.current = true;
                }}
              ></div>
            </div>
          </div>
          <div className="relative rounded-xl m-auto h-[100%] w-[100%] overflow-y-scroll">
            <div className="commandsContainer h-[auto] bg-transparent pt-[5vh]">
              {commands.map((command, index) => (
                <React.Fragment key={index}>
                  <p className="command text-[#9FEF00] flex text-[1rem] px-[1rem] py-[1rem] w-[100%] m-auto bg-transparent sm:text-[0.8rem]">
                    {command.terminalLabel}{" "}
                    <span className="text-[1rem] px-[1vw] w-[100%] m-auto bg-transparent sm:text-[0.8rem]">
                      {command.input}
                    </span>
                  </p>
                  <p className="output text-[#FFFFFF] flex text-[1rem] px-[1rem] oppacity-[0.8] w-[100%] h-[auto] m-auto bg-transparent sm:text-[0.8rem]">
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
      </section>
    </>
  );
};

export default Terminal;
