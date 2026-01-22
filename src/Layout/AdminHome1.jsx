import React from 'react';
import { 
  Users, 
  UserCheck, 
  Book, 
  FileText, 
  DollarSign, 
  PieChart, 
  Layers, 
  MoreHorizontal, 
  Search, 
  Bell, 
  Settings,
  ArrowUp,
  ArrowDown,
  Clock,
  AlertTriangle,
  MessageSquare,
  FileWarning
} from 'lucide-react';
import { motion } from 'framer-motion';
import dashboardData from '../daat/AdminHome1.json';
import AdminNavbar from './AdminNavbar'
import { div } from 'framer-motion/client';
// Icon mapping
const iconMap = {
  Users: Users,
  UserCheck: UserCheck,
  Book: Book,
  FileText: FileText,
  DollarSign: DollarSign,
  PieChart: PieChart,
  Layers: Layers
};

const AdminHome1 = () => {
  return (
    <div>
    
    <div className="h-screen overflow-y-auto bg-slate-100 p-4">
      {/* Header */}


      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* Top Stats Cards */}
        {dashboardData.statsCards.map((card) => {
          const Icon = iconMap[card.icon];
          const colorClasses = {
            blue: "bg-blue-50 text-blue-600",
            green: "bg-emerald-50 text-emerald-600",
            purple: "bg-purple-50 text-purple-600",
            orange: "bg-orange-50 text-orange-600"
          };
          
          return (
            <motion.div 
              key={card.id}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-3 rounded-xl shadow-sm border border-gray-300"
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-lg ${colorClasses[card.color]}`}>
                  <Icon className="w-3 h-3" />
                </div>
                {card.badge && (
                  <span className="text-xs font-medium bg-gray-300 px-2 py-1 rounded-full text-gray-600">
                    {card.badge}
                  </span>
                )}
              </div>
              <div className="mt-2">
                <h3 className="text-gray-500 text-sm font-medium">{card.title}</h3>
                <p className="text-2xl font-bold text-slate-800 mt-1">{card.count}</p>
              </div>
            </motion.div>
          );
        })}

        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-sm border border-gray-300">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Recent Activities</h2>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-gray-100 rounded"><ArrowUp className="w-4 h-4 text-gray-400" /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><ArrowDown className="w-4 h-4 text-gray-400" /></button>
            </div>
          </div>
          <div className="space-y-6">
            {dashboardData.recentActivities.map((activity) => (
              <motion.div 
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-4"
              >
                <img src={activity.avatar} alt={activity.user} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                <div className="flex-1">
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">{activity.user}</span> {activity.action}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student Performance Chart (Custom CSS Implementation) */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-sm border border-gray-300">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Student Performance</h2>
            <select className="text-xs border-none bg-gray-50 rounded-lg px-2 py-1 text-gray-500 focus:ring-0 cursor-pointer">
              <option>Last 6 months</option>
            </select>
          </div>
          
          <div className="flex items-center gap-4 mb-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-indigo-400"></span>
              <span>MCQ</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-emerald-400"></span>
              <span>Finals</span>
            </div>
          </div>

          <div className="h-48 flex items-end justify-between gap-2 pt-4">
            {dashboardData.studentPerformance.data.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                <div className="flex gap-1 items-end w-full justify-center h-full relative">
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    MCQ: {item.mcq}% | Final: {item.final}%
                  </div>
                  
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${item.mcq}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-3 bg-indigo-400 rounded-t-sm hover:bg-indigo-500 transition-colors"
                  ></motion.div>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${item.final}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="w-3 bg-emerald-400 rounded-t-sm hover:bg-emerald-500 transition-colors"
                  ></motion.div>
                </div>
                <span className="text-xs text-gray-400 font-medium">{dashboardData.studentPerformance.months[index]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mid Stats Cards */}
        {dashboardData.midStats.map((stat) => {
          const Icon = iconMap[stat.icon];
          const bgColors = {
            blue: "bg-blue-500",
            green: "bg-emerald-400",
            indigo: "bg-indigo-500",
            purple: "bg-purple-500"
          };
          
          return (
            <motion.div 
              key={stat.id}
              whileHover={{ scale: 1.02 }}
              className={`${bgColors[stat.bg]} p-6 rounded-xl shadow-lg text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Icon className="w-16 h-16" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 opacity-90">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{stat.title}</span>
                </div>
                <div className="flex items-end gap-2">
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <span className="text-xs opacity-80 mb-1 bg-white/20 px-2 py-0.5 rounded">{stat.sub}</span>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Recent Purchases Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Recent Purchases</h2>
            <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">Buyer</th>
                  <th className="px-4 py-3">Program</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3 rounded-r-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.recentPurchases.map((purchase) => (
                  <tr key={purchase.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 font-medium text-gray-900">{purchase.buyer}</td>
                    <td className="px-4 py-4 text-gray-500">{purchase.program}</td>
                    <td className="px-4 py-4 font-bold text-gray-700">{purchase.price}</td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        purchase.status === 'Paid' ? 'bg-green-100 text-green-700' :
                        purchase.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {purchase.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column Widgets */}
        <div className="lg:col-span-2 space-y-6">
          {/* Pending Requests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div whileHover={{ y: -2 }} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <FileWarning className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{dashboardData.supportRequests.refunds}</h3>
                <p className="text-xs text-gray-500">Pending Refund Requests</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{dashboardData.supportRequests.tickets}</h3>
                <p className="text-xs text-gray-500">Pending Support Tickets</p>
              </div>
            </motion.div>
          </div>

          {/* Expiring Notices */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-800">Expiring Notices</h2>
              <button className="p-1 hover:bg-gray-100 rounded"><MoreHorizontal className="w-4 h-4 text-gray-400" /></button>
            </div>
            <div className="space-y-3">
              {dashboardData.notices.map((notice) => (
                <div key={notice.id} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-800">{notice.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded">{notice.tag}</span>
                      <span className="text-xs text-gray-500">Deadline approaching</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-4">
            {dashboardData.footerStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
                  stat.color === 'red' ? 'bg-red-100 text-red-500' :
                  stat.color === 'blue' ? 'bg-blue-100 text-blue-500' :
                  'bg-orange-100 text-orange-500'
                }`}>
                  <Bell className="w-4 h-4" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">{stat.count}</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminHome1;
