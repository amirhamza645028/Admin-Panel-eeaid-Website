
import React, { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
// import CourseCard from './CourseBatchSingleCard';
import coursesData from '../../../../daat/userData/UserDisplayAllCourse.json';
import CourseBatchSingleCard from './CourseBatchSingleCard';
import MCQ from '../myCourse/MCQ/MCQ';

const filterOptions = {
  batchType: [
    "Davidson Plus Core Batch",
    "Davidson Plus Batch",
    "Friday Best Care Batch",
    "Exam Plus Batch",
    "Friday Mega Batch",
    "Exam Batch",
    "Crash Batch",
    "Recovery Batch",
    "Mock Plus Batch",
    "Mock Batch"
  ],
  session: [
    "Jan-26 P-1 Candidate",
    "July-26 P-1 Candidate"
  ],
  branch: [
    "Online",
    "Offline"
  ]
};

function CourseAllBatchFinder() {
 const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    batchType: [],
    session: [],
    branch: []
  });
  const [openSection, setOpenSection] = useState('batchType');

  const handleFilterChange = (category, value) => {
    setSelectedFilters(prev => {
      const currentValues = prev[category];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      return { ...prev, [category]: newValues };
    });
  };

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      // Search filter
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.batch.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

      // Batch Type filter
      const matchesBatchType = selectedFilters.batchType.length === 0 ||
                              selectedFilters.batchType.includes(course.batch);

      // Session filter
      const matchesSession = selectedFilters.session.length === 0 ||
                            selectedFilters.session.includes(course.session);

      // Branch filter
      const matchesBranch = selectedFilters.branch.length === 0 ||
                           selectedFilters.branch.includes(course.branch);

      return matchesSearch && matchesBatchType && matchesSession && matchesBranch;
    });
  }, [searchQuery, selectedFilters]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold">FCPS P-1 Medicine</h1>
            <button className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
              📝 Register
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for batches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-4">
            {/* Batch Type Filter */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => toggleSection('batchType')}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold flex items-center justify-between hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              >
                <span>Batch Type</span>
                <span className={`transform transition-transform duration-300 ${openSection === 'batchType' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openSection === 'batchType' && (
                <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
                  {filterOptions.batchType.map(option => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200 group">
                      <input
                        type="checkbox"
                        checked={selectedFilters.batchType.includes(option)}
                        onChange={() => handleFilterChange('batchType', option)}
                        className="checkbox checkbox-primary checkbox-sm"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Session Filter */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => toggleSection('session')}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold flex items-center justify-between hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
              >
                <span>Session</span>
                <span className={`transform transition-transform duration-300 ${openSection === 'session' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openSection === 'session' && (
                <div className="p-4 space-y-2">
                  {filterOptions.session.map(option => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer hover:bg-purple-50 p-2 rounded-lg transition-colors duration-200 group">
                      <input
                        type="checkbox"
                        checked={selectedFilters.session.includes(option)}
                        onChange={() => handleFilterChange('session', option)}
                        className="checkbox checkbox-secondary checkbox-sm"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-purple-600 transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Branch Filter */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => toggleSection('branch')}
                className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold flex items-center justify-between hover:from-green-600 hover:to-green-700 transition-all duration-300"
              >
                <span>Branch</span>
                <span className={`transform transition-transform duration-300 ${openSection === 'branch' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openSection === 'branch' && (
                <div className="p-4 space-y-2">
                  {filterOptions.branch.map(option => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer hover:bg-green-50 p-2 rounded-lg transition-colors duration-200 group">
                      <input
                        type="checkbox"
                        checked={selectedFilters.branch.includes(option)}
                        onChange={() => handleFilterChange('branch', option)}
                        className="checkbox checkbox-success checkbox-sm"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-green-600 transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Clear Filters Button */}
            {(selectedFilters.batchType.length > 0 || selectedFilters.session.length > 0 || selectedFilters.branch.length > 0) && (
              <button
                onClick={() => setSelectedFilters({ batchType: [], session: [], branch: [] })}
                className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Clear All Filters
              </button>
            )}
          </div>

          {/* Course Cards Grid */}
          <div className="flex-1">
            <div className="mb-4 text-gray-600 font-medium">
              Found {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
            </div>
            
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  // <CourseCard key={course.id} course={course} />
                  <CourseBatchSingleCard key={course.id} course={course}></CourseBatchSingleCard>
                
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl shadow-md">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No courses found</h3>
                <p className="text-gray-600">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseAllBatchFinder