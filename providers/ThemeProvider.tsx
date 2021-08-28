import { useState, PropsWithChildren, useEffect } from "react";
import ThemeContext, { ThemeProviderProps } from "../contexts/theme-context";

type Mode = ThemeProviderProps["mode"];

const rawSetTheme = (rawTheme: Mode) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);
    localStorage.setItem("color-theme", rawTheme);
};
const getInitialTheme = (): Mode => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("color-theme");
        if (typeof storedPrefs === "string") {
            return storedPrefs as Mode;
        }
        const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
        if (userMedia.matches) {
            return "dark";
        }
    }
    // If you want to use dark theme as the default, return 'dark' instead
    return "light";
};

const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
    const [mode, setMode] = useState<Mode>(getInitialTheme());

    useEffect(() => {
        rawSetTheme(mode);
    }, [mode]);
    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
