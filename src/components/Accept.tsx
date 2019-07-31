import * as React from 'react'
import {useState} from "react";


interface AcceptProp{
    onClick: () => void,
    addToArray: any;
}
export const Accept=(props: AcceptProp

   )=>{
 const addtoArray=props.addToArray
 return(

        <button className="Accept" onClick={props.onClick}>
            <p className="AcceptText">Accept</p>
        </button>
    )
}