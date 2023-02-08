//async has to be there for await to be used in the function
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve({msg: "info"}), 1000)
    });
  
    let result = await promise; 
    console.log("result: ", result); 
  }
  
 f();


console.log("Next step")