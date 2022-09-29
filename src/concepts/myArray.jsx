import React from 'react'
import { useState } from 'react'

export default function MyArray() {
  const [users,setUsers] = useState([{name:'Aditya',id:1},
  {name:'Ram',id:2},
  {name:'Sri',id:3}])
  return (
    <>
    <div>array</div>
    {users.map((val)=>(
      <div key={val.id}>
      <li>id-{val.id}</li>
      <li>name-{val.name}</li>
      </div>
     
    ))}
    </>
    
  )
}
