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

export async function generateQuizQuestions(quizId?: string): Promise<Question[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const topic: QuizTopic = quizId ? getQuizById(quizId) : ALL_QUIZZES[0];
      const randomizedQuestions: Question[] = topic.questions.map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }));
      resolve(shuffleArray(randomizedQuestions));
    }, 250);
  });
}

export { ALL_QUIZZES, getQuizById };
