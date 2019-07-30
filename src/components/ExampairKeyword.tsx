import * as React from 'react'
import {FunctionComponent} from "react";

export interface ExamplairKeywordProp {
    words:{
        id:number,
        keyword:string
    },

}

export const ExamplairKeyword:FunctionComponent<ExamplairKeywordProp>=props=>{
    return(
        <h1 className={props.words.keyword.length<7?"examplairKeywordsStyle":"bigWordsStyle"}>{props.words.keyword}</h1>
    )
}