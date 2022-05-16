import { useContext } from "react";
import Sun from "../assets/icons/Sun";
import Moon from "../assets/icons/Moon";
import LightModeLogo from "../components/LightModeLogo";
import DarkModeLogo from "../components/DarkModeLogo";
import GitHub from "../assets/icons/GitHub";
import { ThemeContext } from "../App";

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const setDarkModeHandler = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="px-8 pb-0 pt-8 flex items-center justify-between md:justify-center flex-wrap-reverse gap-8 w-full dark:text-zinc-50 text-zinc-800 duration-300">
            <div className="max-w-[32rem] flex gap-16 items-center">
                <div
                    className="p-2 cursor-pointer hover:bg-slate-400/20 hover:scale-110 rounded-full duration-300 hidden md:block"
                    onClick={setDarkModeHandler}
                >
                    {darkMode ? <Sun /> : <Moon />}
                </div>
                {darkMode ? <DarkModeLogo /> : <LightModeLogo />}
                <div className="p-2 cursor-pointer hover:bg-slate-400/20 hover:scale-110 rounded-full duration-300 hidden md:block">
                    <GitHub />
                </div>
            </div>
            <div className="flex items-center gap-4 md:hidden duration-300 cursor-pointer">
                <div
                    className="cursor-pointer hover:bg-slate-400/20 hover:scale-110 rounded-full"
                    onClick={setDarkModeHandler}
                >
                    {darkMode ? <Sun /> : <Moon />}
                </div>
                <div className="cursor-pointer hover:bg-slate-400/20 hover:scale-110 rounded-full">
                    <GitHub />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
