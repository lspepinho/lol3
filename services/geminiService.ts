import { Question, QuizTopic } from '../types';
import { ALL_QUIZZES, getQuizById } from '../data/quizzesData';

function shuffleArray<T>(array: T[]): T[] {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

/**
 * Generates a custom quiz for the CURRENT selected subject with a specified number of questions.
 * It updates the title and questions count specifically for this subject.
 */
export function generateCustomCurrentSubjectQuiz(currentQuiz: QuizTopic, targetCount: number): QuizTopic {
  if (targetCount <= 0) return currentQuiz;

  // Retrieve original base quiz if this was already customized
  const baseOriginal = getQuizById(currentQuiz.id) || currentQuiz;
  const originalQuestions = baseOriginal.questions.length > 0 ? baseOriginal.questions : currentQuiz.questions;

  const shuffledPool = shuffleArray(originalQuestions);
  const selectedQuestions: Question[] = [];

  for (let i = 0; i < targetCount; i++) {
    selectedQuestions.push(shuffledPool[i % shuffledPool.length]);
  }

  // Update title to reflect the new question count
  let newTitle = currentQuiz.title;
  if (/\b\d+\s*questões\b/i.test(newTitle)) {
    newTitle = newTitle.replace(/\b\d+\s*questões\b/i, `${targetCount} Questões`);
  } else if (/\b\d+\s*q\b/i.test(newTitle)) {
    newTitle = newTitle.replace(/\b\d+\s*q\b/i, `${targetCount} Questões`);
  } else if (newTitle.includes(':')) {
    const parts = newTitle.split(':');
    newTitle = `${parts[0]}: ${targetCount} Questões (${parts.slice(1).join(':').trim()})`;
  } else {
    newTitle = `${currentQuiz.subject}: ${targetCount} Questões - ${newTitle}`;
  }

  return {
    ...currentQuiz,
    title: newTitle,
    questions: selectedQuestions
  };
}

export async function generateQuizQuestions(quizId?: string, customQuestions?: Question[]): Promise<Question[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      let questionsPool: Question[] = [];

      if (customQuestions && customQuestions.length > 0) {
        questionsPool = customQuestions;
      } else {
        const topic: QuizTopic = quizId ? getQuizById(quizId) : ALL_QUIZZES[0];
        questionsPool = topic.questions;
      }

      const randomizedQuestions: Question[] = questionsPool.map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }));
      resolve(shuffleArray(randomizedQuestions));
    }, 250);
  });
}

export { ALL_QUIZZES, getQuizById };
