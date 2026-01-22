import { Shield, Lock, Bell, Eye, Key, Smartphone } from 'lucide-react';

const SettingsSecurity = () => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Settings & Security</h1>

        <div className="space-y-6">
          {/* Security Settings */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Shield className="text-cyan-400" size={28} />
              Security Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <Lock className="text-purple-400" size={20} />
                  <div>
                    <p className="font-semibold text-white">Change Password</p>
                    <p className="text-sm text-slate-400">Update your account password</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-xl hover:bg-purple-500/30 transition-all">
                  Change
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <Smartphone className="text-emerald-400" size={20} />
                  <div>
                    <p className="font-semibold text-white">Two-Factor Authentication</p>
                    <p className="text-sm text-slate-400">Add extra security layer</p>
                  </div>
                </div>
                <label className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-full h-full bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Bell className="text-blue-400" size={28} />
              Notification Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                <div>
                  <p className="font-semibold text-white">Email Notifications</p>
                  <p className="text-sm text-slate-400">Receive updates via email</p>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-full h-full bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
            <div>
              <p className="font-semibold text-white">Push Notifications</p>
              <p className="text-sm text-slate-400">Get notifications on your device</p>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-full h-full bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Eye className="text-pink-400" size={28} />
          Privacy Settings
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
            <div>
              <p className="font-semibold text-white">Profile Visibility</p>
              <p className="text-sm text-slate-400">Control who can see your profile</p>
            </div>
            <select className="px-4 py-2 bg-slate-700 text-white rounded-xl border border-slate-600 outline-none">
              <option>Public</option>
              <option>Private</option>
              <option>Friends Only</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>