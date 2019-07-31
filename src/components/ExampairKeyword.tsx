import * as React from 'react'
import {FunctionComponent, useState} from "react";
import saveWords from '../SavingWords.json'
import words from '../AllWords.json'
export interface ExamplairKeywordProp {
    words:{
        id:number,
        keyword:string
    },

}

export const ExamplairKeyword:FunctionComponent<ExamplairKeywordProp>=props=> {
    const [toSavingWords, addToSavingWords] = useState(false)
    const handleClick=()=>{
        addToSavingWords(true)

            saveWords.push(props.words)



    }


    return(
        <h1 className={props.words.keyword.length<7?"examplairKeywordsStyle":"bigWordsStyle"} onClick={handleClick}>{props.words.keyword}</h1>
    )
}