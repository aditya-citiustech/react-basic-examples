import React from 'react'
import { useState } from 'react'

export default function Controlled() {
    const[inputval,setInput] = useState({
        firstName:'',
        lastName:'',
        age:''
    })

    let handleChange = (e)=>{
        console.log('e',e.target.name,e.target.value);
        const { name, value} = e.target;
        setInput((prev)=>({ ...prev,
                          [name]:value}))

    }

let handleClick = ()=>{
    console.log('input',inputval)
}

  return (
    <div>
       <h1>controlled</h1> 
       <label htmlFor="">firstName</label>
       <input type="text" placeholder='firstName' name='firstName' onChange={handleChange}/>
       <label htmlFor="">lastName</label>
       <input type="text" placeholder='lastName' name='lastName' onChange={handleChange}/>
       <label htmlFor="">Age</label>
       <input type="number" placeholder='age' name='age' onChange={handleChange} />
       <button onClick={handleClick}>Submit</button>
    </div>
  )
}
