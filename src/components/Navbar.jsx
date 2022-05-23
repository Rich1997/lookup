import { useState, useEffect, useRef, useContext } from "react";
import Sun from "../assets/icons/Sun";
import Moon from "../assets/icons/Moon";
import LightModeLogo from "../components/LightModeLogo";
import DarkModeLogo from "../components/DarkModeLogo";
import GitHub from "../assets/icons/GitHub";
import { ThemeContext } from "../App";
import ThemeCircle from "../assets/icons/ThemeCircle";

let useClickOutside = (handler) => {
    let menu = useRef();

    useEffect(() => {
        let areaHandler = (e) => {
            if (!menu.current?.contains(e.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", areaHandler);

        return () => {
            document.removeEventListener("mousedown", areaHandler);
        };
    });

    return menu;
};

const Navbar = () => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const setDarkModeHandler = () => {
        localStorage.setItem("darkModeKey", !darkMode);
        setDarkMode(!darkMode);
    };

    const resetTheme = () => {
        localStorage.removeItem("darkModeKey");
        darkTheme.matches ? setDarkMode(true) : setDarkMode(false);
    };

    let menu = useClickOutside(() => {
        setOpen(false);
    });

    return (
        <nav className="px-8 pb-0 pt-8 flex items-center justify-between md:justify-center flex-wrap-reverse gap-8 w-full dark:text-zinc-50 text-zinc-800 duration-300">
            <div className="max-w-[32rem] flex md:gap-16 items-center">
                <div ref={menu} className="relative hidden md:block">
                    <div
                        className="p-2 cursor-pointer hover:bg-slate-400/20 hover:scale-110 rounded-full duration-300"
                        onClick={() => setOpen(!open)}
                    >
                        {darkMode ? <Sun /> : <Moon />}
                    </div>
                    {open ? (
                        <div className="absolute top-12 z-10 antialiased w-auto p-2 min-w-max rounded-md shadow-md dark:text-zinc-50 text-zinc-800 dark:bg-zinc-800 bg-white text-xs font-bold tracking-normal cursor-pointer select-none">
                            <div className="p-2 hover:bg-slate-400/20 rounded-md" onClick={setDarkModeHandler}>
                                {darkMode ? "Light" : "Dark"}
                            </div>
                            <div className="p-2 hover:bg-slate-400/20 rounded-md" onClick={resetTheme}>
                                System
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                {darkMode ? <DarkModeLogo /> : <LightModeLogo />}
                <a href="https://github.com/Rich1997/lookup" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 cursor-pointer hover:bg-slate-400/20 hover:scale-110 rounded-full duration-300 hidden md:block">
                        <GitHub />
                    </div>
                </a>
            </div>
            <div className="flex items-center gap-4 md:hidden duration-300 cursor-pointer">
                <div className="cursor-pointer hover:bg-slate-400/20 hover:scale-110 rounded-full" onClick={resetTheme}>
                    <ThemeCircle />
                </div>
                <div
                    className="cursor-pointer hover:bg-slate-400/20 hover:scale-110 rounded-full"
                    onClick={setDarkModeHandler}
                >
                    {darkMode ? <Sun /> : <Moon />}
                </div>
                <a href="https://github.com/Rich1997/lookup" target="_blank" rel="noopener noreferrer">
                    <div className="cursor-pointer hover:bg-slate-400/20 hover:scale-110 rounded-full">
                        <GitHub />
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
