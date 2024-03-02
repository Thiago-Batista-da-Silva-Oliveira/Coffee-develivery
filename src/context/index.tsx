import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
