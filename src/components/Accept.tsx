import * as React from 'react'
import {useState} from "react";

export const Accept=()=>{
    const [initState,setSuccsess]=useState()
    return(
        <button className="Accept">
            <h2 className="AcceptText">Accept</h2>
        </button>
    )
}