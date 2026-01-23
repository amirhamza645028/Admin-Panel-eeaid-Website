import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, Users, BookOpen, Package, 
  UserCircle, LogOut, ChevronRight, Settings
} from "lucide-react";
import icon from '../../assets/favicon.ico';
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
      className={`h-screen sticky top-0 left-0 shadow-2xl z-50 transition-all duration-300 flex flex-col bg-white text-gray-800 border-r border-gray-200`}
    >
      {/* Fixed Header - Logo & Title */}
      <div className={`p-2 flex items-center justify-center gap-3 border-b shrink-0 border-gray-200`}>
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
            <h2 className={`font-bold tracking-wide leading-tight text-2xl text-slate-800`}>
              Exclusive
            </h2>
            <h2 className={`text-sm font-bold tracking-wide leading-tight text-slate-600`}>
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
                <summary className={`flex items-center gap-2 px-1 py-2.5 rounded-xl transition-all duration-300 relative overflow-hidden border group/link border-transparent bg-white hover:bg-blue-50 hover:border-blue-200 ${isCollapsed ? 'justify-center' : ''}`}>
                  <item.icon size={20} className={`shrink-0 transition-all duration-300 group-hover:scale-110 text-blue-600 group-hover:text-orange-500`} />
                  
                  {!isCollapsed && (
                    <>
                      <span className={`flex-1 font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 text-slate-700 group-hover:text-blue-600`}>
                        {item.title}
                      </span>
                      <ChevronRight size={16} className={`transition-all duration-300 shrink-0 text-gray-400 group-open:rotate-90 group-hover:text-blue-600`} />
                    </>
                  )}
                  
                  {isCollapsed && (
                    <div className={`absolute left-16 text-xs py-2 px-2 rounded-lg opacity-0 group-hover/main:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap z-50 bg-slate-800 text-white shadow-lg`}>
                      {item.title}
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1 h-1 rotate-45 bg-slate-800`}></div>
                    </div>
                  )}
                  
                  {/* Bottom Border on Hover */}
                  <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-orange-500`} />
                </summary>
                
                {!isCollapsed && (
                  <div className={`ml-6 mt-1 space-y-0.5 border-l-2 pl-3 py-1 border-gray-200`}>
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-1 py-2.5 rounded-xl transition-all duration-300 relative group/sub ${
                            isActive 
                              ? 'text-blue-600 font-bold' 
                              : 'text-gray-500 hover:text-blue-600 hover:translate-x-1'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0 ${
                              isActive ? 'bg-blue-600' : 'bg-gray-400 group-hover/sub:bg-blue-600'
                            }`} />
                            <span className="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">{subItem.title}</span>
                            {/* Bottom Border Animation */}
                            <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                              isActive ? 'w-full' : 'w-0 group-hover/sub:w-full'} bg-gradient-to-r from-blue-500 to-orange-500`
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
                      ? 'bg-blue-50 border-blue-200 text-blue-600' 
                      : `border-transparent bg-white hover:bg-blue-50 hover:border-blue-200`
                  } ${isCollapsed ? 'justify-center' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon 
                      size={20} 
                      className={`shrink-0 transition-all duration-300 group-hover/link:scale-110 ${
                        isActive 
                          ? 'text-blue-600 scale-110' 
                          : 'text-gray-500 group-hover/link:text-blue-600'
                      }`} 
                    />
                    {!isCollapsed && (
                      <span className={`font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis ${
                        isActive 
                          ? 'text-blue-600' 
                          : 'text-slate-600 group-hover/link:text-blue-600'
                      }`}>
                        {item.title}
                      </span>
                    )}
                    {isCollapsed && (
                      <div className={`absolute left-16 text-xs py-2 px-3 rounded-lg opacity-0 group-hover/main:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap z-50 bg-slate-800 text-white shadow-lg`}>
                        {item.title}
                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 rotate-45 bg-slate-800`}></div>
                      </div>
                    )}
                    {/* Bottom Border Animation with Logo Gradient */}
                    <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover/link:w-full'} bg-gradient-to-r from-blue-500 to-orange-500`
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