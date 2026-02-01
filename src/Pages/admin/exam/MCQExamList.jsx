import { useState, useEffect } from 'react';
import { Edit, ArrowRight, Plus, X } from 'lucide-react';
import { Link } from "react-router-dom";
import mcqExamsData from '../../../daat/mcqExams.json';

// MCQExamList.jsx Component
const MCQExamList = () => {
  const [exams, setExams] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    // Load from JSON file
    const loadExams = () => {
      setExams(mcqExamsData);
    };
    loadExams();
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleEdit = (exam) => {
    console.log('Navigate to edit:', exam.id);
    // Use: navigate(`/mcq-exams/edit/${exam.id}`)
  };

  const handleViewDetails = (exam) => {
    console.log('Navigate to details:', exam.id);
    // Use: navigate(`/mcq-exams/${exam.id}`)
  };

  const handleAddNew = () => {
    console.log('Navigate to add new exam');
    // Use: navigate('/mcq-exams/new')
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
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
          All MCQ Exams
        </h1>
        <Link to={'/mcq-exams/new'}
          onClick={handleAddNew}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <Plus size={20} />
          Add New Exam
        </Link >
      </div>

      {/* Exams Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-slate-200/50">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-t-2xl font-semibold shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5 px-8 py-5">
          <div className="grid grid-cols-12 gap-6 text-sm font-semibold text-white uppercase tracking-wider">
            <div className="col-span-3">Exam Title</div>
            <div className="col-span-3">Program</div>
            <div className="col-span-2">Subject</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-1">Duration</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-slate-200/50">
          {exams.map((exam, index) => (
            <div
              key={exam.id}
              className="px-8 py-6 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300 group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* Exam Title */}
                <div className="col-span-3">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {exam.title}
                  </h3>
                </div>

                {/* Program */}
                <div className="col-span-3">
                    <p className="text-sm text-slate-500 mt-0.5">{exam.program}</p>
                </div>

                {/* Subject */}
                <div className="col-span-2">
                    <p className="text-sm text-slate-500 mt-0.5">{exam.subject}</p>
                </div>

                {/* Date */}
                <div className="col-span-2">
                    <p className="text-sm text-slate-500 mt-0.5">{exam.date}</p>
                </div>

                {/* Duration */}
                <div className="col-span-1">
                    <p className="text-sm text-slate-500 mt-0.5">{exam.duration}</p>
                </div>

                {/* Actions */}
                <div className="col-span-1 flex items-center justify-end gap-3">
                  <Link to={`/mcq-exams/edit/${exam.id}`}
                    onClick={() => handleEdit(exam)}
                    className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                    title="Edit Exam"
                  >
                    <Edit size={18} />
                  </Link>
                  <Link to={`/mcq-exams/${exam.id}`}
                    onClick={() => handleViewDetails(exam)}
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

      {exams.length === 0 && (
        <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl mt-8">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-bold text-slate-700 mb-2">No MCQ Exams Yet</h3>
          <p className="text-slate-500 mb-6">Create your first MCQ exam to get started</p>
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

export default MCQExamList;
