const people = [
    {
        "firstName": "Ajay",
        "phone": "2434-5530",
        "email": "ajay76@gmail.com"
    },
    {
        "firstName": "Vijay",
        "phone": "2446-1624",
        "email": "vijayk77@gmail.com"
    }
]

//prints only the phone numbers
for(let {phone} of people) {
    console.log(phone)
}

//prints the whole object 
for(let phone of people) {
    console.log(phone)
}