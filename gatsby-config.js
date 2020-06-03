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
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Web Developer - Yuma Kitamura',
        short_name: 'Portfolio',
        background_color: '#ffbb33',
        theme_color: '#ffbb33',
        display: 'standalone',
        start_url: 'https://webneko.dev/',
        icons: [
          {
            src: 'icons/bakeneko2-72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'icons/bakeneko2-96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'icons/bakeneko2-128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/bakeneko2-144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'icons/bakeneko2-152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: 'icons/bakeneko2-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/bakeneko2-384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/bakeneko2-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        splash_pages: null,
        include_favicon: false,
        cache_busting_mode: 'none'
      }
    }
  ]
}
