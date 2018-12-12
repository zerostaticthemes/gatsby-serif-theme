import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'

const Call = (props) => {
    console.log("Call", props)
  return (
    <div class="call">
    <div class="call-box-top">
    <div class="call-phone"><strong>Phone: </strong>  </div>
    <div class="call-email"><strong>Email: </strong>
        <a href="mailto:">
       
        </a>
    </div>
    </div>
    <div class="call-box-bottom">
    <a href="/contact" class="button">Contact</a>
    </div>
    </div>
  )
}

export default Call