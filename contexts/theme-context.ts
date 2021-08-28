import { createContext, Dispatch, SetStateAction, useContext } from "react";


export interface ThemeProviderProps {
    mode: "dark" | "light";
    setMode: Dispatch<SetStateAction<ThemeProviderProps["mode"]>>;
}


export const ThemeContext = createContext<ThemeProviderProps>({
    mode: "light",
    setMode: () => {}
});

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
