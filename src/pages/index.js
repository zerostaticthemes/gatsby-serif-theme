import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import Layout from "../layouts/index"
import BodyClassName from 'react-body-classname';
import Call from '../components/Call'

const Home = (props) => {
  console.log(props)
  const { edges } = props.data.allMarkdownRemark
  return (
    <BodyClassName className="page-home">
    <Layout>
          <div className="intro pb-4">
            <div className="container">
              <h1>Serif</h1>
            </div>
          </div>

          <div className="container pt-2">
            <Call />
          </div>

          <div className="container pt-8 pt-md-10">
            <div className="row justify-content-start">
              <div className="col-12">
                <h2 className="title-3 text-dark mb-3">Our Services</h2>
              </div>
              {edges.map(edge => {
                return (
                  <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
                    <div className="service service-summary">
                      <div className="service-content">
                        <h2 className="service-title">
                          <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                        </h2>
                        {edge.node.excerpt}
                      </div>
                    </div>
                  </div>
                )
              })}
              <div className="col-12 text-center">
                <Link className="button button-primary mt-2" to="/services">View All Services</Link>
              </div>
            </div>
          </div>
          </Layout>
    </BodyClassName>
  )
}
 
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default Home