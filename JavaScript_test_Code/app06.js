let [firstRec,secondRec, thirdRec] = ["Blr", "Del", "Mum"]
console.log(firstRec,secondRec, thirdRec);

let [,, x] = ["Blr", "Del", "Mum"]
console.log(x);

let xVal = ["Blr", "Del", "Mum"]
console.log(xVal[3]);

let [,,[,num]] = [1,2,[3,4]]
console.log(num)

let a=10, b=20;
console.log(a,b);
[a,b]=[b,a]
console.log(a,b);
