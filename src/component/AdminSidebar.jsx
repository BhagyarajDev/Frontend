import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdInventory, MdCategory, MdLogout } from "react-icons/md";

const AdminSidebar = () => {
  return (
    <aside className="w-[260px] h-screen bg-gray-800 text-gray-50 flex flex-col justify-between fixed left-0 top-0 shadow-[2px_0_5px_rgba(0,0,0,0.1)]">
      <div className="py-6 px-5 text-left border-b border-gray-700">
        <h2 className="m-0 text-2xl font-bold">Admin Panel</h2>
      </div>

      <nav className="flex-grow py-5">
        <ul className="list-none p-0 m-0">
          <li>
            <Link to="/admin/dashboard" className="flex items-center py-4 px-6 text-gray-300 no-underline transition-colors duration-200 hover:bg-gray-700 hover:text-white">
              <MdDashboard className="mr-4 text-[1.4rem]" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/product" className="flex items-center py-4 px-6 text-gray-300 no-underline transition-colors duration-200 hover:bg-gray-700 hover:text-white">
              <MdInventory className="mr-4 text-[1.4rem]" />
              <span>Product</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/category" className="flex items-center py-4 px-6 text-gray-300 no-underline transition-colors duration-200 hover:bg-gray-700 hover:text-white">
              <MdCategory className="mr-4 text-[1.4rem]" />
              <span>Category</span>
            </Link>
          </li>
           <li>
            <Link to="/admin/oder" className="flex items-center py-4 px-6 text-gray-300 no-underline transition-colors duration-200 hover:bg-gray-700 hover:text-white">
              <MdCategory className="mr-4 text-[1.4rem]" />
              <span>Oder</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-6 border-t border-gray-700">
        <button onClick={()=>window.location.href="/login"} className="flex items-center justify-center w-full p-3 bg-red-500 text-white border-none rounded-md cursor-pointer text-base font-bold transition-colors duration-200 hover:bg-red-600">
          <MdLogout className="mr-4 text-[1.4rem]" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
