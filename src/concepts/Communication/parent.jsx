import React, { useState } from 'react'
import Child from './child';



export default function Parent() {
    const [val,setVal] = useState('');
    const [newval,setnewval] = useState('');

    
    let handleValues = (val)=>{
console.log('vll',val)
        setnewval(val);
    }
    
    
    let handleChange = (e)=>{

    /* Multiple input fields assigning we can use below syntax
    //   setVal((prev)=>({
    //     ...prev,
    //         val:e.target.value}))*/

    /* single input field assigning we can use below syntax */
    setVal(e.target.value)
    }
  return (
    <div>
        <h1>Parent</h1>
        <input type="text" value={val} onChange={handleChange} /><br />
        <span>Child to parent:{newval}</span>
        <Child parentToChild = {val} childCallback = {handleValues}/>
        </div>
  )
}
