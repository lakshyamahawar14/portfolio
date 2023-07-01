import Link from "next/link";
import { routes } from "../states/paths";

const Header = () => {
  const handleMenu = () => {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("linksContainer");
    if (menu) {
      console.log(menu.style.height);
      if (menu.style.height === "0px" || menu.style.height === "") {
        if (burger) {
          burger.classList.add("rotated");
        }
        menu.style.height = "50vh";
      } else {
        if (burger) {
          burger.classList.remove("rotated");
        }
        menu.style.height = "0px";
      }
    }
  };

  return (
    <>
      <header
        id="header"
        className="header h-[10vh] flex justify-between py-[3vh] px-[6vw] relative w-[100%] sm:flex-col sm:justify-start sm:items-center sm:h-[auto] sm:min-h-[10vh] shadow-2xl bg-[#101010]"
      >
        <div className="logoContainer z-[30] flex justify-center items-center sm:justify-between sm:w-[100%] sm:h-[10vh] sm:absolute sm:top-0 sm:left-0 sm:px-[6vw]">
          <p className="logo text-[#9FEF00] font-[800]">Lakshya</p>
        </div>

        <div
          id="burger"
          onClick={handleMenu}
          className="burger z-[90] h-[10vh] text-[1.5rem] cursor-pointer transition-all ease-linear delay-0 sm:flex justify-center items-center absolute top-0 right-0 px-[6vw] hidden"
        >
          <span className="flex text-[#9FEF00] flex-col justify-evenly items-center h-[35%] w-[20px]">
            <span className="h-[2px] bg-[#9FEF00] w-[100%]"></span>
            <span className="h-[2px] bg-[#9FEF00] w-[100%]"></span>
            <span className="h-[2px] bg-[#9FEF00] w-[100%]"></span>
          </span>
        </div>

        <div
          id="linksContainer"
          className="linksContainer z-[40] transition-all ease-linear delay-0 flex justify-evenly items-center w-[100%] max-w-[600px] sm:flex-col sm:items-center sm:justify-center sm:h-[0px]"
        >
          <div className="link hover:text-[#FFFFFF] sm:my-[auto]">
            <Link href={routes.homePath} className="text-center">
              Home
            </Link>
          </div>
          <div className="link hover:text-[#FFFFFF] sm:my-[auto]">
            <Link href={routes.aboutPath}>About Me</Link>
          </div>
          <div className="link hover:text-[#FFFFFF] sm:my-[auto]">
            <Link href={routes.projectsPath}>Projects</Link>
          </div>
          <div className="link hover:text-[#FFFFFF] sm:my-[auto]">
            <Link href={routes.skillsPath}>Skills</Link>
          </div>
          <div className="link hover:text-[#FFFFFF] sm:my-[auto]">
            <Link href={routes.contactPath}>Contact Me</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
