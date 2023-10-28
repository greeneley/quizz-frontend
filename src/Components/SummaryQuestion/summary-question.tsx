import React from "react";

interface SummaryQuestionProps {
  total: number;
  current: number;
}

export const SummaryQuestion: React.FC<SummaryQuestionProps> = (props) => {
  const { current, total } = props;
  return (
    <div className="px-10 py-2 border-solid border-1 rounded-2xl w-fit">
      {current}
      <span>/{total}</span>
    </div>
  );
};
