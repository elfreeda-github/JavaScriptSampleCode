const arr = [23, 65, 76, 233, 58, 79];

//Higher order function
const newArr02 = arr.map( (val, _index) => {
    return val * 2 ;
})

console.log(newArr02) ;

const arr1 = [23, 65, 76, 233, 58, 79];

//Higher order function
const newArr01 = arr1.map( (val, index) => {
    return {key:index,value:val};
})

console.log(newArr01) ;
