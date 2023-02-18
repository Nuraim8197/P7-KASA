import React from 'react'
import Navbar from '../navbar/navbar'
import '../header/header.css'
import LOGO from '../../assets/.LOGO.svg'
import { NavLink } from "react-router-dom";
export default function Header(){
    return <header>
    <div className='kasa-header'>
    <NavLink to="/"><img className='logo' src={LOGO} alt="logo"></img></NavLink>
               
                <Navbar />
            </div>
            </header>
}

