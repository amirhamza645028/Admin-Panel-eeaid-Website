import { useState, useEffect } from 'react';
import { Eye, EyeOff, Edit, ArrowRight, Plus, X } from 'lucide-react';
import { Link } from "react-router-dom";
// ProgramList.jsx Component
const ProgramList = () => {
  const [programs, setPrograms] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    // Load from JSON file or API
    const loadPrograms = async () => {
      // Replace this with: const response = await fetch('/programs.json');
      // const data = await response.json();
      const data = [
        {
          id: 1,
          name: "Test Program 1 - টেস্ট প্রোগ্রাম ১",
          description: "Test program for medical students",
          visible: true,
          icon: "📚",
          iconColor: "#3b82f6",
          startDate: "2024-01-01",
          endDate: "2024-12-31"
        },
        {
          id: 2,
          name: "GP COURSE",
          description: "General Practice Course",
          visible: false,
          icon: "🩺",
          iconColor: "#10b981",
          startDate: "2024-05-01",
          endDate: "2025-05-01"
        }
      ];
      setPrograms(data);
    };
    loadPrograms();
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const toggleVisibility = (id) => {
    setPrograms(programs.map(p => {
      if (p.id === id) {
        const newVisible = !p.visible;
        showToast(
          newVisible ? '✅ Program visibility set to Show' : '🔒 Program visibility set to Hide',
          'info'
        );
        // Save to API/JSON here
        return { ...p, visible: newVisible };
      }
      return p;
    }));
  };

  const handleEdit = (program) => {
    console.log('Navigate to edit:', program.id);
    // Use: navigate(`/programs/edit/${program.id}`)
  };

  const handleViewDetails = (program) => {
    console.log('Navigate to details:', program.id);
    // Use: navigate(`/programs/${program.id}`)
  };

  const handleAddNew = () => {
    console.log('Navigate to add new program');
    // Use: navigate('/programs/new')
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-slideIn">
          <div className={`px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 ${
            toast.type === 'success' 
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' 
              : toast.type === 'info'
              ? 'bg-gradient-to-r from-blue-500 to-blue-600'
              : 'bg-gradient-to-r from-orange-500 to-orange-600'
          } text-white`}>
            <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
            <span className="font-medium">{toast.message}</span>
            <button onClick={() => setToast(null)} className="ml-2 hover:bg-white/20 rounded p-1">
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          All Programs
        </h1>
        <Link to={'/programs/new'}
          onClick={handleAddNew}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <Plus size={20} />
          Add New Program
        </Link >
      </div>

      {/* Programs Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-slate-200/50">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-8 py-5">
          <div className="grid grid-cols-12 gap-6 text-sm font-semibold text-white uppercase tracking-wider">
            <div className="col-span-5">Program Name</div>
            <div className="col-span-3">Validity</div>
            <div className="col-span-2">Visibility</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-slate-200/50">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="px-8 py-6 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300 group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* Program Name */}
                <div className="col-span-5">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${program.iconColor}20` }}
                    >
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {program.name}
                      </h3>
                      <p className="text-sm text-slate-500 mt-0.5">{program.description}</p>
                    </div>
                  </div>
                </div>

                {/* Validity */}
                <div className="col-span-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-700">
                      {program.startDate}
                    </span>
                    <span className="text-xs text-slate-400">to</span>
                    <span className="text-sm font-medium text-slate-700">
                      {program.endDate}
                    </span>
                  </div>
                </div>

                {/* Visibility */}
                <div className="col-span-2">
                  <button
                    onClick={() => toggleVisibility(program.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      program.visible
                        ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                        : 'bg-red-100 text-red-700 hover:bg-red-200'
                    }`}
                  >
                    {program.visible ? (
                      <>
                        <Eye size={16} />
                        Show
                      </>
                    ) : (
                      <>
                        <EyeOff size={16} />
                        Hide
                      </>
                    )}
                  </button>
                </div>

                {/* Actions */}
                <div className="col-span-2 flex items-center justify-end gap-3">
                  <Link to={'/programs/edit/:id'}
                    onClick={() => handleEdit(program)}
                    className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                    title="Edit Program"
                  >
                    <Edit size={18} />
                  </Link>
                  <Link to={'/programs/:id'}
                    onClick={() => handleViewDetails(program)}
                    className="p-3 bg-indigo-100 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                    title="View Details"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {programs.length === 0 && (
        <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl mt-8">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-2xl font-bold text-slate-700 mb-2">No Programs Yet</h3>
          <p className="text-slate-500 mb-6">Create your first program to get started</p>
        </div>
      )}

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

        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProgramList;