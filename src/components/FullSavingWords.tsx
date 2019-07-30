import * as React from 'react'
import {FunctionComponent} from "react";
import {SaveKeyword} from "./SaveKeyword";
import words from '../SavingWords.json'

export interface FullSavingWordsProps {
    setStyle:string
}


export const FullSavingWords: FunctionComponent<FullSavingWordsProps> = (props) => {
    const empty={

    }
    /*
    const regrouper=(arr:string[],obj:{})=>{
        for(let i=0;i<arr.length;i++){
            const everyElem=arr[i]
            const firstChar=everyElem[0]
            if(obj.hasOwnProperty(firstChar)){

            }

        }
    }
    */
    /*
   const grouping=(arr:string[])=>arr.reduce((acc:any,item:string)=>{
       const key=item[0]
        if(acc.hasOwnProperty(key)){
            acc[key].push(item)

        }
        else{
            acc[key]=[item]
        }

    })
    */


    return(
        <div className={props.setStyle}>
            {
                words.data.map(word =>
                    <SaveKeyword word={word}/>)
            }
        </div>

    )
}