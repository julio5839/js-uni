'use strict';

const person1 = {
    name: "agata",
    age: 21,
};

const person2 = {
    name: "tomasz",
    age: 25,
};

const person3 = {
    name: "alicja",
    age: 31,
};

const person4 = {
    name: "jan",
    age: 20,
};

const arrPeople = [];

arrPeople.push(person1, person2, person3, person4);

console.log(arrPeople);

let totalAge = 0;

for (let i = 0; i < arrPeople.length; i++){
    totalAge += arrPeople[i].age;
};

let avgAge = (totalAge/arrPeople.length);
console.log(totalAge);
console.log(avgAge);
