import { useCallback } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import {
    ThemeProviderProps,
    useThemeContext,
} from "../../contexts/theme-context";

const getInverseMode = (mode: ThemeProviderProps["mode"]) =>
    mode === "dark" ? "light" : "dark";

function Navbar() {
    const { mode, setMode } = useThemeContext();

    const toggleMode = useCallback(() => {
        setMode((prevMode) => getInverseMode(prevMode));
    }, [setMode]);

    const ToggleModeIcon = mode === "dark" ? HiSun : HiMoon;
    return (
        <div className="sticky top-0 z-20">
            <p className="text-center text-xs py-3">
                Feel free to connect with me{" "}
                <code className="text-purple">vctqs1@gmail.com</code>
            </p>

            <div
                onClick={toggleMode}
                className="transition duration-500 ease-in-out rounded-full p-2 absolute top-0 right-0 z-50"
            >
                <ToggleModeIcon className="text-gray-500 dark:text-gray-200 text-2xl cursor-pointer" />
            </div>
        </div>
    );
}

export default Navbar;
