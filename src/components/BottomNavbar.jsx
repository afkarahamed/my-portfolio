// src/components/BottomNavbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code2, User, FolderKanban, BadgeHelp, Mail } from 'lucide-react';

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-[#0f172a] border-t border-gray-700 z-50">
       <div className="max-w-4xl mx-auto flex justify-between px-6 py-2 text-sm text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? 'text-white' : 'text-blue-400'
            }`
          }
        >
          <Code2 className="w-5 h-5" />
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? 'text-white' : 'text-blue-400'
            }`
          }
        >
          <User className="w-5 h-5" />
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? 'text-white' : 'text-blue-400'
            }`
          }
        >
          <FolderKanban className="w-5 h-5" />
          Projects
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? 'text-white' : 'text-blue-400'
            }`
          }
        >
          <BadgeHelp className="w-5 h-5" />
          Skills
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? 'text-white' : 'text-blue-400'
            }`
          }
        >
          <Mail className="w-5 h-5" />
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavbar;