
import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = ({role}) => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <Link to="/" className='navbar-brand'> DELicia</Link>
        </div>
        <div className='navbar-right'>
            <Link to="/menu" className='navbar-link'>Menu</Link>
            <Link to="/feed" className='navbar-link'>FeedBack</Link>


            {role === "admin" && <>
                <Link to="/addmenu" className='navbar-link'>Add Menu</Link>
                <Link to="/adduser" className='navbar-link'>Add User</Link>
                <Link to="/dashboard" className='navbar-link'>Dashboard</Link>
                </>
            }
            {role === "" ?
               <Link to="/login" className='navbar-link'>Login</Link>
               :  <Link to="/logout" className='navbar-link'>Logout</Link>
            }
           




            
            
        </div>
    </nav>
  )
}

export default Navbar