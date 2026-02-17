import React from "react";
import mypic from "../../public/mypic.jpeg";
import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github, Twitter } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="flex justify-center  mt-36">
        <motion.img
          drag
          dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
          src={mypic}
          // src="https://res.cloudinary.com/dt9j2bt0e/image/upload/f_auto,q_auto/v1770902367/IMG_2420_jl2daw.jpg"
          alt=""
          className="w-36 h-36 rounded-full object-cover
        border-2 border-black

             transition duration-300
             grayscale hover:grayscale-0
             hover:scale-105 hover:shadow-xl
            "
        />
      </div>
      <div
        className="flex justify-center items-center gap-2 mt-12
                border border-gray-300
                w-fit mx-auto px-3 py-0.5 rounded-full font-[Roboto]  "
      >
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <h4 className="text-[16px] tracking-wide text-black ">
          Available for work!
        </h4>
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-6 leading-snug font-[Roboto]">
          <span className="block text-black">
            Hi I'm{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Md Faij
            </span>
          </span>

          <span className="block text-black">
            I develop Full Stack Web Application, using
          </span>
          <span className="block bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            MERN STACK
          </span>
        </h1>
      </div>

      <div>
        <p
          className="text-center text-gray-500
          mt-6 max-w-3xl mx-auto
          px-2
          font-[Roboto]
          text-[20px] leading-snug 
          "
        >
          I'm a skilled software developer with experience in JavaScript, and
          expertise in frameworks like React, Node.js, Express.js and MongoDB.
          I'm a quick learner and collaborate closely with clients to create
          efficient, scalable, and user-friendly solutions that solve real-world
          problems. Let's work together to bring your ideas to life!
        </p>
      </div>

      {/* <div className="flex justify-center mt-8 gap-2 mb-20 ">
        <button className="bg-black text-white px-6 py-2 rounded-full text-[16px] font-[Roboto] hover:bg-black hover:text-white transition duration-300 border-2 border-gray-900 ">
          Get in touch <ArrowRight className="inline-block ml-2 h-4 w-4" />
        </button>
        <button className="bg-gray-100 text-black px-6 py-2 rounded-full text-[16px] font-[Roboto] hover:bg-black hover:text-white transition duration-300  ">
          View Projects <ArrowRight className="inline-block ml-2 h-4 w-4" />
        </button>
        <button className="bg-white text-black px-6 py-2 rounded-full text-[16px] font-[Roboto] hover:bg-black hover:text-white transition duration-300 border-2 border-gray-300 ">
          Download CV <Download className="inline-block ml-2 h-4 w-4" />
        </button>

        <button className="bg-black text-white px-4 py-1 rounded-full text-[12px] font-[Roboto] hover:bg-black hover:text-white transition duration-300 border-2 border-gray-100 ">
          <Linkedin className="inline-block ml-2 h-4 w-4" />
        </button>
        <button className="bg-white text-black px-4 py-1 rounded-full text-[12px] font-[Roboto] hover:bg-black hover:text-white transition duration-300 border-2 border-gray-100 ">
          <Github className="inline-block ml-2 h-4 w-4" />
        </button>
        <button className="bg-white text-black px-4 py-1 rounded-full text-[12px] font-[Roboto] hover:bg-black hover:text-white transition duration-300 border-2 border-gray-100 ">
          <Twitter className="inline-block ml-2 h-4 w-4" />
        </button>
      </div> */}

      <div
        className="
    flex flex-col sm:flex-row
    justify-center items-center
    gap-3 sm:gap-4
    mt-8 mb-20
    flex-wrap
  "
      >
        {/* Primary buttons */}
        <a
          href="/contact"
          className="
    bg-black text-white
    px-5 py-2
    rounded-full
    text-sm sm:text-[16px]
    font-[Roboto]
    transition duration-300
    border-2 border-gray-900
    hover:bg-black hover:text-white
    flex items-center gap-2
  "
        >
          Get in touch
          <ArrowRight className="h-4 w-4" />
        </a>

        <a
          href="/projects"
          className="
      bg-gray-100 text-black
      px-5 py-2
      rounded-full
      text-sm sm:text-[16px]
      font-[Roboto]
      transition duration-300
      hover:bg-black hover:text-white
      flex items-center gap-2
    "
        >
          View Projects
          <ArrowRight className="h-4 w-4" />
        </a>

        <a
          href="/cv.pdf"
          className="
      bg-white text-black
      px-5 py-2
      rounded-full
      text-sm sm:text-[16px]
      font-[Roboto]
      transition duration-300
      border-2 border-gray-300
      hover:bg-black hover:text-white
      flex items-center gap-2
    "
        >
          Download CV
          <Download className="h-4 w-4" />
        </a>

        {/* Social icons */}
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/md-faiz-884440347/"
            className="bg-black text-white p-2 rounded-full border border-gray-200 hover:bg-black"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="https://github.com/faizkhan731/"
            className="bg-white text-black p-2 rounded-full border border-gray-200 hover:bg-black hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>

          <a className="bg-white text-black p-2 rounded-full border border-gray-200 hover:bg-black hover:text-white">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
