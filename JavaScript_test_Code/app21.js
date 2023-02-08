// npm install node-fetch
// npm uninstall node-fetch
// npm install node-fetch@2.6.1
//members is just a variable to print each of the JSON data
// response.json() is needed to clean the data and present in the user friendly way fetch
const fetch = require('node-fetch') ;

fetch("https://api.randomuser.me/?nat=US&results=10")
  .then(response => response.json())
  .then(members => console.log(members))
  .catch(err => console.error(err))
