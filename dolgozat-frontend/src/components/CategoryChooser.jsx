import { useEffect, useState } from "react";
import DataService from "../model/DataService"
import GameHandler from "./GameHandler";
import Select from "./Select";

import "./CategoryChooser.css";

const dataService = new DataService();

export default function CategoryChooser(props) {
    const [categories, setCategories] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        dataService.getData("/kategoria", onCategoriesGet);
    }, []);

    function onCategoriesGet(response) {
        console.log(response.data);
        setCategories(response.data);
        //setCategoryId(response.data.length > 0 ? response.data[0].id : null);
    }

    function categoryChoose(id) {
        setCategoryId(id);
        if (categoryId != null) {
            console.log(`/tesztek/kategoria/${id}`);
            dataService.getData(`/tesztek/kategoria/${id}`, onQuestionsGet);
        }
    }

    function onQuestionsGet(response) {
        console.log(response.data);
        setQuestions(response.data);
    }
    
    return(
        <div className="categoryChooser">
            <Select values={categories} submitFn={categoryChoose}/>
            {categoryId ? 
                <GameHandler questions={questions}/>
                :
                "Töltés folyamatban..."
            }
        </div>
    )
}