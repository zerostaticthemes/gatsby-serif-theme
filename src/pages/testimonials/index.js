import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../layouts/index';

const Testimonials = (props) => {
  const testimonials = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Testimonals</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {testimonials.map(edge => (
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
  query TestimonialsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/testimonials/" } }
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

export default Testimonials;
