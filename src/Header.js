import React from 'react'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './css/HomePage.css';
export default function Header() {
  return (
    <>
    <div className="main-header ">
      <div className="logo-h">
        <div className="logo-c"></div>
      </div>

      <div className="search-bar">

        <input className="search-i">
        
        </input>
      </div>

      <div className="header-icons">
      <div className="buy-1">
      <AiOutlineShoppingCart className="u-logo"/>
      </div>
      <div className="user-logo">
      <AiOutlineUser className="u-logo" / >
      </div>
      </div>
    </div>

    <div className="nav-header">
      <div className="w1">
      <Link className='lo' to='/'>
       <li>Home</li>
      </Link>
      <div className="ul-h ul"></div>
      </div>
      <div className="w1">
        <Link  className='lo' to='/register'>
      <li>Books</li>
        </Link>
      <div className="ul-b ul"></div>
      </div>
     <div className="w1">
     <Link className='lo'>
     <li>Audiobooks</li>
     </Link>
     <div className="ul-a ul"></div>
     </div>
     <div className="w1">
     <Link className='lo'><li>Recomended</li></Link>
     <div className="ul-r ul"></div>
     </div>
     <div className="w1">
     <Link className='lo'><li>Sale</li></Link>
     <div className="ul-s ul"></div>
     </div>
    </div>
  </>

    )
}
