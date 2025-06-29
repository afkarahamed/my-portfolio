import React from 'react';
import HtmlCssWebsite from '../components/ProjectCards/HtmlCssWebsite';
import V3dBLas from "../components/ProjectCards/V3dBLas";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-4 py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          PROJECTS
        </h2>
        <p className="mt-2 text-gray-400 text-lg">
          Some of the projects I have worked on.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <HtmlCssWebsite />
        <V3dBLas />
      </div>
    </div>
  );
};

export default Projects;