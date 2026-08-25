import React, { useState, useCallback } from 'react';
import { QuizStartScreen } from './components/QuizStartScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultsScreen } from './components/ResultsScreen';
import { LoadingIndicator } from './components/LoadingIndicator';
import { generateQuizQuestions, ALL_QUIZZES } from './services/geminiService';
import { Question, QuizTopic, QuizState } from './types';

export default function App() {
  const [currentQuiz, setCurrentQuiz] = useState<QuizTopic>(ALL_QUIZZES[0]);
  const [quizState, setQuizState] = useState<QuizState>(QuizState.IDLE);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleSelectQuiz = (quiz: QuizTopic) => {
    setCurrentQuiz(quiz);
    setQuizState(QuizState.IDLE);
    setQuestions([]);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setError(null);
  };

  const startQuiz = useCallback(async () => {
    setError(null);
    setQuizState(QuizState.LOADING);
    try {
      const newQuestions = await generateQuizQuestions(currentQuiz.id, currentQuiz.questions);
      setQuestions(newQuestions);
      setUserAnswers(Array(newQuestions.length).fill(null));
      setCurrentQuestionIndex(0);
      setQuizState(QuizState.IN_PROGRESS);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
      setQuizState(QuizState.IDLE);
    }
  }, [currentQuiz]);

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
        return (
          <ResultsScreen
            questions={questions}
            userAnswers={userAnswers}
            onRestart={restartQuiz}
            currentQuiz={currentQuiz}
            onSelectQuiz={handleSelectQuiz}
          />
        );
      case QuizState.IDLE:
      default:
        return (
          <QuizStartScreen
            onStart={startQuiz}
            error={error}
            currentQuiz={currentQuiz}
            onSelectQuiz={handleSelectQuiz}
          />
        );
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-white overflow-hidden relative">
      {/* Container */}
      <div className="w-full max-w-[95vw] xl:max-w-[1600px] mx-auto p-4 flex-grow flex flex-col justify-center relative z-10">
        {renderContent()}
      </div>

      {/* Footer mimic */}
      <footer className="w-full text-center py-4 text-sm md:text-xl font-bold text-black bg-white z-10 border-t-2 border-gray-200">
        Todos direitos reservados &copy; {new Date().getFullYear()} André Birnfeld (Homenagem Educativa)
      </footer>
    </main>
  );
}
