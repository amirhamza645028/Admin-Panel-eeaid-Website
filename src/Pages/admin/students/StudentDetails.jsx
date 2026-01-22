import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Phone, Calendar, ArrowLeft } from 'lucide-react';
import studentsData from '../../../daat/Student.json';

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = studentsData.find(s => s.id === id);

  if (!student) return <div className="text-white p-10">Student not found!</div>;

  return (
    <div className="p-6 bg-[#0a0f1d] min-h-screen text-white">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8">
        <ArrowLeft size={20} /> Back to Dashboard
      </button>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl"
      >
        <div className="h-32 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-inner"></div>
        <div className="px-10 pb-10">
          <div className="flex flex-col md:flex-row items-end gap-6 -mt-16 mb-8">
            <div className="w-32 h-32 bg-slate-800 border-4 border-[#0a0f1d] rounded-3xl flex items-center justify-center text-4xl font-bold text-cyan-400">
              {student.name.charAt(0)}
            </div>
            <div className="flex-1 pb-2">
              <h2 className="text-3xl font-bold">{student.name}</h2>
              <p className="text-cyan-400 flex items-center gap-1"><ShieldCheck size={16} /> Verified Student</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-slate-400 text-sm font-semibold mb-4 uppercase tracking-wider">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><Mail className="text-cyan-500" size={20} /> <span>{student.email}</span></div>
                <div className="flex items-center gap-4"><Phone className="text-cyan-500" size={20} /> <span>{student.phone}</span></div>
              </div>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-slate-400 text-sm font-semibold mb-4 uppercase tracking-wider">Academic Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><Calendar className="text-cyan-500" size={20} /> <span>Joined: 12 Jan, 2024</span></div>
                <div className="flex items-center gap-4 text-emerald-400 font-bold tracking-widest uppercase text-xs"><span>Current Batch: {student.batch}</span></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentDetails;