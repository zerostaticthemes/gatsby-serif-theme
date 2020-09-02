import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Call from '../components/Call';

const Services = props => {
  const services = props.data.services.edges;
  const { intro } = props.data;
  const introImageClasses = `intro-image ${intro.intro_image_absolute && 'intro-image-absolute'} ${intro.intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;

  return (
    <Layout bodyClass="page-services">
      <SEO title="Services" />
      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
              <div className="content" dangerouslySetInnerHTML={{ __html: intro.html }} />
              {intro.show_call_box && (
                <Call showButton />
              )}
            </div>
            {intro.intro_image && (
              <div className="col-12 col-md-5 col-lg-6 order-1 order-md-2 position-relative">
                <img alt={intro.title} className={introImageClasses} src={intro.intro_image} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {services.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
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
  query ServicesQuery {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content/services)/" } }
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
    intro:  markdownRemark(fileAbsolutePath: {regex: "/(services.md)/"}) {
        html
        frontmatter {
          image
          intro_image
          intro_image_absolute
          intro_image_hide_on_mobile
          title
        }
      }
  }
`;

export default Services;
