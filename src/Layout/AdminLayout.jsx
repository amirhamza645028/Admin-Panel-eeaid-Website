import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import AdminNavbar from "../Layout/AdminNavbar";
import useWindowSize from "../hooks/useWindowSize";

const AdminLayout = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width < 768;

  const [isCollapsed, setIsCollapsed] = useState(isSmallScreen);

  useEffect(() => {
    setIsCollapsed(isSmallScreen);
  }, [isSmallScreen]);

  return (
    <div className="flex h-screen  bg-slate-50 dark:bg-slate-900">
      
      {/* Fixed Sidebar */}
      <AdminSidebar isCollapsed={isCollapsed} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Fixed Navbar at the Top */}
        <AdminNavbar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        {/* Dynamic Page Content (Scrollable) */}
        <main className="flex-1  ">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;