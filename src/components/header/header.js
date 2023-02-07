import React from 'react'
import Navbar from '../navbar/navbar'
import '../header/header.css'
import LOGO from '../../assets/.LOGO.svg'
export default function Header(){
    return <div className='kasa-header'>
                <img className='logo' src={LOGO} alt="logo"></img>
               
                <Navbar />
            </div>
}

