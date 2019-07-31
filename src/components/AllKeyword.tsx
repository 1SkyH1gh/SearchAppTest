import * as React from 'react'
import {FunctionComponent} from "react";
import keywords from '../AllWords.json'
import {ExamplairKeyword} from "./ExampairKeyword";

export interface AllKeywordProp {






}


export const AllKeyword:FunctionComponent<AllKeywordProp>=()=>{
/*
   const grouper:FunctionComponent<AllKeywordProp>=(arr:any)=>arr.reduce((acc:any,item:any)=> {
        const key = item[0]
        if (acc.hasOwnProperty(key)) {
            acc[key].push(item)
        } else {
            acc[key] = [item]
        }
        return acc
    }
)
*/


    return(
        <div className="AllKeywordsStyle">
            {keywords.map(words=>
                <ExamplairKeyword  words={words}  />
            )}
        </div>
    )
}