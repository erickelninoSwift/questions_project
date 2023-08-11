import "./index.css";
import allQuestions from "./data";
import { useState, useEffect } from "react";
import { Questions } from "./Questions";

function App() {
  const [questions, setQuestions] = useState([]);
  const [activeID, setActiveId] = useState(null);
  useEffect(() => {
    function getAlldata() {
      setQuestions(() => {
        return [...allQuestions];
      });
    }
    getAlldata();
  }, []);

  function toggelQuestion(id) {
    setActiveId(id !== activeID ? id : null);
  }

  return (
    <>
      <main>
        <Questions
          allQuestions={questions}
          toggleid={toggelQuestion}
          activeID={activeID}
        />
      </main>
    </>
  );
}

export default App;
