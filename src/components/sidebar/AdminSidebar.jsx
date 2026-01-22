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
        { title: "Roles & Permissions", path: "/admin/roles" }
      ]
    },
    {
      title: "Academic Management",
      icon: BookOpen,
      subItems: [
        { title: "Subjects", path: "/admin/subjects" },
        { title: "Topics", path: "/admin/topics" },
        { title: "Question Bank", path: "/admin/questions" },
        { title: "Exams", path: "/admin/exams" }
      ]
    },
    {
      title: "Programs & Sales",
      icon: Package,
      subItems: [
        { title: "Programs", path: "/programs" },
        { title: "Purchases", path: "/admin/purchases" },
        { title: "Coupons", path: "/admin/coupons" },
        { title: "Invoices", path: "/admin/invoices" }
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
      className="h-screen sticky top-0 left-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl border-r border-slate-700/50 z-50 transition-all duration-300 flex flex-col"
    >
      {/* Fixed Header - Logo & Title */}
      <div className="p-2 flex items-center justify-center gap-3 border-b border-slate-700/50  shrink-0">
        <div className="
        
        p-2 rounded-2xl flex items-center justify-center  shrink-0 transform hover:scale-110 transition-transform duration-300">
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
            className="flex flex-col"
          >
            <h2 className=" font-bold tracking-wide bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] leading-tight text-2xl">
              Exclusive
            </h2>
            <h2 className="text-sm font-bold tracking-wide bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] leading-tight">
              Education Aid
            </h2>
          </motion.div>
        )}
      </div>

      {/* Scrollable Menu Items */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden pl-1 mt- space-y-0.5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent hover:scrollbar-thumb-slate-600">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group/main">
            {item.subItems ? (
              <details className={`group ${isCollapsed ? 'pointer-events-none' : ''}`}>
                <summary className="flex items-center gap-2 px-1 py-2.5 rounded-xl cursor-pointer bg-slate-800/30 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 transition-all duration-300 list-none relative overflow-hidden border border-transparent hover:border-cyan-500/30 group">
                  <item.icon size={20} className="text-slate-400 group-hover:text-cyan-400 shrink-0 transition-all duration-300 group-hover:scale-110" />
                  
                  {!isCollapsed ? (
                    <>
                      <span className="flex-1 font-semibold text-xs text-slate-300 group-hover:text-white whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-300">
                        {item.title}
                      </span>
                      <ChevronRight size={16} className="text-slate-500 group-open:rotate-90 group-hover:text-cyan-400 transition-all duration-300 shrink-0" />
                    </>
                  ) : (
                    <div className="absolute left-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs py-2 px-2 rounded-lg opacity-0 group-hover/main:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap z-50 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                      {item.title}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1 h-1 bg-cyan-600 rotate-45"></div>
                    </div>
                  )}
                  
                  {/* Bottom Border on Hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] transition-all duration-300 w-0 group-hover:w-full shadow-[0_0_8px_rgba(47,111,219,0.8)]" />
                </summary>
                
                {!isCollapsed && (
                  <div className="ml-6 mt-1 space-y-0.5 border-l-2 border-slate-700/50 pl-3 py-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 relative group/sub ${
                            isActive 
                              ? "text-cyan-400" 
                              : "text-slate-400 hover:text-white hover:translate-x-1"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0 ${
                              isActive ? 'bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]' : 'bg-slate-500 group-hover/sub:bg-cyan-400'
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
                      ? "bg-gradient-to-r from-cyan-600/30 to-blue-600/30 text-cyan-400 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
                      : "bg-slate-800/30 text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 border-transparent hover:border-cyan-500/30"
                  } ${isCollapsed ? 'justify-center' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon 
                      size={20} 
                      className={`shrink-0 transition-all duration-300 ${
                        isActive 
                          ? 'text-cyan-400 scale-110' 
                          : 'text-slate-400 group-hover/link:text-cyan-400 group-hover/link:scale-110'
                      }`} 
                    />
                    {!isCollapsed ? (
                      <span className="font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</span>
                    ) : (
                      <div className="absolute left-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover/main:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap z-50 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        {item.title}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-cyan-600 rotate-45"></div>
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
          background: #475569;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </motion.div>
  );
};

export default AdminSidebar;