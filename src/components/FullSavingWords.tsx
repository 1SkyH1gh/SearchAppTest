import * as React from 'react'
import {FunctionComponent} from "react";
import {SaveKeyword} from "./SaveKeyword";
import words from '../AllWords.json'
import saveWords from '../SavingWords.json'
import {Accept} from './Accept'
export interface FullSavingWordsProps {
    setStyle:string,
    statusHook:boolean



}


export const FullSavingWords: FunctionComponent<FullSavingWordsProps> = (props) => {
    const statusHook=props.statusHook
    const bank = []

    if(statusHook==true) {

        bank.push(saveWords)
        console.log(bank)

    }




    return(

        <div className={props.setStyle} >


            {
                saveWords.map((word: { id: number; keyword: string; }) =>
                    <SaveKeyword word={word}/>)
            }

        </div>

    )
}