import React, { useState } from 'react';
import {
  FiPhone, FiMessageSquare, FiMail, FiGlobe,
  FiHelpCircle, FiClock, FiCheckCircle, FiUsers,
  FiChevronRight, FiFacebook, FiDownload, FiBookOpen,
  FiShield, FiHeadphones, FiSmartphone, FiThumbsUp
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import supportData from '../../../daat/userData/mySuport.json';

const MySuport = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const iconMap = {
    '📱': FiSmartphone,
    '📄': FiBookOpen,
    '👍': FiFacebook,
    '🌐': FiGlobe,
    '📞': FiPhone,
    '💬': FiMessageSquare,
    '⚡': FiHelpCircle,
    '💰': FiDownload,
    '📚': FiBookOpen
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-64 translate-y-64"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              {supportData.pageTitle}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
              {supportData.pageSubtitle}
            </p>
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <p className="text-sm font-semibold tracking-wider">
                {supportData.tagline}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {Object.entries(supportData.stats).map(([key, value], index) => (
            <div
              key={key}
              className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                {value}
              </p>
              <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="md:flex items-center justify-between p-6 md:p-8">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Need Immediate Help?</h3>
              <p className="opacity-90">Our support team is always ready to assist you</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${supportData.contact.numbers[0]}`}
                className="inline-flex items-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FiPhone className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm">Call Now</div>
                  <div className="font-bold">{supportData.contact.phoneHours}</div>
                </div>
              </a>
              <a
                href="https://wa.me/8801942508207"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FiMessageSquare className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm">WhatsApp</div>
                  <div className="font-bold">{supportData.contact.whatsappHours}</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Support Cards */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Quick Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportData.quickSupport.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group relative"
              >
                <div className="relative bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute top-4 right-4 text-3xl">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <FiClock className="w-4 h-4 mr-2" />
                    <span>{item.responseTime}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Support Cards Grid */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">All Support Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportData.sections.map((section, index) => {
              const IconComponent = iconMap[section.icon] || FiHelpCircle;
              
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                >
                  {/* Hover Border Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${section.color} blur group-hover:blur-sm`}></div>

                  {/* Main Card */}
                  <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group-hover:border-transparent transition-all duration-300">
                    {/* Gradient Header */}
                    <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>

                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${section.color} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {section.title}
                          </h3>
                          <p className="text-gray-600 mt-1">{section.description}</p>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {section.items.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                        {section.items.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{section.items.length - 3} more options
                          </li>
                        )}
                      </ul>

                      <a
                        href={section.link}
                        target={section.link.startsWith('http') ? '_blank' : '_self'}
                        rel={section.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-lg font-medium transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-600"
                      >
                        <span>{section.buttonText}</span>
                        <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Numbers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportData.contact.numbers.map((number, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center group"
                >
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                      <FiPhone className="w-6 h-6" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-2">{number}</p>
                    <p className="text-sm text-gray-600">
                      {index === 0 ? 'Primary Support' : 
                       index === 1 ? 'Admission & Payment' : 
                       'Technical Support'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {supportData.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{item.question}</span>
                  <FiChevronRight 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-blue-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Need Help?</h3>
          <p className="text-xl opacity-90 mb-6">We're here to support your learning journey</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@gpcourse.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <FiMail className="w-5 h-5" />
              Email Support
            </a>
            <a
              href="https://facebook.com/gpcourse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <FiFacebook className="w-5 h-5" />
              Facebook Community
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm opacity-75">© 2024 GP Course. All rights reserved.</p>
          <p className="text-xs opacity-60 mt-2">Your success is our priority</p>
        </div>
      </div>
    </div>
  );
};

export default MySuport;
