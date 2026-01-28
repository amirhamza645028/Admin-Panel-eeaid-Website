import React, { useState, useEffect } from 'react';
import CourseDashboards from '../../../../../daat/userData/CourseDashboard.json'
import { 
  FiBook, 
  FiEdit, 
  FiVideo, 
  FiFileText, 
  FiMessageSquare, 
  FiDownload,
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiAlertCircle
} from 'react-icons/fi';
import { motion } from 'framer-motion';

function CourseDashboard() {
  const [dashboardData, setDashboardData] = useState(CourseDashboards);
  const [loading, setLoading] = useState(false);

  const iconComponents = {
    '📚': FiBook,
    '✍️': FiEdit,
    '🎥': FiVideo,
    '📝': FiFileText,
    '💡': FiMessageSquare,
    '📁': FiDownload
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2F6FDB] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl  md:text-4xl font-bold bg-gradient-to-r from-white via-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent mb-2">
            Your Course Dashboard, <span>{dashboardData.user.name}</span>
          </h1>
          <p className="text-gray-600">Track your progress and access learning resources</p>
        </div>

        {/* User Stats Card */}
        <div className="bg-gradient-to-r from-[#2F6FDB] to-[#F5A623] rounded-2xl shadow-xl p-2 mb-4 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Overall Progress</p>
                  <p className="text-2xl font-bold">{dashboardData.user.progress}%</p>
                </div>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-500 shadow-lg"
                  style={{ width: `${dashboardData.user.progress}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <FiCheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Completed Lessons</p>
                  <p className="text-2xl font-bold">{dashboardData.user.completedLessons}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <FiCalendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Next Lesson</p>
                  <p className="text-lg font-semibold truncate">{dashboardData.user.nextLesson}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <FiUsers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Active Students</p>
                  <p className="text-2xl font-bold">{dashboardData.stats.activeUsers}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {dashboardData.quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-4 border-l-4 border-[#2F6FDB] hover:shadow-lg hover:border-[#F5A623] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">{link.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-gray-600">
                    <FiClock className="w-4 h-4" />
                    <span className="text-sm">{link.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{link.topic}</p>
                </div>
                <FiArrowRight className="w-5 h-5 text-[#2F6FDB]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dashboardData.sections.map((section, index) => {
            const IconComponent = iconComponents[section.icon] || FiBook;
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                {/* Hover Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2F6FDB] to-[#F5A623] rounded-2xl opacity-10 group-hover:opacity-100 transition-all duration-500 blur">

                </div>

                {/* Main Card */}
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group-hover:border-transparent transition-all duration-500">
                  {/* Gradient Header */}
                  <div className="h-2 bg-gradient-to-r from-[#2F6FDB] to-[#F5A623]"></div>

                  {/* Card Content */}
                  <div className="p-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#1366f6] to-[#348bfd] text-white shadow-lg">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#2F6FDB] group-hover:to-[#F5A623] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {section.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{section.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div>
                        <p className="text-sm text-gray-500">{section.category}</p>
                        <p className="text-2xl font-bold text-gray-800 mt-1">{section.totalItems}</p>
                      </div>
                      
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#055bef] to-[#026cf6] hover:from-[#5E89C1] hover:to-[#F5A623] text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg group-hover:translate-x-2">
                        <span>Explore</span>
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Completion</span>
                        <span>{Math.min(section.totalItems, 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-[#2F6FDB] to-[#F5A623] transition-all duration-700 shadow-md"
                          style={{ 
                            width: `${Math.min((section.totalItems / 150) * 100, 100)}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2F6FDB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white rounded-xl shadow-md p-2 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#2F6FDB]">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-green-100 to-green-50 rounded-lg">
                <FiTrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completion Rate</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent">{dashboardData.stats.completionRate}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-2 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#2F6FDB]">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg">
                <FiUsers className="w-6 h-6 text-[#2F6FDB]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent">{dashboardData.stats.totalStudents}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-2 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#2F6FDB]">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg">
                <FiCheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Average Score</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent">{dashboardData.stats.avgScore}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-2 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#F5A623]">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg">
                <FiAlertCircle className="w-6 h-6 text-[#F5A623]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Tasks</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#2F6FDB] to-[#F5A623] bg-clip-text text-transparent">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseDashboard