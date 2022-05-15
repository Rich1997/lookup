import { createContext, useState } from "react";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import Results from "./components/Results";

export const InputContext = createContext();
export const ThemeContext = createContext();

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [inputValue, setInputValue] = useState("");

    const value = { inputValue, setInputValue };
    const dark = { darkMode, setDarkMode };

    return (
        <InputContext.Provider value={value}>
            <ThemeContext.Provider value={dark}>
                <div className={`w-full min-h-fit h-full ${darkMode ? "dark" : ""}`}>
                    <div className="App antialiased w-screen min-h-fit h-full overflow-auto dark:bg-zinc-900 bg-zinc-50 selection:bg-rose-200 dark:selection:text-zinc-800 tracking-tight">
                        <Navbar />
                        <Hero />
                        <Searchbar />
                        <Results />
                    </div>
                </div>
            </ThemeContext.Provider>
        </InputContext.Provider>
    );
}

export default App;
