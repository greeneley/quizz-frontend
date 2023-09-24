import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "green",
        },
      },
    },
  },
});
