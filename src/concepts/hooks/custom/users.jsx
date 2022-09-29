import React from 'react'
import useApiCall from './apicall'

export default function Users() {

    const getdata = useApiCall('https://jsonplaceholder.typicode.com/todos');
  return (
    <div>users
        {console.log('getdata',getdata)}
        {getdata.map((val)=>{
            return <li>{val.title}</li>
        })}
    </div>
  )
}
