import React from 'react'
import { useContext } from 'react'
import { UserContext } from './c1';

export default function C4() {
const userName = useContext(UserContext);

  return (
    <div>
    <h4>C4:{userName}
    </h4>
    {/* <UserContext.Consumer>
        {value=><span>{value}</span>}
             </UserContext.Consumer> */}
    </div>
  )
}
