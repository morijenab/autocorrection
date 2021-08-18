

import React, { useRef } from 'react'

const correction={
    "realy": "really",
    "increament": "increment"
}
export const AutoCorrection = () => {
const ref= useRef()
const changeHandler=(e)=>{
const value=e.target.value;        
    if(value.includes(" ")){
        const arr = value.split(" ")
        arr.forEach((element , index)=> {
            if(Object.keys(correction).includes(element)){
                arr[index]=correction[element];
            }
            ref.current.value =arr.join(" ")
            
        });
    }
}

    return (
        <textarea ref={ref} onChange={changeHandler} name="text-editor" id="text-edior" cols="30" rows="10" autoFocus></textarea>
    )
}
