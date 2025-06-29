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
            Hey there! I'm Afkar Ahamed.
        </section>

        {/* Section: Education */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-300">Education</h2>
          <ul className="text-gray-300 text-base md:text-lg list-disc list-inside">
            <li>Need implementation</li>
            <li>need implementation</li>
          </ul>
        </section>

        {/* Section: Experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-300">Experience</h2>
          <ul className="text-gray-300 text-base md:text-lg list-disc list-inside">
            <li>need implementation</li>
            <li>need implementation</li>
          </ul>
        </section>

        {/* Section: Hobbies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-300">Hobbies</h2>
          <p className="text-gray-300 text-base md:text-lg">
           My hobbies
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default About;