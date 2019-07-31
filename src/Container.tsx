import * as React from 'react'
import {FoundOrDelete} from "./components/FoundOrDelete";
import {FormSearch} from "./components/FormSearch";
import {AllKeyword} from "./components/AllKeyword";
import {Footer} from "./components/Footer";
import {useState} from "react";
import words from './AllWords.json'
import saveWords from './SavingWords.json'
import {FullSavingWords} from './components/FullSavingWords'
import {SaveKeyword} from "./components/SaveKeyword";
export const Container = () => {
    const [keywordsState, saveKeywords] = useState(false)

    




    return (
        <div className='container'>
            <FoundOrDelete replaceStatus={keywordsState}/>

            <FormSearch/>
            <AllKeyword/>
            <Footer pushArray={keywordsState} onClick={() => saveKeywords(true) }/>
        </div>
    )
}