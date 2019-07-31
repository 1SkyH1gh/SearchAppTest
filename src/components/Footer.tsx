import * as React from 'react'
import {Cancel} from "./Cancel";
import {Accept} from "./Accept";

interface Footer {
    pushArray: any,

    onClick: () => void,
}

export const Footer = (props: Footer) => {

    return (
        <div className="FooterStatic" >
            <Cancel/>
            <Accept addToArray={props.pushArray} onClick={props.onClick}/>
        </div>
    )
}