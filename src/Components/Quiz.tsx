import { Button, Divider, FormControl, FormLabel } from "@mui/material";
import React from "react";

export const Quiz: React.FC = () => {
  return (
    <>
      <div>
        Question: What is the name of the process that sends one quibit of
        information using two bits of classical information ?
      </div>
      <Divider />
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Please choose one of the following answers
          </FormLabel>
          <li>
            <ul>Female</ul>
            <ul>Female</ul>
            <ul>Female</ul>
          </li>
        </FormControl>
      </div>
      <Button variant="outlined" color="primary">
        Next
      </Button>
    </>
  );
};
