import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, Users, BookOpen, Package, 
  UserCircle, LogOut, ChevronRight, Settings
} from "lucide-react";
import icon from '../../assets/favicon.ico';
import { useTheme } from "../../context/ThemeContext";
import useWindowSize from "../../hooks/useWindowSize";

const AdminSidebar = ({ isCollapsed }) => {
  const { width } = useWindowSize();

  const sidebarWidth = width < 768 ? (isCollapsed ? "50px" : "200px") : (isCollapsed ? "60px" : "250px");

  const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, path: "/" },
    {
      title: "User Management",
      icon: Users,
      subItems: [
        { title: "Students", path: "/student-deatails" },
        { title: "Teachers", path: "/teachers" },
        { title: "Roles & Permissions", path: "/roles" }
      ]
    },
    {
      title: "Academic Management",
      icon: BookOpen,
      subItems: [
        { title: "Subjects", path: "/subjects" },
        { title: "Topics", path: "/topics" },
        { title: "Question Bank", path: "/questions" },
        { title: "Exams", path: "/exams" }
      ]
    },
    {
      title: "Programs & Sales",
      icon: Package,
      subItems: [
        { title: "Programs", path: "/programs" },
        { title: "Purchases", path: "/purchases" },
        { title: "Coupons", path: "/coupons" },
        { title: "Invoices", path: "/invoices" }
      ]
    },
    { title: "Settings", icon: Settings, path: "/settings" },
    { title: "Profile", icon: UserCircle, path: "/profile" },
    { title: "Logout", icon: LogOut, path: "/logout" }
  ];

  return (
    <motion.div 
      initial={false}
      animate={{ width: sidebarWidth }}
      className={`h-screen sticky top-0 left-0 shadow-2xl z-50 transition-all duration-300 flex flex-col bg-white text-gray-800 border-r border-gray-200 dark:bg-[#1a2332] dark:text-white dark:border-r dark:border-[#2F6FDB]/30`}
    >
      {/* Fixed Header - Logo & Title */}
      <div className={`p-2 flex items-center justify-center gap-3 border-b shrink-0 border-gray-200 dark:border-[#2F6FDB]/30`}>
        <div className="p-2 rounded-2xl flex items-center justify-center shrink-0 transform hover:scale-110 transition-transform duration-300">
          <img
            src={icon}
            alt="Admin Logo"
            className="w-11 h-11 object-contain"
          />
        </div>
        
        {!isCollapsed && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="hidden md:flex flex-col"
          >
            <h2 className={`font-bold tracking-wide leading-tight text-2xl text-slate-800 dark:bg-gradient-to-r dark:from-white dark:via-[#2F6FDB] dark:to-[#F5A623] dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_10px_rgba(47,111,219,0.5)]`}>
              Exclusive
            </h2>
            <h2 className={`text-sm font-bold tracking-wide leading-tight text-slate-600 dark:bg-gradient-to-r dark:from-white dark:via-[#2F6FDB] dark:to-[#F5A623] dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_10px_rgba(47,111,219,0.5)]`}>
              Education Aid
            </h2>
          </motion.div>
        )}
      </div>

      {/* Scrollable Menu Items */}
      <nav className={`flex-1 overflow-y-auto overflow-x-hidden pl-1 mt-1 space-y-0.5 scrollbar-thin`}>
        {menuItems.map((item, index) => (
          <div key={index} className="relative group/main">
            {item.subItems ? (
              <details className={`group ${isCollapsed ? 'pointer-events-none' : ''}`}>
                <summary className={`flex items-center gap-2 px-1 py-2.5 rounded-xl transition-all duration-300 relative overflow-hidden border group/link border-transparent bg-white hover:bg-blue-50 hover:border-blue-200 dark:bg-[#1a2332] dark:hover:bg-[#2F6FDB]/10 dark:hover:border-[#2F6FDB]/30 ${isCollapsed ? 'justify-center' : ''}`}>
                  <item.icon size={20} className={`shrink-0 transition-all duration-300 group-hover:scale-110 text-blue-600 group-hover:text-orange-500 dark:text-[#2F6FDB] dark:group-hover:text-[#F5A623]`} />
                  
                  {!isCollapsed && (
                    <>
                      <span className={`flex-1 font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 text-slate-700 group-hover:text-blue-600 dark:bg-gradient-to-r dark:from-white dark:via-[#2F6FDB] dark:to-[#F5A623] dark:bg-clip-text dark:text-transparent dark:group-hover:from-[#F5A623] dark:group-hover:via-[#2F6FDB] dark:group-hover:to-white`}>
                        {item.title}
                      </span>
                      <ChevronRight size={16} className={`transition-all duration-300 shrink-0 text-gray-400 group-open:rotate-90 group-hover:text-blue-600 dark:text-[#2F6FDB] dark:group-open:rotate-90 dark:group-hover:text-[#F5A623]`} />
                    </>
                  )}
                  
                  {isCollapsed && (
                    <div className={`absolute left-16 text-xs py-2 px-2 rounded-lg opacity-0 group-hover/main:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap z-50 bg-slate-800 text-white shadow-lg dark:bg-gradient-to-r dark:from-[#2F6FDB] dark:to-[#F5A623] dark:text-white dark:shadow-[0_0_15px_rgba(47,111,219,0.5)]`}>
                      {item.title}
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1 h-1 rotate-45 bg-slate-800 dark:bg-[#2F6FDB]`}></div>
                    </div>
                  )}
                  
                  {/* Bottom Border on Hover */}
                  <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-orange-500 dark:bg-gradient-to-r dark:from-white dark:via-[#2F6FDB] dark:to-[#F5A623] dark:shadow-[0_0_8px_rgba(47,111,219,0.8)]`} />
                </summary>
                
                {!isCollapsed && (
                  <div className={`ml-6 mt-1 space-y-0.5 border-l-2 pl-3 py-1 border-gray-200 dark:border-[#2F6FDB]/30`}>
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-1 py-2.5 rounded-xl transition-all duration-300 relative group/sub ${
                            isActive 
                              ? 'text-blue-600 font-bold dark:bg-gradient-to-r dark:from-white dark:via-[#2F6FDB] dark:to-[#F5A623] dark:bg-clip-text dark:text-transparent' 
                              : 'text-gray-500 hover:text-blue-600 hover:translate-x-1 dark:text-[#2F6FDB] dark:hover:text-[#F5A623] dark:hover:translate-x-1'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0 ${
                              isActive ? 'bg-blue-600 dark:bg-[#F5A623] dark:shadow-[0_0_6px_rgba(245,166,35,0.8)]' : 'bg-gray-400 group-hover/sub:bg-blue-600 dark:bg-[#2F6FDB] dark:group-hover/sub:bg-[#F5A623]'
                            }`} />
                            <span className="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">{subItem.title}</span>
                            {/* Bottom Border Animation */}
                            <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                              isActive ? 'w-full shadow-[0_0_8px_rgba(47,111,219,0.8)]' : 'w-0 group-hover/sub:w-full'} bg-gradient-to-r from-blue-500 to-orange-500 dark:bg-gradient-to-r dark:from-white dark:via-[#2F6FDB] dark:to-[#F5A623]`
                            } />
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>
                )}
              </details>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-1 py-2.5 rounded-xl transition-all duration-300 relative overflow-hidden border group/link ${
                    isActive 
                      ? 'bg-blue-50 border-blue-200 text-blue-600 dark:bg-[#2F6FDB]/20 dark:border-[#2F6FDB]/50 dark:shadow-[0_0_15px_rgba(47,111,219,0.3)]' 
                      : `border-transparent bg-white hover:bg-blue-50 hover:border-blue-200 dark:bg-[#1a2332] dark:hover:bg-[#2F6FDB]/10 dark:hover:border-[#2F6FDB]/30`
                  } ${isCollapsed ? 'justify-center' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon 
                      size={20} 
                      className={`shrink-0 transition-all duration-300 group-hover/link:scale-110 ${
                        isActive 
                          ? 'text-blue-600 scale-110 dark:text-[#F5A623] dark:scale-110' 
                          : 'text-gray-500 group-hover/link:text-blue-600 dark:text-[#2F6FDB] dark:group-hover/link:text-[#F5A623]'
                      }`} 
                    />
                    {!isCollapsed && (
                      <span className={`font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis ${
                        isActive 
                          ? 'text-blue-600 dark:bg-gradient-to-r dark:from-white dark:via-[#2F6FDB] dark:to-[#F5A623] dark:bg-clip-text dark:text-transparent' 
                          : 'text-slate-600 group-hover/link:text-blue-600 dark:bg-gradient-to-r dark:from-white dark:via-[#2F6FDB] dark:to-[#F5A623] dark:bg-clip-text dark:text-transparent dark:group-hover/link:from-[#F5A623] dark:group-hover/link:via-[#2F6FDB] dark:group-hover/link:to-white'
                      }`}>
                        {item.title}
                      </span>
                    )}
                    {isCollapsed && (
                      <div className={`absolute left-16 text-xs py-2 px-3 rounded-lg opacity-0 group-hover/main:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap z-50 bg-slate-800 text-white shadow-lg dark:bg-gradient-to-r dark:from-[#2F6FDB] dark:to-[#F5A623] dark:text-white dark:shadow-[0_0_15px_rgba(47,111,219,0.5)]`}>
                        {item.title}
                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 rotate-45 bg-slate-800 dark:bg-[#2F6FDB]`}></div>
                      </div>
                    )}
                    {/* Bottom Border Animation with Logo Gradient */}
                    <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover/link:w-full'} bg-gradient-to-r from-blue-500 to-orange-500 dark:bg-gradient-to-r dark:from-white dark:via-[#2F6FDB] dark:to-[#F5A623] dark:shadow-[0_0_8px_rgba(47,111,219,0.8)]`
                    } />
                  </>
                )}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </motion.div>
  );
};

export default AdminSidebar;