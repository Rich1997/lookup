import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Speaker from "../assets/icons/Speaker";
import { InputContext } from "../App";
import Details from "./Details";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const Results = () => {
    const { inputValue } = useContext(InputContext);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async (param) => {
        try {
            setLoading(true);
            const res = await axios(`/${param}`);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inputValue.length) {
            fetchData(inputValue);
        }
    }, [inputValue]);

    if (error) {
        return <div className="text-center m-8 font-semibold dark:text-zinc-50 text-zinc-800">Word not found</div>;
    }

    if (loading) {
        return (
            <div className="p-8 h-64">
                <div className="mx-auto rounded-md h-16 dark:bg-zinc-800/70 bg-zinc-200/60 max-w-md"></div>
                <div className="p-8 mx-auto my-4 rounded-md h-full dark:bg-zinc-800/70 bg-zinc-200/60 max-w-md"></div>
            </div>
        );
    }

    const p = response && response[0].phonetics.filter((i) => i.text !== undefined && i.text !== "");
    const phonetic = p && p.length ? p[0].text : "";
    const a = response && response[0].phonetics.filter((i) => i.audio !== undefined && i.audio !== "");
    const src = a && a.length ? a[0].audio : "";
    const audio = new Audio(src);

    const defsList =
        response &&
        response.map((item, index) => (
            <div key={index}>
                <div className={`flex ${response.length > 1 ? "gap-2" : " "}`}>
                    <div className="font-bold italic">{response.length > 1 ? index + 1 : ""}</div>
                    <div>
                        {item.meanings.map((meaning, index) => (
                            <div key={index}>
                                <div className="mb-2 font-bold italic">
                                    {meaning.partOfSpeech && meaning.partOfSpeech}
                                </div>
                                {meaning.definitions &&
                                    meaning.definitions.map((items, index) => (
                                        <div key={index} className="ml-2 mb-4 dark:text-zinc-300">
                                            {items.definition}

                                            {items.synonyms && items.synonyms.length ? (
                                                <Details detail={items.synonyms} name="synonyms" />
                                            ) : (
                                                ""
                                            )}
                                            {items.antonyms && items.antonyms.length ? (
                                                <Details detail={items.antonyms} name="antonyms" />
                                            ) : (
                                                ""
                                            )}
                                            {items.example && items.example.length ? (
                                                <Details detail={items.example} name="example" />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ));

    return (
        <>
            <div className="p-8">
                {response && (
                    <div className="max-w-md dark:text-zinc-50 text-zinc-800 mx-auto">
                        <div className="flex gap-4 items-center mb-4">
                            {src !== "" ? (
                                <div
                                    className="p-2 hover:bg-slate-400/20 hover:scale-110 rounded-full duration-300 cursor-pointer"
                                    onClick={() => audio.play()}
                                >
                                    <Speaker />
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="word-and-phonetics">
                                <div className="word font-satoshi font-black text-xl break-all">
                                    {response && response[0].word}
                                </div>
                                <div className="phonetics tracking-wide">
                                    {response && response[0].phonetic ? response[0].phonetic : phonetic}
                                </div>
                            </div>
                        </div>
                        <div className="definition">{defsList}</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Results;
