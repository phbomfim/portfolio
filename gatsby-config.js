const siteConfig = require("./config")

module.exports = {
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    author: siteConfig.author.name,
    contacts: {
      linkedin: siteConfig.author.contacts.linkedin,
      github: siteConfig.author.contacts.github,
      stackoverflow: siteConfig.author.contacts.stackoverflow,
      freecodecamp: siteConfig.author.contacts.freecodecamp,
      twitter: siteConfig.author.contacts.twitter,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/phdevlogo.png`,
      },
    },
  ],
}
