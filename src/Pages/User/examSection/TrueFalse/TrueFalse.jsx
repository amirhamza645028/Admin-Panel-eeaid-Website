import React, { useState } from 'react';
import { Play, MessageCircle, Info, CheckCircle, XCircle } from 'lucide-react';
import TrueFalseData from '../../../../daat/TrueFalseData.json'

const TrueFalse = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showSolution, setShowSolution] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Handle answer selection
  const handleAnswer = (questionId, optionId, selectedAnswer) => {
    if (submitted) return;

    setUserAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        [optionId]: selectedAnswer
      }
    }));
  };

  // Check if answer is correct
  const isCorrect = (questionId, optionId, answer) => {
    const question = TrueFalseData.find(q => q.id === questionId);
    const option = question.options.find(o => o.id === optionId);
    return userAnswers[questionId]?.[optionId] === option.answer;
  };

  // Check if answer is wrong
  const isWrong = (questionId, optionId) => {
    const question = TrueFalseData.find(q => q.id === questionId);
    const option = question.options.find(o => o.id === optionId);
    const userAnswer = userAnswers[questionId]?.[optionId];
    return userAnswer !== undefined && userAnswer !== option.answer;
  };

  // Toggle solution visibility
  const toggleSolution = (questionId) => {
    setShowSolution(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Calculate results
  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    let total = 0;

    TrueFalseData.forEach(question => {
      question.options.forEach(option => {
        total++;
        if (userAnswers[question.id]?.[option.id] === option.answer) {
          correct++;
        } else if (userAnswers[question.id]?.[option.id] !== undefined) {
          wrong++;
        }
      });
    });

    return { correct, wrong, total, unanswered: total - correct - wrong };
  };

  // Submit quiz
  const handleSubmit = () => {
    setSubmitted(true);
    setShowResults(true);
  };

  // Results data
  const results = calculateResults();
  const percentage = Math.round((results.correct / results.total) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen p-6" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h1 className="text-3xl font-bold text-center mb-2" style={{ color: '#5E89C1' }}>
              Human Anatomy - Cardiovascular System
            </h1>
            <p className="text-center text-gray-600">Quiz Results</p>
          </div>

          {/* Score Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2" style={{ borderColor: '#D4E157' }}>
            <div className="text-center mb-8">
              <div 
              style={{ 
            background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
            boxShadow: '0 8px 20px rgba(212, 225, 87, 0.4)'
            // boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)'
          }}
                className="inline-block px-8 py-6 rounded-2xl mb-4"
                // style={{ 
                //   background: 'linear-gradient(135deg, #D4E157 0%, #C0CA33 100%)',
                //   boxShadow: '0 8px 20px rgba(212, 225, 87, 0.4)'
                // }}
              >
                <p className="text-shadow-white text-sm font-semibold mb-1">Your Score</p>
                <p className="text-6xl font-bold text-gray-800">
                  {percentage}%
                </p>
                <p className="text-xl font-semibold text-shadow-white mt-2">
                  {results.correct} out of {results.total} - Well done!
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 rounded-xl p-6 text-center border-2 border-green-200">
                <div className="text-5xl font-bold text-green-600">{results.correct}</div>
                <p className="text-sm font-semibold text-green-700 mt-2">Correct Answers</p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center border-2 border-red-200">
                <div className="text-5xl font-bold text-red-600">{results.wrong}</div>
                <p className="text-sm font-semibold text-red-700 mt-2">Wrong Answers</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-200">
                <div className="text-5xl font-bold text-gray-600">{results.unanswered}</div>
                <p className="text-sm font-semibold text-gray-700 mt-2">Unanswered</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                onClick={() => setShowResults(false)}
                className="px-8 py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all"
                style={{ 
                  background: 'linear-gradient(135deg, #5E89C1 0%, #4A7BA7 100%)'
                }}
              >
                📋 View All Answers
              </button>
              <button 
                onClick={() => {
                  setUserAnswers({});
                  setSubmitted(false);
                  setShowResults(false);
                  setShowSolution({});
                }}
                className="px-8 py-3 bg-gray-600 text-white rounded-xl font-bold hover:bg-gray-700 transition-all"
              >
                🔄 Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold" style={{ color: '#5E89C1' }}>
                Human Anatomy - Cardiovascular System
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Which the following statements about the human heart is FALSE?
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Progress</p>
              <p className="text-xl font-bold" style={{ color: '#5E89C1' }}>
                {Object.keys(userAnswers).length}/{TrueFalseData.length}
              </p>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {TrueFalseData.map((question, qIndex) => (
            <div 
              key={question.id}
              className="bg-white rounded-2xl shadow-lg p-6 border-2 transition-all hover:shadow-xl"
              style={{ borderColor: submitted ? '#5E89C1' : 'transparent' }}
            >
              {/* Question Header */}
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: '#5E89C1' }}
                >
                  {String.fromCharCode(65 + qIndex)}
                </div>
                <h3 className="text-lg font-bold text-gray-800 flex-1">
                  {question.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-4 mb-6">
                {question.options.map((option) => {
                  const answered = userAnswers[question.id]?.[option.id] !== undefined;
                  const correct = isCorrect(question.id, option.id, option.answer);
                  const wrong = isWrong(question.id, option.id);
                  const userAnswer = userAnswers[question.id]?.[option.id];
                  
                  // Determine background color based on answer state
                  let bgColor = 'bg-white';
                  let borderColor = 'border-gray-200';
                  let textColor = 'text-gray-800';
                  
                  if (wrong) {
                    bgColor = 'bg-red-50';
                    borderColor = 'border-red-300';
                    textColor = 'text-red-700';
                  } else if (correct && answered) {
                    bgColor = 'bg-green-50';
                    borderColor = 'border-green-300';
                    textColor = 'text-green-700';
                  } else if (answered && !correct && !wrong) {
                    bgColor = 'bg-blue-50';
                    borderColor = 'border-blue-300';
                    textColor = 'text-blue-700';
                  }

                  return (
                    <div
                      key={option.id}
                      className={`p-4 rounded-xl border-2 transition-all ${bgColor} ${borderColor} ${answered ? 'shadow-sm' : 'hover:shadow-md'}`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1">
                          {/* Option letter with background */}
                          <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center font-bold ${answered && wrong ? 'bg-red-100 text-red-700' : answered && correct ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                            {option.id}
                          </div>
                          
                          {/* Option text */}
                          <span className={`font-medium ${textColor}`}>
                            {option.text}
                          </span>
                          
                          {/* Answer status icons */}
                          {answered && (
                            wrong ? (
                              <XCircle className="text-red-500 flex-shrink-0 ml-2" size={20} />
                            ) : correct ? (
                              <CheckCircle className="text-green-500 flex-shrink-0 ml-2" size={20} />
                            ) : null
                          )}
                        </div>

                        {/* True/False Buttons - Like screenshot */}
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleAnswer(question.id, option.id, true)}
                            disabled={submitted}
                            className={`
                              w-16 h-8 rounded-lg font-bold transition-all flex items-center justify-center
                              ${userAnswer === true ? 
                                wrong ? 
                                  'bg-red-500 text-white border-2 border-red-600' : 
                                  'bg-green-500 text-white border-2 border-green-600' : 
                                'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50'
                              }
                              ${submitted && userAnswer !== true ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                          >
                            True
                          </button>
                          <button
                            onClick={() => handleAnswer(question.id, option.id, false)}
                            disabled={submitted}
                            className={`
                              w-16 h-8 rounded-lg font-bold transition-all flex items-center justify-center
                              ${userAnswer === false ? 
                                wrong ? 
                                  'bg-red-500 text-white border-2 border-red-600' : 
                                  'bg-white text-red-600 border-2 border-red-600' : 
                                'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
                              }
                              ${submitted && userAnswer !== false ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                          >
                            False
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons - With icons like screenshot */}
              <div className="flex gap-3 pt-4 border-t border-gray-200 flex-wrap">
                <button 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors hover:bg-blue-50"
                  style={{ color: '#5E89C1' }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Play size={16} style={{ color: '#5E89C1' }} />
                  </div>
                  Watch Lecture
                </button>
                <button 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors hover:bg-purple-50"
                  style={{ color: '#9C27B0' }}
                >
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <MessageCircle size={16} style={{ color: '#9C27B0' }} />
                  </div>
                  Ask Teacher
                </button>
                <button 
                  onClick={() => toggleSolution(question.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors hover:bg-green-50"
                  style={{ color: '#4CAF50' }}
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Info size={16} style={{ color: '#4CAF50' }} />
                  </div>
                  View Solution
                </button>
              </div>

              {/* Solution Panel */}
              {showSolution[question.id] && (
                <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    <Info size={18} />
                    Solution:
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{question.solution}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            disabled={Object.keys(userAnswers).length === 0}
            className="px-12 py-4 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
            style={{ 
              background: 'linear-gradient(135deg, #5E89C1 0%, #4A7BA7 100%)'
            }}
          >
            <CheckCircle size={20} />
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrueFalse;