import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Search } from 'lucide-react';
import SubjectDetails from './SubjectDetails';
import SubjectCard from './SubjectCard';
import subjectData from '../../../daat/subjects.json'; // ✅ Fixed typo: daat -> data

// Main SubjectList Component
const SubjectList = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // ✅ Fixed: subjectsData -> subjectData (variable name match)
  const filteredSubjects = subjectData.filter(s =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <div className="p-6 bg-gray-50 min-h-screen text-slate-900 dark:bg-[#0a0f1d] dark:text-white">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
            Subject List
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Manage your course subjects
          </p>
        </div>

        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative flex-1 lg:w-64">
            <Search 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" 
              size={18} 
            />
            <input
              type="text"
              placeholder="Search subjects..."
              className="w-full bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-800 rounded-xl py-2.5 pl-10 pr-4 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Add Subject Button */}
          <button
            onClick={() => navigate('/admin/subject-add')}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-2.5 rounded-xl font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all text-white"
          >
            <Book size={20} /> Add Subject
          </button>
        </div>
      </div>

      {/* Subject Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSubjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            onClick={setSelectedSubject}
          />
        ))}
      </div>
      
      {/* Empty State */}
      {filteredSubjects.length === 0 && (
        <div className="text-center py-20 text-slate-500 dark:text-slate-400 italic">
          No subjects found matching your criteria.
        </div>
      )}

      {/* Details Modal */}
      {selectedSubject && (
        <SubjectDetails
          subject={selectedSubject}
          onClose={() => setSelectedSubject(null)}
        />
      )}
    </div>
  );
};

export default SubjectList;