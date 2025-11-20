import React from 'react'
import Signup from './Signup'
import Login from './Login'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/Signup'>Signup</Link>
      <Link to='/Login'>Login</Link>
    </div>
  )
}

export default Navbar
