//destructuring the class to get the pointer to the function directly
// const {called,count} = new class {
//     count = 0;
//     called = () => {
//         this.count++;
//         console.log(`Called : ${this.count}`);
//     }
// };


// called(); 
// called(); 
// called(); 

// console.log(count); // Its a copy by value as it is primitive and it is stored at the start of the destructuring


const obj = new class {
    count = 0;
    called = () => {
        this.count++;
        console.log(`Called : ${this.count}`);
    }
};


obj.called();  
obj.called(); 
obj.called(); 


console.log(obj.count);