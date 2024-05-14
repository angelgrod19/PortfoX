import React from "react";
import Tilt from "react-parallax-tilt";

function Interduce() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 my-10">
          LET ME <p className="text-[#ad50eb]">INTRODUCE</p> MYSELF
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-semibold lg:text-lg">
            <p>
            As python and web developer, I'm skilled in utilizing Python programming language for various purposes, including web development. I have expertise in backend development using frameworks like Django or Flask, which enable them to build robust, scalable web applications. I'm proficient in working with databases, handling server-side logic, and implementing security measures. Additionally, I often have knowledge of front-end technologies like HTML, CSS, and JavaScript, allowing them to create dynamic and responsive user interfaces. My skill set encompasses creating APIs, integrating third-party services, optimizing web performance, and ensuring the overall functionality and user experience of web applications.
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        <Tilt>
          <img src="man.png" alt="" className="object-cover" />
        </Tilt>
      </div>
    </div>
  );
}

export default Interduce;
