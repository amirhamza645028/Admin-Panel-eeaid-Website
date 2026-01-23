import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

const SubjectCard = ({ subject, onClick }) => {
    return (
      <div 
        onClick={() => onClick(subject)}
        className="card bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-300 transform hover:-translate-y-1"
      >
        {/* Thumbnail Image */}
        <figure className="relative h-40 overflow-hidden">
          <img 
            src={subject.thumbnail} 
            alt={subject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1 right-1 badge badge-primary badge-sm">
            {subject.category}
          </div>
        </figure>
  
        <div className="card-body p-2">
          {/* Subject Title */}
          <h2 className="card-title text-lg font-bold text-gray-800 mb-2">
            {subject.title}
          </h2>
  
          {/* Instructor Info */}
          <div className="flex items-center gap-2 mb-1">
            <div className="avatar">
              <div className="w-8 h-8 rounded-full">
                <img src={subject.instructor.avatar} alt={subject.instructor.name} />
              </div>
            </div>
            <span className="text-sm text-gray-600">{subject.instructor.name}</span>
          </div>
  
          {/* Feature Tags */}
          <div className="flex flex-wrap gap-1 mb-2">
            {subject.features.map((feature, index) => (
              <span 
                key={index} 
                className="badge badge-outline badge-sm text-xs"
                style={{ borderColor: '#4A90E2', color: '#4A90E2' }}
              >
                {feature}
              </span>
            ))}
          </div>
  
          {/* Quick Info */}
          <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t">
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
          <div className="card-actions justify-end mt-1">
            <button 
              className="btn btn-sm text-white"
              style={{ backgroundColor: '#4A90E2' }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default SubjectCard;