import React, { useState } from 'react';
import { Book, Clock, FileText, Download, ChevronDown, ChevronUp, X, Video, BookOpen } from 'lucide-react';

const SubjectDetails = ({ subject, onClose }) => {
  const [expandedChapter, setExpandedChapter] = useState(null);

  if (!subject) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{subject.title}</h2>
          <button 
            onClick={onClose}
            className="btn btn-ghost btn-sm btn-circle"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Thumbnail */}
          <img 
            src={subject.thumbnail} 
            alt={subject.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />

          {/* Category & Instructor */}
          <div className="flex items-center justify-between mb-4">
            <span className="badge badge-primary">{subject.category}</span>
            <div className="flex items-center gap-2">
              <img 
                src={subject.instructor.avatar} 
                alt={subject.instructor.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{subject.instructor.name}</p>
                <p className="text-xs text-gray-500">Instructor</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Book size={20} className="text-blue-500" />
              Course Description
            </h3>
            <p className="text-gray-600 leading-relaxed">{subject.description}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <BookOpen className="mx-auto mb-2 text-blue-500" size={24} />
              <p className="text-2xl font-bold text-blue-600">{subject.totalChapters}</p>
              <p className="text-xs text-gray-600">Chapters</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Clock className="mx-auto mb-2 text-green-500" size={24} />
              <p className="text-2xl font-bold text-green-600">{subject.totalHours}h</p>
              <p className="text-xs text-gray-600">Duration</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <Video className="mx-auto mb-2 text-purple-500" size={24} />
              <p className="text-2xl font-bold text-purple-600">HD</p>
              <p className="text-xs text-gray-600">Quality</p>
            </div>
          </div>

          {/* Chapter List (Accordion) */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <FileText size={20} className="text-blue-500" />
              Chapter List
            </h3>
            <div className="space-y-2">
              {subject.chapters.map((chapter, index) => (
                <div 
                  key={index}
                  className="border rounded-lg overflow-hidden"
                >
                  {/* Chapter Header */}
                  <div 
                    onClick={() => setExpandedChapter(expandedChapter === index ? null : index)}
                    className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">{chapter.name}</p>
                      <p className="text-xs text-gray-500">{chapter.lessons} Lessons • {chapter.duration}</p>
                    </div>
                    {expandedChapter === index ? (
                      <ChevronUp size={20} className="text-blue-500" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </div>

                  {/* Chapter Details (Expanded) */}
                  {expandedChapter === index && (
                    <div className="p-4 bg-white border-t">
                      <p className="text-sm text-gray-600 mb-3">
                        এই অধ্যায়ে {chapter.lessons}টি লেসন রয়েছে যেখানে বিস্তারিত আলোচনা এবং প্র্যাকটিস করা হয়েছে।
                      </p>
                      <div className="flex gap-2">
                        <button className="btn btn-sm btn-primary">
                          <Video size={16} className="mr-1" />
                          Watch Videos
                        </button>
                        <button className="btn btn-sm btn-outline btn-success">
                          <Download size={16} className="mr-1" />
                          Download Notes
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enroll Button */}
          <div className="mt-6 text-center">
            <button 
              className="btn btn-lg text-white"
              style={{ backgroundColor: '#4A90E2' }}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;