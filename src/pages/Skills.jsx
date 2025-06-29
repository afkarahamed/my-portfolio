import React from "react";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiC, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={32} /> },
  { name: "CSS", icon: <FaCss3Alt size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "Node.js", icon: <FaNodeJs size={32} /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "React", icon: <FaReact size={32} /> },
  { name: "Docker", icon: <FaDocker size={32} /> },
  { name: "MySQL", icon: <SiMysql size={32} /> },
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "C/C++", icon: <SiC size={32} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-16 px-4 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white border-b-4 border-blue-500 inline-block">
          My Skills
        </h2>
        <p className="text-lg text-gray-300 mt-2 mb-10">
          Technologies, tools & languages I work with.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] hover:bg-[#334155] transition duration-300 border border-blue-600 rounded-xl py-6 flex flex-col items-center justify-center shadow-lg"
            >
              <div className="text-blue-500 mb-2">{skill.icon}</div>
              <p className="text-white font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;