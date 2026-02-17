// "use client";

// import Marquee from "react-fast-marquee";
// import {
//     FaReact,
//     FaNodeJs,
//     FaJs,
//     FaHtml5,
//     FaCss3Alt,
// } from "react-icons/fa";

// const skills = [
//     { name: "React", icon: FaReact },
//     { name: "Node.js", icon: FaNodeJs },
//     { name: "JavaScript", icon: FaJs },
//     { name: "HTML", icon: FaHtml5 },
//     { name: "CSS", icon: FaCss3Alt },
// ];

// export default function SkillsMarquee() {
//     return (
//         <div className="w-full py-10 mt-4  max-w-5xl mx-auto">
//             <Marquee speed={40} pauseOnHover autoFill gradient={false}>
//                 {skills.map((skill, index) => {
//                     const Icon = skill.icon;

//                     return (
//                         <div key={index} className="mx-6">
//                             <div className="group relative flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-110">

//                                 {/* Icon */}
//                                 <span className="mb-2 text-[14px] font-medium text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                                     {skill.name}
//                                 </span>
//                                 <Icon className="text-8xl text-black" />

//                                 {/* Name (inside, bottom) */}

//                             </div>
//                         </div>
//                     );
//                 })}
//             </Marquee>
//         </div>
//     );
// }

"use client";

// import Marquee from "react-fast-marquee";
import Marquee from "react-fast-marquee";
import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaVuejs,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiVercel,
    SiNetlify,
} from "react-icons/si";

const skills = [
    // Frontend
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Vue.js", icon: FaVuejs },
    { name: "Tailwind CSS", icon: SiTailwindcss },

    // Backend / DB
    { name: "Node.js", icon: FaNodeJs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },

    // Deployment
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
];

export default function SkillsMarquee() {
    return (
        <div className="w-full py-10 mt-4 max-w-5xl mx-auto relative">
            {/* Left fade shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

            {/* Right fade shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-36  bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <Marquee speed={40} pauseOnHover autoFill gradient={false}>
                {skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                        <div key={index} className="mx-6">
                            <div className="group relative flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-110">

                                {/* Icon */}
                                <span className="mb-2 text-[14px] font-medium text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {skill.name}
                                </span>
                                <Icon className="text-8xl text-black" />

                                {/* Name (inside, bottom) */}

                            </div>
                        </div>
                    );
                })}
            </Marquee>
        </div>
    );
}