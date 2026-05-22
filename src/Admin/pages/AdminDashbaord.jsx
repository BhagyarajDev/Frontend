import React from "react";
import { MdPeople, MdInventory, MdShoppingCart } from "react-icons/md";

const AdminDashbaord = () => {
  // Mock data for the dashboard statistics
  const stats = [
    {
      title: "Total Users",
      count: "1,250",
      icon: <MdPeople className="text-4xl text-blue-500" />,
      bg: "bg-blue-100",
    },
    {
      title: "Total Products",
      count: "342",
      icon: <MdInventory className="text-4xl text-green-500" />,
      bg: "bg-green-100",
    },
    {
      title: "Total Orders",
      count: "890",
      icon: <MdShoppingCart className="text-4xl text-purple-500" />,
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between transition-transform transform hover:-translate-y-1 hover:shadow-md duration-300"
          >
            <div>
              <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">
                {stat.count}
              </p>
            </div>
            <div className={`p-4 rounded-full ${stat.bg}`}>{stat.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashbaord;