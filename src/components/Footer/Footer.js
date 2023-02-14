import React from 'react'
import './Footer.css'
import logoFooter from '../../assets/logoFooter.svg'


export default function Footer() {
  return (
    <div className='footer-container'>
        <img src={logoFooter} alt="logo monochrome"/>
        <p>© 2020 Kasa.All rights reserved</p>
    </div>

  )
}