import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" noWrap>
            TOEIC QuizApp
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
