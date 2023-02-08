// var  names = {
//     cities: ["Blr","Del","Mum","Pune"],
//     print: function(delay=1000) {

//       setTimeout(function() {
//         console.log(this.cities.join(",")) // throws error saying cities is undefined //nested function points to window object and not the normal object
//         console.log(names.cities.join(","))
//       }, delay)

//     }
// }

// names.print()

// var   names = {
//     cities: ["Blr","Del","Mum","Pune"],
//     print: function(delay=1000) {
//         console.log("L1: ", this) ;
        
//       setTimeout(function() {
//         console.log("L2: ", this) ;
//       }, delay)

//     }
//   }

//   names.print()

var   names = {
    cities: ["Blr","Del","Mum","Pune"],
    print: function(delay=1000) {
        console.log("L1: ", this) ;
        
      setTimeout(() => {
        console.log("L2: ", this) ;
      }, delay)

    }
  }

  names.print()