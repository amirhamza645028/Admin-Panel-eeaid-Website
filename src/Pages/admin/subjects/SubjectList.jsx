import React, { useState } from 'react';
import { Book } from 'lucide-react';
import SubjectDetails from './SubjectDetails';
import SubjectCard from './SubjectCard';

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