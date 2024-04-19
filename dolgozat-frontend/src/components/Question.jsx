import { useState } from "react"
import "./Question.css";

export default function Question(props) {

    const [buttonStyles, setButtonStyles] = useState(["", "", "", ""]);

    function onButtonClickFn(e) {
        
        console.log(e.target.value);
        if (e.target.value) {
            let datas = e.target.value.split("#");
            let newStyles = buttonStyles;
            if (datas[1] === props.questionDetails.helyes[1]) {
                newStyles[datas[1]] = "correct";
            } else {
                newStyles[datas[1]] = "incorrect";
            }
            setButtonStyles(newStyles);
            console.log(newStyles);
        }
    }

    const BUTTONS = [props.questionDetails.v1, props.questionDetails.v2, props.questionDetails.v3, props.questionDetails.v4];

    return (
        <div className="questionCard">
            <div className="question">
                {props.questionDetails.kerdes}
            </div>

            {
                BUTTONS.map((value, key) => {
                    return(
                        <>
                            <button key={key} onClick={e => onButtonClickFn(e)} value={value + "#" + key} className={buttonStyles[key]}> {value} </button>
                        </>
                    )
                })
            }
        </div>
    )
}
