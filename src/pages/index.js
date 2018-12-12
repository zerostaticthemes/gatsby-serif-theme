import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import Layout from "../layouts/index"
import BodyClassName from 'react-body-classname';
import Call from '../components/Call'

const Home = (props) => {
  const { edges } = props.data.allMarkdownRemark
  return (
    <BodyClassName className="page-home">
      <Layout>
          <div class="intro pb-4">
            <div class="container">
              <h1>Serif</h1>
            </div>
          </div>

          <div class="container pt-2">
            <StaticQuery 
              query={graphql`
                query {
                  site {
                    siteMetadata {
                      title
                      description
                    }
                  }
                }
              `}
              render={data => <Call data={data}/>}
            />
          </div>

          <div class="container pt-8 pt-md-10">
            <div class="row justify-content-start">
              <div class="col-12">
                <h2 class="title-3 text-dark mb-3">Our Services</h2>
              </div>
              {edges.map(edge => {
                return (
                  <div class="col-12 col-md-4 mb-1">
                  <div class="service service-summary">
                    <div class="service-content">
                      <h2 class="service-title">
                        <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                      </h2>
                      content
                    </div>
                  </div>
                </div>
                )
              })}
              <div class="col-12 text-center">
                <Link class="button button-primary mt-2" to="/services">View All Services</Link>
              </div>
            </div>
          </div>
      </Layout>
    </BodyClassName>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark {
      edges {
        node {
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