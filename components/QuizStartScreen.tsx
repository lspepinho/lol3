import React from 'react';

interface QuizStartScreenProps {
  onStart: () => void;
  error: string | null;
}

export const QuizStartScreen: React.FC<QuizStartScreenProps> = ({ onStart, error }) => {
  return (
    <div className="text-center flex flex-col items-center w-full">
      {/* Header with Title */}
      <div className="mb-12 relative w-full">
         <h1 className="text-7xl md:text-9xl lg:text-[10rem] text-black" style={{ textShadow: '4px 4px 0px #aaa' }}>
            Gênio Quiz
         </h1>
         <div className="text-3xl md:text-5xl text-black mt-4 font-bold text-center">Ciências: Movimento, Clima e Cosmos</div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-12 xl:gap-32">
        
        {/* Left Brain */}
        <div className="hidden xl:block transform -rotate-12">
           <i className="fas fa-brain text-[#ff80bf] text-[12rem] drop-shadow-xl" style={{ filter: 'drop-shadow(5px 5px 0 #000)' }}></i>
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-col gap-8 w-full max-w-md md:max-w-lg">
            <button
                onClick={onStart}
                className="genio-btn text-5xl md:text-6xl py-6 px-12 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
                começar
            </button>
            
            <button
                className="genio-btn text-5xl md:text-6xl py-6 px-12 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] opacity-80 cursor-not-allowed"
            >
                instruções
            </button>
            
            <button
                className="genio-btn text-5xl md:text-6xl py-6 px-12 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] opacity-80 cursor-not-allowed"
            >
                créditos
            </button>
        </div>

        {/* Right Brain */}
        <div className="hidden xl:block transform rotate-12">
            <i className="fas fa-brain text-[#ff80bf] text-[12rem] drop-shadow-xl" style={{ filter: 'drop-shadow(5px 5px 0 #000)' }}></i>
        </div>
      </div>

      {/* Mobile Brain (visible only on smaller screens) */}
      <div className="xl:hidden mt-12">
           <i className="fas fa-brain text-[#ff80bf] text-9xl" style={{ filter: 'drop-shadow(4px 4px 0 #000)' }}></i>
      </div>

      {error && (
        <div className="mt-8 text-red-600 font-bold border-4 border-red-600 p-4 bg-red-100 text-2xl">
          ERRO: {error}
        </div>
      )}
    </div>
  );
};