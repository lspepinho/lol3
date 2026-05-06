import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  onAnswer: (answer: string) => void;
  onNext: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
}) => {
  const answered = selectedAnswer !== null;

  const handleSelectAnswer = (option: string) => {
    if (answered) return;
    onAnswer(option);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Top Section: Number and Question */}
      <div className="flex flex-col items-start mb-12 gap-6">
        {/* The classic Circle Number - Scaled Up */}
        <div className="relative">
             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[6px] border-[#8e3e00] bg-[#cd6815] flex items-center justify-center text-black text-6xl md:text-7xl font-bold shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)]">
                {questionNumber}.
             </div>
        </div>
        
        <h3 className="text-4xl md:text-6xl text-black leading-tight pl-2 font-bold">
          {question.question}
        </h3>
      </div>

      {/* Answer Buttons Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = question.correctAnswer === option;

          let buttonStyle = "genio-btn text-3xl md:text-5xl py-8 px-6 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] text-center h-full flex items-center justify-center min-h-[120px]";
          
          if (answered) {
            if (isCorrect) {
              buttonStyle = "bg-[#4caf50] border-[#2e7d32] border-[6px] text-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] text-3xl md:text-5xl py-8 px-6 text-center min-h-[120px]";
            } else if (isSelected) {
              buttonStyle = "bg-[#f44336] border-[#c62828] border-[6px] text-white shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] text-3xl md:text-5xl py-8 px-6 text-center min-h-[120px]";
            } else {
              buttonStyle += " opacity-50";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleSelectAnswer(option)}
              disabled={answered}
              className={buttonStyle}
            >
               {option}
            </button>
          );
        })}
      </div>

      {/* Feedback / Next Button */}
      {answered && (
        <div className="text-center animate-fade-in">
          <div className="mb-8 p-8 border-4 border-dashed border-black bg-yellow-50 text-left">
              <span className="font-bold block mb-2 text-3xl">Explicação:</span>
              <span className="text-2xl md:text-3xl">{question.explanation}</span>
          </div>

          <button
            onClick={onNext}
            className="text-4xl md:text-5xl font-bold text-blue-600 hover:text-blue-800 underline decoration-8 decoration-blue-600 underline-offset-8"
          >
            {questionNumber === totalQuestions ? 'VER RESULTADO' : 'PRÓXIMA >'}
          </button>
        </div>
      )}
    </div>
  );
};