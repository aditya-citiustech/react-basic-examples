import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';


export default function useApiCall(url) {

const [data,setData] = useState([]);

useEffect(()=>{
axios.get(url).then((resp)=>{
    setData(resp.data)
    console.log(resp.data)
})     

// fetch(url).
// then((res)=>res.json()).then((data1)=>{setData(data1)
// console.log('data1',data1)
// })

},[])

  return (
    data
  )
}
