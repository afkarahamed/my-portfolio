import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FileText, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50 bg-[#0f172a] flex justify-between items-center px-4 md:px-10">
      <div className="text-green-400 font-mono text-base md:text-2xl">
        <span className="mr-2">{'</>'}</span>
        <Typewriter
          // words={window.innerWidth < 768 ? ['@afkarahamed'] : ['@afkarahamed', 'Software Developer']}
          words = {['@afkarahamed', 'Developer']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </div>

      <div className="flex items-center gap-4">
        <a
          href="/src/assets/Afkar-Ahamed_resume.pdf"
          download
          className="bg-green-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded-md text-sm md:text-base flex items-center gap-2 shadow hover:shadow-md transition"
        >
          <FileText className="w-4 h-4 text-black" />
          My CV
        </a>

        
        <a
          href="https://github.com/afkarahamed/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group bg-gray-200 hover:bg-gray-300 text-black p-2 rounded-md shadow hover:shadow-md transition"
          aria-label="Go to the source code"
        >
          <Github className="w-5 h-5" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-gray-800 text-white text-[10px] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 whitespace-nowrap">
             Go to the source code
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;