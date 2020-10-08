module.exports = {
  siteMetadata: {
    title: '<kayak />',
    description: "I'm kayak and you aren't",
    author: '@__kayak__',
  },

  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'md',
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sections',
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- end -->',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Rubik', 'Inconsolata:400,900'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '<kayak/>',
        short_name: 'kayak.rocks',
        start_url: '/',
        background_color: '#6e232a',
        theme_color: '##9979d5',
        display: 'standalone',
        icon: 'src/img/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
