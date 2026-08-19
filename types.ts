export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizTopic {
  id: string;
  title: string;
  subject: string;
  description: string;
  icon: string;
  badgeColor?: string;
  questions: Question[];
}

export interface QuizData {
  questions: Question[];
}

export enum QuizState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  IN_PROGRESS = 'IN_PROGRESS',
  RESULTS = 'RESULTS'
}
