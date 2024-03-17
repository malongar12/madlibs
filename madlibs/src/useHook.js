import { useState } from "react";




export const useHandleClick = () => {
    const [isData, setIsData] = useState(true);
    const [noun, setNoun] = useState("");
    const [noun2, setNoun2] = useState("");
    const [adjective, setAdjective] = useState("");





    // get story
    const getStory = () => {
        setIsData(false)
    }

    // retart madlib
    const restart = () => {
        setIsData(true)
        setNoun("")
        setNoun2("")
        setAdjective("")
    }

    return [isData, getStory, restart, noun, noun2, adjective, setNoun, setNoun2, setAdjective]
}