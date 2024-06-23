const firstName = 'John';
const lastName = 'Doe';
const age = 23;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);           //output: 23

//Destructing

const todo = {
    id:1,
    title: 'take out trash',
    user: {
        name: 'John',
    },
};

const {id, title, user } = todo;
console.log(user);                //output: {name: 'John'}


/*
const {id, title, user: { name } } = todo;      output: John
console.log(name);  
*/

//Destructure arrays
const numbers = [23,67,33,49];
const [first, second] = numbers;
console.log(first,second);               //output: 23 67

/*
const [first, second, ...rest] = numbers;       //output:  29 67  (2) [33, 49]
console.log(first,second, rest);                 
*/

