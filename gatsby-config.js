module.exports = {
  siteMetadata: {
    title: '<kayak />',
    description: "I'm kayak and you aren't",
    author: '@__kayak__',
  },

  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Rubik', 'Inconsolata:400,900'],
        },
      },
    },
  ],
}
