import * as React from 'react'
import classNames from 'classnames';
import {inspect} from "util";
import {useState} from 'react'
import {FullSavingWords} from "./FullSavingWords";

export const FoundOrDelete=()=>{


    const [visibleBlock,setState]=useState('savingWordsBlock')
    const handleClick=()=>{
        setState('unshowSavingWords')

    }


    return(
        <div className="FoundOrDeleteContainerAll">
        <div className="FoundOrDeleteBlock">
            <div className="foundBlock"><h2>founded:<b>27/47</b></h2></div>
            <button onClick={handleClick} className='DeleteAllButton'><h3 className="buttonChildStyle">Delete All</h3></button>

        </div>
            <FullSavingWords setStyle={visibleBlock}/>
        </div>
    )
}