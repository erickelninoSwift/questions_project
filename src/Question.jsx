import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export function Question({ myquestion }) {
  const [showInfo, setShowInfo] = useState(false);
  const { title, info } = myquestion;

  function changeInfoState() {
    return setShowInfo((data) => {
      return !data;
    });
  }
  //   console.log(showInfo);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={changeInfoState}>
          {" "}
          {showInfo ? (
            <AiOutlineMinusCircle style={{ fontSize: "2rem" }} />
          ) : (
            <AiOutlinePlusCircle style={{ fontSize: "2rem" }} />
          )}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}
