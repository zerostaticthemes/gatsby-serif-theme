# Gatsby Serif Theme

Serif is a beautiful small business theme for Gatsby. It contains content types for the archetypical small business website. The theme is fully responsive, blazing fast and artfully illustrated.

[Live Demo](https://gatsby-serif.netlify.com/) | 
[Zerostatic Themes](https://www.zerostatic.io/)

![Gatsby Serif Theme screenshot](https://www.zerostatic.io/theme/gatsby-serif/gatsby-serif-screenshot.png)

## Theme features

- Multi-page theme (not just a blog) that uses Markdown for multiple content-types/templates. It uses `gatsby-transformer-remark` and has several examples of querying and filtering `allMarkdownRemark`
- Includes a graphql query in `gatsby-node.js` that creates pages and templates by content type based on the folder `src/pages/services`, `src/pages/team`,
- Services (Markdown)
- Team (Markdown)
- Testimonials (Markdown)
- Features (Data)
- SCSS using `gatsby-plugin-sass`
- Responsive design
- Bootstrap 4 grid and media queries only
- Responsive menu
- Robust example content included
- Royalty free illustrations included
- SEO Titles & Meta using `gatsby-plugin-react-helmet`
- ESLint (google config)
- Prettier code styling

## Deployment

Gatsby and Node SCSS requires node v10 or higher

```
npm install
```

```
npm run start
```

OR if you have Gatsby installed globally you can run:

```
gatsby develop
```
