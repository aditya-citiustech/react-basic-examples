import React, { useState } from 'react'
import B from './B';
import C from './C';

export default function A() {
    const [val,setVal] = useState('');

    let handleCallBack = (data)=>{
    setVal(data);
    }

  return (
    <div>
      <h1>StateLift</h1>
        <h2>A</h2>
        <B bToACall = {handleCallBack}/>
        <C AtoCsend={val}/>
        </div>
  )
}
