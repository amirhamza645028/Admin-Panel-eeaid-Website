import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiSearch, FiBell, FiMail, FiChevronDown } from "react-icons/fi";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const AdminNavbar = ({ isCollapsed, setIsCollapsed }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`flex justify-between items-center px-6 py-3 shadow-sm border transition-all duration-300 bg-white border-gray-100 dark:bg-[#1e293b] dark:border-slate-800`}>
      
      {/* Left Side: Collapse Button & Title */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-2 rounded-xl transition-colors duration-200 group hover:bg-blue-50 dark:hover:bg-slate-700`}
        >
          <HiOutlineMenuAlt2 className={`w-6 h-6 text-gray-600 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-white`} />
        </button>
        <h1 className={`text-xl font-bold hidden lg:block text-slate-800 dark:text-slate-200`}>Dashboard</h1>
      </div>

      {/* Center: Animated Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className={`relative flex items-center transition-all duration-300 rounded-full px-4 py-2 ${
          isSearchFocused ? `ring-2 ring-blue-500 shadow-md bg-white dark:bg-slate-900` : `bg-gray-100 dark:bg-slate-800`
        }`}>
          <FiSearch className={`w-5 h-5 ${isSearchFocused ? "text-blue-500" : "text-gray-400 dark:text-slate-500"}`} />
          <input
            type="text"
            placeholder="Search everything..."
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className={`bg-transparent border-none focus:ring-0 w-full ml-3 text-sm placeholder-gray-400 outline-none text-gray-700 dark:text-slate-300`}
          />
        </div>
      </div>

      {/* Right Side: Icons & Profile */}
      <div className="flex items-center gap-3">

        {/* Theme Toggle Button */}
        <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-xl border transition-all duration-300 bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-yellow-400 dark:hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]`}
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        {/* Notification Icons */}
        <div className={`items-center gap-1 mr-2 border-r pr-4 hidden sm:flex border-gray-200 dark:border-slate-700`}>
          <button className={`p-2 rounded-full transition-all relative text-gray-500 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white`}>
            <FiMail className="w-5 h-5" />
            <span className={`absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800`}></span>
          </button>
          <button className={`p-2 rounded-full transition-all relative text-gray-500 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white`}>
            <FiBell className="w-5 h-5" />
            <span className={`absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white dark:border-slate-800`}></span>
          </button>
        </div>

        {/* Profile Details */}
        <div className={`flex items-center gap-3 cursor-pointer p-1.5 rounded-xl transition-all group hover:bg-gray-50 dark:hover:bg-slate-800`}>
          <div className="text-right hidden md:block">
            <p className={`text-sm font-bold leading-tight text-slate-800 dark:text-slate-200`}>Admin User</p>
            <p className={`text-[11px] font-medium text-gray-500 dark:text-slate-400`}>Super Admin</p>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white font-bold shadow-blue-200 shadow-lg group-hover:scale-105 transition-transform">
              AD
            </div>
            {/* Online Status Dot */}
            <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 rounded-full border-white dark:border-slate-900`}></div>
          </div>
          
          <FiChevronDown className={`transition-colors text-gray-400 group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-white`} />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;