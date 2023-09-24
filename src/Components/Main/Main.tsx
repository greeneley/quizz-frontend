import {
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

export const Main: React.FC = () => {
  return (
    <Container maxWidth="sm">
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
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>
      <Button variant="outlined">Next</Button>
    </Container>
  );
};
