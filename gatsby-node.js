const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Generate slug field for all markdown files
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            services: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "content/services\/.*/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  excerpt
                  frontmatter {
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  fields {
                    slug
                  }
                }
              }
            }
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "content/team\/.*/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  excerpt
                  frontmatter {
                    title
                    promoted
                    image
                    date(formatString: "DD MMMM YYYY")
                  }
                  fields {
                    slug
                  }
                }
              }
            }
            basic: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "content/basic\/.*/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  excerpt
                  html
                  frontmatter {
                    title
                    path
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        result.data.services.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/service.js');
          createPage({
            path: node.frontmatter.path ? node.frontmatter.path : node.fields.slug,
            component,
            context: {
              id: node.id
            }
          });
        });
        result.data.team.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/team.js');
          createPage({
            path: node.frontmatter.path ? node.frontmatter.path : node.fields.slug,
            component,
            context: {
              id: node.id
            }
          });
        });
        result.data.basic.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/basic.js');
          createPage({
            path: node.frontmatter.path ? node.frontmatter.path : node.fields.slug,
            component,
            context: {
              id: node.id
            }
          });
        });
        resolve();
      }),
    );
  });
};
