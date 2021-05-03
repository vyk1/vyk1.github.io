module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: 'Portifólio de Victoria Botelho Martins',
    description: `Portifólio de Victoria Botelho Martins`,
    author: `@vyk1`,
    siteUrl: `https://vyk1.github.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `pt`],
        // language file path
        defaultLanguage: `pt`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#3e58a6',
        theme_color: '#3e58a6',
        display: 'minimal-ui',
        icon: 'src/assets/images/projects/unfold.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline'
  ],
}
