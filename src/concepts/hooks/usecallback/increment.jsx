import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { memo } from "react";

function Increment(props) {
let myRef = useRef();

  let handleSubmit = (e) => {
    props.dataHandle(myRef.current.value)
    e.preventDefault();
  }


  return (
    <div>
      {console.log('Child rendered')}
      <h4>AddText</h4>
      <h4>Child</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={myRef} />
        <button>AddText</button>
      </form>
      {props?.value?.map((val,inx)=>(
         <li key={inx}>{val}</li>
      ))}
    </div>
  )
}


export default memo(Increment);