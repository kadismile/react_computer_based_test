import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {addQuestions, selectQuestions} from "./redux/questionSlice";
import Welcome from "./components/welcome/Welcome";
import Questions from "./components/questions/Questons";
import {useSelector} from "react-redux";
import {selectAnswered} from "./redux/questionSlice";
import QuestionService from '../src/services/questions'
import {FullPageSpinner} from "./components/libs";
import {useAsyncError} from "./hooks/errorHooks";


function App() {
  const questionAnswered = useSelector(selectAnswered);
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();
  const [navigate, setNavigate] = useState(false);
  const [loading, setloading] = useState(true);
  const throwError = useAsyncError();

  useEffect(()=> {
    ( async ()=> {
      try {
        if (!questions.length) {
          let response: any = await QuestionService.fetchQuestions();
          if (response?.results) {
            dispatch(addQuestions(response.results));
            setloading(false);
          }
        } else {
          setloading(false);
        }
      } catch (e) {
        console.log("eeee", e);
        throwError(new Error(e));
      }
    })();
  });

  const navigateToQuestions = (props: boolean): void => {
    setNavigate(props);
  }

  return (
    loading ?
      (<FullPageSpinner/>) :
      (<div className="ugf-covid covid-bg">
        <div className="container">
         <div className="row">
          {
            (questionAnswered === 0 && !navigate) ?
              (<Welcome navigateToQuestions={navigateToQuestions}/>)
              :
            (<Questions answered={questionAnswered}/>)
          }
        </div>
              </div>
      </div>)
  );
}

export default App;
