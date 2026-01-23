import { Award, FileText, TrendingUp, Download, Eye } from 'lucide-react';

const Academic = () => {
  const certificates = [
    { title: "Mathematics Completion", date: "Jan 15, 2024", grade: "A+", color: "from-cyan-500 to-cyan-600" },
    { title: "Physics Advanced", date: "Dec 20, 2023", grade: "A", color: "from-purple-500 to-purple-600" },
    { title: "Chemistry Basics", date: "Nov 10, 2023", grade: "A-", color: "from-blue-500 to-blue-600" }
  ];

  const examResults = [
    { subject: "Mathematics", score: 95, total: 100, date: "Jan 20, 2024" },
    { subject: "Physics", score: 88, total: 100, date: "Jan 18, 2024" },
    { subject: "Chemistry", score: 92, total: 100, date: "Jan 15, 2024" },
    { subject: "Biology", score: 97, total: 100, date: "Jan 12, 2024" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] p-8">
      <div className="">
        <h1 className="text-4xl font-bold text-white mb-8">Academic Records</h1>

        {/* Certificates */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="text-cyan-400" size={28} />
            Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{cert.date}</p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-xl hover:bg-cyan-500/20 transition-all">
                    <Eye size={16} />
                    View
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-xl hover:bg-purple-500/20 transition-all">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Results */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="text-purple-400" size={28} />
            Recent Exam Results
          </h2>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="text-left p-4 text-slate-400 font-semibold">Subject</th>
                    <th className="text-left p-4 text-slate-400 font-semibold">Score</th>
                    <th className="text-left p-4 text-slate-400 font-semibold">Percentage</th>
                    <th className="text-left p-4 text-slate-400 font-semibold">Date</th>
                    <th className="text-left p-4 text-slate-400 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {examResults.map((result, index) => (
                    <tr key={index} className="border-t border-slate-800 hover:bg-slate-800/30 transition-all">
                      <td className="p-4 text-white font-medium">{result.subject}</td>
                      <td className="p-4 text-white">{result.score}/{result.total}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          result.score >= 90 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {((result.score / result.total) * 100).toFixed(0)}%
                        </span>
                      </td>
                      <td className="p-4 text-slate-400">{result.date}</td>
                      <td className="p-4">
                        <button className="text-cyan-400 hover:text-cyan-300 transition-all">
                          View Details →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;