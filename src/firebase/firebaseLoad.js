import firebase from 'firebase'
// import config from 'gatsby-plugin-config';

const __config = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  };
  
console.log(__config)
// setup firebaes
firebase.initializeApp(__config);

export default firebase;