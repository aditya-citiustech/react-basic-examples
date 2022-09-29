import React from 'react'
import { useParams,useLocation } from 'react-router-dom';

export default function Logic() {
  const params = useParams();
  let location = useLocation();



  return (
    <div>Logic
      {console.log('this.props',params,location)}
    </div>
  )
}



//useLocation,useNavigation,useParams
