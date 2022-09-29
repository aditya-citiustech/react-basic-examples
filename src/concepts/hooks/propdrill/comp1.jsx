import React from 'react'
import { useState } from 'react'
import Comp2 from './comp2';

export default function Comp1() {
  const [name, setName] = useState('');


  let handleChange = (e) => {

    setName(e.target.value)

  }

  return (
    <div>
      <center>
      <h1>PropDrlling</h1>
      <h4>Comp1</h4>
      <input type="text" onChange={handleChange} />
      <Comp2 name={name} />
      </center>
    </div>
  )
}
