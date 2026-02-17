import React from "react";
import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "TPSKKheetiBazaar31 Services Pvt Ltd",
    role: "Full Stack Developer",
    duration: "2025 — Present",
    description:
      "Worked on KheetiBazaar, an agriculture-focused platform connecting farmers with buyers. Built dashboards, authentication, product listing, and database integrations.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "REST APIs",
      "Full Stack Development",
    ],
  },

  {
    company: "Rasutrip Websoft Technologiest",
    role: "Frontend Developer",
    duration: "2025",
    description:
      "Developed and maintained the frontend of Rasu Trip, a travel booking platform. Built clean UI layouts, improved UX, implemented booking pages, and ensured mobile responsiveness.",
    skills: [
      "React.js",
      "Next.js",
      "MySQL",
      "Tailwind CSS",
      "API Integration",
      "UI/UX",
    ],
  },
  {
    company: "Zoro Innovation",
    role: "Web Developer Intern",
    duration: "2023 — 2024",
    description:
      "Worked as a Web Developer Intern at Zoro Innovations. I contributed to designing and developing responsive web pages, improving UI/UX, optimizing website performance, and implementing reusable components using modern frontend technologies.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "MySQL",
      "Responsive Design",
    ],
  },
];

function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My Experience
      </h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-300 pl-8 space-y-14">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-black bg-white"></span>

            <div className="space-y-3">
              {/* Company */}
              <h3 className="text-lg sm:text-xl font-semibold">
                {exp.company}
              </h3>

              {/* Role */}
              <p className="text-base font-medium text-gray-800">{exp.role}</p>

              {/* Duration */}
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <Calendar className="h-4 w-4 text-black" />
                <span>{exp.duration}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 font-medium leading-relaxed text-sm sm:text-base">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-gray-300 px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 bg-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
