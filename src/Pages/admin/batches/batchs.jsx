import { useState, useEffect } from 'react';
import { Edit, ArrowRight, Plus, X } from 'lucide-react';
import { Link } from "react-router-dom";
import batchesData from '../../../daat/batches.json';

// BatchList.jsx Component
const BatchList = () => {
  const [batches, setBatches] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    // Load from JSON file
    const loadBatches = () => {
      setBatches(batchesData);
    };
    loadBatches();
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleEdit = (batch) => {
    console.log('Navigate to edit:', batch.id);
    // Use: navigate(`/batches/edit/${batch.id}`)
  };

  const handleViewDetails = (batch) => {
    console.log('Navigate to details:', batch.id);
    // Use: navigate(`/batches/${batch.id}`)
  };

  const handleAddNew = () => {
    console.log('Navigate to add new batch');
    // Use: navigate('/batches/new')
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#F5F7FA' }}>
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-slideIn">
          <div 
            className="px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 text-white"
            style={{
              background: toast.type === 'success' 
                ? 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)'
                : toast.type === 'info'
                ? 'linear-gradient(135deg, #4A90E2 0%, #5BA3F5 100%)'
                : 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)'
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
            <span className="font-medium">{toast.message}</span>
            <button 
              onClick={() => setToast(null)} 
              className="ml-2 hover:bg-white/20 rounded p-1 transition"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 
            className="text-4xl font-bold mb-1"
            style={{ color: '#4A90E2' }}
          >
            All Batches
          </h1>
          <p className="text-gray-600 text-sm">
            Manage your academic batches and programs
          </p>
        </div>
        
        <Link 
          to={'/batches/new'}
          onClick={handleAddNew}
          className="flex items-center gap-2 px-6 py-3 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          style={{ 
            background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
            boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)'
          }}
        >
          <Plus size={20} />
          Add New Batch
        </Link>
      </div>

      {/* Batches Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Table Header */}
        <div 
          className="px-8 py-5"
          style={{ backgroundColor: '#4A90E2' }}
        >
          <div className="grid grid-cols-12 gap-6 text-sm font-semibold text-white uppercase tracking-wider">
            <div className="col-span-4">Batch Name</div>
            <div className="col-span-3">Program</div>
            <div className="col-span-2">Students</div>
            <div className="col-span-2">Date Range</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {batches.map((batch, index) => (
            <div
              key={batch.id}
              className="px-8 py-6 hover:bg-blue-50/50 transition-all duration-300 group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* Batch Name */}
                <div className="col-span-4">
                  <h3 
                    className="text-lg font-bold transition-colors"
                    style={{ color: '#2C3E50' }}
                  >
                    {batch.name}
                  </h3>
                </div>

                {/* Program */}
                <div className="col-span-3">
                  <div className="flex items-center gap-2">
                    <span 
                      className="px-3 py-1 rounded-lg text-sm font-medium"
                      style={{ 
                        backgroundColor: '#FFF3E0',
                        color: '#F97316'
                      }}
                    >
                      {batch.program}
                    </span>
                  </div>
                </div>

                {/* Students */}
                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ 
                        backgroundColor: '#E3F2FD',
                        color: '#4A90E2'
                      }}
                    >
                      {batch.students}
                    </div>
                    <span className="text-sm text-gray-500">students</span>
                  </div>
                </div>

                {/* Date Range */}
                <div className="col-span-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-700">
                      {batch.startDate}
                    </span>
                    <span className="text-xs text-gray-400">to</span>
                    <span className="text-sm font-medium text-gray-700">
                      {batch.endDate}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="col-span-1 flex items-center justify-end gap-3">
                  <Link 
                    to={`/batches/edit/${batch.id}`}
                    onClick={() => handleEdit(batch)}
                    className="p-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                    style={{ 
                      backgroundColor: '#FFF3E0',
                      color: '#F97316'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F97316';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFF3E0';
                      e.currentTarget.style.color = '#F97316';
                    }}
                    title="Edit Batch"
                  >
                    <Edit size={18} />
                  </Link>
                  
                  <Link 
                    to={`/batches/${batch.id}`}
                    onClick={() => handleViewDetails(batch)}
                    className="p-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                    style={{ 
                      backgroundColor: '#E3F2FD',
                      color: '#4A90E2'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#4A90E2';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#E3F2FD';
                      e.currentTarget.style.color = '#4A90E2';
                    }}
                    title="View Details"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {batches.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow-xl mt-8 border border-gray-100">
          <div className="text-6xl mb-4">📚</div>
          <h3 
            className="text-2xl font-bold mb-2"
            style={{ color: '#2C3E50' }}
          >
            No Batches Yet
          </h3>
          <p className="text-gray-500 mb-6">
            Create your first batch to get started
          </p>
          <button
            onClick={handleAddNew}
            className="px-6 py-3 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            style={{ 
              background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)'
            }}
          >
            Create First Batch
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default BatchList;