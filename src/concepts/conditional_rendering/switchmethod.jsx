import React from 'react'
import A from '../statelift/A'
import B from '../statelift/B'
import C from '../statelift/C'
import { useState } from 'react'

export default function SwitchMethod() {
    const [value, setValue] = useState('A')

    let renderSwitch = (opt) => {
        switch (opt) {
            case 'A': return <A />
            case 'B': return <B />
            case 'C':return <C />
                
            default: return null;

        }

    }

    let handleChange = (e) =>{

        console.log(e.target.value);
        setValue(e.target.value)

    }

    return (
        <div>
            <center>
            <h1>switchmethod</h1>
            <select name="" id="" value={value} onChange={handleChange}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <div>
                {renderSwitch(value)}
            </div>
            </center>
        </div>
    )
}


