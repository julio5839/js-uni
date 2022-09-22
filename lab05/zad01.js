//Zsumuj wszystkie elementy w tablicy.

const arr = [1,2,3,4,5,6,7,10];

const sum = arr.reduce((total, currentVal)=>{
    return total+currentVal;
} );

