import React from 'react';
import { Link, graphql } from 'gatsby';
import BodyClassName from 'react-body-classname';
import Layout from '../../layouts/index';

const Services = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <BodyClassName className="page-services">
      <Layout>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Services</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-6">
          <div className="row">
            {markdown.map(edge => (
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
    </BodyClassName>
  );
};

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
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Services;
