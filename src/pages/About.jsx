import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="min-h-screen px-4 py-12 md:py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl w-full text-center space-y-10">
        {/* Section: Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-blue-400">About Me</h1>

        {/* Section: Intro */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-300">Introduction</h2>
          <p className="text-gray-300 text-base md:text-lg">
            Hey there! I'm Afkar Ahamed based in Sri Lanka. I am a graduate from Sri Lanka Institute of Information Technology (SLIIT) with around 2 years of work experience. 
            I started at low level prgramming and now I am a full stack developer. I am more keen about mastering logics and precison and now i bring that 
            discipline into building responsive frontends and scalable backends. 
          </p>
        </section>

        {/* Section: Education */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-300">Education</h2>
          <ul className="text-gray-300 text-base md:text-lg list-disc list-inside">
            <li>BSc Engineering (Hons) in Electrical & Electronic Engineering</li>
            <li>Graduated from Sri Lanka Institute of Information Technology (SLIIT), Class of 2024.</li>
            <li>Second Class (Upper) division.</li>
            <li>Inducted to Deans list on multiple semesters.</li>
          </ul>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-300">Experience</h2>
          <ul className="text-gray-300 text-base md:text-lg list-disc list-inside">
            <li>Intern C developer. (2022 Nov - 2023 Feb)</li>
            <li>C developer. (2024 April - 2025 April)</li>
            <li>Freelancer working on a full-stack project (2025 April-Present)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-300">Hobbies</h2>
          <p className="text-gray-300 text-base md:text-lg">
           When I am not coding, its highly likely that you will find me working on that punching bad (MMA enthusiast here) or exploring the outdoors.
           I also enjoy learning about history the battles our ancestors had to go through. And occasionally you might find me lost 
           in a good youtube rabbit hole. 
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default About;