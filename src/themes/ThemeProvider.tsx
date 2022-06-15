import { ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import theme from 'themes/theme'

type Props = {
  children: React.ReactNode;
};

export default function MUIThemeProvider({ children }: Props) {
  return (
    <ThemeProvider
      theme={theme}
    >
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
}
