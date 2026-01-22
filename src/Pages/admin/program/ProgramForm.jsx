import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

const ProgramForm = ({ mode = 'add', programId = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: '📚',
    iconColor: '#3b82f6',
    startDate: '',
    endDate: '',
    visible: true
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (mode === 'edit' && programId) {
      // Load program data from JSON/API
      // const response = await fetch(`/programs/${programId}.json`);
      // const data = await response.json();
      const data = {
        name: "GP COURSE",
        description: "General Practice Course",
        icon: "🩺",
        iconColor: "#10b981",
        startDate: "2024-05-01",
        endDate: "2025-05-01",
        visible: false
      };
      setFormData(data);
    }
  }, [mode, programId]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.description || !formData.startDate || !formData.endDate) {
      showToast('⚠️ Please fill all required fields', 'error');
      return;
    }

    // Save to API/JSON
    console.log('Saving program:', formData);
    
    if (mode === 'add') {
      showToast('🎉 Program added successfully!', 'success');
    } else {
      showToast('✅ Program updated successfully!', 'success');
    }

    // Navigate back after 1.5 seconds
    setTimeout(() => {
      console.log('Navigate to /programs');
      // Use: navigate('/programs')
    }, 1500);
  };

  const handleCancel = () => {
    console.log('Navigate to /programs');
    // Use: navigate('/programs')
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-slideIn">
          <div className={`px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 ${
            toast.type === 'success' 
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' 
              : toast.type === 'info'
              ? 'bg-gradient-to-r from-blue-500 to-blue-600'
              : 'bg-gradient-to-r from-orange-500 to-orange-600'
          } text-white`}>
            <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
            <span className="font-medium">{toast.message}</span>
            <button onClick={() => setToast(null)} className="ml-2 hover:bg-white/20 rounded p-1">
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            {mode === 'add' ? '➕ Add New Program' : '✏️ Edit Program'}
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Program Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter program name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition-colors resize-none"
                rows="4"
                placeholder="Enter program description"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Icon (Emoji)
                </label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({...formData, icon: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition-colors text-2xl text-center"
                  placeholder="📚"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Icon Color
                </label>
                <input
                  type="color"
                  value={formData.iconColor}
                  onChange={(e) => setFormData({...formData, iconColor: e.target.value})}
                  className="w-full h-12 rounded-xl border-2 border-slate-200 cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  End Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
              <input
                type="checkbox"
                checked={formData.visible}
                onChange={(e) => setFormData({...formData, visible: e.target.checked})}
                className="w-5 h-5 text-blue-600 rounded"
                id="visible"
              />
              <label htmlFor="visible" className="text-sm font-semibold text-slate-700">
                Program Visible (Show to students)
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSubmit}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Check size={20} />
                {mode === 'add' ? 'Add Program' : 'Update Program'}
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-3 bg-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-300 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </div>
  );
};

export default ProgramForm;