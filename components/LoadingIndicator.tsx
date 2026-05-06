import React from 'react';

export const LoadingIndicator: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-12 text-center h-full">
            <div className="text-4xl animate-bounce mb-4 font-bold">
                Carregando...
            </div>
            <i className="fas fa-spinner fa-spin text-6xl text-[#cd6815]"></i>
        </div>
    );
};