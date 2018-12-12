import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import Menu from './Menu'
import Hamburger from './Hamburger'
import logo from '../images/logo.svg'
import logoMobile from '../images/logo-mobile.svg'

const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

const Header = () => {
  return (
    <div class='header'>
      <div class="container">
        <div class="logo">
          <Link to="/"><img alt="Figurit Homepage" src={logo} /></Link>
        </div>
        <div class="logo-mobile">
          <Link to="/"><img alt="Figurit Homepage" src={logoMobile} /></Link>
        </div>
        <Menu />
        <Hamburger />
      </div>
    </div>
  )
}

export default Header

// <StaticQuery 
//       query={graphql`
//         query {
//           site {
//             siteMetadata {
//               title
//               description
//             }
//           }
//         }
//       `}
//       render={data => <TitleAndDescription data={data}/>}
//     />