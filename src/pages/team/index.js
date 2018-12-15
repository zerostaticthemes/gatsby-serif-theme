import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../layouts/index';

const Team = (props) => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-teams">
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Team</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {teams.map(edge => (
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
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
`;

export default Team;
