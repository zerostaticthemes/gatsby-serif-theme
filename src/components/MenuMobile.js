import React from "react"
import { Link } from 'gatsby'

const MenuMobile = () => {
  return (
    <div id="main-menu-mobile" className="main-menu-mobile">
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

export default MenuMobile