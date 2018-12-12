import React from "react"
import { Link } from 'gatsby'
import Menu from './Menu'
import Hamburger from './Hamburger'
import logo from '../images/logo.svg'
import logoMobile from '../images/logo-mobile.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="logo">
          <Link to="/"><img alt="Figurit Homepage" src={logo} /></Link>
        </div>
        <div className="logo-mobile">
          <Link to="/"><img alt="Figurit Homepage" src={logoMobile} /></Link>
        </div>
        <Menu />
        <Hamburger />
      </div>
    </div>
  )
}

export default Header
