import React from 'react'
import Autoread from '../Autoread'
import Authotp from '../components/Authotp'
import {Routes,Route} from "react-router-dom"
import Login from './Login'

function Applications() {
  return (
    <div>
  <h2>
  Applications
  </h2>
    <img src="https://www.indusind.com/content/dam/indusind-platform-images/banner-images/e-statement/1920x450.jpg" />

    <div style={{ display: 'flex',justifyContent: 'center' }}> 
    <Routes>
    <Route path="./login" element={<Login/>}/>
    </Routes>
    <Authotp/>
    </div>
    </div>
    )
  }

  export default Applications
  // <Autoread/>