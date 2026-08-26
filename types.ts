
export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
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
