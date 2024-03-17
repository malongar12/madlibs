import { useHandleClick } from "./useHook";
import React from "react";



export const Madlib = (props) => {
    /*const [noun, setNoun] = useState("");
    const [noun2, setNoun2] = useState("");
    const [adjective, setAdjective] = useState("");
    */
    const [isData, getStory, restart, noun, noun2, adjective, 
        setNoun, setNoun2, setAdjective] = useHandleClick()



    return(
        <div className="container">


        {isData &&
        
        <div className="box">

            <h1>{props.title}</h1>
        
            <input type="text" required value={noun} onChange={(e) => setNoun(e.target.value)} placeholder="noun"  className="input"></input>

            <input type="text" required value={noun2} onChange={(e) => setNoun2(e.target.value)} placeholder="noun 2" className="input"></input>

            <input type="text" required value={adjective} onChange={(e) => setAdjective(e.target.value)} placeholder="adjective" className="input"></input>

            <button type="button" onClick={getStory} className="btn">Get Story</button>

        </div>

        }

        <div>
            
            {!isData &&

            <div>
                <p>there was a {noun} who loved {adjective} {noun2}.</p>
                <button type="button" onClick={restart} className="btn2">Restart</button>
            </div>
            
            }
        </div>

    </div>
    )
}