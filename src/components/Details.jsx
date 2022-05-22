import React from "react";

const Details = (props) => {
    const details = [
        {
            synonyms: { name: "Synonyms", color: "text-purple-400" },
            antonyms: { name: "Antonyms", color: "text-rose-300" },
            example: { name: "Example", color: "text-blue-300" },
        },
    ];
    return (
        <details className="ml-2">
            <summary className={`font-semibold ${details[0][props.name].color} cursor-pointer`}>
                {details[0][props.name].name}
            </summary>
            <div className="ml-2">
                {props.name !== "example" ? (
                    <ul className="px-2 py-2 flex flex-wrap gap-2">
                        {props.detail.map((dName, index) => (
                            <li
                                key={index}
                                className="px-2 border-2 dark:border-zinc-600 border-zinc-200 rounded-lg dark:text-zinc-300"
                            >
                                {dName}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="pl-2 dark:text-zinc-300">{props.detail}</p>
                )}
            </div>
        </details>
    );
};

export default Details;
