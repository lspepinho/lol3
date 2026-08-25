import React, { useState, useEffect } from 'react';
import { QuizTopic } from '../types';
import { QuizSelectorModal } from './QuizSelectorModal';
import { generateCustomCurrentSubjectQuiz, getQuizById } from '../services/geminiService';

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
  const [showGenioInput, setShowGenioInput] = useState(false);
  const [customCount, setCustomCount] = useState(currentQuiz.questions.length.toString());

  // Update input placeholder / value when quiz changes
  useEffect(() => {
    setCustomCount(currentQuiz.questions.length.toString());
  }, [currentQuiz.id]);

  const handleApplyCustomQuestions = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const count = parseInt(customCount, 10);
    if (isNaN(count) || count <= 0) return;
    
    // Customize question count exclusively for the CURRENT subject
    const updatedQuiz = generateCustomCurrentSubjectQuiz(currentQuiz, count);
    onSelectQuiz(updatedQuiz);
    setShowGenioInput(false);
  };

  const handleResetToOriginal = () => {
    const original = getQuizById(currentQuiz.id);
    if (original) {
      onSelectQuiz(original);
      setCustomCount(original.questions.length.toString());
      setShowGenioInput(false);
    }
  };

  return (
    <div className="text-center flex flex-col items-center w-full">
      {/* Header with Title */}
      <div className="mb-8 relative w-full flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-2">
          {/* Clickable Gênio word to open the custom question prompt for current subject */}
          <button
            type="button"
            onClick={() => setShowGenioInput(!showGenioInput)}
            title="Clique no Gênio para alterar a quantidade de questões da matéria atual!"
            className="text-7xl md:text-9xl lg:text-[10rem] text-black hover:text-amber-600 transition-colors font-black tracking-tight focus:outline-none cursor-pointer"
            style={{ textShadow: '4px 4px 0px #aaa' }}
          >
            Gênio
          </button>
          <span
            className="text-7xl md:text-9xl lg:text-[10rem] text-black font-black tracking-tight"
            style={{ textShadow: '4px 4px 0px #aaa' }}
          >
            {' '}Quiz
          </span>
        </div>

        {/* Floating Genio Hint Badge */}
        <button
          type="button"
          onClick={() => setShowGenioInput(!showGenioInput)}
          className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 border-2 border-black text-xs md:text-sm font-black text-amber-900 shadow-[-2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-amber-200 transition-all cursor-pointer"
        >
          <i className="fas fa-magic text-amber-600"></i>
          {showGenioInput ? 'Fechar Modo Gênio' : `✨ Modo Gênio: Alterar nº de questões de ${currentQuiz.subject}`}
        </button>

        {/* Dynamic Gênio Input Box popup for CURRENT subject */}
        {showGenioInput && (
          <form
            onSubmit={handleApplyCustomQuestions}
            className="mt-4 p-5 bg-[#fff9c4] border-4 border-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] max-w-lg w-full text-left flex flex-col gap-3 animate-fadeIn z-20"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg md:text-xl font-black text-black flex items-center gap-2">
                <i className="fas fa-hat-wizard text-purple-700 text-2xl"></i>
                Modo Gênio: {currentQuiz.subject}
              </span>
              <button
                type="button"
                onClick={() => setShowGenioInput(false)}
                className="text-black font-extrabold text-xl px-2 hover:bg-red-500 hover:text-white border-2 border-transparent hover:border-black"
              >
                ✕
              </button>
            </div>
            <p className="text-xs md:text-sm font-bold text-gray-800">
              Digite quantas questões você deseja responder para a matéria atual (<strong>{currentQuiz.subject}</strong>). O título e a quantidade de perguntas serão atualizados automaticamente!
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={customCount}
                  onChange={(e) => setCustomCount(e.target.value)}
                  placeholder={`Ex: ${currentQuiz.questions.length}`}
                  className="w-full text-2xl font-black text-black bg-white border-3 border-black p-3 shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  autoFocus
                />
                <span className="absolute right-3 top-3.5 text-xs font-bold text-gray-500 uppercase">
                  Questões
                </span>
              </div>
              <button
                type="submit"
                className="genio-btn bg-[#00e676] hover:bg-[#00c853] text-black font-extrabold text-lg py-3 px-6 shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-all"
              >
                <i className="fas fa-check mr-2"></i>
                Aplicar e Atualizar
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t-2 border-black/10">
              <div className="flex flex-wrap gap-1.5 items-center">
                <span className="text-xs font-black text-gray-700">Atalhos rápidos:</span>
                {[10, 20, 30, 40, 50, 100, 200].map((quickN) => (
                  <button
                    key={quickN}
                    type="button"
                    onClick={() => {
                      setCustomCount(quickN.toString());
                      const updated = generateCustomCurrentSubjectQuiz(currentQuiz, quickN);
                      onSelectQuiz(updated);
                      setShowGenioInput(false);
                    }}
                    className={`px-2 py-0.5 text-xs font-black border-2 border-black shadow-[-2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors ${
                      currentQuiz.questions.length === quickN ? 'bg-yellow-400' : 'bg-white hover:bg-yellow-200'
                    }`}
                  >
                    {quickN} Qs
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={handleResetToOriginal}
                className="text-xs font-extrabold text-blue-800 hover:underline cursor-pointer"
              >
                Restaurar padrão
              </button>
            </div>
          </form>
        )}

        {/* Current Quiz Card / Banner */}
        <div className="mt-4 flex flex-col items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-[#fff7d1] border-4 border-black px-6 py-3 shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)] max-w-4xl">
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
