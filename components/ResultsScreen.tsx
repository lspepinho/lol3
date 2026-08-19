import React, { useState } from 'react';
import { Question, QuizTopic } from '../types';
import { QuizSelectorModal } from './QuizSelectorModal';

interface ResultsScreenProps {
  questions: Question[];
  userAnswers: (string | null)[];
  onRestart: () => void;
  currentQuiz: QuizTopic;
  onSelectQuiz: (quiz: QuizTopic) => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  questions,
  userAnswers,
  onRestart,
  currentQuiz,
  onSelectQuiz,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const score = userAnswers.reduce((acc, answer, index) => {
    return answer === questions[index].correctAnswer ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="text-center w-full max-w-4xl mx-auto py-6">
      <h2 className="text-6xl md:text-8xl font-black mb-6 text-black drop-shadow-md">
        Fim de Jogo!
      </h2>

      {/* Quiz Title Banner */}
      <div className="mb-8 inline-block bg-yellow-100 border-4 border-black px-6 py-2 shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]">
        <span className="text-xl md:text-2xl font-bold text-black flex items-center gap-2">
          <i className={`fas ${currentQuiz.icon} text-lg`}></i>
          {currentQuiz.title}
        </span>
      </div>

      {/* Score Card */}
      <div className="bg-[#cd6815] border-[6px] border-[#8e3e00] p-8 md:p-12 shadow-[-10px_10px_0px_0px_rgba(0,0,0,1)] mb-10 transform rotate-1 inline-block">
        <p className="text-3xl md:text-4xl mb-2 text-black font-bold">Você acertou</p>
        <div className="text-7xl md:text-9xl font-black text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] leading-none">
          {score}/{questions.length}
        </div>
        <p className="text-2xl md:text-3xl mt-3 text-black font-extrabold">
          {percentage}% de aproveitamento
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
        <button
          onClick={onRestart}
          className="genio-btn text-3xl md:text-5xl py-4 px-10 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] transition-all bg-[#00e676] hover:bg-[#00c853] text-black font-bold"
        >
          <i className="fas fa-rotate-left mr-3"></i>
          Jogar Novamente
        </button>

        <button
          onClick={() => setIsModalOpen(true)}
          className="genio-btn text-2xl md:text-4xl py-4 px-8 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] transition-all bg-[#ffd54f] hover:bg-[#ffca28] text-black font-bold flex items-center gap-2"
        >
          <i className="fas fa-book-open"></i>
          Outras Matérias
        </button>
      </div>

      {/* Answer Feedback / Gabarito */}
      <div className="mt-12 text-left w-full border-4 border-black p-6 md:p-8 bg-gray-50 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-3xl md:text-4xl font-extrabold border-b-4 border-black mb-6 pb-2 text-black flex items-center justify-between">
          <span>Gabarito Completo & Explicações</span>
          <span className="text-xl font-bold bg-black text-white px-3 py-1">
            {score}/{questions.length} Acertos
          </span>
        </h3>
        
        <div className="space-y-6">
          {questions.map((q, i) => {
            const isCorrect = userAnswers[i] === q.correctAnswer;
            return (
              <div
                key={i}
                className={`p-4 border-3 border-black ${
                  isCorrect ? 'bg-green-50' : 'bg-red-50'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="font-extrabold text-xl md:text-2xl text-black">
                    {i + 1}. {q.question}
                  </span>
                  <span
                    className={`font-black text-base md:text-lg px-3 py-1 border-2 border-black ${
                      isCorrect
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {isCorrect ? '✓ ACERTOU' : '✗ ERROU'}
                  </span>
                </div>

                <div className="text-lg md:text-xl font-medium mt-2 space-y-1">
                  {!isCorrect && (
                    <div className="text-red-700">
                      <strong>Sua resposta:</strong> {userAnswers[i] || 'Não respondeu'}
                    </div>
                  )}
                  <div className="text-green-800">
                    <strong>Resposta correta:</strong> {q.correctAnswer}
                  </div>
                  <div className="text-gray-700 text-base mt-2 pt-2 border-t border-gray-300 italic">
                    💡 <strong>Explicação:</strong> {q.explanation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <QuizSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedQuizId={currentQuiz.id}
        onSelectQuiz={(quiz) => {
          onSelectQuiz(quiz);
          onRestart();
        }}
      />
    </div>
  );
};
