"use client";

import { Container } from "@mui/material";
import React from "react";
import { quiz } from "@/data";

export const Main: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = React.useState(0);

  const [selectedAnswer, setSelectedAnswer] = React.useState(false);

  const [checked, setChecked] = React.useState(false);

  const [selectedAnswerIndex, setSelectedAnswerIndex] =
    React.useState<Number | null>(null);
  const [showResult, setShowResult] = React.useState(false);

  const [results, setResults] = React.useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
  });

  const { questions } = quiz;

  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("Answer: True");
    } else {
      setSelectedAnswer(false);
      console.log("Answer: False");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResults((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswer: prev.correctAnswer + 1,
          }
        : {
            ...prev,
            wrongAnswer: prev.wrongAnswer + 1,
          },
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }

    setChecked(false);
  };

  return (
    <Container maxWidth="sm">
      <div className="container">
        <h1>Quiz Page</h1>
        <div>
          <h2>
            Question: {activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
        </div>
        <div>
          {!showResult ? (
            <div className="quiz-container">
              <h3>{questions[activeQuestion].question}</h3>
              {answers.map((answer, idx) => (
                <li
                  key={idx}
                  className={
                    selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                  }
                  onClick={() => onAnswerSelected(answer, idx)}
                >
                  <span>{answer}</span>
                </li>
              ))}
              {checked ? (
                <button onClick={nextQuestion} className="btn">
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="btn-disabled"
                >
                  Next
                </button>
              )}
            </div>
          ) : (
            <div className="quiz-container">
              <h3>Results</h3>
              <h3>Overall {(results.score / 25) * 100}%</h3>
              <p>
                Total Question: <span>{questions.length}</span>
              </p>
              <p>
                Total Score: <span>{results.score}</span>
              </p>
              <p>
                Correct Answers: <span>{results.correctAnswer}</span>
              </p>
              <p>
                Wrong Answers: <span>{results.wrongAnswer}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
