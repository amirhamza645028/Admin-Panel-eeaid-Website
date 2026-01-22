// import dashboardData from "../../../data/dashboard.json";

import { useState } from "react";
import dashboardData from "../../../daat/dashboard.json"
const Dashboard = () => {
  const { stats, recentStudents } = dashboardData;
//   const [loading, setLoading]= useState[true]

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="text-sm text-gray-500">{item.title}</h2>
              <p className="text-3xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Students Table */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title mb-4">Recently Registered Students</h2>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;


