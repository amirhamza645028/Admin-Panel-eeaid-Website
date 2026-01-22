import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiSearch, FiBell, FiMail, FiChevronDown } from "react-icons/fi";

const AdminNavbar = ({ isCollapsed, setIsCollapsed }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white px-6 py-3  shadow-sm border border-gray-100 transition-all duration-300">
      
      {/* Left Side: Collapse Button & Title */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-blue-50 rounded-xl transition-colors duration-200 group"
        >
          <HiOutlineMenuAlt2 className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
        </button>
        <h1 className="text-xl font-bold text-slate-800 hidden lg:block">Dashboard</h1>
      </div>

      {/* Center: Animated Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className={`relative flex items-center transition-all duration-300 rounded-full px-4 py-2 ${
          isSearchFocused ? "bg-white ring-2 ring-blue-500 shadow-md" : "bg-gray-100"
        }`}>
          <FiSearch className={`w-5 h-5 ${isSearchFocused ? "text-blue-500" : "text-gray-400"}`} />
          <input
            type="text"
            placeholder="Search everything..."
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="bg-transparent border-none focus:ring-0 w-full ml-3 text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>
      </div>

      {/* Right Side: Icons & Profile */}
      <div className="flex items-center gap-3">
        {/* Notification Icons */}
        <div className="flex items-center gap-1 mr-2 border-r pr-4 hidden sm:flex">
          <button className="p-2 hover:bg-blue-50 rounded-full text-gray-500 hover:text-blue-600 transition-all relative">
            <FiMail className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 hover:bg-blue-50 rounded-full text-gray-500 hover:text-blue-600 transition-all relative">
            <FiBell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        {/* Profile Details */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-xl transition-all group">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-slate-800 leading-tight">Admin User</p>
            <p className="text-[11px] text-gray-500 font-medium">Super Admin</p>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white font-bold shadow-blue-200 shadow-lg group-hover:scale-105 transition-transform">
              AD
            </div>
            {/* Online Status Dot */}
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          
          <FiChevronDown className="text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;