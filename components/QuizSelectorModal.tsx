import React from 'react';
import { ALL_QUIZZES } from '../data/quizzesData';
import { QuizTopic } from '../types';

interface QuizSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedQuizId: string;
  onSelectQuiz: (quiz: QuizTopic) => void;
}

export const QuizSelectorModal: React.FC<QuizSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedQuizId,
  onSelectQuiz,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border-[6px] border-black p-6 md:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[-10px_10px_0px_0px_rgba(0,0,0,1)] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-bold text-2xl w-12 h-12 border-4 border-black shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          title="Fechar"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="text-center mb-8 pr-12">
          <div className="inline-flex items-center gap-3 bg-yellow-300 border-4 border-black px-6 py-2 shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] mb-3">
            <i className="fas fa-book-bookmark text-2xl text-black"></i>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-black">
              Biblioteca de Quizzes
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mt-2">
            Escolha a Matéria / Assunto
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium mt-1">
            Selecione qualquer quiz anterior para praticar e testar seus conhecimentos!
          </p>
        </div>

        {/* Quizzes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ALL_QUIZZES.map((quiz) => {
            const isSelected = quiz.id === selectedQuizId;
            return (
              <div
                key={quiz.id}
                onClick={() => {
                  onSelectQuiz(quiz);
                  onClose();
                }}
                className={`cursor-pointer text-left border-4 border-black p-5 transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#fff5c0] shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] ring-4 ring-blue-500 ring-offset-2'
                    : 'bg-gray-50 hover:bg-yellow-50 shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-white text-sm font-bold uppercase px-3 py-1 border-2 border-black ${
                        quiz.badgeColor || 'bg-blue-600'
                      }`}
                    >
                      {quiz.subject}
                    </span>
                    <span className="bg-black text-yellow-300 text-sm font-extrabold px-3 py-1 border border-black">
                      {quiz.questions.length} Questões
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-2 flex items-center gap-2">
                    <i className={`fas ${quiz.icon} text-xl text-gray-800`}></i>
                    {quiz.title}
                  </h3>

                  <p className="text-gray-700 text-base leading-snug mb-4">
                    {quiz.description}
                  </p>
                </div>

                <div className="pt-2 border-t-2 border-dashed border-gray-300 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-500">
                    {isSelected ? '★ Tópico Atual' : 'Clique para jogar'}
                  </span>
                  <button
                    className={`font-bold px-4 py-1 text-sm border-2 border-black shadow-[-2px_2px_0px_0px_rgba(0,0,0,1)] ${
                      isSelected
                        ? 'bg-green-500 text-white'
                        : 'bg-yellow-300 hover:bg-yellow-400 text-black'
                    }`}
                  >
                    {isSelected ? 'Selecionado' : 'Jogar Este'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 text-center pt-4 border-t-4 border-black flex justify-center">
          <button
            onClick={onClose}
            className="genio-btn text-2xl md:text-3xl py-3 px-10 shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[-2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Voltar ao Menu
          </button>
        </div>
      </div>
    </div>
  );
};
