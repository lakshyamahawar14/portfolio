import Link from "next/link";
import { routes } from "../states/paths";

const Header = (props) => {
  return (
    <>
      <header
        id="header"
        className={`header sticky transition-all ease-linear delay-0 h-[8vh] flex justify-center px-[6vw] w-[100%] sm:flex-col sm:justify-start sm:items-center sm:h-[auto] sm:min-h-[8vh] glass bg-[${
          props.bg || "#2a8423"
        }] z-[100]`}
      >
        <div
          id="linksContainer"
          className="linksContainer z-[40] transition-all ease-linear delay-0 flex justify-evenly items-center w-[100%] max-w-[600px] sm:flex-col sm:items-center sm:justify-center sm:h-[0px]"
        >
          <div className="logoContainer z-[310] flex justify-center items-center sm:justify-between sm:w-[100%] sm:h-[8vh] sm:absolute sm:top-0 sm:left-0 sm:px-[6vw] m-auto">
            <p
              className={`logo text-[${
                props.color || "#000000"
              }] text-[0.9rem] rubik`}
            >
              Lakshya
            </p>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.aboutPath}
              className="ubuntu tracking-wider text-center hover:text-[#5b3eea] text-[#101010] text-[0.9rem]"
            >
              About Me
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.projectsPath}
              className="ubuntu tracking-wider text-center hover:text-[#5b3eea] text-[#101010] text-[0.9rem]"
            >
              Projects
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.skillsPath}
              className="ubuntu tracking-wider text-center hover:text-[#5b3eea] text-[#101010] text-[0.9rem]"
            >
              Skills
            </Link>
          </div>
          <div className={`m-auto link`}>
            <Link
              href={routes.contactPath}
              className="ubuntu tracking-wider text-center hover:text-[#5b3eea] text-[#101010] text-[0.9rem]"
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
