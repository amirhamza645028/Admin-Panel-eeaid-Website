import { useState, useEffect } from 'react';
import { ArrowLeft, Edit } from 'lucide-react';

const ProgramDetails = ({ programId }) => {
  const [program, setProgram] = useState(null);

  useEffect(() => {
    // Load program data from JSON/API
    // const response = await fetch(`/programs/${programId}.json`);
    // const data = await response.json();
    const data = {
      id: 1,
      name: "Test Program 1 - টেস্ট প্রোগ্রাম ১",
      description: "Test program for medical students preparing for admission tests",
      visible: true,
      icon: "📚",
      iconColor: "#3b82f6",
      startDate: "2024-01-01",
      endDate: "2024-12-31"
    };
    setProgram(data);
  }, [programId]);

  const handleBack = () => {
    console.log('Navigate to /programs');
    // Use: navigate('/programs')
  };

  const handleEdit = () => {
    console.log('Navigate to /programs/edit/' + programId);
    // Use: navigate(`/programs/edit/${programId}`)
  };

  if (!program) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-slate-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Programs
        </button>

        {/* Program Details Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg"
                style={{ backgroundColor: `${program.iconColor}20` }}
              >
                {program.icon}
              </div>
              <div>
                <h2 className="text-4xl font-bold text-slate-800">{program.name}</h2>
                <p className="text-slate-600 mt-2">{program.description}</p>
              </div>
            </div>
            
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Edit size={20} />
              Edit Program
            </button>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {/* Validity Period */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📅</span>
                <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                  Validity Period
                </p>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-blue-600 font-medium mb-1">Start Date</p>
                  <p className="text-2xl font-bold text-slate-800">{program.startDate}</p>
                </div>
                <div className="border-t border-blue-200 pt-2">
                  <p className="text-xs text-blue-600 font-medium mb-1">End Date</p>
                  <p className="text-2xl font-bold text-slate-800">{program.endDate}</p>
                </div>
              </div>
            </div>

            {/* Visibility Status */}
            <div className={`${
              program.visible 
                ? 'bg-gradient-to-br from-emerald-50 to-emerald-100' 
                : 'bg-gradient-to-br from-red-50 to-red-100'
            } p-6 rounded-xl shadow-md`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👁️</span>
                <p className={`text-sm font-semibold ${
                  program.visible ? 'text-emerald-700' : 'text-red-700'
                } uppercase tracking-wide`}>
                  Visibility Status
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${
                  program.visible ? 'bg-emerald-500' : 'bg-red-500'
                } animate-pulse`}></div>
                <p className="text-3xl font-bold text-slate-800">
                  {program.visible ? 'Visible' : 'Hidden'}
                </p>
              </div>
              <p className={`text-sm mt-3 ${
                program.visible ? 'text-emerald-600' : 'text-red-600'
              } font-medium`}>
                {program.visible 
                  ? '✅ This program is visible to all students' 
                  : '🔒 This program is hidden from students'}
              </p>
            </div>

            {/* Program ID */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🔖</span>
                <p className="text-sm font-semibold text-indigo-700 uppercase tracking-wide">
                  Program ID
                </p>
              </div>
              <p className="text-3xl font-bold text-slate-800">#{program.id}</p>
            </div>

            {/* Icon & Color */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎨</span>
                <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
                  Icon & Theme
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-lg"
                  style={{ backgroundColor: `${program.iconColor}20` }}
                >
                  {program.icon}
                </div>
                <div>
                  <p className="text-sm text-purple-600 font-medium mb-1">Color Code</p>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-lg shadow-md border-2 border-white"
                      style={{ backgroundColor: program.iconColor }}
                    ></div>
                    <p className="text-lg font-bold text-slate-800">{program.iconColor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;