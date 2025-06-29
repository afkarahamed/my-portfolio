import React from 'react';
import HtmlCssWebsite from '../components/ProjectCards/HtmlCssWebsite';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-4 py-16 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Projects</h1>
      <div className="grid place-items-center">
        <HtmlCssWebsite />
      </div>
    </div>
  );
};

export default Projects;