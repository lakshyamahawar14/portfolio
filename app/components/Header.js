import Link from "next/link";
import { routes } from "../states/paths";

const Header = () => {
  return (
    <>
      <header
        id="header"
        className="header absolute transition-all ease-linear delay-0 h-[8vh] flex justify-center px-[6vw] w-[100%] sm:flex-col sm:justify-start sm:items-center sm:h-[auto] sm:min-h-[8vh] shadow-2xl bg-[transparent]"
      >
        <div
          id="linksContainer"
          className="linksContainer z-[40] transition-all ease-linear delay-0 flex justify-evenly items-center w-[100%] max-w-[600px] sm:flex-col sm:items-center sm:justify-center sm:h-[0px]"
        >
          <div className="logoContainer z-[310] flex justify-center items-center sm:justify-between sm:w-[100%] sm:h-[8vh] sm:absolute sm:top-0 sm:left-0 sm:px-[6vw] m-auto">
            <p className="logo text-[#9FEF00] text-[0.9rem] font-[700]">
              Lakshya
            </p>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.homePath}
              className="text-center hover:text-[#d0d0d0] text-[0.9rem] font-[700]"
            >
              Terminal
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.fakeHomePath}
              className="text-center hover:text-[#d0d0d0] text-[0.9rem] font-[700]"
            >
              Home
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.aboutPath}
              className="text-center hover:text-[#d0d0d0] text-[0.9rem] font-[700]"
            >
              About Me
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.projectsPath}
              className="text-center hover:text-[#d0d0d0] text-[0.9rem] font-[700]"
            >
              Projects
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.skillsPath}
              className="text-center hover:text-[#d0d0d0] text-[0.9rem] font-[700]"
            >
              Skills
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.contactPath}
              className="text-center hover:text-[#d0d0d0] text-[0.9rem] font-[700]"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
