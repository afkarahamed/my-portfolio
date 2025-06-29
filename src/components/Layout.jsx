import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0f172a] text-white pt-16 pb-24">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <BottomNavbar />
    </div>
  );
};

export default Layout;