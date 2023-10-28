"use client";

import React from "react";
import { quiz } from "@/data";
import { getLetterQuestion } from "@/Utils/getLetter";
import { SummaryQuestion } from "@/Components/SummaryQuestion/summary-question";
import { Title } from "../Title/Title";

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

  const previousQuestion = () => {
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
      setActiveQuestion((prev) => prev - 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }

    setChecked(false);
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
    <div className="container">
      <div>
        <Title content="Quiz Page" />
      </div>
      <br />
      <div>
        <h2 className="text-2xl">
          <SummaryQuestion
            total={questions.length}
            current={activeQuestion + 1}
          />
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => {
              const letter = getLetterQuestion(idx);
              return (
                <li
                  key={idx}
                  className={
                    selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                  }
                  onClick={() => onAnswerSelected(answer, idx)}
                >
                  <span
                    className={`py-2 px-3 rounded-full ${
                      selectedAnswerIndex === idx
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {letter}
                  </span>
                  <span className="pl-3.5">{answer}</span>
                </li>
              );
            })}
            <div className="grid grid-cols-2 gap-5">
              {activeQuestion !== 0 ? (
                <>
                  <button
                    onClick={previousQuestion}
                    className="btn-previous-question"
                  >
                    Previous Question
                  </button>
                </>
              ) : (
                <div></div>
              )}

              <button
                disabled={!checked}
                onClick={nextQuestion}
                className={checked ? "btn btn-next-question" : "btn-disabled"}
              >
                {activeQuestion === questions.length - 1
                  ? "Finish"
                  : "Next Question"}
              </button>
            </div>
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
  );
};
