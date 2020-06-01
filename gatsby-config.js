module.exports = {
  siteMetadata: {
    title: 'Web Developer - Yuma Kitamura',
    titleTemplate: "%s | Portfolio",
    description: 'This is the Web Developer \'Yuma Kitamura\' Portfolio.',
    url: 'https://yuukit.me/',
    image: 'src/images/bakeneko2.png',
    twitterUsername: '@jiyuujin'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
      }
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-167986295-1'
      }
    }
  ]
}
