import React from "react"
import { Link } from 'gatsby'

const Menu = () => {
  return (
    <div id="main-menu" className="main-menu">
        <ul>
            <li>
            <Link to="/">
                Home
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu