import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  //handle is active and sets current click to be open
  const handleIsActive = (id) => {
    let newQuestion = [...questions];
    let indexVal = newQuestion.findIndex((question) => question.id === id);
    newQuestion = newQuestion.map((question, index) => {
      question.isActive = false;
      return question;
    });
    newQuestion[indexVal].isActive = true;
    setQuestions(newQuestion);
  };

  //Sets state value to be false.
  const handleClear = () => {
    let newQuestion = [...questions];
    newQuestion = newQuestion.map((question) => {
      question.isActive = false;
      return question;
    });
    setQuestions(newQuestion);
  };

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion
                key={question.id}
                index={question.id}
                isActive={question.isActive}
                handleIsActive={handleIsActive}
                handleClear={handleClear}
                {...question}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
