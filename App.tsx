import React, { useState, useCallback } from 'react';
import { QuizStartScreen } from './components/QuizStartScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultsScreen } from './components/ResultsScreen';
import { LoadingIndicator } from './components/LoadingIndicator';
import { generateQuizQuestions } from './services/geminiService';
import { Question } from './types';
import { QuizState } from './types';

export default function App() {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.IDLE);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const startQuiz = useCallback(async () => {
    setError(null);
    setQuizState(QuizState.LOADING);
    try {
      const newQuestions = await generateQuizQuestions();
      setQuestions(newQuestions);
      setUserAnswers(Array(newQuestions.length).fill(null));
      setCurrentQuestionIndex(0);
      setQuizState(QuizState.IN_PROGRESS);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
      setQuizState(QuizState.IDLE);
    }
  }, []);

  const handleAnswer = (answer: string) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newUserAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState(QuizState.RESULTS);
    }
  };

  const restartQuiz = () => {
    setQuizState(QuizState.IDLE);
    setQuestions([]);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setError(null);
  };

  const renderContent = () => {
    switch (quizState) {
      case QuizState.LOADING:
        return <LoadingIndicator />;
      case QuizState.IN_PROGRESS:
        return (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={userAnswers[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
          />
        );
      case QuizState.RESULTS:
        return <ResultsScreen questions={questions} userAnswers={userAnswers} onRestart={restartQuiz} />;
      case QuizState.IDLE:
      default:
        return <QuizStartScreen onStart={startQuiz} error={error} />;
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-white overflow-hidden relative">
      {/* Increased max-width significantly to fill screen */}
      <div className="w-full max-w-[95vw] xl:max-w-[1600px] mx-auto p-4 flex-grow flex flex-col justify-center relative z-10">
        {renderContent()}
      </div>
      
      {/* Footer mimic */}
      <footer className="w-full text-center py-4 text-sm md:text-xl font-bold text-black bg-white z-10">
        Todos direitos reservados &copy; {new Date().getFullYear()} André Birnfeld (Homenagem Educativa)
      </footer>
    </main>
  );
}