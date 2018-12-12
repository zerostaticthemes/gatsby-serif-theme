import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'

const Menu = () => {
  return (
    <div id="main-menu" class="main-menu">
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