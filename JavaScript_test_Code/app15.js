const morning2 = {
    breakfast: "oatmeal",
    menu: {
        lunch: {butter: "Amul" , jam: "kissan"},
        snacks: "pizza"
    }
}
const dinner2 = "veg and cheese" ;

// let {breakfast,menu}  = morning2;
// let {lunch, snacks} = menu;
// let {butter, jam} = lunch;

// const meals = {
//     breakfast: breakfast,
//     butter: butter,
//     jam: jam,
//     snacks:snacks,
//     dinner2: dinner2

// }

// console.log(meals)


// let {breakfast,menu}  = morning2;
// let {lunch, snacks} = menu;

// const meals = {
//     breakfast: breakfast,
//     ...lunch,
//     snacks:snacks,
//     dinner2: dinner2

// }

// console.log(meals);


console.log({...{breakfast:morning2.breakfast},...{snacks:morning2.menu.snacks}, ...{...morning2.menu.lunch},...{dinner2:dinner2} })

