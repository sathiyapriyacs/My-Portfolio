"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
// import { motion } from "";
const HeroSection = () => {
  // useRef is not used here, so no need for client-only component

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
              {" "}
              Hello, I'm{""}{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Sathiya priya", 1000, "Full-Stack Developer", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg text-base sm:text-lg mb-6 lg:text-xl">
            Passionate full-stack developer skilled in modern web technologies,
            specializing in crafting robust and scalable applications to address
            real-world challenges
          </p>
          <div>
            <button className="px-6 inline-block py-3 w-full sm:w-auto rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>

            <button className="px-1 inline-block py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 bg-[#121212] hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                {" "}
                Download CV{" "}
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/Images/hero-image.png"
              alt="HeroImage"
              className="object-cover object-center rounded-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
