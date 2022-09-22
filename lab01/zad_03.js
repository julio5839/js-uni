const lista = [1,2,3,5,-6,12,63,-23,8];
let max = lista[0];
let min = lista[0];

// petla

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

// min max

for (let i = 0; i < lista.length; i++){
    if (lista[i] > max){
        max = lista[i];
    }
    if (lista[i] < min){
        min = lista[i];
    }
}

console.log("min: " + min);
console.log("max: " + max);

// odwroc

for (let i = lista.length-1; i >= 0; i--){
    console.log(lista[i]);
}
