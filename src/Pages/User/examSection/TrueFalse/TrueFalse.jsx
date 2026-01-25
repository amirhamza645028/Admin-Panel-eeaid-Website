import React, { useState } from 'react';
import { Play, MessageCircle, Info, CheckCircle, XCircle } from 'lucide-react';

// TrueFalse.json এর data (তুমি এটা import করবে)
const quizData = [
  {
    "id": 1,
    "question": "Which the following statements about the human heart is FALSE?",
    "options": [
      { "id": "A", "text": "The human heart has four chambers.", "answer": true },
      { "id": "B", "text": "The sinoatrial node is the heart's natural pacemaker", "answer": true },
      { "id": "C", "text": "Pulmonary arties carry oxygenated blood", "answer": false },
      { "id": "D", "text": "The average adult beats 60-100 minute.", "answer": false },
      { "id": "E", "text": "The heart is located beats the thoracic cavity", "answer": true }
    ],
    "solution": "The pulmonary arteries carry deoxygenated blood from the heart to the lungs, not oxygenated blood."
  },
  {
    "id": 2,
    "question": "Lymph superior to umbilicus on ant. Abdominal wall goes to:",
    "options": [
      { "id": "A", "text": "Internal iliac", "answer": true },
      { "id": "B", "text": "External iliac", "answer": false },
      { "id": "C", "text": "Iliac", "answer": false },
      { "id": "D", "text": "Para aortic", "answer": false },
      { "id": "E", "text": "Pudendal iliac", "answer": false }
    ],
    "solution": "Lymph superior to the umbilicus drains to the internal iliac lymph nodes."
  },
  {
    "id": 3,
    "question": "Lateral to psoas major muscle, following structures are related:",
    "options": [
      { "id": "A", "text": "Ureter", "answer": true },
      { "id": "B", "text": "Genital branch of genitofemoral nerve", "answer": false },
      { "id": "C", "text": "Obturator nerve", "answer": true },
      { "id": "D", "text": "Pudendal nerve", "answer": true },
      { "id": "E", "text": "Iliohypogastric nerve", "answer": true }
    ],
    "solution": "Multiple structures lie lateral to the psoas major muscle."
  }
];

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
    const question = quizData.find(q => q.id === questionId);
    const option = question.options.find(o => o.id === optionId);
    return userAnswers[questionId]?.[optionId] === option.answer;
  };

  // Check if answer is wrong
  const isWrong = (questionId, optionId) => {
    const question = quizData.find(q => q.id === questionId);
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

    quizData.forEach(question => {
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
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2" style={{ borderColor: '#5E89C1' }}>
            <div className="text-center mb-8">
              <div 
                className="inline-block px-8 py-6 rounded-2xl mb-4"
                style={{ 
                  background: 'linear-gradient(135deg, #D4E157 0%, #C0CA33 100%)',
                  boxShadow: '0 8px 20px rgba(212, 225, 87, 0.4)'
                }}
              >
                <p className="text-gray-700 text-sm font-semibold mb-1">Your Score</p>
                <p className="text-6xl font-bold text-gray-800">
                  {percentage}%
                </p>
                <p className="text-xl font-semibold text-gray-700 mt-2">
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
                {Object.keys(userAnswers).length}/{quizData.length}
              </p>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {quizData.map((question, qIndex) => (
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
                  {qIndex + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-800 flex-1">
                  {question.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {question.options.map((option) => {
                  const answered = userAnswers[question.id]?.[option.id] !== undefined;
                  const correct = isCorrect(question.id, option.id, option.answer);
                  const wrong = isWrong(question.id, option.id);

                  return (
                    <div
                      key={option.id}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        wrong 
                          ? 'bg-red-50 border-red-300' 
                          : correct && answered
                          ? 'bg-green-50 border-green-300'
                          : 'bg-gray-50 border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1">
                          {answered && (
                            wrong ? (
                              <XCircle className="text-red-500 flex-shrink-0" size={20} />
                            ) : correct ? (
                              <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                            ) : null
                          )}
                          <span className={`font-medium ${
                            wrong ? 'text-red-700' : correct && answered ? 'text-green-700' : 'text-gray-800'
                          }`}>
                            {option.id}. {option.text}
                          </span>
                        </div>

                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleAnswer(question.id, option.id, true)}
                            disabled={submitted}
                            className={`btn btn-sm ${
                              userAnswers[question.id]?.[option.id] === true
                                ? wrong
                                  ? 'bg-red-500 hover:bg-red-600 text-white border-red-500'
                                  : 'bg-green-500 hover:bg-green-600 text-white border-green-500'
                                : 'btn-outline'
                            }`}
                            style={
                              userAnswers[question.id]?.[option.id] !== true
                                ? { borderColor: '#5E89C1', color: '#5E89C1' }
                                : {}
                            }
                          >
                            True
                          </button>
                          <button
                            onClick={() => handleAnswer(question.id, option.id, false)}
                            disabled={submitted}
                            className={`btn btn-sm ${
                              userAnswers[question.id]?.[option.id] === false
                                ? wrong
                                  ? 'bg-red-500 hover:bg-red-600 text-white border-red-500'
                                  : 'btn-outline'
                                : 'btn-outline'
                            }`}
                          >
                            False
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-200 flex-wrap">
                <button 
                  className="btn btn-sm gap-2"
                  style={{ backgroundColor: '#E3F2FD', color: '#5E89C1', border: 'none' }}
                >
                  <Play size={16} />
                  Watch Lecture
                </button>
                <button 
                  className="btn btn-sm gap-2"
                  style={{ backgroundColor: '#F3E5F5', color: '#9C27B0', border: 'none' }}
                >
                  <MessageCircle size={16} />
                  Ask Teacher
                </button>
                <button 
                  onClick={() => toggleSolution(question.id)}
                  className="btn btn-sm gap-2"
                  style={{ backgroundColor: '#E8F5E9', color: '#4CAF50', border: 'none' }}
                >
                  <Info size={16} />
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
            className="px-12 py-4 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ 
              background: 'linear-gradient(135deg, #5E89C1 0%, #4A7BA7 100%)'
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrueFalse;