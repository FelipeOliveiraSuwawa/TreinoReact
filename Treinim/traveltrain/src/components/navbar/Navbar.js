import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h2>BEACHES.</h2>
        </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Book</li>
            <li>View</li>
        </ul>
        <div className="nav-icons">
            <BiSearch className='icon' />
            <BsPerson className='icon' />
        </div>
    </div>
  )
}

export default Navbar