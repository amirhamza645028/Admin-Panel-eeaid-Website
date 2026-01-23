import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, Users, BookOpen, Package, 
  UserCircle, LogOut, ChevronRight, Settings
} from "lucide-react";
import icon from '../../assets/favicon.ico';

const AdminSidebar = ({ isCollapsed }) => {
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
      animate={{ width: isCollapsed ? "50px" : "200px" }}
      className="h-screen sticky top-0 left-0 bg-[#1a2332] text-white shadow-2xl border-r border-[#2F6FDB]/30 z-50 transition-all duration-300 flex flex-col"
    >
      {/* Fixed Header - Logo & Title */}
      <div className="p-2 flex items-center justify-center gap-3 border-b border-[#2F6FDB]/30 shrink-0">
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
            <h2 className="font-bold tracking-wide bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(47,111,219,0.5)] leading-tight text-2xl">
              Exclusive
            </h2>
            <h2 className="text-sm font-bold tracking-wide bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(47,111,219,0.5)] leading-tight">
              Education Aid
            </h2>
          </motion.div>
        )}
      </div>

      {/* Scrollable Menu Items */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden pl-1 mt-1 space-y-0.5 scrollbar-thin scrollbar-thumb-[#2F6FDB] scrollbar-track-transparent hover:scrollbar-thumb-[#F5A623]">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group/main">
            {item.subItems ? (
              <details className={`group ${isCollapsed ? 'pointer-events-none' : ''}`}>
                <summary className="flex items-center gap-2 px-1 py-2.5 rounded-xl cursor-pointer bg-[#1a2332] hover:bg-[#2F6FDB]/10 transition-all duration-300 list-none relative overflow-hidden border border-transparent hover:border-[#2F6FDB]/30 group">
                  <item.icon size={20} className="text-[#2F6FDB] group-hover:text-[#F5A623] shrink-0 transition-all duration-300 group-hover:scale-110" />
                  
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 font-semibold text-xs bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent group-hover:from-[#F5A623] group-hover:via-[#2F6FDB] group-hover:to-white whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300">
                        {item.title}
                      </span>
                      <ChevronRight size={16} className="text-[#2F6FDB] group-open:rotate-90 group-hover:text-[#F5A623] transition-all duration-300 shrink-0" />
                    </>
                  )}
                  
                  {isCollapsed && (
                    <div className="absolute left-16 bg-gradient-to-r from-[#2F6FDB] to-[#F5A623] text-white text-xs py-2 px-2 rounded-lg opacity-0 group-hover/main:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap z-50 shadow-[0_0_15px_rgba(47,111,219,0.5)]">
                      {item.title}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1 h-1 bg-[#2F6FDB] rotate-45"></div>
                    </div>
                  )}
                  
                  {/* Bottom Border on Hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] transition-all duration-300 w-0 group-hover:w-full shadow-[0_0_8px_rgba(47,111,219,0.8)]" />
                </summary>
                
                {!isCollapsed && (
                  <div className="ml-6 mt-1 space-y-0.5 border-l-2 border-[#2F6FDB]/30 pl-3 py-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 relative group/sub ${
                            isActive 
                              ? "bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent" 
                              : "text-[#2F6FDB] hover:text-[#F5A623] hover:translate-x-1"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0 ${
                              isActive ? 'bg-[#F5A623] shadow-[0_0_6px_rgba(245,166,35,0.8)]' : 'bg-[#2F6FDB] group-hover/sub:bg-[#F5A623]'
                            }`} />
                            <span className="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">{subItem.title}</span>
                            {/* Bottom Border Animation */}
                            <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] transition-all duration-300 ${
                              isActive ? 'w-full shadow-[0_0_8px_rgba(47,111,219,0.8)]' : 'w-0 group-hover/sub:w-full'
                            }`} />
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
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 relative overflow-hidden border group/link ${
                    isActive 
                      ? "bg-[#2F6FDB]/20 border-[#2F6FDB]/50 shadow-[0_0_15px_rgba(47,111,219,0.3)]" 
                      : "bg-[#1a2332] hover:bg-[#2F6FDB]/10 border-transparent hover:border-[#2F6FDB]/30"
                  } ${isCollapsed ? 'justify-center' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon 
                      size={20} 
                      className={`shrink-0 transition-all duration-300 ${
                        isActive 
                          ? 'text-[#F5A623] scale-110' 
                          : 'text-[#2F6FDB] group-hover/link:text-[#F5A623] group-hover/link:scale-110'
                      }`} 
                    />
                    {!isCollapsed && (
                      <span className={`font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis ${
                        isActive 
                          ? 'bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent group-hover/link:from-[#F5A623] group-hover/link:via-[#2F6FDB] group-hover/link:to-white'
                      }`}>
                        {item.title}
                      </span>
                    )}
                    {isCollapsed && (
                      <div className="absolute left-16 bg-gradient-to-r from-[#2F6FDB] to-[#F5A623] text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover/main:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap z-50 shadow-[0_0_15px_rgba(47,111,219,0.5)]">
                        {item.title}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-[#2F6FDB] rotate-45"></div>
                      </div>
                    )}
                    {/* Bottom Border Animation with Logo Gradient */}
                    <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] transition-all duration-300 ${
                      isActive ? 'w-full shadow-[0_0_8px_rgba(47,111,219,0.8)]' : 'w-0 group-hover/link:w-full'
                    }`} />
                  </>
                )}
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #2F6FDB;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #F5A623;
        }
      `}</style>
    </motion.div>
  );
};

export default AdminSidebar;