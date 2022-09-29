import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Increment from './increment'

export default function AddText() {

  const [Ivalue,setvalue] = useState(0)
 const [cvalue,setCValue] = useState([]);

let handleSubmit = (e) =>{
console.log(Ivalue)
  setvalue(Ivalue+1);
  e.preventDefault();
}

let dataFromChild = useCallback((val) =>{
  console.log('val',val)
 setCValue(cvalue.concat(val));

},[cvalue]);


 return (
    <div>
      <h4>Increment</h4>
     <button onClick={handleSubmit}>Increment</button>
     <span>{Ivalue}</span>
     <Increment dataHandle={dataFromChild} value={cvalue}/>
      </div>
  )
}
 