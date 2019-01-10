import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/index';

const Testimonial = ({ data }) => {
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <Layout bodyClass="page-testimonial">
      <div className="strip strip-white strip-diagonal">
        <div className="container pt-4 pt-md-10">
          <div className="row justify-content-start">
            <div className="col-12 col-md-8">
              <div className="testimonial testimonial-single">
                <h1 className="title">{title}</h1>
                <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      html
    }
  }
`;

export default Testimonial;
