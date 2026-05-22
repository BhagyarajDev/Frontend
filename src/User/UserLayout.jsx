import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Navbar */}
      <header className="bg-white shadow px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <h1 className="text-green-600 font-bold text-xl">E.com</h1>
          <span className="text-sm text-gray-500 hidden sm:block">
            Deliver to Home
          </span>
        </div>

        {/* Center - Search */}
        <div className="flex-1 mx-4 hidden md:block">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          {/* <button className="text-sm font-medium">Login</button> */}

          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
            Cart 🛒
          </button>
        </div>
      </header>

      {/* Mobile Search */}
      <div className="md:hidden p-3 bg-white">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded-full px-4 py-2"
        />
      </div>

      {/* Main Layout */}
      <div className="flex">

        {/* Sidebar (Categories) */}
        {/* <aside className="hidden lg:block w-56 bg-white p-4 shadow">
          <h2 className="font-semibold mb-3">Categories</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 cursor-pointer">Fruits</li>
            <li className="hover:text-green-500 cursor-pointer">Vegetables</li>
            <li className="hover:text-green-500 cursor-pointer">Dairy</li>
            <li className="hover:text-green-500 cursor-pointer">Snacks</li>
          </ul>
        </aside> */}

        {/* Content */}
        <main className=" container flex-1 p-4 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;