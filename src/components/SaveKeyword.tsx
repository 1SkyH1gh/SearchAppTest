import * as React from 'react'
import {FunctionComponent, useState} from "react";

export interface SaveKeywordsProps{
    word:{
        id:number,
        keyword:string,

    },

}

export const SaveKeyword:FunctionComponent<SaveKeywordsProps>=props=>{

    const[buttonDelete,deleteKeywords]=useState(false)


    return(
        <h1 className="saveKeywordsStyles">{props.word.keyword} <p className="deleteKeyword" >X</p></h1>
    )
}