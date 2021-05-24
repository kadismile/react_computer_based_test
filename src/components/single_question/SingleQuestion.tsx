import React from "react";
import he from 'he'
import Answers from "../answers/Answers";

interface IQuestioniare  {
  question: object
}
const  SingleQuestion: React.FC<IQuestioniare>  = (props)=> {
  const {question:{question}}: any = props
  const {question:{correct_answer}}: any = props

  return (
    <>
      <p>{he.decode(question)}</p>
      <Answers correctAnswer={correct_answer}/>
    </>
  )
}

export default SingleQuestion