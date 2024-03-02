import { NativeBaseProvider } from "native-base";
import { ReactNode } from "react";
import { THEME } from "../theme";

export const ThemeProvider = ({ children }: {children: ReactNode}) => {
    return (
        <NativeBaseProvider theme={THEME}>
          {children}
        </NativeBaseProvider>
    );
};