import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Logic from './Redux/logic'
import urls from './urls'
export default function Routers() {
  return (
    <div>
        <Routes>
            <Route path={urls.redux} element={<Logic/>}/>
        </Routes>
    </div>
  )
}
