module.exports = {
    siteMetadata: {
      title: `My First Gatsby Site`,
      siteUrl: `https://mygatsbysitemain03077.gatsbyjs.io/`,
      description: `A cool site with cute dogs`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
      "gatsby-plugin-mdx",
      "gatsby-transformer-sharp",
    ]
}