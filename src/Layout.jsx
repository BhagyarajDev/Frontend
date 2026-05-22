import React from "react";
import Navbar from "./component/Navabr";

const Layout = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Header Section */}
      <section className="min-h-[91vh] flex items-center justify-center px-6 bg-gradient-to-br from-black via-gray-900 to-cyan-900">
    
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to{" "}
              <span className="text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]">
                E.com
              </span>
            </h1>

            <p className="text-gray-300 text-lg">
              Your one-stop destination for groceries, electronics, and more.
              Shop smarter with fast delivery and the best deals.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition duration-300 shadow-[0_0_15px_#22d3ee]">
                Shop Now
              </button>
              <button className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition duration-300 shadow-[0_0_10px_#22d3ee]">
                Explore
              </button>
            </div>
          </div>

          {/* Right Image Section */}
         
        </div>
      </section>

      {/* Tailwind Animation */}
      {/* <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style> */}
    </div>
  );
};

export default Layout;