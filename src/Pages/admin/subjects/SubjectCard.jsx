import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

const SubjectCard = ({ subject, onClick }) => {
    return (
      <div 
        onClick={() => onClick(subject)}
        className="card bg-white dark:bg-slate-800/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-cyan-500 transform hover:-translate-y-1"
      >
        {/* Thumbnail Image */}
        <figure className="relative h-40 overflow-hidden">
          <img 
            src={subject.thumbnail} 
            alt={subject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1 right-1 badge badge-primary badge-sm bg-cyan-600 text-white border-none">
            {subject.category}
          </div>
        </figure>
  
        <div className="card-body p-4">
          {/* Subject Title */}
          <h2 className="card-title text-lg font-bold text-gray-800 dark:text-white mb-2">
            {subject.title}
          </h2>
  
          {/* Instructor Info */}
          <div className="flex items-center gap-2 mb-3">
            <div className="avatar">
              <div className="w-8 h-8 rounded-full ring-2 ring-blue-300 dark:ring-cyan-500 ring-offset-base-100 ring-offset-2 dark:ring-offset-slate-800">
                <img src={subject.instructor.avatar} alt={subject.instructor.name} />
              </div>
            </div>
            <span className="text-sm text-gray-600 dark:text-slate-300">{subject.instructor.name}</span>
          </div>
  
          {/* Feature Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {subject.features.map((feature, index) => (
              <span 
                key={index} 
                className="badge badge-outline badge-sm text-xs text-blue-600 border-blue-300 dark:text-cyan-400 dark:border-cyan-700"
              >
                {feature}
              </span>
            ))}
          </div>
  
          {/* Quick Info */}
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-slate-400 pt-3 border-t border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              <span>{subject.totalChapters} Chapters</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{subject.totalHours}h</span>
            </div>
          </div>
  
          {/* View Details Button */}
          <div className="card-actions justify-end mt-4">
            <button 
              className="btn btn-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 border-none"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default SubjectCard;