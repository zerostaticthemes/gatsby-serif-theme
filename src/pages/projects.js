import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Call from '../components/Call';

const Team = props => {
  const team = props.data.team.edges;
  const { intro } = props.data;
  const introImageClasses = `intro-image ${intro.frontmatter.intro_image_absolute && 'intro-image-absolute'} ${intro.frontmatter.intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;

  return (
    <Layout bodyClass="page-teams">
      <SEO title="Team" />

      <div className="projectsDiv">
        <div className="container">
         
            <div className="projectsDiv">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
           
          </div>
        </div>
    

    </Layout>
  );
};

export const query = graphql`
  query TeamQuery {
    team: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team\/.*/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            promoted
            image
            jobtitle
            linkedinurl
          }
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: {regex: "/(team.md)/"}) {
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

export default Team;
