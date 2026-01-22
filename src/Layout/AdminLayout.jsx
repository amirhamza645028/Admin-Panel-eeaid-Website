import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import AdminNavbar from "../Layout/AdminNavbar";

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen  bg-slate-50">
      
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