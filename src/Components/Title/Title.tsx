import React from "react";

interface TitleProps {
  content: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  const { content } = props;
  return <h1 className="text-3xl font-bold">{content}</h1>;
};
