import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Social = props => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      allSocialJson {
        edges {
          node {
            name
            image
            link
          }
        }
      }
    }
  `);
  return (
    <div className="social">
      {data.allSocialJson.edges.map(({ node }) => (
        <a key={node.name} href={node.link} target="blank"><img src={node.image} title={node.name} alt={node.name} /></a>
      ))}
    </div>
  );
};

export default Social;
