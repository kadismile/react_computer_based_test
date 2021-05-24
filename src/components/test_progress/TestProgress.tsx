import React from "react";
import {useSelector} from "react-redux";
import {selectAnswered, selectQuestions} from "../../redux/questionSlice";

function TestProgress() {
  const questLength = useSelector(selectQuestions).length;
  const answered = useSelector(selectAnswered);
  return (
    <div className="test-progress">
      <span style={{fontSize: "20px", fontWeight: "bold"}}>{answered + 1} of {questLength}</span>
    </div>
  )
}

export default TestProgress