import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiClock, FiUsers, FiMapPin, FiTag } from 'react-icons/fi';
import GpImg from '../../../../assets/GpCourse.jpg'

function CourseBatchSingleCard({course}) {
  const navigate = useNavigate();

  // Click handler - course details page এ navigate করবে
  const handleKnowDetails = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-300 hover:border-transparent hover:-translate-y-1">
      {/* Gradient Header */}
        
      <div className={`h-32 relative overflow-hidden`}>
        <figure>
             <img
              src={GpImg}
              alt="Shoes" />
        </figure>
        {/* <img src={GpImg} alt="" /> */}
        <div className="absolute inset-0 bg-white/10 "></div>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700  backdrop-blur-sm rounded-full text-xs font-bold text-white shadow-lg">
            {course.tag}
          </span>
        </div>
        <div className="absolute bottom-22 left-4 right-4 ">
          <div className="flex items-center gap-2 text-white">
            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg shrink-0 transition-all duration-300 group-hover:scale-110 text-blue-600 group-hover:text-orange-500">
              <FiUsers className="w-5 h-5" />
            </div>
            <span className="shrink-0 transition-all duration-300 group-hover:scale-110 text-white group-hover:text-orange-500 text-sm font-medium">{course.type}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-2 space-y-2">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center gap-1 text-gray-600">
            <FiTag className="w-4 h-4 text-blue-500" />
            <span className="text-sm">{course.batch}</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-600">
            <FiCalendar className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">{course.startDate}</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-600">
            <FiClock className="w-4 h-4 text-orange-500" />
            <span className="text-sm">{course.duration}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <FiMapPin className="w-4 h-4 text-purple-500" />
            <span className="text-sm">{course.instructor}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100">
          <button 
            onClick={handleKnowDetails}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>Know Details</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-24 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
            course.status.includes('OPEN') 
              ? 'bg-green-500 text-white' 
              : 'bg-orange-500 text-white'
          }`}>
            {course.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseBatchSingleCard;