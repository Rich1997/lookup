import React, { useState, useContext } from "react";
import Search from "../assets/icons/Search";
import { InputContext } from "../App";
import { debounce } from "../libs/helper";

const Searchbar = () => {
  const [value, setValue] = useState("");
  const { setInputValue } = useContext(InputContext);

  const handleInputChange = debounce((e) => {
    setInputValue(e.target.value.trim().toLowerCase());
    setValue(e.target.value);
  }, 600);

  const handleSubmit = () => {
    setInputValue(value.trim().toLowerCase());
    setValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value.trim().toLowerCase());
      setValue("");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-4 w-full md:w-[32rem] h-24 dark:bg-zinc-800/70 bg-[#fff] dark:shadow-2xl dark:shadow-black shadow-xl shadow-stone-300/50 dark:text-zinc-500 text-zinc-300">
          <input
            className="w-full h-full py-4 pl-8 bg-transparent dark:text-zinc-50 text-zinc-800 dark:caret-zinc-400 caret-zinc-800 focus:outline-none tracking-tight placeholder:text-zinc-400"
            placeholder=" look up your word..."
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          ></input>
          <div className="pr-8 hover:opacity-50" onClick={handleSubmit}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
