import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Search, Mail, Phone, BookOpen, Trash2, Edit3, Filter } from 'lucide-react';
import teachersData from '../../../daat/Teacher.json';

const Teacher = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState(teachersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("All");

  // Remove Teacher Function
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this teacher?")) {
      setTeachers(teachers.filter(t => t.id !== id));
    }
  };

  // Filtered List
  const filteredTeachers = teachers.filter(t => 
    (t.name.toLowerCase().includes(searchTerm.toLowerCase()) || t.subject.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterSubject === "All" || t.subject === filterSubject)
  );

  return (
    <div className="p-6 bg-[#0a0f1d] min-h-screen text-white">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
            Teacher Faculty
          </h1>
          <p className="text-slate-400 text-sm mt-1">Manage experts and their assigned subjects</p>
        </div>

        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          {/* Search Bar with Neon Effect */}
          <div className="relative flex-1 lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or topic..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button 
            onClick={() => navigate('/admin/teacher-add')}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-2.5 rounded-xl font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
          >
            <UserPlus size={20} /> Add Teacher
          </button>
        </div>
      </div>

      {/* Teacher Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredTeachers.map((teacher) => (
            <motion.div 
              key={teacher.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/60 border border-slate-800 rounded-[2rem] p-6 backdrop-blur-sm relative group"
            >
              {/* Profile Image & Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="relative">
                  <img src={teacher.image} alt={teacher.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-700 group-hover:border-cyan-500 transition-colors" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => navigate(`/admin/teacher-edit/${teacher.id}`)} className="p-2 bg-slate-800 rounded-lg text-amber-400 hover:bg-amber-500 hover:text-white transition-all">
                    <Edit3 size={16} />
                  </button>
                  <button onClick={() => handleRemove(teacher.id)} className="p-2 bg-slate-800 rounded-lg text-rose-400 hover:bg-rose-500 hover:text-white transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Info Section */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{teacher.name}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <BookOpen size={14} className="text-cyan-500" />
                  <span>{teacher.subject} • <span className="text-cyan-400 font-semibold">{teacher.group}</span></span>
                </div>
                
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <Mail size={14} className="text-slate-500" /> {teacher.email}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <Phone size={14} className="text-slate-500" /> {teacher.phone}
                  </div>
                </div>
              </div>

              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#22d3ee]"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredTeachers.length === 0 && (
        <div className="text-center py-20 text-slate-500 italic">No teachers found matching your criteria.</div>
      )}
    </div>
  );
};

export default Teacher;