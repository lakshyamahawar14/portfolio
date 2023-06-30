import Link from "next/link";
import { routes } from "../routes";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <header className="header flex justify-between py-[3vh] px-[6vw] fixed top-0 w-[100%] shadow-lg">
          <div className="logoContainer">
            <p className="logo text-[#9FEF00]">Lakshya</p>
          </div>
          <div className="burger hidden">
            <span>
              -<br />-<br />-
            </span>
          </div>
          <div className="linksContainer flex">
            <div className="link mr-[20px] hover:text-[#FFFFFF]">
              <Link href={routes.homePath}>Home</Link>
            </div>
            <div className="link mx-[20px] hover:text-[#FFFFFF]">
              <Link href={routes.aboutPath}>About Me</Link>
            </div>
            <div className="link mx-[20px] hover:text-[#FFFFFF]">
              <Link href={routes.projectsPath}>Projects</Link>
            </div>
            <div className="link mx-[20px] hover:text-[#FFFFFF]">
              <Link href={routes.skillsPath}>Skills</Link>
            </div>
            <div className="link ml-[20px] hover:text-[#FFFFFF]">
              <Link href={routes.contactPath}>Contact Me</Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
