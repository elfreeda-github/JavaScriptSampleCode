const fetch = require('node-fetch') ;


async function f() {
    try {
        let response = await fetch("https://api.randomuser.me/?nat=US&results=10")

        let member = await response.json()
        console.log("result: ", member); 
    } catch(error) {
        console.log(error);
    }  
}
  
 f();

