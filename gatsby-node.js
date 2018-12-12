const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js");

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path
            }
          })

          resolve()
        })
      })
    );
  });
};


// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//   return new Promise((resolve, reject) => {
//     const service = path.resolve("src/templates/service.js");

//     resolve(
//       graphql(
//         `
//           query {
//             allMarkdownRemark(
//               filter: { fileAbsolutePath: {regex : "\/services/"} },
//               sort: {fields: [frontmatter___date], order: DESC},
//             ) {
//               totalCount
//               edges {
//                 node {
//                   id
//                   frontmatter {
//                     path
//                     title
//                     date(formatString: "DD MMMM YYYY")
//                   }
//                   excerpt
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         result.data.allMarkdownRemark.edges.forEach(({node}) => {
//           const path = node.frontmatter.path
//           createPage({
//             path,
//             component: service,
//             context: {
//               pathSlug: path
//             }
//           })

//           resolve()
//         })
//       })
//     );
//   });
// };
