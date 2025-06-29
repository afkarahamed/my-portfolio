import React from 'react';
import HtmlCssWebsite from '../components/ProjectCards/HtmlCssWebsite';
import V3dBLas from "../components/ProjectCards/V3dBLas";

const Projects = () => {
  return (
<div className="flex flex-col md:flex-row gap-6 flex-wrap justify-center">
        <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          PROJECTS
        </h2>
        <p className="mt-2 text-gray-400 text-lg">
          Some of the projects I have worked on.
        </p>
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
          <HtmlCssWebsite />
        <V3dBLas />
      </div>
    </div>
  );
};

export default Projects;