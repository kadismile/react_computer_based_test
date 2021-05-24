import {createSelector, createSlice} from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    answered: 0
  },
  reducers: {
    addQuestions(state:any, action) {
      state.questions.push(...action.payload);
    },
    setAnswered(state:any) {
      state.answered = state.answered + 1
    },
    setCorrectAnswer(state:any, action) {
      const questionIndex = action.payload
      state.questions[questionIndex] = {...state.questions[questionIndex], answeredCorrectly: true}
    },
    resetState(state: any) {
      state.answered = 0;
      state.questions = [];
    }
  },
});


export const { addQuestions, setAnswered, setCorrectAnswer, resetState } = questionSlice.actions;
export const selectQuestions = (state: any) => state.questions.questions;
export const selectAnswered = (state: any) => state.questions.answered;

export const selectOneQuestion = createSelector(
  (state: any) => state.questions.questions,
  (_: any, index:any) => index,
  (questions, index) => questions[index]
);


export default questionSlice.reducer;
