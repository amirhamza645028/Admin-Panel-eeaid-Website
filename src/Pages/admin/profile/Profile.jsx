import { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Calendar, Shield, 
  Camera, Edit2, Save, X, Lock, Bell, Globe,
  Briefcase, Award, Clock, Activity
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [toast, setToast] = useState(null);
  const { isDark } = useTheme();
  
  const [profileData, setProfileData] = useState({
    name: "Admin User",
    email: "admin@exclusiveeducation.com",
    phone: "+880 1712-345678",
    role: "Super Administrator",
    department: "Academic Management",
    location: "Dhaka, Bangladesh",
    joinDate: "January 2023",
    avatar: "https://i.pravatar.cc/300?img=12",
    bio: "Experienced education administrator with 5+ years in academic management and student success."
  });

  const [tempData, setTempData] = useState({...profileData});

  const stats = [
    { label: "Total Students", value: "5,240", icon: User, color: "from-blue-500 to-blue-600" },
    { label: "Active Programs", value: "12", icon: Briefcase, color: "from-emerald-500 to-emerald-600" },
    { label: "Courses Managed", value: "28", icon: Award, color: "from-purple-500 to-purple-600" },
    { label: "Years Experience", value: "5+", icon: Clock, color: "from-orange-500 to-orange-600" }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTempData({...profileData});
  };

  const handleSave = () => {
    setProfileData({...tempData});
    setIsEditing(false);
    showToast('✅ Profile updated successfully!', 'success');
  };

  const handleCancel = () => {
    setTempData({...profileData});
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempData({...tempData, avatar: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-8">
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

      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent dark:from-slate-200 dark:to-slate-400 mb-2">
            Admin Profile
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Manage your account settings and preferences</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <p className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl p-8 sticky top-8">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    src={isEditing ? tempData.avatar : profileData.avatar}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-lg"
                  />
                  {isEditing && (
                    <label className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                      <Camera size={20} className="text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                  {isEditing ? tempData.name : profileData.name}
                </h2>
                <p className="text-blue-600 font-semibold flex items-center justify-center gap-2">
                  <Shield size={16} />
                  {isEditing ? tempData.role : profileData.role}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <Edit2 size={20} />
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSave}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Save size={20} />
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300"
                    >
                      <X size={20} />
                      Cancel
                    </button>
                  </>
                )}
                
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Lock size={20} />
                  Change Password
                </button>
              </div>

              {/* Activity Status */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Account Status</span>
                  <span className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                  <User className="text-blue-600" size={28} />
                  Personal Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempData.name}
                      onChange={(e) => setTempData({...tempData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 bg-transparent border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none transition-colors dark:text-white"
                    />
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                      <User size={18} className="text-slate-400" />
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{profileData.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={tempData.email}
                      onChange={(e) => setTempData({...tempData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 bg-transparent border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none transition-colors dark:text-white"
                    />
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                      <Mail size={18} className="text-slate-400" />
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{profileData.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={tempData.phone}
                      onChange={(e) => setTempData({...tempData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 bg-transparent border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none transition-colors dark:text-white"
                    />
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                      <Phone size={18} className="text-slate-400" />
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{profileData.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempData.location}
                      onChange={(e) => setTempData({...tempData, location: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 bg-transparent border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none transition-colors dark:text-white"
                    />
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                      <MapPin size={18} className="text-slate-400" />
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{profileData.location}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Department</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempData.department}
                      onChange={(e) => setTempData({...tempData, department: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 bg-transparent border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none transition-colors dark:text-white"
                    />
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                      <Briefcase size={18} className="text-slate-400" />
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{profileData.department}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Join Date</label>
                  <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                    <Calendar size={18} className="text-slate-400" />
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{profileData.joinDate}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Bio</label>
                {isEditing ? (
                  <textarea
                    value={tempData.bio}
                    onChange={(e) => setTempData({...tempData, bio: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 bg-transparent border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none transition-colors resize-none dark:text-white"
                    rows="4"
                  />
                ) : (
                  <p className="px-4 py-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                    {profileData.bio}
                  </p>
                )}
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                <Globe className="text-blue-600" size={28} />
                Preferences & Settings
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <Bell className="text-blue-600" size={20} />
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Email Notifications</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Receive email updates about activities</p>
                    </div>
                  </div>
                  <label className="relative inline-block w-12 h-6">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-full h-full bg-slate-300 dark:bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <Activity className="text-emerald-600" size={20} />
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Activity Tracking</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Track your dashboard activities</p>
                    </div>
                  </div>
                  <label className="relative inline-block w-12 h-6">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-full h-full bg-slate-300 dark:bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
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

export default Profile;