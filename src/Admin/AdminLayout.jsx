import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../component/AdminSidebar";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar (Desktop + Mobile) */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300
          lg:translate-x-0 lg:static lg:inset-0
        `}
      >
        <AdminSidebar closeSidebar={() => setIsOpen(false)} />
      </div>

      {/* Overlay (Mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          
          {/* Hamburger (Mobile only) */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-lg font-semibold">Admin Dashboard</h1>

          <h1 className="text-lg font-semibold hidden sm:block">Admin</h1>
        </header>

        {/* Content */}
        <main className="p-4 sm:p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;