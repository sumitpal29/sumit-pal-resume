// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.NODE_ENV)
// And then you can use the config in gatsby-config.js
// const config = require("gatsby-plugin-config")

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: config.APIKEY,
    //       authDomain: config.AUTHDOMAIN,
    //       databaseURL: config.DATABASEURL,
    //       projectId: config.PROJECTID,
    //       storageBucket: config.STORAGEBUCKET,
    //       messagingSenderId: config.MESSAGINGSENDERID,
    //       appId: config.APPID,
    //     },
    //   },
    // },
  ],
}
