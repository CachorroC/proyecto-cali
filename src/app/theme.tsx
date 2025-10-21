'use client';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#e9edc9',
    },
    secondary: {
      main: '#929187',
    },
    error: {
      main: '#ff5449',
    },
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
};

const theme = createTheme(themeOptions);
export default function ThemeComponent({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
