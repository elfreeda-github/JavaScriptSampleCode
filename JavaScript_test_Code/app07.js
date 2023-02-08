const myBoxA = {
    heightA: 12,
    widthA: 14,
    metaData: [{"unit": "inch"}, {"price": 1000, "currency" : "INR"}]
};
let {heightA, widthA, metaData}= myBoxA;
console.log(heightA, widthA);
let [,{currency}] = metaData;
console.log(metaData[1].currency)
console.log(currency);