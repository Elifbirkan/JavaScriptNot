let x;
const todo = {};     // const todo = new Object(); şeklinde de yazılabilir

todo.id=1;
todo.name = 'buy milk';
todo.completed = false;
x = todo;

const person = {
    adress: {
        coards: {
            lat: 42.598,
            lng: -74.5632,
        },
    },
};

x = person.adress.coards.lat;
console.log(x);      //Output: 42.598

//içiçe nesneler
const obj1 = { a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = {obj1, obj2};   //veya const obj3 = {...obj1, ...obj2} a, b vb. alt alta yazar ('...' spread operatörüdür)
x = obj3;
console.log(x);
const obj4 = Object.assign({}, obj1, obj2);    // obj4'e ek olarak işaretçi atadık. bu satırın işlevi= 24.satırın işlevi


const todos = [
    { id: 1, name: 'buy milk'},
    { id: 2, name: 'pickup kids from school'},
    { id: 3, name: 'take out trash'},
];
x = todos;

x = Object.keys(todo);
x = Object.keys/todo.length;   //output: 3
x = Object.values(todo);       //output: (3) [1, 'buy milk', false]
x = Object.entries(todo);      //output: (3) {Array(2)...} 

console.log(x);
