import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <footer className="footer flex justify-center py-[3vh] px-[6vw] absolute bottom-0 w-[100%]">
          <div className="copyrightContainer">
            <p className="copyright text-center">
              ©️ <span className="text-[#9FEF00]">Lakshya</span> 2023. All
              rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
