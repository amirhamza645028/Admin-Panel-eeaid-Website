import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Save } from 'lucide-react';

const StudentAdd = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-[#0a0f1d] min-h-screen text-white flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl"
      >
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6">
          <ArrowLeft size={20} /> Back to List
        </button>
        
        <h2 className="text-2xl font-bold mb-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">Register New Student</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-slate-400 ml-1">Full Name</label>
              <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-400 ml-1">Email Address</label>
              <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none" placeholder="example@mail.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-slate-400 ml-1">Phone Number</label>
              <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none" placeholder="017xxxxxxxx" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-400 ml-1">Select Batch</label>
              <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none appearance-none">
                <option>Batch 24</option>
                <option>Batch 25</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-2">
            <Save size={20} /> Complete Registration
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default StudentAdd;