import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'

const MenuMobile = () => {
  return (
    <div id="main-menu-mobile" class="main-menu-mobile">
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