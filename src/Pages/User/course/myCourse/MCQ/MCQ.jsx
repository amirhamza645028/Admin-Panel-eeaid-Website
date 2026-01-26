import React, { useState, useEffect } from 'react';
import { Clock, BookmarkPlus, Bookmark, ChevronDown, ChevronUp, FileText, Check, X } from 'lucide-react';
import mcqData from '../../../../../daat/userData/MCQ.json'


const MCQ = () => {
  const [selectedChapter, setSelectedChapter] = useState('All');
  const [userAnswers, setUserAnswers] = useState({});
  const [bookmarked, setBookmarked] = useState([]);
  const [showExplanation, setShowExplanation] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [timer, setTimer] = useState(0);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format timer
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get unique chapters
  const chapters = ['All', ...new Set(mcqData.map(q => q.chapter))];

  // Filter questions by chapter
  const filteredQuestions = selectedChapter === 'All' 
    ? mcqData 
    : mcqData.filter(q => q.chapter === selectedChapter);

  // Pagination
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentQuestions = filteredQuestions.slice(startIndex, startIndex + itemsPerPage);

  // Calculate progress
  const answeredCount = Object.keys(userAnswers).filter(id => 
    filteredQuestions.some(q => q.id === parseInt(id))
  ).length;
  const progress = (answeredCount / filteredQuestions.length) * 100;

  // Handle answer selection
  const handleAnswer = (questionId, optionId) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  // Toggle bookmark
  const toggleBookmark = (questionId) => {
    setBookmarked(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  // Toggle explanation
  const toggleExplanation = (questionId) => {
    setShowExplanation(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #F0F4F8 0%, #E8EAF6 100%)' }}>
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white shadow-lg border-b-2" style={{ borderColor: '#00BCD4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Title */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold" style={{ color: '#5E89C1' }}>
                Medical MCQ Practice
              </h1>
              <p className="text-sm text-gray-600">Master your medical knowledge</p>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 px-6 py-3 rounded-xl border-2" style={{ borderColor: '#00BCD4' }}>
                <Clock className="text-cyan-600" size={20} />
                <span className="text-xl font-bold text-gray-800">{formatTime(timer)}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-gray-700">Progress: {answeredCount}/{filteredQuestions.length}</span>
              <span className="font-semibold text-cyan-600">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #00BCD4 0%, #7C4DFF 100%)',
                  boxShadow: '0 0 10px rgba(0, 188, 212, 0.8)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Chapter Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {chapters.map((chapter) => (
              <button
                key={chapter}
                onClick={() => {
                  setSelectedChapter(chapter);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedChapter === chapter
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
                style={
                  selectedChapter === chapter
                    ? {
                        background: 'linear-gradient(135deg, #5E89C1 0%, #7C4DFF 100%)',
                        boxShadow: '0 4px 15px rgba(94, 137, 193, 0.4)'
                      }
                    : {}
                }
              >
                {chapter}
              </button>
            ))}
          </div>
        </div>

        {/* MCQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentQuestions.map((question) => {
            const userAnswer = userAnswers[question.id];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = userAnswer === question.correctAnswer;
            const isBookmarked = bookmarked.includes(question.id);

            return (
              <div
                key={question.id}
                className="bg-white rounded-2xl shadow-lg p-6 border-2 transition-all duration-300 hover:shadow-2xl hover:border-cyan-400"
                style={{
                  borderColor: isAnswered ? (isCorrect ? '#4CAF50' : '#F44336') : '#E0E0E0',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Question Header */}
                <div className="flex items-start justify-between mb-4">
                  <span 
                    className="px-3 py-1 rounded-lg text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #5E89C1 0%, #7C4DFF 100%)' }}
                  >
                    Q{question.id}
                  </span>
                  <button
                    onClick={() => toggleBookmark(question.id)}
                    className="transition-transform hover:scale-110"
                  >
                    {isBookmarked ? (
                      <Bookmark className="text-yellow-500 fill-yellow-500" size={22} />
                    ) : (
                      <BookmarkPlus className="text-gray-400 hover:text-yellow-500" size={22} />
                    )}
                  </button>
                </div>

                {/* Question Text */}
                <h3 className="text-base font-bold text-gray-800 mb-4 leading-relaxed">
                  {question.question}
                </h3>

                {/* Options */}
                <div className="space-y-2 mb-4">
                  {question.options.map((option) => {
                    const isSelected = userAnswer === option.id;
                    const isCorrectOption = option.id === question.correctAnswer;
                    const showCorrect = isAnswered && isCorrectOption;
                    const showWrong = isAnswered && isSelected && !isCorrect;

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(question.id, option.id)}
                        disabled={isAnswered}
                        className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 border-2 ${
                          showCorrect
                            ? 'bg-green-50 border-green-400 text-green-800'
                            : showWrong
                            ? 'bg-red-50 border-red-400 text-red-800'
                            : isSelected
                            ? 'bg-blue-50 border-blue-400 text-blue-800'
                            : 'bg-gray-50 border-gray-200 hover:border-cyan-300 hover:bg-cyan-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option.id}. {option.text}</span>
                          {showCorrect && <Check className="text-green-600" size={20} />}
                          {showWrong && <X className="text-red-600" size={20} />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Button */}
                <button
                  onClick={() => toggleExplanation(question.id)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)' }}
                >
                  <FileText size={18} />
                  ব্যাখ্যা {showExplanation[question.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {/* Explanation Panel */}
                {showExplanation[question.id] && (
                  <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Items per page */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700">Show:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="select select-bordered select-sm"
                style={{ borderColor: '#5E89C1' }}
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={18}>18</option>
              </select>
              <span className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredQuestions.length)} of {filteredQuestions.length}
              </span>
            </div>

            {/* Page buttons */}
            <div className="btn-group">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="btn btn-sm"
              >
                «
              </button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`btn btn-sm ${currentPage === idx + 1 ? 'btn-active' : ''}`}
                  style={
                    currentPage === idx + 1
                      ? { background: '#5E89C1', color: 'white', borderColor: '#5E89C1' }
                      : {}
                  }
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="btn btn-sm"
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCQ;