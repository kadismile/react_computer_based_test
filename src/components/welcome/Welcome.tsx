import React from "react";

interface IWelcome {
  navigateToQuestions(props:boolean): any
}


const Welcome: React.FC<IWelcome> = (props) => {

  const handleClick = () => {
    props.navigateToQuestions(true)
  }

  return (
    <>
      <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
      <div className="covid-wrap">
        <div className="covid-test-wrap test-step active">
          <h2>Welcome to the Trivia Challenge!</h2>
          <br/>
          <br/>
          <h3>You will be presented with 10 True or False Questions </h3>
          <br/>
          <br/>
        </div>
        <div className="covid-test-wrap test-step active">
          <h3>Can you score 100%? </h3>
        </div>

        <div className="covid-test-wrap test-step active">
          <a href="#"  onClick={handleClick} className="button begin">Begin</a>
        </div>

      </div>
    </div>
    </>
  )
}

export default Welcome