const path = require('path');

// Create pages from markdown files in the /src/pages/services directory using the template /src/templates/service.js
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    /* eslint-disable */
    resolve(
      graphql(
        `
          query {
            services: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/services/" } }
              sort: { fields: [frontmatter___date], order: DESC }
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
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/team/" } }
              sort: { fields: [frontmatter___date], order: DESC }
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
            testimonials: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/testimonials/" } }
              sort: { fields: [frontmatter___date], order: DESC }
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
          }
        `
      ).then(result => {
        console.log(result)
        result.data.services.edges.forEach(({ node }) => {
          let component = path.resolve('src/templates/service.js')
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          })
        })
        result.data.team.edges.forEach(({ node }) => {
          let component = path.resolve('src/templates/team.js')
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          })
        })
        result.data.testimonials.edges.forEach(({ node }) => {
          let component = path.resolve('src/templates/testimonial.js')
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          })
        })
        resolve()
      })
    )
    /* eslint-enable */
  });
};
