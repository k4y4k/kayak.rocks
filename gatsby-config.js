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
    'gatsby-transformer-remark',
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
        background_color: '#146b3e',
        theme_color: '#8724e6',
        display: 'standalone',
        icon: 'src/img/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
