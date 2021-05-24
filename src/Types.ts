

export interface IQuestions {
  category: string,
  "type": string,
  "difficulty": string,
  "question": string,
  "correct_answer": string,
  "incorrect_answers": [
    string
  ]
}

export interface IError {
  errorMessage: string
}