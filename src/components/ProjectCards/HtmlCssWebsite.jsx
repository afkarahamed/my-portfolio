import React from 'react';

const HtmlCssWebsite = () => {
  return (
    <div className="bg-white text-black shadow-lg rounded-xl overflow-hidden max-w-md mx-auto hover:shadow-xl transition duration-300">
      <div className="aspect-video bg-black">
        <iframe
          src="https://www.moshified.com/"
          title="HTML/CSS Project"
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Responsive HTML/CSS Website</h2>
        <p className="text-sm text-gray-700 mb-4">
          A fully responsive website built using pure HTML and CSS following professional design principles. This was a code along project done as a part of Mosh Hamedani's HTML & CSS course.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.moshified.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/afkarahamed/moshified_self"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default HtmlCssWebsite;