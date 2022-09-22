//Napisz skrypt, który będzie na wejściu będzie przyjmował tablicę liczb, a zwracał indeksy elementów z wartościami, jakie się pod nim znajdują. 

const arr = [1, 3, 6, 2, 9];

const idx = arr.reduce((acc, currentVal, index)=>{
    return acc + (`${index}: ${currentVal}\n`)
    // return acc + (index + ":" + currentVal + "\n")
}, '');

console.log(idx);