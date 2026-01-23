import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Sun, Moon, LogOut, User, Bell, Menu, X } from "lucide-react"; 
import logo from '../../src/assets/favicon.ico';
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
    const location = useLocation();
    const { isDark, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { 
            name: "Dashboard", 
            path: "/user-dashboard", 
            activeColor: "border-cyan-400 text-cyan-400",
            glowColor: "shadow-[0_0_20px_rgba(34,211,238,0.6)]",
            hoverGlow: "hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]",
            barColor: "bg-cyan-400",
            barGlow: "shadow-[0_0_15px_rgba(34,211,238,0.8)]"
        },
        { 
            name: "My Courses", 
            path: "/my-courses", 
            activeColor: "border-purple-400 text-purple-400",
            glowColor: "shadow-[0_0_20px_rgba(168,85,247,0.6)]",
            hoverGlow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]",
            barColor: "bg-purple-400",
            barGlow: "shadow-[0_0_15px_rgba(168,85,247,0.8)]"
        },
        { 
            name: "Academic Records", 
            path: "/academic-records", 
            activeColor: "border-blue-400 text-blue-400",
            glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.6)]",
            hoverGlow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",
            barColor: "bg-blue-400",
            barGlow: "shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        },
        { 
            name: "Financials", 
            path: "/financials", 
            activeColor: "border-emerald-400 text-emerald-400",
            glowColor: "shadow-[0_0_20px_rgba(52,211,153,0.6)]",
            hoverGlow: "hover:shadow-[0_0_15px_rgba(52,211,153,0.4)]",
            barColor: "bg-emerald-400",
            barGlow: "shadow-[0_0_15px_rgba(52,211,153,0.8)]"
        },
        { 
            name: "Settings & Security", 
            path: "/settings-security", 
            activeColor: "border-pink-400 text-pink-400",
            glowColor: "shadow-[0_0_20px_rgba(236,72,153,0.6)]",
            hoverGlow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]",
            barColor: "bg-pink-400",
            barGlow: "shadow-[0_0_15px_rgba(236,72,153,0.8)]"
        },
    ];

    return (
        <>
            <div className={`sticky top-0 z-50 transition-all duration-300 ${
                isDark 
                    ? 'bg-[#0a0e1a] border-b border-slate-800/50' 
                    : 'bg-white border-b border-slate-200'
            }`}>
                <div className=" px-4 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        
                        {/* Logo Section */}
                        <Link to="/user-dashboard" className="flex items-center gap-3 group">
                            <div className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 ${
                                isDark 
                                    ? 'bg-slate-900/60 border border-slate-700/50 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
                                    : 'bg-slate-100 border border-slate-200 group-hover:border-cyan-500'
                            }`}>
                                <img src={logo} alt="EducationAid" className="w-7" />
                            </div>
                            <span className={`font-bold text-xl tracking-tight hidden sm:block ${
                                isDark ? 'text-white' : 'text-slate-900'
                            }`}>
                                Education<span className="text-cyan-400">Aid</span>
                            </span>
                        </Link>

                        {/* Main Navigation - Desktop */}
                        <div className="hidden lg:flex items-center gap-4">
                            {navItems.map((item) => (
                                <div key={item.path} className="relative">
                                    <Link 
                                        to={item.path} 
                                        className={`px-5 py-2 rounded-full border-2 transition-all duration-300 font-semibold text-sm relative ${
                                            location.pathname === item.path 
                                                ? `${item.activeColor} ${item.glowColor} ${isDark ? 'bg-slate-900/40' : 'bg-slate-50'}` 
                                                : `${
                                                    isDark 
                                                        ? `border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 ${item.hoverGlow}` 
                                                        : `border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 ${item.hoverGlow}`
                                                }`
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                    
                                    {/* Active Indicator Bar */}
                                    {location.pathname === item.path && (
                                        <span 
                                            className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full ${item.barColor} ${item.barGlow}`}
                                        ></span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-3">
                            {/* Theme Toggle */}
                            <button 
                                onClick={toggleTheme} 
                                className={`p-2.5 rounded-xl border transition-all duration-300 ${
                                    isDark 
                                        ? 'bg-slate-900/60 border-slate-700/50 text-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]' 
                                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            {/* Notifications */}
                            <button 
                                className={`p-2.5 rounded-xl border transition-all duration-300 relative ${
                                    isDark 
                                        ? 'bg-slate-900/60 border-slate-700/50 text-slate-400 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
                                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                <Bell size={20} />
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                            </button>

                            {/* Profile Dropdown - Hidden on mobile */}
                            <div className="dropdown dropdown-end hidden lg:block">
                                <label tabIndex={0} className="cursor-pointer block relative">
                                    <div className={`w-10 h-10 rounded-xl border-2 p-0.5 transition-all duration-300 hover:scale-105 ${
                                        isDark 
                                            ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
                                            : 'border-cyan-500'
                                    }`}>
                                        <img 
                                            src={logo} 
                                            alt="Profile" 
                                            className={`w-full h-full rounded-lg object-cover ${
                                                isDark ? 'bg-slate-900' : 'bg-slate-100'
                                            }`} 
                                        />
                                    </div>
                                    <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 ${
                                        isDark ? 'border-[#0a0e1a]' : 'border-white'
                                    }`}></span>
                                </label>
                                
                                <ul tabIndex={0} className={`menu dropdown-content mt-4 z-[1] p-3 shadow-2xl rounded-2xl w-56 border ${
                                    isDark 
                                        ? 'bg-[#0f1424] border-slate-800 text-white' 
                                        : 'bg-white border-slate-200 text-slate-800'
                                }`}>
                                    <div className={`px-4 py-3 mb-2 border-b ${
                                        isDark ? 'border-slate-800' : 'border-slate-200'
                                    }`}>
                                        <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Student Portal</p>
                                    </div>
                                    <li>
                                        <Link 
                                            to="/profile" 
                                            className={`py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
                                                isDark 
                                                    ? 'hover:bg-cyan-500/10 hover:text-cyan-400' 
                                                    : 'hover:bg-cyan-50 hover:text-cyan-600'
                                            }`}
                                        >
                                            <User size={18} /> My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/notifications" 
                                            className={`py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
                                                isDark 
                                                    ? 'hover:bg-purple-500/10 hover:text-purple-400' 
                                                    : 'hover:bg-purple-50 hover:text-purple-600'
                                            }`}
                                        >
                                            <Bell size={18} /> Notifications
                                        </Link>
                                    </li>
                                    <div className={`divider my-1 ${
                                        isDark 
                                            ? 'before:bg-slate-800 after:bg-slate-800' 
                                            : 'before:bg-slate-200 after:bg-slate-200'
                                    }`}></div>
                                    <li>
                                        <button className={`py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 ${
                                            isDark 
                                                ? 'text-rose-400 hover:bg-rose-500/10' 
                                                : 'text-rose-600 hover:bg-rose-50'
                                        }`}>
                                            <LogOut size={18} /> Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            {/* Mobile Menu Button */}
                            <button 
                                onClick={toggleMobileMenu}
                                className={`lg:hidden p-2.5 rounded-xl border transition-all duration-300 ${
                                    isDark 
                                        ? 'border-slate-700/50 text-slate-400 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
                                        : 'border-slate-200 text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
                isMobileMenuOpen ? 'visible' : 'invisible'
            }`}>
                {/* Backdrop */}
                <div 
                    onClick={closeMobileMenu}
                    className={`absolute inset-0 transition-opacity duration-300 ${
                        isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                    } ${isDark ? 'bg-black/60' : 'bg-black/40'}`}
                ></div>

                {/* Drawer Content */}
                <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] transition-transform duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } ${isDark ? 'bg-[#0f1424] border-l border-slate-800' : 'bg-white border-l border-slate-200'}`}>
                    
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className={`p-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    Menu
                                </h2>
                                <button 
                                    onClick={closeMobileMenu}
                                    className={`p-2 rounded-lg ${
                                        isDark 
                                            ? 'text-slate-400 hover:text-white hover:bg-slate-800' 
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Profile Section in Mobile */}
                            <div className={`flex items-center gap-3 p-3 rounded-xl ${
                                isDark ? 'bg-slate-900/60' : 'bg-slate-50'
                            }`}>
                                <div className={`w-12 h-12 rounded-xl border-2 p-0.5 ${
                                    isDark 
                                        ? 'border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]' 
                                        : 'border-cyan-500'
                                }`}>
                                    <img 
                                        src={logo} 
                                        alt="Profile" 
                                        className={`w-full h-full rounded-lg object-cover ${
                                            isDark ? 'bg-slate-900' : 'bg-slate-100'
                                        }`} 
                                    />
                                </div>
                                <div>
                                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        Student Name
                                    </p>
                                    <p className="text-xs text-cyan-400">Student Portal</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <nav className="space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeMobileMenu}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                            location.pathname === item.path
                                                ? `${item.activeColor} ${item.glowColor} ${isDark ? 'bg-slate-900/60' : 'bg-slate-50'}`
                                                : `${
                                                    isDark
                                                        ? `text-slate-400 hover:text-white hover:bg-slate-900/40 ${item.hoverGlow}`
                                                        : `text-slate-600 hover:text-slate-900 hover:bg-slate-50 ${item.hoverGlow}`
                                                }`
                                        }`}
                                    >
                                        {location.pathname === item.path && (
                                            <span className={`w-1 h-6 rounded-full ${item.barColor}`}></span>
                                        )}
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                            </nav>

                            {/* Quick Actions */}
                            <div className={`mt-6 pt-6 space-y-2 border-t ${
                                isDark ? 'border-slate-800' : 'border-slate-200'
                            }`}>
                                <Link
                                    to="/profile"
                                    onClick={closeMobileMenu}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                                        isDark
                                            ? 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                                            : 'text-slate-600 hover:text-cyan-600 hover:bg-cyan-50'
                                    }`}
                                >
                                    <User size={18} />
                                    <span>My Profile</span>
                                </Link>
                                
                                <Link
                                    to="/notifications"
                                    onClick={closeMobileMenu}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                                        isDark
                                            ? 'text-slate-400 hover:text-purple-400 hover:bg-purple-500/10'
                                            : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
                                    }`}
                                >
                                    <Bell size={18} />
                                    <span>Notifications</span>
                                </Link>
                            </div>
                        </div>

                        {/* Footer with Logout */}
                        <div className={`p-6 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                            <button 
                                className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                                    isDark
                                        ? 'text-rose-400 bg-rose-500/10 hover:bg-rose-500/20'
                                        : 'text-rose-600 bg-rose-50 hover:bg-rose-100'
                                }`}
                            >
                                <LogOut size={18} />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;