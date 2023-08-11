import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export function Question({ myquestion, toggleQuestionId, idActive }) {
  const { id, title, info } = myquestion;

  let isActive = id === idActive ? true : false;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestionId(id)}>
          {" "}
          {isActive ? (
            <AiOutlineMinusCircle style={{ fontSize: "2rem" }} />
          ) : (
            <AiOutlinePlusCircle style={{ fontSize: "2rem" }} />
          )}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
}
