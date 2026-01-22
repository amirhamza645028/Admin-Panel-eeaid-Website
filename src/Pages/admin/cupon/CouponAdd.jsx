import { useState } from 'react';
import { Save, X, ArrowLeft, Ticket, Calendar, Users, DollarSign, Percent } from 'lucide-react';

const CouponAdd = () => {
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    code: '',
    discountType: 'percentage',
    discountValue: '',
    expiryDate: '',
    maxUses: 100,
    minPurchase: 0,
    active: true
  });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = () => {
    if (!formData.code || !formData.discountValue || !formData.expiryDate) {
      showToast('⚠️ Please fill all required fields', 'error');
      return;
    }

    // Save to coupons.json
    const newCoupon = {
      id: Date.now(),
      code: formData.code.toUpperCase(),
      discount: formData.discountType === 'percentage' 
        ? `${formData.discountValue}%` 
        : `৳${formData.discountValue}`,
      type: formData.discountType,
      expiryDate: formData.expiryDate,
      used: 0,
      maxUses: parseInt(formData.maxUses),
      minPurchase: parseInt(formData.minPurchase),
      active: formData.active
    };

    console.log('Saving coupon:', newCoupon);
    showToast('🎉 Coupon created successfully!', 'success');

    // Navigate back after 1.5 seconds
    setTimeout(() => {
      console.log('Navigate to /coupons');
      // Use: navigate('/coupons')
    }, 1500);
  };

  const handleCancel = () => {
    console.log('Navigate to /coupons');
    // Use: navigate('/coupons')
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-slideIn">
          <div className={`px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 ${
            toast.type === 'success' 
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' 
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
        {/* Back Button */}
        <button
          onClick={handleCancel}
          className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Coupons
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Ticket size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Create New Coupon</h2>
                <p className="text-purple-100 mt-1">Add a new discount coupon</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Coupon Code */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Coupon Code <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    value={formData.code}
                    onChange={(e) => setFormData({...formData, code: e.target.value.toUpperCase()})}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 outline-none transition-colors uppercase font-bold text-lg"
                    placeholder="SAVE20"
                    maxLength="20"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">Enter a unique coupon code (letters and numbers only)</p>
              </div>

              {/* Discount Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Discount Type <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setFormData({...formData, discountType: 'percentage'})}
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.discountType === 'percentage'
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    <Percent size={24} />
                    <span className="font-semibold">Percentage</span>
                  </button>
                  <button
                    onClick={() => setFormData({...formData, discountType: 'fixed'})}
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.discountType === 'fixed'
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    <DollarSign size={24} />
                    <span className="font-semibold">Fixed Amount</span>
                  </button>
                </div>
              </div>

              {/* Discount Value */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Discount Value <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  {formData.discountType === 'percentage' ? (
                    <Percent className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  ) : (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">৳</span>
                  )}
                  <input
                    type="number"
                    value={formData.discountValue}
                    onChange={(e) => setFormData({...formData, discountValue: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 outline-none transition-colors"
                    placeholder={formData.discountType === 'percentage' ? '20' : '100'}
                    min="0"
                    max={formData.discountType === 'percentage' ? '100' : undefined}
                  />
                </div>
              </div>

              {/* Expiry Date & Max Uses */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Expiry Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="date"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 outline-none transition-colors"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Maximum Uses
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="number"
                      value={formData.maxUses}
                      onChange={(e) => setFormData({...formData, maxUses: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 outline-none transition-colors"
                      min="1"
                    />
                  </div>
                </div>
              </div>

              {/* Minimum Purchase */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Minimum Purchase Amount (Optional)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">৳</span>
                  <input
                    type="number"
                    value={formData.minPurchase}
                    onChange={(e) => setFormData({...formData, minPurchase: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 outline-none transition-colors"
                    placeholder="0"
                    min="0"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">Leave 0 for no minimum purchase requirement</p>
              </div>

              {/* Active Status */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div>
                  <p className="font-semibold text-slate-800">Activate Coupon</p>
                  <p className="text-sm text-slate-600">Make this coupon available for use immediately</p>
                </div>
                <label className="relative inline-block w-14 h-7">
                  <input 
                    type="checkbox" 
                    checked={formData.active}
                    onChange={(e) => setFormData({...formData, active: e.target.checked})}
                    className="sr-only peer" 
                  />
                  <div className="w-full h-full bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Save size={20} />
                  Create Coupon
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

export default CouponAdd;