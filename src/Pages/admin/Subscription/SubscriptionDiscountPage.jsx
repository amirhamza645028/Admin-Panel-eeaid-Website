import React, { useState } from 'react';
import { CheckCircle, CreditCard, Tag, Calendar, Users, ArrowRight, Shield, ChevronRight, Percent } from 'lucide-react';

const SubscriptionDiscountPage = () => {
  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [applyCode, setApplyCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [step, setStep] = useState(1);
  const [discountApplied, setDiscountApplied] = useState(false);

  const discounts = [
    { value: '100', label: '₹100 OFF', original: '₹500', final: '₹400', color: 'bg-blue-50 border-blue-200' },
    { value: '200', label: '₹200 OFF', original: '₹500', final: '₹300', color: 'bg-green-50 border-green-200' },
    { value: '300', label: '₹300 OFF', original: '₹500', final: '₹200', color: 'bg-purple-50 border-purple-200' },
    { value: '400', label: '₹400 OFF', original: '₹500', final: '₹100', color: 'bg-yellow-50 border-yellow-200' },
    { value: '500', label: '50% OFF', original: '₹500', final: '₹250', color: 'bg-red-50 border-red-200' },
    { value: '600', label: '60% OFF', original: '₹500', final: '₹200', color: 'bg-indigo-50 border-indigo-200' },
    { value: '700', label: '70% OFF', original: '₹500', final: '₹150', color: 'bg-pink-50 border-pink-200' },
    { value: '800', label: '80% OFF', original: '₹500', final: '₹100', color: 'bg-teal-50 border-teal-200' },
  ];

  const paymentMethods = [
    { id: 'bkash', name: 'bKash', icon: '💳', color: 'bg-pink-50 border-pink-200' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳', color: 'bg-blue-50 border-blue-200' },
    { id: 'bank', name: 'Bank Transfer', icon: '🏦', color: 'bg-green-50 border-green-200' },
    { id: 'paypal', name: 'PayPal', icon: '💰', color: 'bg-yellow-50 border-yellow-200' },
  ];

  const handleDiscountSelect = (value) => {
    setSelectedDiscount(value);
    setDiscountApplied(true);
  };

  const handleApplyDiscount = () => {
    if (applyCode) {
      // In real app, validate discount code from backend
      if (applyCode.toUpperCase() === 'DISCOUNT200') {
        setSelectedDiscount('200');
        setDiscountApplied(true);
        alert('Discount code applied successfully! ₹200 OFF');
      } else if (applyCode.toUpperCase() === 'DISCOUNT0200') {
        setSelectedDiscount('200');
        setDiscountApplied(true);
        alert('Discount code applied successfully! ₹200 OFF');
      } else {
        alert('Invalid discount code');
      }
    }
  };

  const handleConfirmSubscription = () => {
    // In real app, process payment
    alert('Payment processing... Subscription confirmed!');
    setStep(3);
  };

  const getSelectedDiscount = () => {
    return discounts.find(d => d.value === selectedDiscount) || discounts[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#5E89C1' }}>
            Subscription & Discount - New Registration
          </h1>
          <p className="text-gray-600">Register for GP Course Special Batch with exclusive discounts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Info & Progress */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {s}
                    </div>
                    {s < 3 && (
                      <div className={`w-16 h-1 mx-2 ${step > s ? 'bg-blue-600' : 'bg-gray-200'}`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-600">
                <span>Select Discount</span>
                <span>Payment Method</span>
                <span>Confirmation</span>
              </div>
            </div>

            {/* Step 1: Select Discount */}
            {step === 1 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Tag className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Select Your Discount</h2>
                    <p className="text-gray-600">Choose from available discount options</p>
                  </div>
                </div>

                {/* Original Price */}
                <div className="mb-8 p-4 bg-gray-50 rounded-xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-800">GP Course Special Batch</h3>
                      <p className="text-gray-600 text-sm">Total subscription amount</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-800">₹500</p>
                      <p className="text-sm text-gray-500">Original Price</p>
                    </div>
                  </div>
                </div>

                {/* Discount Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {discounts.map((discount) => (
                    <button
                      key={discount.value}
                      onClick={() => handleDiscountSelect(discount.value)}
                      className={`p-4 rounded-xl border-2 transition-all ${discount.color} ${selectedDiscount === discount.value ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:shadow-md'}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-gray-800">{discount.label}</span>
                        <Percent size={18} className="text-gray-500" />
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 line-through">₹{discount.original}</p>
                        <p className="text-lg font-bold" style={{ color: '#5E89C1' }}>₹{discount.final}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Discount Code Input */}
                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-3">Have a discount code?</h3>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={applyCode}
                      onChange={(e) => setApplyCode(e.target.value)}
                      placeholder="Enter discount code (e.g., DISCOUNT200)"
                      className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <button
                      onClick={handleApplyDiscount}
                      className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      Apply Code
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedDiscount}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Continue to Payment
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Step 2: Payment Method */}
            {step === 2 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <CreditCard className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Select Payment Method</h2>
                    <p className="text-gray-600">Choose your preferred payment option</p>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${method.color} ${paymentMethod === method.id ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:shadow-md'}`}
                    >
                      <div className="text-2xl">{method.icon}</div>
                      <div className="text-left flex-1">
                        <h3 className="font-bold text-gray-800">{method.name}</h3>
                        <p className="text-sm text-gray-600">Secure payment</p>
                      </div>
                      {paymentMethod === method.id && (
                        <CheckCircle className="text-green-500" size={20} />
                      )}
                    </button>
                  ))}
                </div>

                {/* bKash Payment Details */}
                {paymentMethod === 'bkash' && (
                  <div className="mb-8 p-4 border-2 border-pink-200 bg-pink-50 rounded-xl">
                    <h3 className="font-bold text-pink-700 mb-2">bKash Payment Instructions</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                      <li>Dial *247# on your mobile</li>
                      <li>Select "Payment" option</li>
                      <li>Enter merchant number: 017XXXXXXXX</li>
                      <li>Enter amount: ₹{getSelectedDiscount().final}</li>
                      <li>Enter your PIN to confirm</li>
                      <li>Save the transaction ID for verification</li>
                    </ol>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!paymentMethod}
                    className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Confirm & Pay
                    <Shield size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Confirm Subscription</h2>
                    <p className="text-gray-600">Review and confirm your subscription</p>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="mb-8 bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg">Order Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-600">Course</span>
                      <span className="font-bold text-gray-800">GP Course Special Batch 2025</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-600">Original Price</span>
                      <span className="text-gray-800">₹500</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-600">Discount Applied</span>
                      <span className="text-green-600 font-bold">-₹{selectedDiscount}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-gray-600">Final Amount</span>
                      <span className="text-2xl font-bold" style={{ color: '#5E89C1' }}>₹{getSelectedDiscount().final}</span>
                    </div>
                  </div>
                </div>

                {/* Confirm Discount Code */}
                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-3">Confirm Discount Code</h3>
                  <input
                    type="text"
                    value={confirmCode}
                    onChange={(e) => setConfirmCode(e.target.value)}
                    placeholder="Re-enter discount code for verification"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-3"
                  />
                  <p className="text-sm text-gray-500">Please confirm your discount code: {applyCode || 'DISCOUNT200'}</p>
                </div>

                <button
                  onClick={handleConfirmSubscription}
                  disabled={!confirmCode}
                  className="w-full py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
                >
                  <CreditCard size={20} />
                  Complete Payment - ₹{getSelectedDiscount().final}
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Summary & Features */}
          <div className="space-y-6">
            {/* Course Summary Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Course Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Calendar className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-bold text-gray-800">6 Months</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Users className="text-green-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Students Enrolled</p>
                    <p className="font-bold text-gray-800">250+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Discount Card */}
            {selectedDiscount && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Selected Offer</h3>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-blue-700">{getSelectedDiscount().label}</span>
                    <Tag className="text-blue-600" size={20} />
                  </div>
                  <div className="text-center py-2">
                    <p className="text-sm text-gray-500 line-through">₹{getSelectedDiscount().original}</p>
                    <p className="text-3xl font-bold" style={{ color: '#5E89C1' }}>₹{getSelectedDiscount().final}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Features Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Why Choose Us</h3>
              <ul className="space-y-3">
                {[
                  '24/7 Access to Course Materials',
                  'Certificate of Completion',
                  'Live Q&A Sessions',
                  'Downloadable Resources',
                  'Mobile App Access',
                  'Community Support',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help Card */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2 text-lg">Need Help?</h3>
              <p className="text-blue-100 mb-4">Our support team is here to help you</p>
              <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>By proceeding, you agree to our Terms of Service and Privacy Policy.</p>
          <p className="mt-1">All payments are secured with 256-bit SSL encryption.</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDiscountPage;