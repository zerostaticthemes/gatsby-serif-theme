import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import BodyClassName from 'react-body-classname';
import Img from 'gatsby-image';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  console.log(props);
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;

  return (
    <BodyClassName className="page-home">
      <Layout>
        <div className="intro pb-4">
          <div className="container">
            <h1>Serif</h1>
          </div>
        </div>

        <div className="container pt-2">
          <Call button />
        </div>

        <div className="container pt-8 pt-md-10">
          <div className="row justify-content-start">
            <div className="col-12">
              <h2 className="title-3 text-dark mb-3">Our Services</h2>
            </div>
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
            <div className="col-12 text-center">
              <Link className="button button-primary mt-2" to="/services">
                View All Services
              </Link>
            </div>
          </div>
        </div>

        <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="title-3 text-dark mb-4">Our Features</h2>
            </div>
            {json.map(edge => (
              <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
                <div className="feature">
                  {edge.node.image && (
                    <div className="feature-image">
                      <img src={withPrefix(edge.node.image)} />
                    </div>
                  )}
                  <h2 className="feature-title">{edge.node.title}</h2>
                  <div className="feature-content">{edge.node.description}</div>
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

export default Home;
