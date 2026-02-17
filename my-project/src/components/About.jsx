// import React from "react";

// const About = () => {
//   return (
//     <>
//       <div>
//         <h2 className="text-3xl font-bold text-center mt-12 font-[Roboto]">
//           About Me
//         </h2>
//       </div>

//       <div>
//         <p
//           className="text-center text-gray-900
//         mt-6 max-w-3xl mx-auto
//         px-2
//         leading-snug
//         text-[18px]
//         font-[Roboto]"
//         >
//           I am Md Faij, a passionate MERN Stack Developer with a knack for
//           creating dynamic and responsive web applications. With a strong
//           foundation in both front-end and back-end technologies, I thrive on
//           building seamless user experiences and efficient server-side
//           solutions. My expertise lies in utilizing MongoDB, Express.js,
//           React.js, and Node.js to deliver robust applications that meet client
//           needs. I am constantly exploring new technologies and best practices
//           to enhance my skills and stay ahead in the ever-evolving world of web
//           development.
//           <br />I am Md Faij, a passionate MERN Stack Developer with a knack for
//           creating dynamic and responsive web applications. With a strong
//           foundation in both front-end and back-end technologies, I thrive on
//           building seamless user experiences and efficient server-side
//           solutions. My expertise lies in utilizing MongoDB, Express.js,
//           React.js, and Node.js to deliver robust applications that meet client
//           needs. I am constantly exploring new technologies and best practices
//           to enhance my skills and stay ahead in the ever-evolving world of web
//           development.
//         </p>
//       </div>
//     </>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 font-[Roboto]">
        About Me
      </h2>

      {/* Content */}
      <p
        className="text-center text-gray-700
        max-w-3xl mx-auto
        leading-relaxed
        text-[17px] sm:text-[18px]
        font-[Roboto]"
      >
        Hi, I’m <span className="font-semibold text-black">Md Faij</span>, a
        passionate <span className="font-semibold">MERN Stack Developer</span>{" "}
        who loves building modern, dynamic, and responsive web applications. I
        enjoy turning ideas into real-world products using clean code and
        user-focused design.
        <br />
        <br />I have strong experience working with{" "}
        <span className="font-medium">
          MongoDB, Express.js, React.js, and Node.js
        </span>{" "}
        to create full-stack applications that are scalable, efficient, and easy
        to maintain. From crafting intuitive front-end interfaces to developing
        secure and performant back-end APIs, I take pride in delivering complete
        solutions.
        <br />
        <br />
        I’m always eager to learn new technologies, improve my skills, and stay
        updated with the latest trends in web development. My goal is to build
        meaningful digital experiences that solve real problems and add value.
      </p>
    </section>
  );
};

export default About;
