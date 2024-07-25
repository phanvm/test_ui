module.exports = {
  siteMetadata: {
    title: `Tổng công ty Công Nghệ - Viễn thông toàn cầu`,
    description: `Gtel - Tổng công ty Công nghệ - Viễn thông Toàn cầu`,
    author: `@gtel`,
    siteUrl: `https://gtelpay.vn/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
