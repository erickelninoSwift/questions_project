/* eslint-disable react/prop-types */
import { Question } from "./Question";

export const Questions = ({ allQuestions, toggleid, activeID }) => {
  return (
    <>
      <section className="container">
        <h1>Questions</h1>
        {allQuestions.map((currentQuestion) => {
          return (
            <Question
              key={currentQuestion.id}
              myquestion={currentQuestion}
              toggleQuestionId={toggleid}
              idActive={activeID}
            />
          );
        })}
      </section>
    </>
  );
};
