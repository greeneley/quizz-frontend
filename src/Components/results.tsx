import { Button } from "@mui/material";
import * as React from "react";
import { range } from "lodash";

export interface ResultsProps {
  correctQuestions: number[];
  wrongQuestions: number[];
  total: number;
}

export const Results: React.FC<ResultsProps> = (props) => {
  const { correctQuestions, wrongQuestions, total } = props;
  return (
    <>
      <div className="quiz-container">
        <h2>Results</h2>
        <p>
          Total Question: <span>{total}</span>
        </p>
        <p>
          Correct Answers: <span>{correctQuestions.length}</span>
        </p>
        <p>
          Wrong Answers: <span>{wrongQuestions.length}</span>
        </p>
      </div>
      <div className="quiz-container re">
        <h2 className="relative font-bold after:absolute after:left-0 after:bottom-[10px] after:w-[70px] after:border-t-4 after:border-solid after:border-sky-500">
          Summary of the text
        </h2>
        <br />
        <div className="grid grid-cols-8 gap-6">
          {range(1, total + 1).map((numberQuestion, index) => {
            return (
              <Button
                key={index}
                variant="outlined"
                className="w-[63px] h-[63px]"
                color={
                  wrongQuestions.some(
                    (wrongQuestion) => wrongQuestion === numberQuestion,
                  )
                    ? "error"
                    : "success"
                }
              >
                {numberQuestion}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};
