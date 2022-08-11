import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelectorAll("input:checked");
    if (findCheckedInput === 0) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    const findCheckedInput =
      radiosWrapper.current.querySelectorAll("input:checked");
    setSelected(findCheckedInput);
    if (error) {
      //setError(e.target.value);
    }
  };

  const nextClickHandler = () => {
    let elems = Array.from(document.querySelectorAll(".checbox"));

    elems.map((elem) => (elem.checked = false));

    let answerSelected = Array.from(selected);

    if (answerSelected.length == 0) {
      return setError("please select");
    }

    let answerdata = data.choices.filter((elem, index) =>
      answerSelected.some((e, i) => index == e.id)
    );

    let f = data.choices.filter((elem) => answerdata.some((e) => elem == e));

    let matched = f.map((elem) => data.answer.some((e) => elem == e));
    let checkAnswer = matched.every((elem) => elem == true);

    if (checkAnswer) {
      data.userAnswer = true;
    } else {
      data.userAnswer = false;
    }

    onAnswerUpdate((prevState) => [...prevState, data]);
    setSelected("");

    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };
  //console.log(activeQuestion)

  const backClickHandler = () => {
    if(activeQuestion!==0){
      onSetActiveQuestion(activeQuestion-1)
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h2 className="mb-5">{data.question}</h2>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input
                  type="checkbox"
                  name="answer"
                  className="checbox"
                  value={choice}
                  id={i}
                  onChange={changeHandler}
                  onClick={() => setError(!error)}
                />
                {choice}
              </label>
            ))}
          </div>

          {activeQuestion !== 0 ? (
            <button
              onClick={backClickHandler}
              className="btn button is-link is-medium is-fullwidth mt-4"
            >
             
              Back
            </button>
          ) : (
            ""
          )}

          <button
            className="btn button is-link is-medium is-fullwidth mt-4"
            onClick={nextClickHandler}
          >
            Next
          </button>

          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Question;

/*eslint eqeqeq: "off"*/
