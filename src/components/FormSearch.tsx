import * as React from 'react'
import {FunctionComponent} from "react";

interface SearchProps {

}

export const FormSearch: FunctionComponent<SearchProps>=()=>{
    return(
        <form className='formWidth'>
            <input placeholder='search' className='inputWidth'/>
        </form>
    )
}