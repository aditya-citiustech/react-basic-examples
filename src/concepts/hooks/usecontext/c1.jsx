import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import C2 from './c2';
export let UserContext = createContext();


export default function C1() {
    const [name, setName] = useState('');

  let handleChange = (e) => {

    setName(e.target.value)
}

  return (
    <div>
        <UserContext.Provider value={name}>
      <center>
      <h1>useContext()</h1>
      <h4>Comp1</h4>
      <input type="text" onChange={handleChange} />
      <C2 />
      </center>
      </UserContext.Provider>
    </div>
  )
}
