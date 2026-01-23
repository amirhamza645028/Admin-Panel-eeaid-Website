import { useState, useEffect } from 'react';
import { 
  Plus, Search, Filter, X, Edit, Eye, Trash2, 
  Ticket, Calendar, Users, ToggleLeft, ToggleRight,
  TrendingUp, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CouponList = () => {
  const [coupons, setCoupons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    // Load coupons from JSON
    // const response = await fetch('/coupons.json');
    // const data = await response.json();
    const data = [
      {
        id: 1,
        code: "TESTNOW",
        discount: "50%",
        type: "percentage",
        expiryDate: "2026-01-31",
        used: 1,
        maxUses: 100,
        minPurchase: 0,
        active: true
      },
      {
        id: 2,
        code: "TEST20",
        discount: "25%",
        type: "percentage",
        expiryDate: "2026-01-27",
        used: 0,
        maxUses: 100,
        minPurchase: 0,
        active: true
      },
      {
        id: 3,
        code: "TEST202",
        discount: "৳99",
        type: "fixed",
        expiryDate: "2026-01-31",
        used: 0,
        maxUses: 100,
        minPurchase: 0,
        active: false
      },
      {
        id: 4,
        code: "TEST101",
        discount: "0%",
        type: "percentage",
        expiryDate: "2026-01-31",
        used: 0,
        maxUses: 100,
        minPurchase: 0,
        active: false
      },
      {
        id: 5,
        code: "GP",
        discount: "৳1",
        type: "fixed",
        expiryDate: "2026-01-13",
        used: 1,
        maxUses: 100,
        minPurchase: 0,
        active: true,
        isExpired: true
      },
      {
        id: 6,
        code: "TEST80L",
        discount: "৳100",
        type: "fixed",
        expiryDate: "2026-01-30",
        used: 0,
        maxUses: 100,
        minPurchase: 100,
        active: true
      }
    ];
    setCoupons(data);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const toggleCouponStatus = (id) => {
    setCoupons(coupons.map(c => {
      if (c.id === id) {
        const newStatus = !c.active;
        showToast(
          newStatus ? '✅ Coupon activated successfully!' : '🔒 Coupon deactivated successfully!',
          'info'
        );
        return { ...c, active: newStatus };
      }
      return c;
    }));
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this coupon?')) {
      setCoupons(coupons.filter(c => c.id !== id));
      showToast('🗑️ Coupon deleted successfully!', 'success');
    }
  };

  const handleAddNew = () => {
    console.log('Navigate to /coupons/add');
    // Use: navigate('/coupons/add')
  };

  const handleEdit = (id) => {
    console.log('Navigate to /coupons/edit/' + id);
    // Use: navigate(`/coupons/edit/${id}`)
  };

  const handleViewDetails = (id) => {
    console.log('Navigate to /coupons/' + id);
    // Use: navigate(`/coupons/${id}`)
  };

  const filteredCoupons = coupons.filter(coupon => {
    const matchesSearch = coupon.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'active' && coupon.active) || 
      (statusFilter === 'inactive' && !coupon.active) ||
      (statusFilter === 'expired' && coupon.isExpired);
    return matchesSearch && matchesStatus;
  });

  const isExpired = (expiryDate) => {
    return new Date(expiryDate) < new Date();
  };

  const stats = [
    { label: "Total Coupons", value: coupons.length, icon: Ticket, color: "from-blue-500 to-blue-600" },
    { label: "Active Coupons", value: coupons.filter(c => c.active && !c.isExpired).length, icon: TrendingUp, color: "from-emerald-500 to-emerald-600" },
    { label: "Expired Coupons", value: coupons.filter(c => c.isExpired).length, icon: AlertCircle, color: "from-red-500 to-red-600" },
    { label: "Total Used", value: coupons.reduce((acc, c) => acc + c.used, 0), icon: Users, color: "from-purple-500 to-purple-600" }
  ];

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

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Coupons Management
          </h1>
          <p className="text-slate-600">Manage discount coupons and promotional codes</p>
        </div>
        <Link
        to={'/coupons-add'}
          onClick={handleAddNew}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <Plus size={20} />
          Add New Coupon
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
              <stat.icon className="text-white" size={24} />
            </div>
            <p className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</p>
            <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search coupons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 outline-none transition-colors"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-12 pr-8 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 outline-none transition-colors bg-white cursor-pointer appearance-none min-w-[200px]"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="expired">Expired</option>
            </select>
          </div>
          {(searchTerm || statusFilter !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
              }}
              className="px-4 py-3 bg-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-300 transition-all duration-300 flex items-center gap-2"
            >
              <X size={18} />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoupons.map((coupon, index) => (
          <div
            key={coupon.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Card Header */}
            <div className={`p-6 bg-gradient-to-r ${
              coupon.isExpired 
                ? 'from-red-500 to-red-600' 
                : coupon.active 
                ? 'from-purple-500 to-pink-500' 
                : 'from-slate-500 to-slate-600'
            } relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Ticket className="text-white" size={32} />
                  {coupon.isExpired && (
                    <span className="px-3 py-1 bg-red-700 text-white text-xs font-bold rounded-full">
                      EXPIRED
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 tracking-wider">
                  {coupon.code}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-black text-white">
                    {coupon.discount}
                  </span>
                  <span className="text-white/80 text-sm uppercase">OFF</span>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 font-medium flex items-center gap-2">
                    <Calendar size={16} />
                    Expires
                  </span>
                  <span className={`font-semibold ${
                    isExpired(coupon.expiryDate) ? 'text-red-600' : 'text-slate-800'
                  }`}>
                    {new Date(coupon.expiryDate).toLocaleDateString('en-GB')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 font-medium flex items-center gap-2">
                    <Users size={16} />
                    Used
                  </span>
                  <span className="font-semibold text-slate-800">
                    {coupon.used}/{coupon.maxUses}
                  </span>
                </div>

                {coupon.minPurchase > 0 && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">Min Purchase</span>
                    <span className="font-semibold text-slate-800">৳{coupon.minPurchase}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-slate-600 font-medium text-sm">Status</span>
                  <button
                    onClick={() => toggleCouponStatus(coupon.id)}
                    disabled={coupon.isExpired}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      coupon.isExpired
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : coupon.active
                        ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {coupon.active ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
                    {coupon.active ? 'Active' : 'Inactive'}
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                  <span>Usage</span>
                  <span>{Math.round((coupon.used / coupon.maxUses) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      coupon.active ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-slate-400'
                    }`}
                    style={{ width: `${(coupon.used / coupon.maxUses) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link
                to={'/coupons-details'}
                  onClick={() => handleViewDetails(coupon.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-100 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Eye size={18} />
                  View
                </Link>
                <Link
                to={'/coupons-details'} 
                  onClick={() => handleEdit(coupon.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-100 text-purple-600 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  <Edit size={18} />
                  Edit
                </Link >
                <button
                  onClick={() => handleDelete(coupon.id)}
                  className="px-4 py-2.5 bg-red-100 text-red-600 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCoupons.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
          <Ticket className="mx-auto text-slate-300 mb-4" size={64} />
          <h3 className="text-2xl font-bold text-slate-700 mb-2">No Coupons Found</h3>
          <p className="text-slate-500 mb-6">
            {searchTerm || statusFilter !== 'all' 
              ? 'Try adjusting your filters' 
              : 'Create your first coupon to get started'}
          </p>
          {!searchTerm && statusFilter === 'all' && (
            <Link
            to={'/coupons-add'}
              onClick={handleAddNew}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold"
            >
              <Plus size={20} />
              Add New Coupon
            </Link>
          )}
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

        select::-ms-expand {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CouponList;