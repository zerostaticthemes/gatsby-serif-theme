module.exports = {
    siteMetadata: {
        title: "Serif",
        description: "my theme"
    },
    plugins: [
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`
            }
        },
        `gatsby-plugin-sass`
    ]
}