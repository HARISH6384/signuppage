 import Navbar from "./components/Navbar"
 import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from "./components/Signup"

import User from "./components/User"
import Login from "./components/Login"

function App() {

 

  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='Signup' element={<Signup/>} />
      <Route  path='User' element={<User/>} />

      <Route  path='Login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
