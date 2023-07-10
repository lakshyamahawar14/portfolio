import Link from "next/link";
import { routes } from "../states/paths";

const Header = (props) => {
  const handleMenu = () => {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("linksContainer");
    if (menu) {
      if (menu.style.height === "0px" || menu.style.height === "") {
        if (burger) {
          burger.classList.add("rotated");
        }
        menu.style.height = "35vh";
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
        className={`header absolute transition-all ease-linear delay-0 h-[8vh] flex justify-center px-[6vw] w-[100%] sm:flex-col sm:justify-start sm:items-center sm:h-[auto] sm:min-h-[8vh] glass bg-[${
          props.bg || "#2a8423"
        }] z-[100]`}
      >
        <nav
          id="linksContainer"
          className="linksContainer z-[40] transition-all ease-linear delay-0 flex justify-evenly items-center w-[100%] max-w-[600px] sm:flex-col sm:items-center sm:justify-center sm:h-[0px]"
        >
          <div className="logoContainer z-[200] flex justify-center items-center sm:justify-between sm:w-[100%] sm:h-[8vh] sm:absolute sm:top-0 sm:left-0 sm:px-[6vw] m-auto">
            <p
              className={`logo font-[600] tracking-wider text-[${
                props.color || "#000000"
              }] text-[0.9rem] `}
            >
              Lakshya
            </p>
          </div>
          <div
            id="burger"
            onClick={handleMenu}
            className="burger z-[210] h-[8vh] text-[1rem] cursor-pointer transition-all ease-linear delay-0 sm:flex justify-center items-center absolute top-0 right-0 px-[6vw] hidden"
          >
            <span className="flex flex-col justify-center items-center h-[40%] w-[15px]">
              <span className={`h-[1px] bg-[#000000] w-[100%] my-[2px]`} />
              <span className={`h-[1px] bg-[#000000] w-[100%] my-[2px]`} />
              <span className={`h-[1px] bg-[#000000] w-[100%] my-[2px]`} />
            </span>
          </div>
          <div className={`m-auto link sm:pt-[8vh]`}>
            <Link
              href={routes.aboutPath}
              className=" tracking-wider text-center hover:text-[#5b3eea] text-[#101010] text-[0.9rem]"
            >
              About Me
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.projectsPath}
              className=" tracking-wider text-center hover:text-[#5b3eea] text-[#101010] text-[0.9rem]"
            >
              Projects
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.skillsPath}
              className=" tracking-wider text-center hover:text-[#5b3eea] text-[#101010] text-[0.9rem]"
            >
              Skills
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.contactPath}
              className=" tracking-wider text-center hover:text-[#5b3eea] text-[#101010] text-[0.9rem]"
            >
              Contact Me
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
