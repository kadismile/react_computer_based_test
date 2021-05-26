import React, {useEffect, useState} from "react";
import {saveTime, selectAnswered, selectTime, moveToNextQuestion} from "../../redux/questionSlice";
import {useDispatch, useSelector} from "react-redux";


const Timer: React.FC = () => {
  let timer = useSelector(selectTime);
  const dispatch = useDispatch();
  let [count, setCounter] = useState(timer > 0 ? timer : 10)

  useEffect(() => {
    let timer = setInterval(() => {
      count--
      if (count <= 0) {
        clearInterval(timer);
      }
      setCounter(count)
      dispatch(saveTime(count));
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])

  const displayTime = (time= count) => {
    if (time === 0) {
      setCounter(count+1)
      dispatch(moveToNextQuestion(true))
    }
    if (time > 10) {
      return <span> </span>
    }
    if (time === 10) {
      return <span> 00:{time} </span>
    }
    if (time > 5) {
      return <span> 00:0{time} </span>
    }
    if (time <= 5) {
      return <span style={{color: "red"}}> 00:0{time} </span>
    }
  }

  return (
    <p style={{textAlign: "right"}}>{displayTime()}</p>
  )
}

export default Timer