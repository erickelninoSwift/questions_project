import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export function Question({ myquestion }) {
  const { title, info } = myquestion;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
      </header>
      <p>{info}</p>
      <span className="question-btn">
        <AiOutlinePlusCircle />
      </span>
    </article>
  );
}
