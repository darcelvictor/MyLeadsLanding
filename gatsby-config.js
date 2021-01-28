module.exports = {
  siteMetadata: {
    title: `Mon eco habitat`,
    description: `Bénéficiez de 20000€ d’aides pour l’installation de votre pompe à chaleur`,
    author: `@MyLeads`,
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
        name: `Mon-eco-habitat`,
        short_name: `eco-habitat`,
        start_url: `/`,
        background_color: `#07448e`,
        theme_color: `#07448e`,
        display: `minimal-ui`,
        icon: `src/images/favicon-mon-eco-habitat.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}
