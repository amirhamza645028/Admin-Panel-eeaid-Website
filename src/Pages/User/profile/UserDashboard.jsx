import { 
  BookOpen, Award, TrendingUp, Clock, Target, 
  Calendar, CheckCircle, AlertCircle, BarChart3
} from 'lucide-react';

const UserDashboard = () => {
  const stats = [
    { 
      label: "Course Progress", 
      value: "75%", 
      icon: Target, 
      color: "from-cyan-500 to-cyan-600",
      change: "+5% this week"
    },
    { 
      label: "Total Courses", 
      value: "8", 
      icon: BookOpen, 
      color: "from-purple-500 to-purple-600",
      change: "2 in progress"
    },
    { 
      label: "Certificates", 
      value: "3", 
      icon: Award, 
      color: "from-blue-500 to-blue-600",
      change: "1 pending"
    },
    { 
      label: "Study Hours", 
      value: "124h", 
      icon: Clock, 
      color: "from-emerald-500 to-emerald-600",
      change: "This month"
    }
  ];

  const recentActivity = [
    { 
      title: "Physics Lecture 3", 
      subtitle: "Due Tomorrow ago", 
      time: "2 hours ago",
      status: "pending",
      color: "text-orange-400"
    },
    {
      title: "Chemistry Quiz Completed",
      subtitle: "Score: 95%",
      time: "1 day ago",
      status: "completed",
      color: "text-emerald-400"
    },
    {
      title: "Biology Assignment",
      subtitle: "Submitted",
      time: "2 days ago",
      status: "completed",
      color: "text-blue-400"
    }
  ];

  const upcomingClasses = [
    { subject: "Mathematics", time: "10:00 AM", day: "Today", color: "bg-cyan-500" },
    { subject: "Physics", time: "2:00 PM", day: "Today", color: "bg-purple-500" },
    { subject: "Chemistry", time: "11:00 AM", day: "Tomorrow", color: "bg-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome Back, <span className="text-cyan-400">Student!</span>
          </h1>
          <p className="text-slate-400">Here's what's happening with your learning today</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-slate-400 font-medium mb-2">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Progress Circle */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="text-cyan-400" size={24} />
              Overall Progress
            </h3>
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="rgba(71, 85, 105, 0.3)"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray="440"
                    strokeDashoffset="110"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-white">75%</p>
                    <p className="text-sm text-slate-400">Complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="text-purple-400" size={24} />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-all"
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'completed' ? 'bg-emerald-400' : 'bg-orange-400'
                  } animate-pulse`}></div>
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm">{activity.title}</p>
                    <p className={`text-xs ${activity.color} font-medium`}>{activity.subtitle}</p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar className="text-blue-400" size={24} />
              Upcoming Classes
            </h3>
            <div className="space-y-3">
              {upcomingClasses.map((cls, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-all"
                >
                  <div className={`w-3 h-12 ${cls.color} rounded-full`}></div>
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm">{cls.subject}</p>
                    <p className="text-xs text-slate-400">{cls.time} • {cls.day}</p>
                  </div>
                  <CheckCircle className="text-slate-600" size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Progress */}
        <div className="mt-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="text-emerald-400" size={24} />
            Course Progress Overview
          </h3>
          <div className="space-y-4">
            {[
              { name: "Mathematics", progress: 85, color: "bg-cyan-500" },
              { name: "Physics", progress: 70, color: "bg-purple-500" },
              { name: "Chemistry", progress: 60, color: "bg-blue-500" },
              { name: "Biology", progress: 90, color: "bg-emerald-500" }
            ].map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white font-medium">{course.name}</span>
                  <span className="text-slate-400">{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${course.color} rounded-full transition-all duration-1000 shadow-[0_0_10px_currentColor]`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default UserDashboard;