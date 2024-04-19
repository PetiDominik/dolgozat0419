import { useEffect, useState } from "react";
import DataService from "../model/DataService";
import Question from "./Question";

export default function GameHandler(props) {

    useEffect((CATEGORY_ID) => {
        
    }, [props.categoryId]);
    

    return(
        <div className="gameHandler">
            {props.categoryId}
            {
                props.questions ? 
                    props.questions.map((value, key) => {
                        return(
                            <Question questionDetails={value} key={key}/>
                        )
                    })
                :
                    "Töltés..."
            }
        </div>
    )
}