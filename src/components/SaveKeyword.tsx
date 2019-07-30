import * as React from 'react'
import {FunctionComponent} from "react";

export interface SaveKeywordsProps{
    word:{
        id:number,
        keyword:string
    }
}

export const SaveKeyword:FunctionComponent<SaveKeywordsProps>=props=>{
    return(
        <h1 className="saveKeywordsStyles">{props.word.keyword}</h1>
    )
}