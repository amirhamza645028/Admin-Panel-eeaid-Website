import { BookOpen, Clock, TrendingUp, Play, CheckCircle, Award } from 'lucide-react';

const MyCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. John Smith",
      progress: 85,
      totalLessons: 24,
      completedLessons: 20,
      thumbnail: "🔢",
      color: "from-cyan-500 to-cyan-600",
      nextLesson: "Calculus - Derivatives"
    },
    {
      id: 2,
      title: "Physics Fundamentals",
      instructor: "Prof. Sarah Johnson",
      progress: 70,
      totalLessons: 18,
      completedLessons: 13,
      thumbnail: "⚛️",
      color: "from-purple-500 to-purple-600",
      nextLesson: "Thermodynamics Basics"
    },
    {
      id: 3,
      title: "Organic Chemistry",
      instructor: "Dr. Michael Chen",
      progress: 60,
      totalLessons: 20,
      completedLessons: 12,
      thumbnail: "🧪",
      color: "from-blue-500 to-blue-600",
      nextLesson: "Chemical Reactions"
    },
    {
      id: 4,
      title: "Biology Essentials",
      instructor: "Dr. Emily Brown",
      progress: 90,
      totalLessons: 16,
      completedLessons: 14,
      thumbnail: "🧬",
      color: "from-emerald-500 to-emerald-600",
      nextLesson: "Cell Division"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Courses</h1>
          <p className="text-slate-400">Continue your learning journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              <div className={`h-32 bg-gradient-to-r ${course.color} relative flex items-center justify-center text-6xl`}>
                {course.thumbnail}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{course.instructor}</p>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-slate-400">Progress</span>
                      <span className="text-cyan-400 font-bold">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <CheckCircle size={16} className="text-emerald-400" />
                      {course.completedLessons}/{course.totalLessons} Lessons
                    </span>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-3">
                    <p className="text-xs text-slate-400 mb-1">Next Lesson</p>
                    <p className="text-white font-semibold">{course.nextLesson}</p>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                    <Play size={20} />
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
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

export default MyCourses;