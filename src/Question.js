import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const { title, info, isActive, handleIsActive, index, handleClear } = props;
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            if (isActive) {
              handleClear();
            } else if (!isActive) {
              handleIsActive(index);
            }
          }}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Question;
