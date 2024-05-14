import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex items-center justify-evenly bg-[#0F0416] text-white flex-wrap px-3 py-4">
      <p className="text-sm text-center m-2">
        Designed and Developed by Angel Rodriguez
      </p>
      <p className="text-sm font-semibold text-center m-2">
        Copyright © 2024 pyking.net
      </p>
      <span className="flex items-center justify-center gap-7 m-2">
        <a
          href="https://github.com/angelgrod19"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/angel-rodriguez-4ab5272aa/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaLinkedinIn />
        </a>
      </span>
    </div>
  );
}

export default Footer;
