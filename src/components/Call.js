import React from "react"
import { StaticQuery } from 'gatsby'

const Call = (props) => {
  console.log("Call", props)
  return (
    <div className="call">
    <div className="call-box-top">
    <div className="call-phone"><strong>Phone: </strong> {props.data.site.siteMetadata.contact.phone} </div>
    <div className="call-email"><strong>Email: </strong>
        <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
        {props.data.site.siteMetadata.contact.email} 
        </a>
    </div>
    </div>
    <div className="call-box-bottom">
    <a href="/contact" className="button">Contact</a>
    </div>
    </div>
  )
}
export default props => (
<StaticQuery 
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Call data={data}/>}
  />
)