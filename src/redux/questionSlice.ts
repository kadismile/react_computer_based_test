import {createSelector, createSlice} from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    answered: 0,
    time:0,
    moveToNext: false
  },
  reducers: {
    addQuestions(state:any, action) {
      state.questions.push(...action.payload);
    },
    setAnswered(state:any) {
      state.answered = state.answered + 1
      state.time = 0
    },
    setCorrectAnswer(state:any, action) {
      const questionIndex = action.payload
      state.questions[questionIndex] = {...state.questions[questionIndex], answeredCorrectly: true}
    },
    saveTime(state:any, action) {
      state.time = action.payload
    },
    moveToNextQuestion(state:any, action) {
      state.moveToNext = action.payload
    },
    resetState(state: any) {
      state.answered = 0;
      state.questions = [];
      state.timer = 0;
      state.moveToNext = false
    },
  },
});


export const { addQuestions, setAnswered, setCorrectAnswer, resetState, saveTime, moveToNextQuestion } = questionSlice.actions;
export const selectQuestions = (state: any) => state.questions.questions;
export const selectAnswered = (state: any) => state.questions.answered;
export const selectTime = (state: any) => state.questions.time;
export const selectMoveToNext = (state: any) => state.questions.moveToNext;

export const selectOneQuestion = createSelector(
  (state: any) => state.questions.questions,
  (_: any, index:any) => index,
  (questions, index) => questions[index]
);


export default questionSlice.reducer;
