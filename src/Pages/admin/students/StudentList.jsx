import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, Edit, Eye, Trash2, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import studentsData from '../../../daat/Student.json';

const StudentList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // 🔍 Search + Filter Logic
  const filteredStudents = studentsData.filter((student) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      student.name.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText) ||
      student.roll?.toString().includes(searchText);

    const matchesStatus =
      statusFilter === 'All' || student.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle items per page change
  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="p-6 min-h-screen" style={{ backgroundColor: '#F5F7FA' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 
            className="text-3xl font-bold mb-1"
            style={{ color: '#4A90E2' }}
          >
            Student Management
          </h1>
          <p className="text-gray-600 text-sm">
            Manage your students and activities
          </p>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          {/* Search */}
          <div className="relative">
            <Search 
              className="absolute left-3 top-1/2 -translate-y-1/2" 
              style={{ color: '#7B8794' }}
              size={18} 
            />
            <input
              type="text"
              placeholder="Search by name / email / roll"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:ring-2 w-64 transition"
              style={{ 
                focusRing: '#4A90E2',
                borderColor: search ? '#4A90E2' : '#E5E7EB'
              }}
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-xl py-2.5 px-4 outline-none focus:ring-2 transition"
            style={{ focusRing: '#4A90E2' }}
          >
            <option value="All">All Students</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {/* Add Button */}
          <button
            onClick={() => navigate('/student-add')}
            className="flex items-center gap-2 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            style={{ 
              backgroundColor: '#4A90E2',
              boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3A7BC8'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4A90E2'}
          >
            <UserPlus size={18} /> Add Student
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <table className="w-full text-left">
          <thead className="text-white text-sm" style={{ backgroundColor: '#4A90E2' }}>
            <tr>
              <th className="px-6 py-4 font-semibold">Student</th>
              <th className="px-6 py-4 font-semibold">Batch</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {currentStudents.length > 0 ? (
              currentStudents.map((student) => (
                <motion.tr
                  key={student.id}
                  whileHover={{ backgroundColor: '#F8FAFC' }}
                  className="transition"
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-800">
                      {student.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {student.email}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {student.batch}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.status === 'Active'
                          ? 'text-green-700'
                          : 'text-orange-700'
                      }`}
                      style={{
                        backgroundColor: student.status === 'Active' ? '#D1FAE5' : '#FED7AA'
                      }}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 flex justify-center gap-2">
                    <button
                      onClick={() => navigate(`/student-details/${student.id}`)}
                      className="p-2 rounded-lg transition-all hover:shadow-md"
                      style={{ 
                        backgroundColor: '#E3F2FD',
                        color: '#4A90E2'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#4A90E2';
                        e.target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#E3F2FD';
                        e.target.style.color = '#4A90E2';
                      }}
                    >
                      <Eye size={16} />
                    </button>

                    <button 
                      className="p-2 rounded-lg transition-all hover:shadow-md"
                      style={{ 
                        backgroundColor: '#FFF3E0',
                        color: '#F97316'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#F97316';
                        e.target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#FFF3E0';
                        e.target.style.color = '#F97316';
                      }}
                    >
                      <Edit size={16} />
                    </button>

                    <button 
                      className="p-2 rounded-lg transition-all hover:shadow-md"
                      style={{ 
                        backgroundColor: '#FEE2E2',
                        color: '#EF4444'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#EF4444';
                        e.target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#FEE2E2';
                        e.target.style.color = '#EF4444';
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-12 text-gray-500">
                  No student found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Section */}
        {filteredStudents.length > 0 && (
          <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Left: Items per page selector */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium" style={{ color: '#4A90E2' }}>
                  Show per page:
                </span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => handleItemsPerPageChange(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 transition"
                  style={{ focusRing: '#4A90E2' }}
                >
                  <option value="6">6</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
                <span className="text-sm text-gray-600">
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredStudents.length)} of {filteredStudents.length} students
                </span>
              </div>

              {/* Center: Page numbers */}
              <div className="flex items-center gap-1">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg transition ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-400'
                  }`}
                  style={currentPage !== 1 ? { 
                    borderColor: '#E5E7EB',
                  } : {}}
                  onMouseEnter={(e) => {
                    if (currentPage !== 1) {
                      e.target.style.backgroundColor = '#E3F2FD';
                      e.target.style.borderColor = '#4A90E2';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== 1) {
                      e.target.style.backgroundColor = '#FFFFFF';
                      e.target.style.borderColor = '#E5E7EB';
                    }
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => (
                  <React.Fragment key={index}>
                    {page === '...' ? (
                      <span className="px-3 py-2 text-gray-400">...</span>
                    ) : (
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`min-w-[40px] px-3 py-2 rounded-lg font-semibold text-sm transition ${
                          currentPage === page
                            ? 'text-white shadow-lg'
                            : 'bg-white border border-gray-300 text-gray-700'
                        }`}
                        style={currentPage === page ? {
                          backgroundColor: '#4A90E2',
                          boxShadow: '0 4px 12px rgba(74, 144, 226, 0.4)'
                        } : {}}
                        onMouseEnter={(e) => {
                          if (currentPage !== page) {
                            e.target.style.backgroundColor = '#E3F2FD';
                            e.target.style.borderColor = '#4A90E2';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (currentPage !== page) {
                            e.target.style.backgroundColor = '#FFFFFF';
                            e.target.style.borderColor = '#E5E7EB';
                          }
                        }}
                      >
                        {page}
                      </button>
                    )}
                  </React.Fragment>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg transition ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white border border-gray-300 text-gray-700'
                  }`}
                  onMouseEnter={(e) => {
                    if (currentPage !== totalPages) {
                      e.target.style.backgroundColor = '#E3F2FD';
                      e.target.style.borderColor = '#4A90E2';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== totalPages) {
                      e.target.style.backgroundColor = '#FFFFFF';
                      e.target.style.borderColor = '#E5E7EB';
                    }
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;