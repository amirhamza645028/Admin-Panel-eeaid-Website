import React, { useState } from 'react';
import { Book, User, Clock, FileText, Download, ChevronDown, ChevronUp, X, Video, BookOpen } from 'lucide-react';

// Subject Data JSON
const subjectsData = [
  {
    id: 1,
    title: "Physics",
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=250&fit=crop",
    category: "HSC Science",
    instructor: {
      name: "Dr. Rahman Khan",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    features: ["Live Classes", "PDF Notes", "MCQ Practice"],
    totalChapters: 12,
    totalHours: 45,
    description: "সম্পূর্ণ HSC পদার্থবিজ্ঞান কোর্স যেখানে রয়েছে লাইভ ক্লাস, নোট এবং প্রাকটিস টেস্ট। এই কোর্সে পদার্থবিজ্ঞানের সকল অধ্যায় বিস্তারিতভাবে আলোচনা করা হয়েছে।",
    chapters: [
      { name: "Chapter 1: Vectors", lessons: 8, duration: "4 hours" },
      { name: "Chapter 2: Motion", lessons: 10, duration: "5 hours" },
      { name: "Chapter 3: Force", lessons: 9, duration: "4.5 hours" }
    ]
  },
  {
    id: 2,
    title: "Chemistry",
    thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=250&fit=crop",
    category: "HSC Science",
    instructor: {
      name: "Prof. Fatima Ahmed",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    features: ["Video Lectures", "Experiments", "Notes"],
    totalChapters: 15,
    totalHours: 50,
    description: "HSC রসায়ন বিজ্ঞানের সম্পূর্ণ গাইডলাইন যেখানে রয়েছে ভিডিও লেকচার এবং ল্যাব এক্সপেরিমেন্ট।",
    chapters: [
      { name: "Chapter 1: Atomic Structure", lessons: 7, duration: "3.5 hours" },
      { name: "Chapter 2: Chemical Bonding", lessons: 9, duration: "4 hours" },
      { name: "Chapter 3: States of Matter", lessons: 8, duration: "4 hours" }
    ]
  },
  {
    id: 3,
    title: "Mathematics",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
    category: "HSC Science",
    instructor: {
      name: "Kamal Hossain",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    features: ["Problem Solving", "MCQ", "Support"],
    totalChapters: 18,
    totalHours: 60,
    description: "উচ্চতর গণিতের সম্পূর্ণ কোর্স যেখানে রয়েছে প্রবলেম সলভিং এবং MCQ ব্যাংক।",
    chapters: [
      { name: "Chapter 1: Matrix & Determinants", lessons: 12, duration: "6 hours" },
      { name: "Chapter 2: Calculus", lessons: 15, duration: "8 hours" },
      { name: "Chapter 3: Trigonometry", lessons: 10, duration: "5 hours" }
    ]
  },
  {
    id: 4,
    title: "Biology",
    thumbnail: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=400&h=250&fit=crop",
    category: "HSC Science",
    instructor: {
      name: "Dr. Nadia Islam",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    features: ["Animated Videos", "Diagrams", "Quiz"],
    totalChapters: 14,
    totalHours: 48,
    description: "জীববিজ্ঞানের সম্পূর্ণ কোর্স যেখানে রয়েছে অ্যানিমেটেড ভিডিও এবং ডায়াগ্রাম।",
    chapters: [
      { name: "Chapter 1: Cell Biology", lessons: 10, duration: "5 hours" },
      { name: "Chapter 2: Genetics", lessons: 12, duration: "6 hours" },
      { name: "Chapter 3: Evolution", lessons: 8, duration: "4 hours" }
    ]
  },
  {
    id: 5,
    title: "English",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop",
    category: "HSC All Groups",
    instructor: {
      name: "Sarah Rahman",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    features: ["Grammar", "Composition", "Speaking"],
    totalChapters: 10,
    totalHours: 35,
    description: "HSC ইংরেজি কোর্স যেখানে গ্রামার, কম্পোজিশন এবং স্পিকিং স্কিল ডেভেলপ করা হয়।",
    chapters: [
      { name: "Chapter 1: Tenses", lessons: 8, duration: "4 hours" },
      { name: "Chapter 2: Articles", lessons: 6, duration: "3 hours" },
      { name: "Chapter 3: Essay Writing", lessons: 10, duration: "5 hours" }
    ]
  },
  {
    id: 6,
    title: "ICT",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    category: "HSC All Groups",
    instructor: {
      name: "Shakil Ahmed",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    features: ["Coding Practice", "Projects", "Quizzes"],
    totalChapters: 8,
    totalHours: 30,
    description: "তথ্য ও যোগাযোগ প্রযুক্তির সম্পূর্ণ কোর্স যেখানে রয়েছে কোডিং প্র্যাকটিস এবং প্রজেক্ট।",
    chapters: [
      { name: "Chapter 1: Number System", lessons: 7, duration: "3 hours" },
      { name: "Chapter 2: Programming", lessons: 12, duration: "6 hours" },
      { name: "Chapter 3: Database", lessons: 9, duration: "4.5 hours" }
    ]
  },
  {
    id: 7,
    title: "Medical Admission",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
    category: "Admission Preparation",
    instructor: {
      name: "Dr. Mahmud Hasan",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    features: ["Model Tests", "Previous Years", "Live Classes"],
    totalChapters: 20,
    totalHours: 80,
    description: "মেডিকেল ভর্তি পরীক্ষার সম্পূর্ণ প্রস্তুতি কোর্স যেখানে রয়েছে মডেল টেস্ট এবং পূর্ববর্তী বছরের প্রশ্ন।",
    chapters: [
      { name: "Biology - Cell & Tissue", lessons: 15, duration: "8 hours" },
      { name: "Chemistry - Organic", lessons: 12, duration: "6 hours" },
      { name: "Physics - Mechanics", lessons: 10, duration: "5 hours" }
    ]
  },
  {
    id: 8,
    title: "Varsity Admission",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
    category: "Admission Preparation",
    instructor: {
      name: "Rafiq Rahman",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    features: ["MCQ Practice", "Mock Tests", "Strategy"],
    totalChapters: 16,
    totalHours: 55,
    description: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার সম্পূর্ণ গাইডলাইন যেখানে রয়েছে MCQ প্র্যাকটিস এবং মক টেস্ট।",
    chapters: [
      { name: "Math - Algebra", lessons: 14, duration: "7 hours" },
      { name: "English - Comprehension", lessons: 10, duration: "5 hours" },
      { name: "General Knowledge", lessons: 12, duration: "6 hours" }
    ]
  }
];

// SubjectCard Component
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

// SubjectDetails Component (Modal)
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

// Main SubjectList Component
const SubjectList = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F7FA' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            {/* Logo Icon */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                 style={{ backgroundColor: '#4A90E2' }}>
              <Book className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#4A90E2' }}>
                Exclusive Education Aid
              </h1>
              <p className="text-sm text-gray-500">For Doctors and Medical Students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">All Subjects</h2>
          <p className="text-gray-600">Choose your subject to start learning</p>
        </div>

        {/* Grid Layout: 4 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjectsData.map((subject) => (
            <SubjectCard 
              key={subject.id} 
              subject={subject}
              onClick={setSelectedSubject}
            />
          ))}
        </div>
      </div>

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