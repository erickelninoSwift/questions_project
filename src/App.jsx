import "./index.css";
import allQuestions from "./data";
import { useState, useEffect } from "react";
import { Questions } from "./Questions";

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    function getAlldata() {
      setQuestions(() => {
        return [...allQuestions];
      });
    }
    getAlldata();
  }, []);

  return (
    <>
      <main>
        <Questions allQuestions={questions} />
      </main>
    </>
  );
}

export default App;
