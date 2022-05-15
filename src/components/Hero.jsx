import React from "react";

const Hero = () => {
    return (
        <div className="p-8 flex items-center md:justify-around justify-start md:text-2xl text-2xl sm:w-full w-8 font-normal dark:text-slate-50 text-slate-800 tracking-tighter select-none">
            <span>
                Your friendly neighborhood <strong className="font-black">dictionary</strong>
            </span>
        </div>
    );
};

export default Hero;
