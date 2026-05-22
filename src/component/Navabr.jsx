import React, { useState } from "react";
import { LineChart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="text-2xl font-bold tracking-wide cursor-pointer">
            <span className="text-white hover:text-cyan-400 transition duration-300">
              E<span className="text-cyan-400">.com</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Auth Buttons */}
            <Link to={'/login'}>
              <button className="px-4 py-1 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition duration-300 shadow-[0_0_10px_#22d3ee]">
                Login
              </button>
            </Link>
            <Link to={'/register'}>
              <button className="px-4 py-1 bg-cyan-400 text-black rounded hover:bg-cyan-300 transition duration-300 shadow-[0_0_10px_#22d3ee]">
                Register
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-4">
          <a href="#" className="block nav-link">
            Home
          </a>
          <a href="#" className="block nav-link">
            Shop
          </a>
          <a href="#" className="block nav-link">
            About
          </a>
          <a href="#" className="block nav-link">
            Contact
          </a>

          <button className="w-full px-4 py-2 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition duration-300 shadow-[0_0_10px_#22d3ee]">
            Login
          </button>
          <button className="w-full px-4 py-2 bg-cyan-400 text-black rounded hover:bg-cyan-300 transition duration-300 shadow-[0_0_10px_#22d3ee]">
            Register
          </button>
        </div>
      )}

      {/* Tailwind custom class */}
      <style jsx>{`
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #22d3ee;
          text-shadow:
            0 0 8px #22d3ee,
            0 0 20px #22d3ee;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
