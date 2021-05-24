import React, {useEffect, useState} from "react";
import TestProgress from "../test_progress/TestProgress";
import SingleQuestion from "../single_question/SingleQuestion";
import {selectOneQuestion} from '../../redux/questionSlice'
import { useSelector } from "react-redux";
import Results from "../results/Results";
import {PageLoader} from "../libs";


interface IQuestions {
  answered: number
}

const Questions: React.FC<IQuestions> = (props) => {
  const { answered } = props;
  const question = useSelector((state) => selectOneQuestion(state, answered));
  const [loading, setloading] = useState(false);

  useEffect(()=> {
    setloading(true)
    setTimeout(()=> {
      setloading(false);
    }, 800);
  },[answered])

  return (
    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
      {
        loading ? <PageLoader/>  :
        <div className="covid-wrap">
          <div className="covid-test-wrap test-step active">
            {
              question?.category  ?
                <>
                  <TestProgress/>
                  <h2> {question?.category}</h2>
                  <br/>
                  <SingleQuestion question={question}/>
                </> :
                <Results/>
            }
          </div>
        </div>
      }
    </div>
  );
}

export default Questions;