import React, { useState } from 'react';
// Try these common icon names that should work
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { 
  Phone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Facebook, 
  Key, 
  ArrowRight,
  UserPlus,
  HelpCircle,
  CheckCircle,
  Shield,
  Smartphone as PhoneIcon
} from 'lucide-react';

// For Google icon, use alternative if not available
import { Chrome as Google } from 'lucide-react'; // Google might be called Chrome

const Login = () => {
  const [loginMethod, setLoginMethod] = useState('phone'); // 'phone', 'email', 'otp'
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Your website logo color (from your website)
  const primaryColor = '#5E89C1';
  const primaryGradient = 'linear-gradient(135deg, #5E89C1 0%, #4A7BA7 100%)';

  // Handle OTP Send
  const handleSendOtp = () => {
    if (!phone || phone.length < 11) {
      alert('Please enter a valid phone number');
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setOtpSent(true);
      setLoading(false);
      alert(`OTP sent to ${phone}`);
    }, 1000);
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      alert('Login successful!');
    }, 1500);
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email profile';
  };

  // Handle Facebook Login
  const handleFacebookLogin = () => {
    window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email';
  };

  // Handle Forgot Password
  const handleForgotPassword = () => {
    if (!email && loginMethod !== 'email') {
      alert('Please enter your email address to reset password');
      return;
    }
    
    // Simulate sending reset link
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Password reset link sent to ${email || 'your email'}`);
      setForgotPassword(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)'
    }}>
      <div className="w-full max-w-md"> Send OTP
        {/* Logo/Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              {/* Your Website Logo */}
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: primaryGradient }}>
                <Shield size={36} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle size={20} className="text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to continue to your account</p>
        </div>

        {/* Main Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Login Method Tabs */}
          <div className="flex mb-8 bg-gray-50 rounded-xl p-1">
            <button
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${loginMethod === 'phone' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              style={loginMethod === 'phone' ? { color: primaryColor } : {}}
            >
              <Phone size={18} />
              Phone
            </button>
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${loginMethod === 'email' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              style={loginMethod === 'email' ? { color: primaryColor } : {}}
            >
              <Mail size={18} />
              Email
            </button>
            <button
              onClick={() => setLoginMethod('otp')}
              className={`flex-1 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${loginMethod === 'otp' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              style={loginMethod === 'otp' ? { color: primaryColor } : {}}
            >
              <Key size={18} />
              OTP
            </button>
          </div>

          {/* Phone Login Form */}
          {loginMethod === 'phone' && (
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <PhoneIcon size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                  <HelpCircle size={14} />
                  We'll send a 6-digit OTP to this number
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-6 "
                style={{ background: primaryGradient }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending OTP...
                  </>
                ) : (
                  <>
                    Send OTP
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Email/Password Login Form */}
          {loginMethod === 'email' && (
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Mail size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Lock size={20} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500"
                    style={{ accentColor: primaryColor }}
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => setForgotPassword(true)}
                  className="text-sm font-medium"
                  style={{ color: primaryColor }}
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: primaryGradient }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* OTP Login Form */}
          {loginMethod === 'otp' && (
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <PhoneIcon size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={loading || otpSent}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm font-medium px-3 py-1 rounded-lg"
                    style={{ 
                      background: otpSent ? '#5E89C1' : primaryColor,
                      color: 'white'
                    }}
                  >
                    {otpSent ? 'Sent ✓' : 'Send OTP'}
                  </button>
                </div>
              </div>

              {otpSent && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    6-digit OTP
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Key size={20} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter 6-digit OTP"
                      maxLength="6"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-colors text-center text-2xl tracking-widest"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    OTP sent to {phone}. Expires in 5:00
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !otpSent}
                className="w-full py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: primaryGradient }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify OTP & Login
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Login Divider */}
          <div className="my-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons - Using text if icons fail */}
            
          </div>
          {/* Login By */}
          <div>
            <div className="grid grid-cols-2 gap-4">
            <button 
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all font-medium text-gray-700">
            <FcGoogle size={20} /> Google
            </button>
            <button 
            onClick={handleFacebookLogin}
            className="flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all font-medium text-gray-700">
            <FaFacebook size={20} className="text-[#1877F2]" /> Facebook
          </button>
        </div>
          </div>

          {/* Register Link */}
          <div className="text-center pt-6 border-t border-gray-100">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a 
                href="/register" 
                className="font-bold hover:underline flex items-center justify-center gap-1 mt-2"
                style={{ color: primaryColor }}
              >
                <UserPlus size={16} />
                Register now
              </a>
            </p>
          </div>
        </div>

        {/* Security Footer */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <Shield size={14} />
            <span>Your data is secured with 256-bit SSL encryption</span>
          </div>
        </div>

        {/* Forgot Password Modal */}
        {forgotPassword && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h3 className="text-xl font-bold mb-4" style={{ color: primaryColor }}>
                Reset Your Password
              </h3>
              <p className="text-gray-600 mb-6">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setForgotPassword(false)}
                  className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleForgotPassword}
                  disabled={loading}
                  className="flex-1 py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2"
                  style={{ background: primaryGradient }}
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;