import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import logo from '/public/images/logo/logo-mobile.svg';

const SEO = props => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const title = props.title || data.site.siteMetadata.title;
      return (
        <Helmet
          htmlAttributes={{
            lang: 'en'
          }}
          title={title}
          titleTemplate={props.title ? `%s` : `%s - ${data.site.siteMetadata.title}`}
          link={[
            { rel: 'shortcut icon', type: 'image/svg', href: `${logo}` }
          ]}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
