import React from "react"
import Header from '../components/Header'
import MenuMobile from '../components/MenuMobile'
import "../scss/style.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <MenuMobile />
      <div id="wrapper" class="wrapper">
        <Header />
        {children}
      </div>
    </div>
  )
}
    

export default Layout