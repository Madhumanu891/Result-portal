import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from "./comp/Nav"
import Home from "./comp/Home"
import Login from './comp/Login'
import Logout from './comp/Logout'
import Disp from './comp/Disp'
import Reg from './comp/Reg'
import Edit from './comp/Edit'
import './App.css'
import Hal from './comp/Hal'
import Ct from './comp/Ct'
import { useState } from 'react'
import axios from "axios"
const App = () => {
  let [store,setStore]=useState({"token":"","name":""})
  let updstore=(obj)=>{
    setStore({...store,...obj})
  }
  axios.defaults.withCredentials=true
  let obj={"store":store,"updstore":updstore}
  return (
    <div className="app-container">
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path="/disp" element={<Disp/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path="/hal" element={<Hal/>}/>
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
    </div>
  )
}

export default App
