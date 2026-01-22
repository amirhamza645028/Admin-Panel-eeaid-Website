import { useState, useEffect } from 'react';
import { 
  ArrowLeft, Edit, Ticket, Calendar, Users, 
  DollarSign, TrendingUp, Clock, Award, AlertCircle
} from 'lucide-react';

const CouponDetails = ({ couponId }) => {
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    // Load coupon from JSON
    const data = {
      id: 1,
      code: "TESTNOW",
      discount: "50%",
      type: "percentage",
      expiryDate: "2026-01-31",
      used: 1,
      maxUses: 100,
      minPurchase: 0,
      active: true,
      createdDate: "2024-01-15",
      description: "Special 50% discount for new users"
    };
    setCoupon(data);
  }, [couponId]);

  const handleBack = () => {
    console.log('Navigate to /coupons');
  };

  const handleEdit = () => {
    console.log('Navigate to /coupons/edit/' + couponId);
  };

  if (!coupon) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-slate-600">Loading...</div>
      </div>
    );
  }

  const isExpired = new Date(coupon.expiryDate) < new Date();
  const usagePercent = (coupon.used / coupon.maxUses) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Coupons
        </button>

        {/* Coupon Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className={`p-8 bg-gradient-to-r ${
            isExpired 
              ? 'from-red-500 to-red-600' 
              : coupon.active 
              ? 'from-purple-500 to-pink-500' 
              : 'from-slate-500 to-slate-600'
          } relative`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Ticket size={40} className="text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-black text-white mb-2 tracking-wider">
                    {coupon.code}
                  </h2>
                  <div className="flex items-center gap-3">
                    <span className="text-6xl font-black text-white">
                      {coupon.discount}
                    </span>
                    <span className="text-white/90 text-lg uppercase">OFF</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              >
                <Edit size={20} />
                Edit Coupon
              </button>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Status Card */}
          <div className={`bg-white rounded-2xl shadow-lg p-6 ${
            isExpired ? 'border-2 border-red-200' : ''
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className={isExpired ? 'text-red-600' : 'text-emerald-600'} size={24} />
              <h3 className="text-xl font-bold text-slate-800">Status</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Current Status</span>
                <span className={`px-4 py-2 rounded-lg font-semibold ${
                  isExpired 
                    ? 'bg-red-100 text-red-700' 
                    : coupon.active 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-slate-200 text-slate-700'
                }`}>
                  {isExpired ? 'Expired' : coupon.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Type</span>
                <span className="font-semibold text-slate-800 capitalize">{coupon.type}</span>
              </div>
            </div>
          </div>

          {/* Dates Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-blue-600" size={24} />
              <h3 className="text-xl font-bold text-slate-800">Important Dates</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Created</span>
                <span className="font-semibold text-slate-800">
                  {new Date(coupon.createdDate).toLocaleDateString('en-GB')}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Expires</span>
                <span className={`font-semibold ${
                  isExpired ? 'text-red-600' : 'text-slate-800'
                }`}>
                  {new Date(coupon.expiryDate).toLocaleDateString('en-GB')}
                </span>
              </div>
            </div>
          </div>

          {/* Usage Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-purple-600" size={24} />
              <h3 className="text-xl font-bold text-slate-800">Usage Statistics</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Used</span>
                <span className="font-semibold text-slate-800">{coupon.used} times</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Remaining</span>
                <span className="font-semibold text-slate-800">{coupon.maxUses - coupon.used} times</span>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600">Usage Rate</span>
                  <span className="font-semibold text-purple-600">{usagePercent.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${usagePercent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Requirements */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="text-emerald-600" size={24} />
              <h3 className="text-xl font-bold text-slate-800">Purchase Requirements</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Minimum Purchase</span>
                <span className="font-semibold text-slate-800">
                  {coupon.minPurchase > 0 ? `৳${coupon.minPurchase}` : 'No minimum'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Maximum Uses</span>
                <span className="font-semibold text-slate-800">{coupon.maxUses}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        {coupon.description && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Description</h3>
            <p className="text-slate-700 leading-relaxed">{coupon.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CouponDetails;