import React, { useState } from 'react';
import { QuizTopic } from '../types';
import { QuizSelectorModal } from './QuizSelectorModal';

interface QuizStartScreenProps {
  onStart: () => void;
  error: string | null;
  currentQuiz: QuizTopic;
  onSelectQuiz: (quiz: QuizTopic) => void;
}

export const QuizStartScreen: React.FC<QuizStartScreenProps> = ({
  onStart,
  error,
  currentQuiz,
  onSelectQuiz,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-center flex flex-col items-center w-full">
      {/* Header with Title */}
      <div className="mb-8 relative w-full">
        <h1
          className="text-7xl md:text-9xl lg:text-[10rem] text-black"
          style={{ textShadow: '4px 4px 0px #aaa' }}
        >
          Gênio Quiz
        </h1>

        {/* Current Quiz Card / Banner */}
        <div className="mt-4 flex flex-col items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-[#fff7d1] border-4 border-black px-6 py-3 shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)] max-w-3xl">
            <span
              className={`text-white text-base md:text-lg font-extrabold uppercase px-3 py-1 border-2 border-black ${
                currentQuiz.badgeColor || 'bg-amber-600'
              }`}
            >
              {currentQuiz.subject}
            </span>
            <span className="text-2xl md:text-3xl font-extrabold text-black flex items-center gap-2">
              <i className={`fas ${currentQuiz.icon} text-xl text-gray-800`}></i>
              {currentQuiz.title}
            </span>
            <span className="bg-black text-yellow-300 text-sm md:text-base font-black px-3 py-1 border border-black">
              {currentQuiz.questions.length} Questões
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-8 xl:gap-24">
        {/* Left Brain */}
        <div className="hidden xl:block transform -rotate-12">
          <i
            className="fas fa-brain text-[#ff80bf] text-[11rem] drop-shadow-xl"
            style={{ filter: 'drop-shadow(5px 5px 0 #000)' }}
          ></i>
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-col gap-6 w-full max-w-md md:max-w-xl">
          {/* Start Button */}
          <button
            onClick={onStart}
            className="genio-btn text-5xl md:text-6xl py-5 px-10 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] transition-all bg-[#00e676] hover:bg-[#00c853] text-black font-extrabold"
          >
            começar
          </button>

          {/* Library / Previous Quizzes Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="genio-btn text-3xl md:text-4xl py-4 px-8 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] transition-all bg-[#ffd54f] hover:bg-[#ffca28] text-black font-bold flex items-center justify-center gap-3"
          >
            <i className="fas fa-folder-open text-2xl"></i>
            Quizzes Anteriores
          </button>

          {/* Quick info bar */}
          <div className="border-3 border-black bg-white p-3 shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] text-gray-700 text-sm md:text-base font-semibold">
            🎯 Teste seus conhecimentos com perguntas gabaritadas e explicações detalhadas!
          </div>
        </div>

        {/* Right Brain */}
        <div className="hidden xl:block transform rotate-12">
          <i
            className="fas fa-brain text-[#ff80bf] text-[11rem] drop-shadow-xl"
            style={{ filter: 'drop-shadow(5px 5px 0 #000)' }}
          ></i>
        </div>
      </div>

      {/* Mobile Brain (visible only on smaller screens) */}
      <div className="xl:hidden mt-8">
        <i
          className="fas fa-brain text-[#ff80bf] text-8xl"
          style={{ filter: 'drop-shadow(4px 4px 0 #000)' }}
        ></i>
      </div>

      {error && (
        <div className="mt-8 text-red-600 font-bold border-4 border-red-600 p-4 bg-red-100 text-2xl">
          ERRO: {error}
        </div>
      )}

      {/* Modal for selecting quizzes */}
      <QuizSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedQuizId={currentQuiz.id}
        onSelectQuiz={onSelectQuiz}
      />
    </div>
  );
};
