import React, {useEffect, useState} from "react";
import {setAnswered, setCorrectAnswer, selectAnswered, selectMoveToNext, moveToNextQuestion} from "../../redux/questionSlice";
import {useDispatch, useSelector} from "react-redux";

interface IAnswers {
  correctAnswer: string
}
const Answers: React.FC<IAnswers> = (props) => {
  const index = useSelector(selectAnswered);
  const autoSubmit = useSelector(selectMoveToNext);
  const dispatch = useDispatch();
  const {correctAnswer} = props
  const [userAnswer, setUserAnswer] = useState(null)

  useEffect(() => {
    if (autoSubmit === true) {
      console.log(" autoSubmit ---> ", autoSubmit)
      submitButton()
      dispatch(moveToNextQuestion(false))
    }
  },[autoSubmit])

  const submitButton = () => {
    dispatch(setAnswered())
    if (userAnswer === correctAnswer) {
      dispatch(setCorrectAnswer(index))
    }
    setUserAnswer(null)
  }

  const handleChange = (event: { target: { value: any; } }) => {
    let { value } = event.target;
    setUserAnswer(value)
  };

  return (
    <div className="step-block">
      <div className="form-group">
        <input type="radio"
           name="package-plan"
           className="form-control"
           id="yes"
           value="True"
           checked={userAnswer==="True"}
           onChange={handleChange}
        />
        <label htmlFor="yes">True</label>
      </div>
      <div className="form-group">
        <input type="radio"
           name="package-plan"
           className="form-control"
           id="no"
           value="False"
           checked={userAnswer==="False"}
           onChange={handleChange}
        />
        <label htmlFor="no">False</label>
    </div>
      {
        userAnswer ? <a href="#" onClick={submitButton} className="button">Next</a> :
          <a className="fade-button">Next</a>
      }
  </div>
  )
}

export default Answers