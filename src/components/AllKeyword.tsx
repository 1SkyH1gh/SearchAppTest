import * as React from 'react'
import {FunctionComponent} from "react";
import keywords from '../AllWords.json'
import {ExamplairKeyword} from "./ExampairKeyword";

export interface AllKeywordProp {






}


export const AllKeyword:FunctionComponent<AllKeywordProp>=()=>{



    return(
        <div className="AllKeywordsStyle">
            {keywords.map(words=>
                <ExamplairKeyword  words={words}  />
            )}
        </div>
    )
}