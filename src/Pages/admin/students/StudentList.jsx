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
    <div className="p-6 bg-slate-100  min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent">
            Student Management
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your students and activities
          </p>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by name / email / roll"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-400 w-64"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white border border-slate-300 rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="All">All Students</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {/* Add Button */}
          <button
            onClick={() => navigate('/student-add')}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow"
          >
            <UserPlus size={18} /> Add Student
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-800 text-white text-sm">
            <tr>
              <th className="px-6 py-4">Student</th>
              <th className="px-6 py-4">Batch</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {currentStudents.length > 0 ? (
              currentStudents.map((student) => (
                <motion.tr
                  key={student.id}
                  whileHover={{ backgroundColor: '#f1f5f9' }}
                  className="transition"
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-800">
                      {student.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {student.email}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    {student.batch}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 flex justify-center gap-2">
                    <button
                      onClick={() =>
                        navigate(`/student-details/${student.id}`)
                      }
                      className="p-2 bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition"
                    >
                      <Eye size={16} />
                    </button>

                    <button className="p-2 bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-white rounded-lg transition">
                      <Edit size={16} />
                    </button>

                    <button className="p-2 bg-red-100 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-10 text-slate-500">
                  No student found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Section */}
        {filteredStudents.length > 0 && (
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Left: Items per page selector */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-600 font-medium">
                  Show per page:
                </span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => handleItemsPerPageChange(e.target.value)}
                  className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="6">6</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
                <span className="text-sm text-slate-500">
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
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-400'
                  }`}
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => (
                  <React.Fragment key={index}>
                    {page === '...' ? (
                      <span className="px-3 py-2 text-slate-400">...</span>
                    ) : (
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`min-w-[40px] px-3 py-2 rounded-lg font-semibold text-sm transition ${
                          currentPage === page
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-white border border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-400'
                        }`}
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
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-400'
                  }`}
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