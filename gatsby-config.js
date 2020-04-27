module.exports = {
  siteMetadata: {
    name: `Hello Typescript World!`,
    tagline: `Gatsby + SASS + Typescript = 💪`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      }
    },
    `gatsby-plugin-typescript`
  ]
}
