import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Menu = props => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      allMainMenuJson {
        edges {
          node {
            name
            url
            weight
          }
        }
      }
    }
  `);
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.name}>
            <Link to={node.url} activeClassName="active">{node.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
