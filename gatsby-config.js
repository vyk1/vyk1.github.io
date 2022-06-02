<<<<<<< HEAD
// eslint-disable-next-line import/no-extraneous-dependencies
// require('dotenv').config({
//     path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
    pathPrefix: "/",
    siteMetadata: {
        title: 'Portfólio de Victoria Botelho Martins',
        author: `@vyk1`,
        siteUrl: `https://vyk1.github.io/`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'placeholder',
                path: `${__dirname}/gatsby-config.js`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'project-logos',
                path: `${__dirname}/src/assets/project-logos`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'pt-br',
                path: `${__dirname}/src/pt-br`,
            },
        },
        `gatsby-transformer-remark`,
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Portfólio de Victoria Botelho Martins',
                short_name: 'Portfólio de Victoria Botelho Martins',
                start_url: '/',
                background_color: '#3e58a6',
                theme_color: '#3e58a6',
                display: 'minimal-ui',
                icon: 'src/assets/project-logos/unfold-software-development.png', // This path is relative to the root of the site.
                // icons: [
                //     {
                //         src: 'src/assets/favicons/favicon-32x32.png',
                //         sizes: '32x32',
                //         type: 'image/png',
                //     },
                //     {
                //         src: 'src/assets/favicons/favicon-16x16.png',
                //         sizes: '16x16',
                //         type: 'image/png',
                //     },
                // ],
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-gatsby-cloud',
            options: {
                headers: {
                    '/*': [
                        'x-frame-options: allow-from https://jamstackthemes.dev/',
                    ],
                },
            },
        },
    ],
};
=======
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: 'Portfólio de Victoria Botelho Martins',
    description: `Portfólio de Victoria Botelho Martins`,
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
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Portfólio de Victoria Botelho Martins',
        short_name: 'Portfólio de Victoria Botelho Martins',
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
>>>>>>> 2d3c98363588059a05c8e4b9f60489cb6ce308b5
