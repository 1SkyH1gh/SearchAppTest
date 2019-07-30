import * as React from 'react'
import {Cancel} from "./Cancel";
import {Accept} from "./Accept";

interface Footer {

}

 export const Footer=()=>{
    return(
        <div className="FooterStatic">
            <Cancel/>
            <Accept/>
        </div>
    )
}