//import logo from "../assets/hp.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbLetterC, TbLetterK } from "react-icons/tb";
//import { CgFileDocument } from "react-icons/cg";
//import { useNavigate } from 'react-router-dom';
import download from "../assets/download.json";
import Lottie from "lottie-react";
import pdf from "../assets/resume.pdf";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="logo" className="mx-2 w-10"></img> */}
        <TbLetterC className="w-8 h-1/5" />
        <TbLetterK className="w-8 h-1/5" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/chandan-kumar-das-389262205/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ChandanKumar-Das">
          <FaGithub />
        </a>
        <a href="https://x.com/Chandan44674221">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/chandanz_ydv/">
          <FaInstagram />
        </a>
        {/* <a href={pdf} className="flex items-center cursor-pointer">
      <CgFileDocument /> Resume
    </a> */}
        <a href={pdf} target="_blank" download="Chandan's resume">
          <button
            className=" flex items-center  hover:bg-gray-300 hover:text-black cursor-pointer my- w- h-10 bg-[#431f47] text-[#E7E7E7] no-underline rounded border-none transition-all duration-500"
            type="button"
          >
            <h3 className="text-sm pl-2 hidden md:block">Download CV</h3>
            <Lottie animationData={download} className="w-[50px] h-[110px] text-white"/>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
