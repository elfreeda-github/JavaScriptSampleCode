// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve({msg: "data received"}); }, 1000);
// });
  
// myPromise.then(function(value) {
//      console.log(value); 
// });
// -----------------------------------------------------------------------------

// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myReject({err: "data rejected"}); }, 1000);
// });

// myPromise.then(function(value) {
//      console.log(value); 
// });
// myPromise.catch(err => console.log(err));

//--------------------------------------------------------------------------------
let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myReject({err: "data rejected"}); }, 1000);
});

myPromise.then(function(value) {
     console.log(value); 
});
myPromise.catch(function(value) {
    console.log("Error: ",value); 
});