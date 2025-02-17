import React, { useState, useCallback } from 'react';
import { questions } from './questions';
import { Trophy, RefreshCw, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState<{ show: boolean; correct: boolean }>({ show: false, correct: false });
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const handleAnswerClick = (isCorrect: boolean) => {
    setFeedback({ show: true, correct: isCorrect });

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setFeedback({ show: false, correct: false });
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setFeedback({ show: false, correct: false });
  };

  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden animate-gradient bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Shapes Container */}
      <div className="shapes-container">
        <div className="shape-square"></div>
        <div className="shape-square"></div>
        <div className="shape-square"></div>
        <div className="shape-triangle"></div>
        <div className="shape-triangle"></div>
        <div className="shape-triangle"></div>
        <div className="shape-circle"></div>
        <div className="shape-circle"></div>
        <div className="shape-circle"></div>
        <div className="shape-hexagon"></div>
        <div className="shape-hexagon"></div>
        <div className="shape-hexagon"></div>
      </div>

      {showScore && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            particles: {
              color: {
                value: ["#FFD700", "#3B82F6", "#10B981", "#EC4899"]
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce"
                },
                random: false,
                speed: 6,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 80
              },
              opacity: {
                value: 0.8
              },
              shape: {
                type: "circle"
              },
              size: {
                value: { min: 2, max: 5 }
              }
            }
          }}
        />
      )}
      
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-[0_8px_32px_rgba(59,130,246,0.2)] p-8 relative border border-blue-100/50 animate-float">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl"></div>
        <div className="relative">
          {showScore ? (
            <div className="text-center">
              <Trophy className="w-24 h-24 mx-auto text-blue-500 mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Congratulations! 🎉</h2>
              <p className="text-2xl text-gray-600 mb-8">
                Your Score: <span className="font-bold text-blue-500">{score}</span> out of {questions.length}
              </p>
              <button
                onClick={restartQuiz}
                className="flex items-center justify-center gap-2 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-medium text-lg">
                    Question {currentQuestion + 1}/{questions.length}
                  </span>
                  <span className="text-gray-600 font-medium text-lg">
                    Score: <span className="text-blue-500">{score}</span>
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-3 bg-blue-100/50 rounded-full mb-8 overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  {questions[currentQuestion].questionText}
                </h2>
                
                <div className="space-y-4">
                  {questions[currentQuestion].answerOptions.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => !feedback.show && handleAnswerClick(answer.isCorrect)}
                      disabled={feedback.show}
                      className={`w-full text-left bg-white/70 backdrop-blur-sm border-2 border-blue-100 hover:border-blue-500 hover:bg-blue-50/80 p-5 rounded-xl transition-all duration-300 flex items-center group relative
                        ${feedback.show && answer.isCorrect ? 'border-green-500 bg-green-50/80' : ''}
                        ${feedback.show && !answer.isCorrect ? 'border-red-500 bg-red-50/80' : ''}
                        shadow-[0_4px_16px_rgba(59,130,246,0.1)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)]
                      `}
                    >
                      <span className="flex-1 text-gray-700">{answer.answerText}</span>
                      <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Feedback Overlay */}
        {feedback.show && (
          <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300 ${feedback.show ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`transform transition-transform duration-300 ${feedback.show ? 'scale-100' : 'scale-95'}`}>
              {feedback.correct ? (
                <CheckCircle2 className="w-32 h-32 text-green-500 animate-bounce" />
              ) : (
                <XCircle className="w-32 h-32 text-red-500 animate-shake" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;