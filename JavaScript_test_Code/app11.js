
const flavours = ["choco", "vanilla", "orange", "coffee"]
//spread operator
const [first, ...rest] = flavours

console.log(first)
console.log(rest.join(", "))