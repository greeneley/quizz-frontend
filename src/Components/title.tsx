import React from "react";
import { Typography } from "antd";

interface TitleProps {
  content: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  const { content } = props;
  return <h1 className="text-3xl font-bold text-white">{content}</h1>;
};
