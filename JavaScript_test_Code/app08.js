const sandwich = {
    bread: "honey_oat",
    veg: "carrot_vada",
    cheese: "amul",
    toppings: ["lettuce", "tomato", "mustard"]
};
  
let { bread, veg } = sandwich; // called as object destructing
console.log("after destruct: ", bread, veg);
 //copy by value hence there is no change in object value ... it is a primitive hence it will  not change
bread = "garlic";
console.log(sandwich);

let { toppings } = sandwich;
console.log("after destruct: ", toppings);
//copy by reference hence it will change the value inside the object
toppings[0] = "corn";
console.log(sandwich);


const y = {a: 1, b: 2}
y.a = 8;
y.c = 7;
console.log(y)
