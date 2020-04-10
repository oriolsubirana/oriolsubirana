module.exports = {
  siteMetadata: {
    title: `Oriol Subirana`,
    siteUrl: `https://www.oriolsubirana.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Oriol Subirana`,
        short_name: `OSubirana`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#353535`,
        lang: 'en',
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
