'use strict';

const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];

const num2 = [];

for (let i = 0; i < numbers.length; i++){
    counter = 0;
    for (let j = 0; j < numbers.length; j++) {
        counter += 1;
    };
    if (counter === 1){
        num2.push[numbers[i]]
    }
};

console.log(num2);