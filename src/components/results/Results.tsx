import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetState, selectQuestions} from "../../redux/questionSlice";
import he from "he";
import {FullPageSpinner} from "../libs";


const Results = () => {
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(resetState())
  }
  const color = (value: boolean): string => {
    if (value) {
      return "#417941"
    } else {
      return "#e64a4afa"
    }
  }
  const score = () => {
    return questions.filter((question: any) => question.answeredCorrectly).length
  }

  return (
    questions.length ?
    <div className=" test-step test-report">
      <h3>Thanks for your submission</h3>
      <p>You Scored  </p>
      <div className="test-progress">
      <div className="test-progress-step">
        <span className="step-number">{score()}/{questions.length}</span>
      </div>
    </div>

      <div className="step-block">
        <div className="form-group" style={{textAlign: "left"}}>
          {
            questions.map((question:any, index:number)=> {
              return (
                <span key={index} style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color:color(question.answeredCorrectly)
                }}>
                  {index+1}. {he.decode(question.question)} <br/> <hr/>
                </span>
              )
            })
          }

        </div>


      </div>

      <a href="#" onClick={handleClick} className="result">Play Again?</a>
    </div> : <FullPageSpinner/>
  )
}

export default Results