module.exports = {
  siteMetadata: {
    title: `PUM`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `playfair display`,
          `montserrat`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "STRAPI",
        fieldName: "strapi",
        url: "http://localhost:1337/graphql",
      },
    },
  ]
};