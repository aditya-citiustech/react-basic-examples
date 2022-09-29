import React from 'react'
import A from '../statelift/A'
import B from '../statelift/B'
import C from '../statelift/C'
import { useState } from 'react'




export default function EnumMethod() {
    const [value, setValue] = useState('A')

    let ENUM_STATES ={
      
            'A':  <A/>,
            'B':  <B />,
           'C': <C />,
           default:  null
 };




    let handleChange = (e) =>{

        console.log(e.target.value);
        setValue(e.target.value)

    }

    return (
        <div>
            <center>
            <h1>EnumMethod</h1>
            <select name="" id="" value={value} onChange={handleChange}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <div>
            {ENUM_STATES[value]}
            </div>
            </center>
        </div>
    )
}
