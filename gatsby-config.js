// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-react-helmet"],
}
