import React from 'react';
import { Question } from '../types';

interface ResultsScreenProps {
  questions: Question[];
  userAnswers: (string | null)[];
  onRestart: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ questions, userAnswers, onRestart }) => {
  const score = userAnswers.reduce((acc, answer, index) => {
    return answer === questions[index].correctAnswer ? acc + 1 : acc;
  }, 0);

  return (
    <div className="text-center w-full max-w-3xl mx-auto">
      <h2 className="text-7xl md:text-9xl font-bold mb-12 text-black drop-shadow-md">
        Fim de Jogo!
      </h2>
      
      <div className="bg-[#cd6815] border-[6px] border-[#8e3e00] p-12 shadow-[-10px_10px_0px_0px_rgba(0,0,0,1)] mb-16 transform rotate-1 inline-block">
          <p className="text-4xl mb-4 text-black font-bold">Você acertou</p>
          <div className="text-8xl md:text-[10rem] font-bold text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] leading-none">
              {score}/{questions.length}
          </div>
          <p className="text-4xl mt-4 text-black font-bold">questões</p>
      </div>

      <div className="mb-16">
        <button
            onClick={onRestart}
            className="genio-btn text-4xl md:text-6xl py-6 px-16 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
            Jogar Novamente
        </button>
      </div>

        <div className="mt-16 text-left w-full border-4 border-black p-8 bg-gray-50">
            <h3 className="text-4xl font-bold border-b-4 border-black mb-6 pb-2">Gabarito:</h3>
            <div className="space-y-4">
                {questions.map((q, i) => (
                    <div key={i} className="flex items-start gap-4 text-2xl md:text-3xl">
                        <span className="font-bold">{i + 1}.</span>
                        <span className={userAnswers[i] === q.correctAnswer ? "text-green-700 font-bold" : "text-red-600 font-bold"}>
                            {userAnswers[i] === q.correctAnswer ? "Acertou" : "Errou"}
                        </span>
                        <span className="text-gray-600">- {q.correctAnswer}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};