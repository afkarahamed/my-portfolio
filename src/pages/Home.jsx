import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpeg';
import resumePDF from '../assets/Afkar-Ahamed_resume.pdf'; 

const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-between text-white bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-4 py-10 md:py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={profileImg}
          alt="Afkar Ahamed"
          className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 mb-6 object-top"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Hola <span className="inline-block animate-wave">👋</span>, I'm Afkar Ahamed
        </h1>

        <h2 className="text-xl md:text-2xl text-indigo-400 font-medium mb-4">
          <Typewriter
            words={[
              'Quick Learner ⚡',
              'Tech Enthusiast 💡',
              'Problem Solver 🔧',
              'Full-Stack Developer 🧭',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-xl">
          A C developer turned full-stack engineer. Now trying to blend
          low-level precision with high-level creativity to build modern and scalable web applications.
        </p>

        <p className="text-sm text-gray-400 max-w-md">
          I build clean and responsive frontends along with efficient, scalable backends.
          I can turn ideas into user-friendly web applications.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-xs sm:max-w-none justify-center">
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 !text-white font-semibold py-2 px-6 rounded-lg text-sm sm:text-base text-center"
            >
              View Projects
          </Link>
          <Link
            to="/contact"
            className="border border-blue-600 !text-white hover:bg-blue-600 hover:!text-white font-semibold py-2 px-6 rounded-lg text-sm sm:text-base text-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;