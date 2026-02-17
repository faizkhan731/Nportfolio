import React from "react";
import { ExternalLink } from "lucide-react";

// import railwayImg from "../assets/projects/railway.png";
// import healthImg from "../assets/projects/healthylifestyle.png";
// import chickenImg from "../assets/projects/chicken.png";
// import learningImg from "../assets/projects/learning.png";
import chicken from "../../public/chicken.png";
import healthy from "../../public/healthy.png";

const projects = [
  {
    title: "Indian Railway System",
    image: chicken,
    description:
      "A comprehensive railway reservation and management system inspired by IRCTC. The platform allows users to search trains, check availability, simulate ticket booking flows, and manage user authentication. Designed with a responsive UI and scalable backend architecture to reflect real-world railway systems.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "MySQL",
    ],
    link: "#",
  },
  {
    title: "HealthyLifestyle",
    image: healthy,
    description:
      "A modern health and wellness website focused on promoting a healthy lifestyle. Features clean UI design, smooth navigation, responsive layouts, and optimized performance. The platform delivers informative content related to fitness, diet, and healthy habits with an engaging user experience.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Microsoft Clarity",
      "Next.js",
    ],
    link: "https://healthylifestyle.co.in",
  },
  {
    title: "Chicken Shop Website",
    image: chicken,
    description:
      "A professional business website built for a local chicken shop. Includes product listings, pricing information, and a mobile-friendly layout to attract local customers. The website focuses on simplicity, fast loading speed, and clear presentation of business offerings.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Microsoft Clarity",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    link: "#",
  },
  {
    title: "Online Learning Platform",
    image: healthy,
    description:
      "A full-featured online learning platform supporting both students and instructors. Includes role-based authentication, course management, video and PDF uploads, dashboards, and secure backend integration. Built with scalability in mind to support real-world e-learning use cases.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* 🖼️ Project Image */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
