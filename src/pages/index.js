import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Call from '../components/Call';

const Home = props => {
  const { homepage } = props.data;
  const services = props.data.services.edges;
  const features = props.data.features.edges;
  const introImageClasses = `intro-image ${homepage.intro_image_absolute && 'intro-image-absolute'} ${homepage.intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
              <div className="content" dangerouslySetInnerHTML={{ __html: homepage.html }} />
              {homepage.show_call_box && (
                <Call showButton />
              )}
            </div>
            {homepage.intro_image && (
              <div className="col-12 col-md-5 col-lg-6 order-1 order-md-2 position-relative">
                <img alt={homepage.title} className={introImageClasses} src={homepage.intro_image} />
              </div>
            )}
          </div>
        </div>
      </div>
      {services.length > 0 && (
        <div className="strip">
          <div className="container pt-6 pb-6 pb-md-10">
            <div className="row justify-content-start">
              {services.map(({ node }) => (
                <div key={node.id} className="col-12 col-md-4 mb-1">
                  <div className="service service-summary">
                    <div className="service-content">
                      <h2 className="service-title">
                        <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                      </h2>
                      <p>{node.excerpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <Link className="button button-primary" to="/services/">View All Services</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {features.length > 0 && (
        <div className="strip strip-grey">
          <div className="container pt-6 pb-6 pt-md-10 pb-md-10">
            <div className="row justify-content-center">
              {features.map(({ node }) => (
                <div key={node.id} className="col-12 col-md-6 col-lg-4 mb-2">
                  <div className="feature">
                    {node.image && (
                      <div className="feature-image">
                        <img src={withPrefix(node.image)} />
                      </div>
                    )}
                    <h2 className="feature-title">{node.title}</h2>
                    <div className="feature-content">{node.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___weight], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    homepage: markdownRemark(
      fileAbsolutePath: {regex: "/content/index.md/"}
    ) {
        id
        html
        frontmatter {
          title
        }
    }
    features: allFeaturesJson {
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

export default Home;
